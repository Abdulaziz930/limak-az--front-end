import React, { useEffect, useState } from "react";
import Panles from "../../common/panels/Panles";
import Banner from "../../common/banner/Banner";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainAPI } from "../../../api";
import { Pagination } from "react-bootstrap";
import moment from "moment";
import RuleModalWrapper from "../../common/modal/RuleModalWrapper";
import Download from "../../common/excel/Download";
import language from "../../../translation/language.json";

const UserPanel = (props) => {
  const [content, setContent] = useState({});
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [transationDetail, setTransactionDetail] = useState({});
  const [modalContent, setModalContent] = useState({});

  const { activeLanguage } = useSelector((state) => state.languages);
  const { user } = useSelector((state) => state.user);
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    const getContent = async () => {
      await mainAPI
        .get(`BalanceContent/getbalanceContent/${activeLanguage}`, {
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

    getTransactions();
    getContent();
  }, [activeLanguage, user, page]);

  const pathNames = pathname.split("/").filter((x) => x);

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
    <div className='user-panel-wrapper'>
      <Banner
        bannerTitle={language[activeLanguage].userPanelBannerHeader}
        pathName={language[activeLanguage].userPanelBannerHeader}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles pathName={pathNames[0]} />
          </div>
          <div className='col-md-9'>
            <div className='user-panel-content'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='balance-box'>
                    <img
                      src='http://localhost:3000/images/balans.png'
                      alt=''
                      className='img-fluid'
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
                          <div className='balance-btn'>
                            <div className='btnBox'>
                              <Link to='/balance' className='btn'>
                                {content.buttonName}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='wallet-box'>
                    <img
                      src='http://localhost:3000/images/wallet1.png'
                      alt=''
                      className='img-fluid'
                    />
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
    </div>
  );
};

export default withRouter(UserPanel);
