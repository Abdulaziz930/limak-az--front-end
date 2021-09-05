import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguages, setUser } from "../../../redux/actions";
import language from "../../../translation/language.json";
import logout from "../../../Helpers/logout";

const Navi = () => {
  const dispatch = useDispatch();

  const { languages, activeLanguage } = useSelector((state) => state.languages);
  const { user } = useSelector((state) => state.user);
  const { push } = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerMenuClassName, setHamburgerMenuClassName] =
    useState("navbar-toggler");

  if (localStorage.getItem("language") === null) {
    localStorage.setItem("language", "AZ");
  }

  useEffect(() => {
    dispatch(fetchLanguages());
    if (localStorage.getItem("username")) {
      dispatch(setUser(localStorage.getItem("username")));
    } else if (sessionStorage.getItem("username")) {
      dispatch(setUser(sessionStorage.getItem("username")));
    }
  }, [dispatch]);

  const handleClickLanguage = (code) => {
    localStorage.setItem("language", code);
    dispatch(fetchLanguages(code));
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

  const logoutUser = () => {
    logout();
    dispatch(setUser(""));
    push("/");
  };

  let count = 0;

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
              {localStorage.getItem("token") ||
              sessionStorage.getItem("token") ? (
                <>
                  <li className='nav-item dropdown panel-items'>
                    <p
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'>
                      {user}
                    </p>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'>
                      {language[activeLanguage].panels.map((panel) => {
                        count++;
                        return (
                          <React.Fragment key={panel.id}>
                            {count ===
                            language[activeLanguage].panels.length ? (
                              <span className='dropdown-item' onClick={logoutUser}>
                                {panel.name}
                              </span>
                            ) : (
                              <Link className='dropdown-item' to={panel.url}>
                                {panel.name}
                              </Link>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </li>
                </>
              ) : (
                language[activeLanguage].authentications.map(
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
                )
              )}
            </ul>
          </div>
        </div>
        <div className='navbar-bottom'>
          <div className='container'>
            <nav className='navbar navbar-expand-lg'>
              <Link className='navbar-brand' to='/'>
                <img
                  src='http://localhost:3000/images/Limak-Logo.png'
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
