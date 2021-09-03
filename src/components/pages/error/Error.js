import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import errorRoute from "../../../routes/error/error.json";
import homeRoute from "../../../routes/home/home.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";

const Error = () => {
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
            <h1>404</h1>
          </div>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to={homeRoute[activeLanguage].pageRoute}>HOMEPAGE</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
