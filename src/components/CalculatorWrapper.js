import React from "react";
import { useSelector } from "react-redux";
import SpinnerWrapper from "./SpinnerWrapper";

const CalculatorWrapper = () => {
  const { loading, contents } = useSelector((state) => state.contents);
  return (
    <>
      {loading ? (
        <SpinnerWrapper />
      ) : (
        <div className='calculator mt-4'>
          <div className='calculator-title'>
            <h4>{contents.calculatorDto.title}</h4>
            <button className='btn'>
              {contents.calculatorDto.emptyButtonName}
            </button>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='country-wrapper'>
                <div className='form-group'>
                  <select className='form-control' id='country'>
                    {contents.countriesDto.map((country, index) => {
                      return index === 0 ? (
                        <option key={country.id} defaultValue>
                          {country.name}
                        </option>
                      ) : (
                        <option key={country.id}>{country.name}</option>
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
                    placeholder={contents.weightInputDto.inputName}
                  />
                  <div className='input-group-append'>
                    <div className='form-group'>
                      <select className='form-control' id='weight'>
                        {contents.weightsDto.map((weight, index) => {
                          return index === 0 ? (
                            <option key={weight.id} defaultValue>
                              {weight.name}
                            </option>
                          ) : (
                            <option key={weight.id}>{weight.name}</option>
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
                    placeholder={contents.widthInputDto.inputName}
                  />
                  <div className='input-group-append'>
                    <div className='form-group'>
                      <select className='form-control' id='width'>
                        {contents.unitsOfLengthsDto.map(
                          (unitsOfLength, index) => {
                            return index === 0 ? (
                              <option key={unitsOfLength.id} defaultValue>
                                {unitsOfLength.name}
                              </option>
                            ) : (
                              <option key={unitsOfLength.id}>
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
                    placeholder={contents.heightInputDto.inputName}
                  />
                  <div className='input-group-append'>
                    <div className='form-group'>
                      <select className='form-control' id='height'>
                        {contents.unitsOfLengthsDto.map(
                          (unitsOfLength, index) => {
                            return index === 0 ? (
                              <option key={unitsOfLength.id} defaultValue>
                                {unitsOfLength.name}
                              </option>
                            ) : (
                              <option key={unitsOfLength.id}>
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
                  <select className='form-control' id='city'>
                    {contents.citiesDto.map((city, index) => {
                      return index === 0 ? (
                        <option key={city.id} defaultValue>
                          {city.name}
                        </option>
                      ) : (
                        <option key={city.id}>{city.name}</option>
                      );
                    })}
                    <option defaultValue>Bakı</option>
                    <option>Gəncə</option>
                  </select>
                </div>
              </div>
              <div className='count-input-wrapper'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='count'
                    placeholder={contents.boxCountInputDto.inputName}
                  />
                </div>
              </div>
              <div className='length-wrapper'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Text input with dropdown button'
                    placeholder={contents.lengthInputDto.inputName}
                  />
                  <div className='input-group-append'>
                    <div className='form-group'>
                      <select className='form-control' id='length'>
                        {contents.unitsOfLengthsDto.map(
                          (unitsOfLength, index) => {
                            return index === 0 ? (
                              <option key={unitsOfLength.id} defaultValue>
                                {unitsOfLength.name}
                              </option>
                            ) : (
                              <option key={unitsOfLength.id}>
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
                  <select className='form-control' id='type'>
                    {contents.productTypesDto.map((productType, index) => {
                      return index === 0 ? (
                        <option key={productType.id} defaultValue>
                          {productType.name}
                        </option>
                      ) : (
                        <option key={productType.id}>{productType.name}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className='btnbox'>
                <button className='btn'>
                  {contents.calculatorDto.sumButtonName}
                </button>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='sum'>
                <p className='sum-text'>
                  {contents.calculatorDto.sumLabelName}:
                </p>
                <p className='sum-count'>$0.00</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalculatorWrapper;
