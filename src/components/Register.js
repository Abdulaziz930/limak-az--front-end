import React, { useState } from "react";
import Banner from "./Banner";
import useForm from "../hooks/useForm";
import validateInfo from "../Helpers/validateInfo";
import RuleModalWrapper from "./RuleModalWrapper";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { values, handleChange, handleSubmitForm, errors } = useForm(
    validateInfo,
    isChecked
  );
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <div className='register-wrapper'>
      <Banner bannerTitle='İSTİFADƏÇİ QEYDİYYATI' pathName='QEYDIYYAT' />
      <div className='container'>
        <div className='register-content'>
          <div className='row'>
            <div className='col-md-9'>
              <form method='POST' onSubmit={handleSubmitForm}>
                <div className='content-header'>
                  <h4>Profil məlumatları</h4>
                </div>
                <div className='content-box'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          value={values.name}
                          placeholder='Ad *'
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
                          placeholder='İstifadəçi Adı *'
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
                          placeholder='Şifrə *'
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
                          placeholder='Telefon *'
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
                          placeholder='Soyad *'
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
                          placeholder='E-Mail *'
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
                          placeholder='Şifrənin təkrarı *'
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
                          <option value=''>--Çatdırılma ofisi--</option>
                          <option value='Baku'>Bakı</option>
                          <option value='Khirdalan'>Xırdalan</option>
                          <option value='Ganja'>Gəncə</option>
                          <option value='Sumgayit'>Sumqayıt</option>
                          <option value='Zaqatala'>Zaqatala</option>
                        </select>
                        {errors.city && (
                          <p className='error-message'>{errors.city}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='content-header'>
                  <h4>Şəxsiyyət vəsiqəsi məlumatları</h4>
                </div>
                <div className='content-box'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='number'
                          className='form-control serial-number-input'
                          value={values.serialNumber}
                          placeholder='Seriya Nömrəsi *'
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
                          placeholder='Fin *'
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
                              <option value=''>Cinsi</option>
                              <option value='male'>Kişi</option>
                              <option value='female'>Qadın</option>
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
                          placeholder='Ünvan *'
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
                            modalTitle='Test'
                            isChecked={isRuleModalOpen}
                            onClose={() => setIsRuleModalOpen(false)}>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </RuleModalWrapper>
                          <label
                            className='check-label'
                            onClick={() => setIsRuleModalOpen(true)}>
                            Qaydalar ilə razıyam
                          </label>
                        </div>
                        <button type='submit' className='btn' formNoValidate>
                          Təstiq et
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
                <h3>Diqqət!</h3>
                <p>
                  Şəxsiyyət vəsiqənizin FİN kodu vəsiqənin aşağı sağ küncündə
                  sonuncu rəqəmdən əvvəlki 7 işarədir. Daha aydın bilməniz üçün
                  nümunə şəkilə diqqət edin!
                </p>
                <div className='imgBox'>
                  <img
                    src='http://localhost:3000/images/fin-big.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <RuleModalWrapper
                  modalTitle='Test 1'
                  isChecked={isImageModalOpen}
                  onClose={() => setIsImageModalOpen(false)}>
                  <img
                    src='http://localhost:3000/images/fin-big.png'
                    alt=''
                    className='img-fluid'
                  />
                </RuleModalWrapper>
                <div className='btnBox'>
                  <span
                    className='modal-btn'
                    onClick={() => setIsImageModalOpen(true)}>
                    Şəkili böyüt
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
