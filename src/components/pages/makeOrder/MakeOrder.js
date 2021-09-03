import React, { useState, useEffect } from "react";
import Banner from "../../common/banner/Banner";
import RuleModalWrapper from "../../common/modal/RuleModalWrapper";
import useMakeOrder from "../../../hooks/useMakeOrder";
import orderValidateInfo from "../../../Helpers/orderValidateInfo";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../../actions";
import { mainAPI } from "../../../api";
import StripeCheckout from "react-stripe-checkout";
import makeOrderRoute from "../../../routes/pages/makeOrder/makeOrder.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";

const MakeOrder = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { counter } = useSelector((state) => state.counter);
  const { activeLanguage } = useSelector((state) => state.languages);

  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sum, setSum] = useState(0);
  const [balance, setBalance] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cart-payment");

  const { handleSubmitForm, errors, values, handleChange } = useMakeOrder(
    orderValidateInfo,
    isChecked,
    counter,
    sum,
    balance
  );

  useEffect(() => {
    if (values.price !== 0) {
      const percent = (values.price * counter * 5) / 100;
      setSum(counter * values.price + percent);
    }

    const getBalance = async () => {
      await mainAPI
        .get(`BalanceContent/getBalance/${user}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setBalance(response.data.balance));
    };

    getBalance();
  }, [counter, values.price, user]);

  const handleChangeRadio = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className='make-order-wrapper'>
      <MetaDecorator
        title={makeOrderRoute[activeLanguage].pageTitle}
        description={makeOrderRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle='SİFARİŞ ET'
        pathName={makeOrderRoute[activeLanguage].breadcrumbRoute}
      />
      <form method='POST' onSubmit={handleSubmitForm}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='order-content-wrapper'>
                <div className='order-content'>
                  <div className={`content-top`}>
                    <div className='row'>
                      <div className='col-md-9'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            value={values.url}
                            placeholder='Məhsul linki *'
                            name='url'
                            onChange={handleChange}
                          />
                          {errors.url && (
                            <p className='error-message'>{errors.url}</p>
                          )}
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className='form-group'>
                          <input
                            type='number'
                            className='form-control'
                            value={values.price}
                            placeholder='Məbləğ *'
                            name='price'
                            onChange={handleChange}
                          />
                          {errors.price && (
                            <p className='error-message'>{errors.price}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-bottom'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <div className='input-group'>
                            <div className='input-group-prepend'>
                              <button
                                type='button'
                                className='input-group-text'
                                onClick={(e) => dispatch(decreaseCounter())}>
                                -
                              </button>
                            </div>
                            <input
                              type='number'
                              className='form-control'
                              value={counter}
                              min='1'
                              name='count'
                            />
                            <div className='input-group-append'>
                              <button
                                type='button'
                                className='input-group-text'
                                onClick={(e) => dispatch(increaseCounter())}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            value={values.note}
                            placeholder='Ölçü,rəng və s. üçün qeyd *'
                            name='note'
                            onChange={handleChange}
                          />
                          {errors.note && (
                            <p className='error-message'>{errors.note}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='payment-box'>
                <div className='payment-header'>
                  <h4>Sifariş et</h4>
                </div>
                <div
                  className='payment-content'
                  onChange={(e) => handleChangeRadio(e)}>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='payment'
                      value='cart-payment'
                      id='cart-payment'
                      defaultChecked
                    />
                    <label className='form-check-label' htmlFor='cart-payment'>
                      Kart ilə ödəniş
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='payment'
                      value='balance-payment'
                      id='balance-payment'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='balance-payment'>
                      Balans ilə ödəniş
                    </label>
                  </div>
                  <div className='sum'>
                    <span className='sum-title'>Cəmi(+5%):</span>
                    <span className='sum-content'>{sum.toFixed(2)}</span>
                  </div>
                </div>
                <div className='payment-footer'>
                  <div className='checkbox-wrapper'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='check'
                      hidden
                    />
                    <label
                      className='checkmark'
                      htmlFor='check'
                      onClick={() => setIsChecked(!isChecked)}></label>
                    <RuleModalWrapper
                      modalTitle='title'
                      isChecked={isRuleModalOpen}
                      onClose={() => setIsRuleModalOpen(false)}>
                      lorem
                    </RuleModalWrapper>
                    <label
                      className='check-label'
                      onClick={() => setIsRuleModalOpen(true)}>
                      Qaydalar ilə razıyam
                    </label>
                  </div>
                  {errors.Checked && (
                    <p className='error-message'>{errors.Checked}</p>
                  )}
                  {paymentMethod === "balance-payment" ? (
                    <div className='btnBox'>
                      <button type='submit' className='btn'>
                        ödəniş et
                      </button>
                    </div>
                  ) : (
                    <StripeCheckout
                      label='ödəniş et'
                      className='btn payment-btn'
                      stripeKey={`${process.env.REACT_APP_PUBLISHABLE_KEY}`}
                      amount={values.balance * 100}
                    />
                  )}
                  {errors.balance && (
                    <p className='error-message'>{errors.balance}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeOrder;
