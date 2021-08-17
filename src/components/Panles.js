import React, { useEffect, useState } from "react";
import language from "../translation/language.json";
import { Link } from "react-router-dom";
import {
  getExchangeRate,
  fetchCalculatorInformationContent,
  fetchCurrency,
  fetchCalculatorPageContent,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Panles = () => {
  const dispatch = useDispatch();

  const { exchangeRate } = useSelector((state) => state.exchangeRate);
  const { currencies } = useSelector((state) => state.currencies);
  const { calculatorPageContent } = useSelector(
    (state) => state.calculatorPageContent
  );
  const { activeLanguage } = useSelector((state) => state.languages);

  const [number, setNumber] = useState(0.0);
  const [resultNumber, setResultNumber] = useState(0.0);
  const [mainCurrency, setMainCurrency] = useState("AZN");
  const [secondCurrency, setSecondCurrency] = useState("USD");

  useEffect(() => {
    dispatch(getExchangeRate(mainCurrency));
    dispatch(fetchCalculatorInformationContent());
    dispatch(fetchCurrency());
    dispatch(fetchCalculatorPageContent());
  }, [dispatch, mainCurrency, activeLanguage]);

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeMainCurrecy = (e) => {
    setMainCurrency(e.target.value);
    dispatch(getExchangeRate(e.target.value));
  };

  const handleChangeSecondCurrecy = (e) => {
    setSecondCurrency(e.target.value);
  };

  const handleClickButton = () => {
    if (number !== "" && number > 0) {
      setResultNumber(number * exchangeRate.rates[secondCurrency]);
    }
  };

  return (
    <div className='panels-body'>
      <div className='panels-wrapper'>
        <div className='panels-content'>
          <ul className='panels'>
            {language[activeLanguage].panels.map((panel) => {
              return (
                <li key={panel.id}>
                  <Link to={panel.url} className={`panel-${panel.id}`}>
                    {panel.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='exchange-wrapper'>
        <div className='exchange-header'>
          <h4>{calculatorPageContent.converterTitle}</h4>
        </div>
        <div className='form-group'>
          <div className='row'>
            <div className='col-lg-7'>
              <input
                type='number'
                className='form-control'
                min='0'
                value={number}
                onChange={(e) => handleChangeNumber(e)}
              />
            </div>
            <div className='col-lg-5'>
              <select
                className='form-control'
                onChange={(e) => handleChangeMainCurrecy(e)}>
                {currencies.map((currency) => {
                  return (
                    <option value={currency.rateTitle} key={currency.id}>
                      {currency.rateTitle}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div className='row'>
            <div className='col-lg-7'>
              <input
                type='number'
                className='form-control'
                placeholder='0'
                value={resultNumber}
                min='0'
                disabled
              />
            </div>
            <div className='col-lg-5'>
              <select
                className='form-control'
                value={secondCurrency}
                onChange={(e) => handleChangeSecondCurrecy(e)}>
                {currencies.map((currency, index) => {
                  return (
                    <React.Fragment key={currency.id}>
                      {index === 1 ? (
                        <option value={currency.rateTitle}>
                          {currency.rateTitle}
                        </option>
                      ) : (
                        <option value={currency.rateTitle}>
                          {currency.rateTitle}
                        </option>
                      )}
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className='exchange-footer'>
          <div className='footer-description'>
            <p>{calculatorPageContent.converterDescription}</p>
          </div>
          <div className='footer-btn'>
            <button className='btn' onClick={handleClickButton}>
              {calculatorPageContent.converterButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panles;
