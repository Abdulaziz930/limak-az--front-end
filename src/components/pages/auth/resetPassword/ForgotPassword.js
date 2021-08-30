import React, { useEffect, useState } from "react";
import Banner from "../../../common/banner/Banner";
import forgotPasswordValidateInfo from "../../../../Helpers/forgotPassowordValidateInfo";
import useForgotPassword from "../../../../hooks/useForgotPassword";
import { useSelector } from "react-redux";
import language from "../../../../translation/language.json";
import SuccessMessage from "../../../common/successMessage/SuccessMessage";
import Spinner from "../../../common/spinner/Spinner";
import axios from "axios";

const ForgotPassword = () => {
  const {
    values,
    handleChange,
    handleSubmitForm,
    errors,
    isSubmitted,
    loading,
  } = useForgotPassword(forgotPasswordValidateInfo);
  const { activeLanguage } = useSelector((state) => state.languages);

  const [content, setContent] = useState({});

  const {
    successMessageFirstSide,
    successMessageSecondSide,
    successMessageDescription,
  } = content;

  useEffect(() => {
    const getContent = async () => {
      await axios
        .get(
          `https://localhost:44393/api/ForgotPasswordContent/getForgotPasswordContent/${localStorage.getItem(
            "language"
          )}`
        )
        .then((response) => setContent(response.data));
    };

    getContent();
  }, [activeLanguage]);

  return (
    <div className='forgot-password-wrapper'>
      <Banner bannerTitle={content.pageTitle} pathName='ŞİFRƏNİ UNUTDUM' />
      <div className='container'>
        {loading ? (
          <Spinner />
        ) : (
          <div className='forgot-password-content'>
            {isSubmitted ? (
              <SuccessMessage
                email={values.email}
                firstSide={successMessageFirstSide}
                secondSide={successMessageSecondSide}
                description={successMessageDescription}
              />
            ) : (
              <form method='POST' onSubmit={handleSubmitForm}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='content-body'>
                      <div className='header'>
                        <h1>{content.contentTitle}</h1>
                        <p>{content.description}</p>
                      </div>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control'
                          value={values.email}
                          placeholder={
                            language[activeLanguage].emailInput.placeholder
                          }
                          name='email'
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className='error-message'>{errors.email}</p>
                        )}
                        {errors.common && (
                          <p className='error-message'>{errors.common}</p>
                        )}
                      </div>
                      <div className='btnBox'>
                        <button type='submit' className='btn' formNoValidate>
                          {content.buttonName}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='content-image'>
                      <div className='img-box'>
                        <img
                          src={`http://localhost:3000/images/${content.image}`}
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
