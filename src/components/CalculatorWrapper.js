import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import language from "../translation/language.json";

const CalculatorWrapper = () => {
  const { contents } = useSelector((state) => state.contents);

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

  useEffect(() => {
    if (contents.countriesDto !== undefined) {
      setCountryValue(contents.countriesDto[0].value);
      setCityValue(contents.citiesDto[0].value);
      setTypeValue(contents.productTypesDto[0].value);
      setWeightUnitsValue(contents.weightsDto[0].value);
      setWidthUnitsValue(contents.unitsOfLengthsDto[0].value);
      setLengthUnitsValue(contents.unitsOfLengthsDto[0].value);
      setHeightUnitValue(contents.unitsOfLengthsDto[0].value);
    }
  }, [contents]);

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
    setCountryValue(contents.countriesDto[0].value);
    setCityValue(contents.citiesDto[0].value);
    setTypeValue(contents.productTypesDto[0].value);
    setWeightUnitsValue(contents.weightsDto[0].value);
    setWidthUnitsValue(contents.unitsOfLengthsDto[0].value);
    setLengthUnitsValue(contents.unitsOfLengthsDto[0].value);
    setHeightUnitValue(contents.unitsOfLengthsDto[0].value);
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

  const getLanguage = localStorage.getItem("language");
  const getContent = JSON.parse(localStorage.getItem("content"));

  return (
    <>
      <div className='calculator mt-4'>
        <div className='calculator-title'>
          <h4>{contents.calculatorsDto[0].title}</h4>
          <button className='btn' onClick={handleClickEmpty}>
            {contents.calculatorsDto[0].emptyButtonName}
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
                  {contents.countriesDto.map((country, index) => {
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
                  placeholder={language[getLanguage].weightInput.placeholder}
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
                      {contents.weightsDto.map((weight, index) => {
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
                  placeholder={language[getLanguage].widthInput.placeholder}
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
                      {contents.unitsOfLengthsDto.map(
                        (unitsOfLength, index) => {
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
                        }
                      )}
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
                  placeholder={language[getLanguage].heightInput.placeholder}
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
                      {contents.unitsOfLengthsDto.map(
                        (unitsOfLength, index) => {
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
                        }
                      )}
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
                  {contents.citiesDto.map((city, index) => {
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
                  placeholder={language[getLanguage].boxCountInput.placeholder}
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
                  placeholder={language[getLanguage].lengthInput.placeholder}
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
                      {contents.unitsOfLengthsDto.map(
                        (unitsOfLength, index) => {
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
                        }
                      )}
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
                  {contents.productTypesDto.map((productType, index) => {
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
                {contents.calculatorsDto[0].sumButtonName}
              </button>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='sum'>
              <p className='sum-text'>
                {contents.calculatorsDto[0].sumLabelName}:
              </p>
              <p className='sum-count'>$ {sum}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorWrapper;
