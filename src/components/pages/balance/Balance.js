import React, { useEffect, useState } from "react";
import Banner from "../../common/banner/Banner";
import Panles from "../../common/panels/Panles";
import balanceValidateInfo from "../../../Helpers/balanceValidateInfo";
import useBalance from "../../../hooks/useBalance";
import { useSelector } from "react-redux";
import language from "../../../translation/language.json";
import { withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { mainAPI } from "../../../api";
import moment from "moment";
import { Pagination } from "react-bootstrap";
import RuleModalWrapper from "../../common/modal/RuleModalWrapper";
import Download from "../../utils/excel/Download";
import balanceRoute from "../../../routes/pages/balance/balance.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";

const Balance = (props) => {
  const { activeLanguage } = useSelector((state) => state.languages);
  const { user } = useSelector((state) => state.user);

  const { handleChange, handleSubmitForm, errors, values } =
    useBalance(balanceValidateInfo);
  const {
    location: { pathname },
  } = props;

  const [content, setContent] = useState({});
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [transationDetail, setTransactionDetail] = useState({});
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    const getContent = async () => {
      await mainAPI
        .get(`BalanceContent/getBalanceContent/${activeLanguage}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setContent(response.data));

      await mainAPI
        .get(`BalanceContent/getBalance/${user}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setBalance(response.data.balance));

      await mainAPI
        .get(`BalanceContent/getBalanceModalContent/${activeLanguage}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setModalContent(response.data));
    };

    const getTransactions = async () => {
      await mainAPI
        .get(`Payment/getTransactions/${user}`, {
          params: {
            page: page,
          },
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) =>
          response.status === 200
            ? setTransactions(response.data)
            : setTransactions([])
        );

      await mainAPI
        .get(`Payment/getTransactionsCount/${user}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setCount(response.data));
    };

    getContent();
    getTransactions();
  }, [activeLanguage, user, page]);

  const pathNames = pathname.split("/").filter((x) => x);

  const handleToken = async (token) => {
    let resultBalance = Number(balance) + Number(values.balance) * 1.7;
    await mainAPI
      .post(
        "Payment/increaseBalance",
        {
          token: token.id,
          sum: resultBalance,
          amount: values.balance * 1.7,
          email: token.email,
        },
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      )
      .then(
        setBalance(resultBalance.toFixed(1)),
        setTransactions([
          {
            amount: values.balance * 1.7,
            dateTime: moment().format(),
          },
          ...transactions,
        ])
      );
  };

  const handleClickModal = async (id) => {
    await mainAPI
      .get(`Payment/getTransactionDetail/${user}/${id}`, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token") || sessionStorage.getItem("token")
          }`,
        },
      })
      .then((response) => setTransactionDetail(response.data));
    setIsRuleModalOpen(true);
  };

  let items = [];
  if (count !== 0) {
    for (let item = 1; item <= count; item++) {
      items.push(
        <React.Fragment key={item}>
          {item === page ? (
            <Pagination.Item disabled>{item}</Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setPage(item)}>
              {item}
            </Pagination.Item>
          )}
        </React.Fragment>
      );
    }
  }

  return (
    <div className='balance-wrapper'>
      <MetaDecorator
        title={balanceRoute[activeLanguage].pageTitle}
        description={balanceRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle={language[activeLanguage].userPanelBannerHeader}
        pathName={balanceRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles pathName={pathNames[0]} />
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='balance-body'>
                  <div className='balance-box'>
                    <img
                      src='http://localhost:3000/images/balans-mob.png'
                      alt=''
                      className='w-100'
                    />
                    <div className='balance-content'>
                      <div className='balance-text'>
                        <span className='header'>{content.header}</span>
                        <div className='balance-count'>
                          <span className='count'>{balance} &#8380;</span>
                        </div>
                        <div className='balance-description'>
                          <p
                            className='description-text'
                            dangerouslySetInnerHTML={{
                              __html: content.description,
                            }}></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='increase-balance-wrapper'>
                  <div className='increase-balance-content'>
                    <h4>{content.increaseBalanceHeader}</h4>
                    <form onSubmit={handleSubmitForm}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <input
                              type='number'
                              className='form-control'
                              min='0'
                              max='50'
                              name='balance'
                              placeholder={`${language[activeLanguage].balanceInput.placeholder} *`}
                              value={values.balance}
                              onChange={handleChange}
                            />
                            {errors.balance && (
                              <p className='error-message'>{errors.balance}</p>
                            )}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='btnBox'>
                            {values.balance === "" ||
                            values.balance < 0 ||
                            values.balance > 50 ? (
                              <button className='btn' type='submit'>
                                {content.increaseBalanceButtonName}
                              </button>
                            ) : (
                              <StripeCheckout
                                label={content.increaseBalanceButtonName}
                                className='btn payment-btn'
                                stripeKey={`${process.env.REACT_APP_PUBLISHABLE_KEY}`}
                                token={handleToken}
                                amount={values.balance * 100}
                              />
                            )}
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='description'>
                            <p>{content.increaseBalanceDescription}</p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='actions'>
                  <Download />
                  <table className='table table-bordered transaction-table'>
                    <thead>
                      <tr>
                        <th scope='col'>{content.tablePriceHeader}</th>
                        <th scope='col'>{content.tableDateHeader}</th>
                        <th scope='col'>{content.tableDetailHeader}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions?.map((transaction) => {
                        return (
                          <React.Fragment key={transaction.id}>
                            {transactions.length === 0 ? (
                              ""
                            ) : (
                              <tr>
                                <td>{transaction.amount} &#8380;</td>
                                <td>
                                  {moment(transaction.dateTime).format(
                                    "DD/MM/yyyy HH:mm:ss"
                                  )}
                                </td>
                                <td>
                                  <button
                                    type='button'
                                    className='btn'
                                    onClick={() =>
                                      handleClickModal(transaction.id)
                                    }>
                                    {content.tableButtonName}
                                  </button>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                  <RuleModalWrapper
                    modalTitle={modalContent.modalHeader}
                    isChecked={isRuleModalOpen}
                    onClose={() => setIsRuleModalOpen(false)}>
                    <div className='transaction-detail-content'>
                      <p>
                        {modalContent.oldBalanceTitle}:{" "}
                        <span>{transationDetail.oldBalance}</span>
                      </p>
                      <p>
                        {modalContent.amountTitle}:{" "}
                        <span>{transationDetail.amount}</span>
                      </p>
                      <p>
                        {modalContent.newBalanceTitle}:{" "}
                        <span>{transationDetail.newBalance}</span>
                      </p>
                      <p>
                        {modalContent.dateTimeTitle}:
                        <span>
                          {moment(transationDetail.dateTime).format(
                            "DD/MM/yyyy HH:mm:ss"
                          )}
                        </span>
                      </p>
                    </div>
                  </RuleModalWrapper>
                  <Pagination>{items}</Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Balance);
