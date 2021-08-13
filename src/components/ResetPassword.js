import React from "react";
import resetPasswordValidateInfo from "../Helpers/resetPassowrdValidateInfo";
import useResetPassword from "../hooks/useResetPassword";
import Banner from "./Banner";
import { useSelector } from "react-redux";
import language from "../translation/language.json";
import { useLocation } from "react-router";

const ResetPassword = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const { values, handleChange, handleSubmitForm, errors } = useResetPassword(
    resetPasswordValidateInfo,
    id,
    token
  );
  const { activeLanguage } = useSelector((state) => state.languages);

  return (
    <div className='reset-password-wrapper'>
      <Banner
        bannerTitle={language[activeLanguage].resetPasswordTitle}
        pathName='Reset password'
      />
      <div className='container'>
        <form method='POST' onSubmit={handleSubmitForm}>
          <div className='reset-content'>
            <div className='reset-content-body'>
              <div className='form-group'>
                <label htmlFor='password'>
                  {language[activeLanguage].passwordInput.placeholder}:
                </label>
                <input
                  type='password'
                  className='form-control'
                  value={values.password}
                  placeholder={
                    language[activeLanguage].passwordInput.placeholder
                  }
                  name='password'
                  id='password'
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className='error-message'>{errors.password}</p>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='confirmPassword'>
                  {language[activeLanguage].confirmPasswordInput.placeholder}:
                </label>
                <input
                  type='password'
                  className='form-control'
                  value={values.confirmPassword}
                  placeholder={
                    language[activeLanguage].confirmPasswordInput.placeholder
                  }
                  name='confirmPassword'
                  id='confirmPassword'
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className='error-message'>{errors.confirmPassword}</p>
                )}
                {errors.common && (
                  <p className='error-message'>{errors.common}</p>
                )}
              </div>
            </div>
            <div className='reset-content-footer'>
              <div className='btnBox'>
                <button type='submit' className='btn' formNoValidate>
                  {language[activeLanguage].resetPasswordBtn}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
