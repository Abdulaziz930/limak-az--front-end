import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import useRegister from "../hooks/useRegister";
import registerValidateInfo from "../Helpers/registerValidateInfo";
import RuleModalWrapper from "./RuleModalWrapper";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserRule,
  fetchRegisterContent,
  fetchRegisterInformation,
  fetchGenders,
  fetchCitiesContent,
} from "../actions";
import language from "../translation/language.json";

const Register = () => {
  const dispatch = useDispatch();

  const { userRule } = useSelector((state) => state.userRule);
  const { registerContent } = useSelector((state) => state.registerContent);
  const { registerInformation } = useSelector(
    (state) => state.registerInformation
  );
  const { genders } = useSelector((state) => state.genders);
  const { cities } = useSelector((state) => state.cities);
  const [isChecked, setIsChecked] = useState(false);
  const { values, handleChange, handleSubmitForm, errors } = useRegister(
    registerValidateInfo,
    isChecked
  );
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { activeLanguage } = useSelector((state) => state.languages);

  useEffect(() => {
    dispatch(fetchUserRule());
    dispatch(fetchRegisterContent());
    dispatch(fetchRegisterInformation());
    dispatch(fetchCitiesContent());
    dispatch(fetchGenders());
  }, [dispatch, activeLanguage]);

  return (
    <div className='register-wrapper'>
      <Banner
        bannerTitle={registerContent.registerTitle}
        pathName='QEYDIYYAT'
      />
      <div className='container'>
        <div className='register-content'>
          <div className='row'>
            <div className='col-md-9'>
              <form method='POST' onSubmit={handleSubmitForm}>
                <div className='content-header'>
                  <h4>{registerContent.profileTitle}</h4>
                </div>
                <div className='content-box'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.name}
                          placeholder={`${language[activeLanguage].nameInput.placeholder} *`}
                          name='name'
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className='error-message'>{errors.name}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.userName}
                          placeholder={`${language[activeLanguage].usernameInput.placeholder} *`}
                          name='userName'
                          onChange={handleChange}
                        />
                        {errors.userName && (
                          <p className='error-message'>{errors.userName}</p>
                        )}  
                      </div>
                      <div className='form-group'>
                        <input
                          type='password'
                          className='form-control'
                          value={values.password}
                          placeholder={`${language[activeLanguage].passwordInput.placeholder} *`}
                          name='password'
                          onChange={handleChange}
                        />
                        {errors.password && (
                          <p className='error-message'>{errors.password}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.phoneNumber}
                          placeholder={`${language[activeLanguage].phoneInput.placeholder} *`}
                          name='phoneNumber'
                          onChange={handleChange}
                        />
                        {errors.phoneNumber && (
                          <p className='error-message'>{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.surname}
                          placeholder={`${language[activeLanguage].surnameInput.placeholder} *`}
                          name='surname'
                          onChange={handleChange}
                        />
                        {errors.surname && (
                          <p className='error-message'>{errors.surname}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control'
                          value={values.email}
                          placeholder={`${language[activeLanguage].emailInput.placeholder} *`}
                          name='email'
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className='error-message'>{errors.email}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <input
                          type='password'
                          className='form-control'
                          value={values.confirmPassword}
                          placeholder={`${language[activeLanguage].confirmPasswordInput.placeholder} *`}
                          name='confirmPassword'
                          onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                          <p className='error-message'>
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                      <div className='form-group'>
                        <select
                          className='form-control'
                          name='city'
                          value={values.city}
                          onChange={handleChange}>
                          <option value=''>
                            --{language[activeLanguage].cityInput.placeholder}--
                          </option>
                          {cities.map((city) => {
                            return (
                              <option value={city.value} key={city.id}>
                                {city.name}
                              </option>
                            );
                          })}
                        </select>
                        {errors.city && (
                          <p className='error-message'>{errors.city}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='content-header'>
                  <h4>{registerContent.idTitle}</h4>
                </div>
                <div className='content-box'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='number'
                          className='form-control serial-number-input'
                          value={values.serialNumber}
                          placeholder={`${language[activeLanguage].serialNumberInput.placeholder} *`}
                          name='serialNumber'
                          onChange={handleChange}
                        />
                        <span
                          className='icon-box'
                          onClick={() => setIsImageModalOpen(true)}>
                          <i className='fas fa-question-circle'></i>
                        </span>
                        {errors.serialNumber && (
                          <p className='error-message'>{errors.serialNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.finCode}
                          placeholder={`${language[activeLanguage].finCodeInput.placeholder} *`}
                          name='finCode'
                          onChange={handleChange}
                        />
                        {errors.finCode && (
                          <p className='error-message'>{errors.finCode}</p>
                        )}
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <input
                              type='date'
                              className='form-control date'
                              value={values.birthDay}
                              name='birthDay'
                              onChange={handleChange}
                            />
                            {errors.birthDay && (
                              <p className='error-message'>{errors.birthDay}</p>
                            )}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <select
                              className='form-control'
                              name='gender'
                              value={values.gender}
                              onChange={handleChange}>
                              <option value=''>
                                {
                                  language[activeLanguage].genderInput
                                    .placeholder
                                }
                              </option>
                              {genders.map((gender) => {
                                return (
                                  <option value='male' key={gender.id}>
                                    {gender.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.address}
                          placeholder={`${language[activeLanguage].addressInput.placeholder} *`}
                          name='address'
                          onChange={handleChange}
                        />
                        {errors.address && (
                          <p className='error-message'>{errors.address}</p>
                        )}
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='submitBox'>
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
                            modalTitle={userRule.title}
                            isChecked={isRuleModalOpen}
                            onClose={() => setIsRuleModalOpen(false)}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: userRule.description,
                              }}
                            />
                          </RuleModalWrapper>
                          <label
                            className='check-label'
                            onClick={() => setIsRuleModalOpen(true)}>
                            {registerContent.ruleTitle}
                          </label>
                        </div>
                        <button type='submit' className='btn' formNoValidate>
                          {registerContent.buttonName}
                        </button>
                      </div>
                      {errors.Checked && (
                        <p className='error-message'>{errors.Checked}</p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-3'>
              <div className='info-wrapper'>
                <h3>{registerInformation.title}</h3>
                <p>{registerInformation.description}</p>
                <div className='imgBox'>
                  <img
                    src={`http://localhost:3000/images/${registerInformation.image}`}
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <RuleModalWrapper
                  modalTitle='Test 1'
                  isChecked={isImageModalOpen}
                  onClose={() => setIsImageModalOpen(false)}>
                  <img
                    src={`http://localhost:3000/images/${registerInformation.image}`}
                    alt=''
                    className='img-fluid'
                  />
                </RuleModalWrapper>
                <div className='btnBox'>
                  <span
                    className='modal-btn'
                    onClick={() => setIsImageModalOpen(true)}>
                    {registerInformation.buttonName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
