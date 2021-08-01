import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='logo-box'>
                <img src='./images/logo-footer.png' alt='' />
              </div>
              <div className='description'>
                <p>
                  "Limak VM" MMC sürətli poçtdaşıma və kuryer şirkətidir. Fiziki
                  və hüquqi şəxslərin sifariş etdikləri yükləri xaricdəki
                  anbarlarına qəbul edir, onların Azərbaycana daşınıb, müştəriyə
                  təhvil verilməsini təmin edir.
                </p>
              </div>
              <div className='social-media-box'>
                <h5>Bizi sosial şəbəkələrdən izləyin</h5>
                <div className='social-medias-wrapper'>
                  <ul className='social-medias'>
                    <li>
                      <a
                        href='https://www.facebook.com/Limakaz/'
                        target='_blank'
                        rel='noreferrer'
                        className='fb-link'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.instagram.com/limak.az/'
                        target='_blank'
                        rel='noreferrer'
                        className='ing-link'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://twitter.com/limak_az'
                        target='_blank'
                        rel='noreferrer'
                        className='tw-link'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='sections'>
                <div className='section-title'>
                  <h4>Bölmələr</h4>
                </div>
                <div className='section-content'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <ul>
                        <li>
                          <Link to='/countries'>Ölkələr</Link>
                        </li>
                        <li>
                          <Link to='/shops'>Mağazalar</Link>
                        </li>
                        <li>
                          <Link to='/calculator'>Kalkulayor</Link>
                        </li>
                        <li>
                          <Link to='/contact'>Əlaqə</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-6'>
                      <ul>
                        <li>
                          <Link to='/rules'>Qaydalar</Link>
                        </li>
                        <li>
                          <Link to='/questions'>Suallar</Link>
                        </li>
                        <li>
                          <Link to='/about'>Haqqımızda</Link>
                        </li>
                        <li>
                          <Link to='/privacy'>Gizlilik Şərləri</Link>
                        </li>
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
                    <span>
                      DƏSTƏK
                      <br />
                      XƏTTİ
                    </span>
                  </a>
                </div>
                <p>
                  Səbail rayonu, Lermontov küç. 40A (İçərişəhər
                  metrostansiyasının yaxınlığı, "Azeurotel" baş ofisinin yanı)
                  Bakı/Azərbaycan
                </p>
                <div className='mobile'>
                  <h5>Mobil Tətbiqlər</h5>
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
                © 2018 Limak.az | Bütün hüquqlar qorunur
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
