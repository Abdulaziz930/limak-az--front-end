import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import language from "../translation/language.json";
import { useSelector, useDispatch } from "react-redux";
import { fetchSocialMedias, fetchContact } from "../actions";

const Footer = () => {
  const dispatch = useDispatch();

  const { activeLanguage } = useSelector((state) => state.languages);
  const { socialMedias } = useSelector((state) => state.socialMedias);
  const { contact } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch, activeLanguage]);

  useEffect(() => {
    dispatch(fetchSocialMedias());
  }, [dispatch]);

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='logo-box'>
                <img
                  src='http://localhost:3000/images/logo-footer.png'
                  alt=''
                />
              </div>
              <div className='description'>
                <p>{language[activeLanguage].description}</p>
              </div>
              <div className='social-media-box'>
                <h5>{language[activeLanguage].social_media_title}</h5>
                <div className='social-medias-wrapper'>
                  <ul className='social-medias'>
                    {socialMedias.map((socialMedia) => {
                      return (
                        <li key={socialMedia.id}>
                          <a
                            href={socialMedia.url}
                            target='_blank'
                            rel='noreferrer'>
                            <i className={socialMedia.icon}></i>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='sections'>
                <div className='section-title'>
                  <h4>{language[activeLanguage].section_title}</h4>
                </div>
                <div className='section-content'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <ul>
                        {language[activeLanguage].sections.map((section) => {
                          return (
                            <li key={section.id}>
                              <Link to={`/${section.url}`}>{section.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className='col-md-6'>
                      <ul>
                        {language[activeLanguage].auxiliarySections.map(
                          (section) => {
                            return (
                              <li key={section.id}>
                                <Link to={`/${section.url}`}>
                                  {section.name}
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 offset-md-2'>
              <div className='contact'>
                <div className='tel'>
                  <a href='tel:*9595'>
                    *9595
                    <span
                      dangerouslySetInnerHTML={{
                        __html: language[activeLanguage].phone,
                      }}></span>
                  </a>
                </div>
                <p>{contact.location}</p>
                <div className='mobile'>
                  <h5>{language[activeLanguage].app}</h5>
                  <div className='mobile-content'>
                    <a
                      href='https://play.google.com/store/apps/details?id=az.limak'
                      target='_blank'
                      rel='noreferrer'>
                      <img src='./images/google-play.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='copy-right'>
                {language[activeLanguage].copy_right}
              </p>
            </div>
            <div className='col-md-6'>
              <div className='cards'>
                <div className='card-box'>
                  <img src='./images/visa-logo.png' alt='' />
                  <img src='./images/master-card-logo.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
