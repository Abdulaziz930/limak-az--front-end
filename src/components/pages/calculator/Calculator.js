import React, { useState, useEffect } from "react";
import Banner from "../../common/banner/Banner";
import CalculatorWrapper from "../../common/calculator/CalculatorWrapper";
import {
  getExchangeRate,
  fetchCalculatorInformationContent,
  fetchCurrency,
  fetchCalculatorPageContent,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import calculatorRoute from "../../../routes/pages/calculator/calculator.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";

const Calculator = () => {
  const dispatch = useDispatch();

  const { exchangeRate } = useSelector((state) => state.exchangeRate);
  const { calculatorInformationContent } = useSelector(
    (state) => state.calculatorInformationContent
  );
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
    <div className='calculator-wrapper'>
      <MetaDecorator
        title={calculatorRoute[activeLanguage].pageTitle}
        description={calculatorRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle={calculatorPageContent.calculatorHeading}
        pathName={calculatorRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='calculator-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <CalculatorWrapper />
              <div className='exchange-wrapper'>
                <div className='exchange-header'>
                  <h4>{calculatorPageContent.converterTitle}</h4>
                </div>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <input
                        type='number'
                        className='form-control'
                        min='0'
                        value={number}
                        onChange={(e) => handleChangeNumber(e)}
                      />
                    </div>
                    <div className='col-lg-4'>
                      <select
                        className='form-control'
                        onChange={(e) => handleChangeMainCurrecy(e)}>
                        {currencies.map((currency) => {
                          return (
                            <option
                              value={currency.rateTitle}
                              key={currency.id}>
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
                    <div className='col-lg-8'>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='0'
                        value={resultNumber}
                        min='0'
                        disabled
                      />
                    </div>
                    <div className='col-lg-4'>
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
            <div className='col-md-7'>
              <div className='help-box mt-4'>
                <div className='how-to-calculate'>
                  {calculatorInformationContent.map((content) => {
                    return (
                      <div className='information-wrapper' key={content.id}>
                        <h4>{content.title}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: content.value,
                          }}></p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
