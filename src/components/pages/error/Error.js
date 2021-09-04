import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import errorRoute from "../../../routes/pages/error/error.json";
import homeRoute from "../../../routes/pages/home/home.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import language from "../../../translation/language.json";

const Error = ({ statusCode, title, description, buttonIsExist }) => {
  const { activeLanguage } = useSelector((state) => state.languages);

  return (
    <div className='error-wrapper'>
      <MetaDecorator
        title={errorRoute[activeLanguage].pageTitle}
        description={errorRoute[activeLanguage].pageDescription}
      />
      <div id='notfound'>
        <div className='notfound-bg'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>{statusCode}</h1>
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          {buttonIsExist ? (
            <Link to={homeRoute.pageRoute}>
              {language[activeLanguage].errorPage.buttonName}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Error;
