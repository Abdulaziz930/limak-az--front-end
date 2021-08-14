import React, { useState, useEffect } from "react";
import { decreaseCounter, increaseCounter } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import useMakeOrder from "../hooks/useMakeOrder";
import orderValidateInfo from "../Helpers/orderValidateInfo";
import { setPrice } from "../actions";

const MakeOrderContent = ({ changeSum, deleteBtn, item, price, sum }) => {
  const dispatch = useDispatch();
  const [test, setTest] = useState(false);

  const { counter } = useSelector((state) => state.counter);
  const { priceValue } = useSelector((state) => state.priceValue);
  const { values, handleChange, errors } = useMakeOrder(orderValidateInfo);
  const deleteRef = React.useRef();
  useEffect(() => {
    if (values.price !== 0) {
      dispatch(setPrice(Number(values.price) + Number(price)));
      const percent = (priceValue * counter * 5) / 100;
      changeSum(counter * priceValue + percent);
    } else {
      dispatch(setPrice(0));
    }
  }, [counter, values.price, priceValue]);

  const handleClickTest = (item) => {
    if (deleteRef.current.classList.contains(`${item}`)) {
      setTest(true);
    }
  };

  return (
    <div
      className='order-content'
      style={test ? { display: "none" } : { display: "block" }}>
      <div className={`content-top ${item}`} ref={deleteRef}>
        <div className='row'>
          <div className='col-md-9'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                value={values.link}
                placeholder='Məhsul linki *'
                name='link'
                onChange={handleChange}
              />
              {errors.link && <p className='error-message'>{errors.link}</p>}
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
              {errors.price && <p className='error-message'>{errors.price}</p>}
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
              {errors.note && <p className='error-message'>{errors.note}</p>}
            </div>
          </div>
        </div>
      </div>
      {deleteBtn ? (
        <div className='btnBox'>
          <button
            type='button'
            onClick={() => {
              handleClickTest(item);
            }}
            className='btn btn-delete'>
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MakeOrderContent;
