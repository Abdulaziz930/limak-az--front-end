import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguages, fetchContents, fetchCertificate } from "../actions";
import SpinnerWrapper from "./SpinnerWrapper";

const Navi = () => {
  const dispatch = useDispatch();

  const { languages } = useSelector((state) => state.languages);
  const { loading, contents } = useSelector((state) => state.contents);

  const [activeLanguage, setActiveLanguage] = useState("AZ");
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerMenuClassName, setHamburgerMenuClassName] =
    useState("navbar-toggler");

  // useEffect(() => {
  //   dispatch(fetchLanguages());
  //   dispatch(fetchContents());
  // }, [dispatch]);

  const handleClickLanguage = (code) => {
    setActiveLanguage(code);
    dispatch(fetchContents(code));
    dispatch(fetchCertificate(code));
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
              {contents.auxiliarySectionsDto.map((section) => {
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
              {contents.authenticationsDto.map((authentication) => {
                return (
                  <li className='navbar-top__item' key={authentication.id}>
                    <Link
                      className='navbar-top__link'
                      to={`/${authentication.url}`}>
                      {authentication.name}
                    </Link>
                  </li>
                );
              })}
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
                    <Link
                      className='nav-link dropdown-toggle'
                      to='/'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'>
                      {activeLanguage}
                    </Link>
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
                  {contents.sectionsDto.map((section) => {
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
                    to={`/${contents.ordersDto[0].buttonUrl}`}>
                    {contents.ordersDto[0].buttonName}
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
