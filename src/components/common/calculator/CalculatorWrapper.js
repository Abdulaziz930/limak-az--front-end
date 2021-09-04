import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import language from "../../../translation/language.json";
import {
  fetchCalculatorContent,
  fetchCountriesContent,
  fetchCitiesContent,
  fetchProductTypesContent,
} from "../../../actions";
import { mainAPI } from "../../../api";

const CalculatorWrapper = () => {
  const dispatch = useDispatch();

  const { calculatorContent } = useSelector((state) => state.calculatorContent);
  const { countries } = useSelector((state) => state.countries);
  const { cities } = useSelector((state) => state.cities);
  const { productTypes } = useSelector((state) => state.productTypes);
  const { activeLanguage } = useSelector((state) => state.languages);

  const [weightValue, setWeightValue] = useState("");
  const [weightUnitsValue, setWeightUnitsValue] = useState("");
  const [widthValue, setWidthValue] = useState("");
  const [widthUnitsValue, setWidthUnitsValue] = useState("");
  const [lengthValue, setLengthValue] = useState("");
  const [lengthUnitsValue, setLengthUnitsValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [heightUnitValue, setHeightUnitValue] = useState("");
  const [countValue, setCountValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [sum, setSum] = useState(0.0);
  const [weights, setWeights] = useState([]);
  const [unitsOfLength, setUnitsOfLength] = useState([]);

  useEffect(() => {
    const getWeightContent = async () => {
      await mainAPI
        .get(`Content/getWeightContent/${activeLanguage}`)
        .then((response) => setWeights(response.data));
    };

    const getUnitsOfLengthContent = async () => {
      await mainAPI
        .get(`Content/getUnitsOfLengthContent/${activeLanguage}`)
        .then((response) => setUnitsOfLength(response.data));
    };

    getWeightContent();
    getUnitsOfLengthContent();
    dispatch(fetchCalculatorContent());
    dispatch(fetchCountriesContent());
    dispatch(fetchCitiesContent());
    dispatch(fetchProductTypesContent());
    if (countries !== undefined) {
      setCountryValue(countries[0]);
      setCityValue(cities[0]);
      setTypeValue(productTypes[0]);
      setWeightUnitsValue(weights[0]);
      setWidthUnitsValue(unitsOfLength[0]);
      setLengthUnitsValue(unitsOfLength[0]);
      setHeightUnitValue(unitsOfLength[0]);
    }
  }, [dispatch, activeLanguage]);

  const handleChangeWeight = (e) => {
    setWeightValue(e.target.value);
  };

  const handleChangeWidth = (e) => {
    setWidthValue(e.target.value);
  };

  const handleChangeHeight = (e) => {
    setHeightValue(e.target.value);
  };

  const handleChangeCount = (e) => {
    setCountValue(e.target.value);
  };

  const handleChangeLength = (e) => {
    setLengthValue(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountryValue(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCityValue(e.target.value);
  };

  const handleChangeType = (e) => {
    setTypeValue(e.target.value);
  };

  const handleChangeWeightUnit = (e) => {
    setWeightUnitsValue(e.target.value);
  };

  const handleChangeWidthUnit = (e) => {
    setWidthUnitsValue(e.target.value);
  };

  const handleChangeLengthUnit = (e) => {
    setLengthUnitsValue(e.target.value);
  };

  const handleChangeHeightUnit = (e) => {
    setHeightUnitValue(e.target.value);
  };

  const handleClickEmpty = () => {
    setCountryValue(countries[0].value);
    setCityValue(cities[0].value);
    setTypeValue(productTypes[0].value);
    setWeightUnitsValue(weights[0].value);
    setWidthUnitsValue(unitsOfLength[0].value);
    setLengthUnitsValue(unitsOfLength[0].value);
    setHeightUnitValue(unitsOfLength[0].value);
    setWeightValue("");
    setWidthValue("");
    setHeightValue("");
    setLengthValue("");
    setCountValue("");
    setSum(0);
  };

  const checkCm = (parametr, parametrValue) => {
    if (parametr === "m") {
      return parametrValue / 100;
    }

    return parametrValue;
  };

  const checkKg = (parametr, parametrValue) => {
    if (parametr === "gram") {
      return parametrValue / 1000;
    }

    return parametrValue;
  };

  const getSum = (countrySumValue = 0, typeSumValue = 0) => {
    let resultWidthValue = checkCm(widthUnitsValue, widthValue);
    let resultLengthValue = checkCm(lengthUnitsValue, lengthValue);
    let resultHeightValue = checkCm(heightUnitValue, heightValue);
    let resultWeightValue = checkKg(weightUnitsValue, weightValue);

    let result;
    if (
      resultWidthValue < 100 &&
      resultLengthValue < 100 &&
      resultHeightValue < 100
    ) {
      if (resultWeightValue > 0 && resultWeightValue <= 0.1) {
        result = 1 * countValue + countrySumValue + typeSumValue;
        setSum(result.toFixed(2));
      } else if (resultWeightValue > 0.1 && resultWeightValue <= 0.25) {
        result = 2 * countValue + countrySumValue + typeSumValue;
        setSum(result.toFixed(2));
      } else if (resultWeightValue > 0.25 && resultWeightValue <= 0.5) {
        result = 3 * countValue + countrySumValue + typeSumValue;
        setSum(result.toFixed(2));
      } else if (resultWeightValue > 0.5 && resultWeightValue <= 0.7) {
        result = 4 * countValue + countrySumValue + typeSumValue;
        setSum(result.toFixed(2));
      } else if (resultWeightValue > 0.7 && resultWeightValue <= 1) {
        result = 4.5 * countValue + countrySumValue + typeSumValue;
        setSum(result.toFixed(1));
      } else if (resultWeightValue > 1) {
        result =
          4.5 * countValue * resultWeightValue + countrySumValue + typeSumValue;
        setSum(result.toFixed(2));
      }
    } else {
      result =
        ((resultWidthValue * resultLengthValue * resultHeightValue) / 6000) *
          4.5 +
        countrySumValue +
        typeSumValue;
      setSum(result);
    }
  };

  const handleClickSum = () => {
    if (countryValue === "Turkey") {
      if (typeValue === "Standart") {
        getSum();
      } else {
        getSum(0, 0.5);
      }
    } else {
      if (typeValue === "Standart") {
        getSum(1);
      } else {
        getSum(1, 0.5);
      }
    }
  };

  return (
    <>
      <div className='calculator mt-4'>
        <div className='calculator-title'>
          <h4>{calculatorContent.title}</h4>
          <button className='btn' onClick={handleClickEmpty}>
            {calculatorContent.emptyButtonName}
          </button>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='country-wrapper'>
              <div className='form-group'>
                <select
                  className='form-control'
                  id='country'
                  value={countryValue}
                  onChange={(e) => handleChangeCountry(e)}>
                  {countries.map((country, index) => {
                    return index === 0 ? (
                      <option
                        value={country.value}
                        key={country.id}
                        defaultValue>
                        {country.name}
                      </option>
                    ) : (
                      <option value={country.value} key={country.id}>
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className='weight-wrapper'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Text input with dropdown button'
                  placeholder={language[activeLanguage].weightInput.placeholder}
                  value={weightValue}
                  onChange={(e) => handleChangeWeight(e)}
                />
                <div className='input-group-append'>
                  <div className='form-group'>
                    <select
                      className='form-control'
                      id='weight'
                      value={weightUnitsValue}
                      onChange={(e) => handleChangeWeightUnit(e)}>
                      {weights.map((weight, index) => {
                        return index === 0 ? (
                          <option
                            value={weight.value}
                            key={weight.id}
                            defaultValue>
                            {weight.name}
                          </option>
                        ) : (
                          <option value={weight.value} key={weight.id}>
                            {weight.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='width-wrapper'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Text input with dropdown button'
                  placeholder={language[activeLanguage].widthInput.placeholder}
                  value={widthValue}
                  onChange={(e) => handleChangeWidth(e)}
                />
                <div className='input-group-append'>
                  <div className='form-group'>
                    <select
                      className='form-control'
                      id='width'
                      value={widthUnitsValue}
                      onChange={(e) => handleChangeWidthUnit(e)}>
                      {unitsOfLength.map((unitsOfLength, index) => {
                        return index === 0 ? (
                          <option
                            value={unitsOfLength.value}
                            key={unitsOfLength.id}
                            defaultValue>
                            {unitsOfLength.name}
                          </option>
                        ) : (
                          <option
                            value={unitsOfLength.value}
                            key={unitsOfLength.id}>
                            {unitsOfLength.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='height-wrapper'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Text input with dropdown button'
                  placeholder={language[activeLanguage].heightInput.placeholder}
                  value={heightValue}
                  onChange={(e) => handleChangeHeight(e)}
                />
                <div className='input-group-append'>
                  <div className='form-group'>
                    <select
                      className='form-control'
                      id='height'
                      value={heightUnitValue}
                      onChange={(e) => handleChangeHeightUnit(e)}>
                      {unitsOfLength.map((unitsOfLength, index) => {
                        return index === 0 ? (
                          <option
                            value={unitsOfLength.value}
                            key={unitsOfLength.id}
                            defaultValue>
                            {unitsOfLength.name}
                          </option>
                        ) : (
                          <option
                            value={unitsOfLength.value}
                            key={unitsOfLength.id}>
                            {unitsOfLength.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='city-wrapper'>
              <div className='form-group'>
                <select
                  className='form-control'
                  id='city'
                  value={cityValue}
                  onChange={(e) => handleChangeCity(e)}>
                  {cities.map((city, index) => {
                    return index === 0 ? (
                      <option value={city.value} key={city.id} defaultValue>
                        {city.name}
                      </option>
                    ) : (
                      <option value={city.value} key={city.id}>
                        {city.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className='count-input-wrapper'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='count'
                  placeholder={
                    language[activeLanguage].boxCountInput.placeholder
                  }
                  value={countValue}
                  onChange={(e) => handleChangeCount(e)}
                />
              </div>
            </div>
            <div className='length-wrapper'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Text input with dropdown button'
                  placeholder={language[activeLanguage].lengthInput.placeholder}
                  value={lengthValue}
                  onChange={(e) => handleChangeLength(e)}
                />
                <div className='input-group-append'>
                  <div className='form-group'>
                    <select
                      className='form-control'
                      id='length'
                      value={lengthUnitsValue}
                      onChange={(e) => handleChangeLengthUnit(e)}>
                      {unitsOfLength.map((unitsOfLength, index) => {
                        return index === 0 ? (
                          <option
                            value={unitsOfLength.value}
                            key={unitsOfLength.id}
                            defaultValue>
                            {unitsOfLength.name}
                          </option>
                        ) : (
                          <option
                            value={unitsOfLength.value}
                            key={unitsOfLength.id}>
                            {unitsOfLength.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='type-wrapper'>
              <div className='form-group'>
                <select
                  className='form-control'
                  id='type'
                  value={typeValue}
                  onChange={(e) => handleChangeType(e)}>
                  {productTypes.map((productType, index) => {
                    return index === 0 ? (
                      <option
                        value={productType.value}
                        key={productType.id}
                        defaultValue>
                        {productType.name}
                      </option>
                    ) : (
                      <option value={productType.value} key={productType.id}>
                        {productType.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className='btnbox'>
              <button className='btn' onClick={handleClickSum}>
                {calculatorContent.sumButtonName}
              </button>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='sum'>
              <p className='sum-text'>{calculatorContent.sumLabelName}:</p>
              <p className='sum-count'>$ {sum}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorWrapper;
