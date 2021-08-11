import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLoginContent } from "../actions";
import loginValidateInfo from "../Helpers/loginValidateInfo";
import useLogin from "../hooks/useLogin";
import language from "../translation/language.json";

const Login = () => {
  const dispatch = useDispatch();

  const { loginContent } = useSelector((state) => state.loginContent);
  const { activeLanguage } = useSelector((state) => state.languages);

  const [isChecked, setIsChecked] = useState(false);
  const { values, handleChange, handleSubmitForm, errors } = useLogin(
    loginValidateInfo,
    isChecked
  );

  useEffect(() => {
    dispatch(fetchLoginContent());
  }, [dispatch, activeLanguage]);

  return (
    <div className='login-wrapper'>
      <Banner bannerTitle={loginContent.title} pathName='Daxil ol' />
      <div className='container'>
        <form method='POST' onSubmit={handleSubmitForm}>
          <div className='login-content'>
            <div className='login-content-body'>
              <div className='form-group'>
                <label htmlFor='userName'>
                  {language[activeLanguage].usernameInput.placeholder}:
                </label>
                <input
                  type='text'
                  className='form-control'
                  value={values.userName}
                  placeholder={
                    language[activeLanguage].usernameInput.placeholder
                  }
                  name='userName'
                  id='userName'
                  onChange={handleChange}
                />
                {errors.userName && (
                  <p className='error-message'>{errors.userName}</p>
                )}
              </div>
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
                {errors.common && (
                  <p className='error-message'>{errors.common}</p>
                )}
              </div>
            </div>
            <div className='login-content-footer'>
              <div className='checkbox-wrapper'>
                <div className='remmeber-me'>
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
                  <label className='check-label' htmlFor='check'>
                    {loginContent.rememberMeLabel}
                  </label>
                </div>
                <div className='link-box'>
                  <Link to='/forgot-password'>
                    {loginContent.forgotPasswordName}
                  </Link>
                  <Link to='/register'>{loginContent.registerLinkName}</Link>
                </div>
              </div>
              <div className='btnBox'>
                <button type='submit' className='btn' formNoValidate>
                  {loginContent.buttonName}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;