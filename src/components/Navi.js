import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLanguages,
  fetchCertificate,
  fetchCalculatorContent,
  fetchCountriesContent,
  fetchCitiesContent,
  fetchWeightContent,
  fetchUnitsOfLengthContent,
  fetchProductTypesContent,
  fetchHowItWorksContent,
  fetchHowItWorksCardContent,
  fetchAdvertisementTitle,
  fetchAdvertisements,
  fetchContact,
  fetchContacts,
  fetchContactContent,
} from "../actions";
import language from "../translation/language.json";

const Navi = () => {
  const dispatch = useDispatch();

  const { languages, activeLanguage } = useSelector((state) => state.languages);

  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerMenuClassName, setHamburgerMenuClassName] =
    useState("navbar-toggler");

  if (localStorage.getItem("language") === null) {
    localStorage.setItem("language", "AZ");
  }

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  const handleClickLanguage = (code) => {
    localStorage.setItem("language", code);
    dispatch(fetchLanguages(code));
    dispatch(fetchCalculatorContent(localStorage.getItem("language")));
    dispatch(fetchCountriesContent(localStorage.getItem("language")));
    dispatch(fetchCitiesContent(localStorage.getItem("language")));
    dispatch(fetchWeightContent(localStorage.getItem("language")));
    dispatch(fetchUnitsOfLengthContent(localStorage.getItem("language")));
    dispatch(fetchProductTypesContent(localStorage.getItem("language")));
    dispatch(fetchCertificate(localStorage.getItem("language")));
    dispatch(fetchHowItWorksContent(localStorage.getItem("language")));
    dispatch(fetchHowItWorksCardContent(localStorage.getItem("language")));
    dispatch(fetchAdvertisementTitle(localStorage.getItem("language")));
    dispatch(fetchAdvertisements(3, localStorage.getItem("language")));
    dispatch(fetchContact(localStorage.getItem("language")));
    dispatch(fetchContacts(localStorage.getItem("language")));
    dispatch(fetchContactContent(localStorage.getItem("language")));
  };

  const handleClickHamburgerMenu = () => {
    if (!isOpen) {
      setHamburgerMenuClassName("navbar-toggler open");
      setIsOpen(true);
    } else {
      setHamburgerMenuClassName("navbar-toggler");
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='navbar-top'>
            <ul className='nav-items left-items'>
              {language[activeLanguage].auxiliarySections.map((section) => {
                return (
                  <li className='navbar-top__item' key={section.id}>
                    <Link className='navbar-top__link' to={`/${section.url}`}>
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className='nav-items right-items'>
              {language[activeLanguage].authentications.map(
                (authentication) => {
                  return (
                    <li className='navbar-top__item' key={authentication.id}>
                      <Link
                        className='navbar-top__link'
                        to={`/${authentication.url}`}>
                        {authentication.name}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
        <div className='navbar-bottom'>
          <div className='container'>
            <nav className='navbar navbar-expand-lg'>
              <Link className='navbar-brand' to='/'>
                <img
                  src='./images/Limak-logo.png'
                  alt='limak-logo'
                  className='img-fluid'
                />
              </Link>
              <button
                className={hamburgerMenuClassName}
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={handleClickHamburgerMenu}>
                <span className='hamburger-menu-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item dropdown'>
                    <p
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'>
                      {localStorage.getItem("language")}
                    </p>

                    <div
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'>
                      {languages.map((language) => {
                        return (
                          <p
                            className='dropdown-item'
                            onClick={() => handleClickLanguage(language.code)}
                            key={language.id}>
                            {language.code}
                          </p>
                        );
                      })}
                    </div>
                  </li>
                  {language[activeLanguage].sections.map((section) => {
                    return (
                      <li className='nav-item' key={section.id}>
                        <Link className='nav-link' to={`/${section.url}`}>
                          {section.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className='btnBox'>
                  <Link
                    className='btn'
                    to={`/${language[activeLanguage].order.buttonUrl}`}>
                    {language[activeLanguage].order.buttonName}
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navi;
