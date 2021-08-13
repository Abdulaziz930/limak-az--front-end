import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import RuleModalWrapper from "./RuleModalWrapper";
import useMakeOrder from "../hooks/useMakeOrder";
import orderValidateInfo from "../Helpers/orderValidateInfo";
import MakeOrderContent from "./MakeOrderContent";
import { useSelector, useDispatch } from "react-redux";

const MakeOrder = () => {
  const dispatch = useDispatch();

  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sum, setSum] = useState(0);
  const [countComponent, setCountComponent] = React.useState([]);
  const { priceValue } = useSelector((state) => state.priceValue);
  const [price, setPrice] = useState(0);

  const { handleSubmitForm, errors } = useMakeOrder(
    orderValidateInfo,
    isChecked
  );

  // useEffect(() => {
  //   setPrice(priceValue);
  // }, [priceValue]);

  const handleAddComponent = () => {
    setCountComponent((countComponent) => [
      ...countComponent,
      Number(countComponent) + 1,
    ]);
    setPrice(priceValue);
    // console.log("priceValue", priceValue);
    // console.log("price", price);
    // setPrice(Number(priceValue) + Number(price));
  };

  return (
    <div className='make-order-wrapper'>
      <Banner bannerTitle='SİFARİŞ ET' pathName='SİFARİŞ ET' />
      <form method='POST' onSubmit={handleSubmitForm}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='order-content-wrapper'>
                <MakeOrderContent
                  changeSum={setSum}
                  sum={sum}
                  price={price}
                  deleteBtn={false}
                />
                {countComponent?.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <MakeOrderContent
                      changeSum={setSum}
                      sum={sum}
                      deleteBtn={true}
                      item={item}
                      price={price}
                    />
                  </React.Fragment>
                ))}
                <div className='btnBox'>
                  <button
                    type='button'
                    className='btn'
                    onClick={handleAddComponent}>
                    Yeni link əlavə et
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='payment-box'>
                <div className='payment-header'>
                  <h4>Sifariş et</h4>
                </div>
                <div className='payment-content'>
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
                  <div className='btnBox'>
                    <button type='submit' className='btn'>
                      ödəniş et
                    </button>
                  </div>
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
