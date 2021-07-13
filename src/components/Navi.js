import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuxiliarySections, fetchLanguages } from "../actions";

const Navi = () => {
  const dispatch = useDispatch();

  const auxiliarySections = useSelector((state) => state.auxiliarySections);
  const languages = useSelector((state) => state.languages);

  const [activeLanguage, setActiveLanguage] = useState("AZ");

  useEffect(() => {
    dispatch(fetchAuxiliarySections());
    dispatch(fetchLanguages());
  }, []);

  const handleClickLanguage = (code) => {
    dispatch(fetchAuxiliarySections(code));
    setActiveLanguage(code);
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar-top'>
          <ul className='nav-items left-items'>
            {auxiliarySections.map((section) => {
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
            <li className='navbar-top__item'>
              <Link className='navbar-top__link' to='/login'>
                Daxil ol
              </Link>
            </li>
            <li className='navbar-top__item'>
              <Link className='navbar-top__link' to='/register'>
                Qeydiyyatdan keç
              </Link>
            </li>
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
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
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
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Ölkələr
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Kalkulyator
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Mağazalar
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Əlaqə
                  </Link>
                </li>
              </ul>
              <Link className='btn' to='/'>
                Sifariş et
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navi;
