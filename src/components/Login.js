import React, { useState } from "react";
import Banner from "./Banner";
import { useHistory } from "react-router";
import loginValidateInfo from "../Helpers/loginValidateInfo";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { values, handleChange, handleSubmitForm, errors } = useLogin(
    loginValidateInfo,
    isChecked
  );
  const { push } = useHistory();
  return (
    <div className='login-wrapper'>
      <Banner bannerTitle='Daxil ol' pathName='Daxil ol' />
      <div className='container'>
        <form method='POST' onSubmit={handleSubmitForm}>
          <div className='login-content'>
            <div className='login-content-body'>
              <div className='form-group'>
                <label htmlFor='userName'>Username:</label>
                <input
                  type='text'
                  className='form-control'
                  value={values.userName}
                  placeholder='İstifadəçi adı'
                  name='userName'
                  id='userName'
                  onChange={handleChange}
                />
                {errors.userName && (
                  <p className='error-message'>{errors.userName}</p>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  value={values.password}
                  placeholder='Şifrə'
                  name='password'
                  id='password'
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className='error-message'>{errors.password}</p>
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
                    Məni xatırla
                  </label>
                </div>
                <div className='link-box'>
                  <span>Şifrəni unutmusunuz?</span>
                  <span onClick={() => push("/register")}>Qeydiyyat</span>
                </div>
              </div>
              <div className='btnBox'>
                <button type='submit' className='btn' formNoValidate>
                  Daxil Ol
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
