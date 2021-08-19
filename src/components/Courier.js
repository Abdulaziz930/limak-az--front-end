import React from "react";
import Banner from "./Banner";
import Panles from "./Panles";
import language from "../translation/language.json";
import { useSelector } from "react-redux";
import courierValidateInfo from "../Helpers/courierValidateInfo";
import useCourier from "../hooks/useCourier";
import { withRouter } from "react-router-dom";

const Courier = (props) => {
  const { activeLanguage } = useSelector((state) => state.languages);
  const { handleChange, handleSubmitForm, values, errors } =
    useCourier(courierValidateInfo);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  return (
    <div className='courier-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles pathName={pathNames[0]} />
          </div>
          <div className='col-md-9'>
            <div className='courier-content'>
              <div className='header'>
                <h4>{language[activeLanguage].courier.header}</h4>
              </div>
              <form onSubmit={handleSubmitForm}>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={
                          language[activeLanguage].cityInput.secondPlaceholder
                        }
                        name='city'
                        value={values.city}
                        onChange={handleChange}
                      />
                      {errors.city && (
                        <p className='error-message'>{errors.city}</p>
                      )}
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={
                          language[activeLanguage].areaInput.placeholder
                        }
                        name='area'
                        value={values.area}
                        onChange={handleChange}
                      />
                      {errors.area && (
                        <p className='error-message'>{errors.area}</p>
                      )}
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={
                          language[activeLanguage].settlementInput.placeholder
                        }
                        name='settlement'
                        value={values.settlement}
                        onChange={handleChange}
                      />
                      {errors.settlement && (
                        <p className='error-message'>{errors.settlement}</p>
                      )}
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={
                          language[activeLanguage].streetInput.placeholder
                        }
                        name='street'
                        value={values.street}
                      />
                      {errors.street && (
                        <p className='error-message'>{errors.street}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={
                          language[activeLanguage].homeInput.placeholder
                        }
                        name='home'
                        value={values.home}
                        onChange={handleChange}
                      />
                      {errors.home && (
                        <p className='error-message'>{errors.home}</p>
                      )}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Telefon'
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className='error-message'>{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <label>
                      {language[activeLanguage].parcelInput.placeholder}
                    </label>
                    <select
                      className='form-control'
                      name='parcel'
                      onChange={handleChange}
                      value={values.parcel}
                      multiple={true}>
                      <option value='1'>test1</option>
                      <option value='2'>test2</option>
                    </select>
                    {errors.parcel && (
                      <p className='error-message'>{errors.parcel}</p>
                    )}
                  </div>
                </div>
                <div className='btnBox'>
                  <button className='btn' type='submit'>
                    {language[activeLanguage].courier.buttonName}
                  </button>
                </div>
              </form>
              <div className='description'>
                <p>{language[activeLanguage].courier.firstDescription}</p>
                <p>{language[activeLanguage].courier.secondDescription}</p>
                <p>{language[activeLanguage].courier.thirdDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Courier);
