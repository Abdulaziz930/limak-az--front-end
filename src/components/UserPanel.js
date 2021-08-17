import React from "react";
import Panles from "./Panles";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const UserPanel = () => {
  return (
    <div className='user-panel-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='user-panel-content'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='balance-box'>
                    <img
                      src='http://localhost:3000/images/balans.png'
                      alt=''
                      className='img-fluid'
                    />
                    <div className='balance-content'>
                      <div className='balance-text'>
                        <span className='header'>Balansım</span>
                        <div className='balance-count'>
                          <span className='count'>0.00 &#8380;</span>
                        </div>
                        <div className='balance-description'>
                          <p className='description-text'>
                            Azərbaycana çatdırılma haqqının ödənilməsi və online
                            kuryer sifarişi üçün balansınızı artıra bilərsiniz.
                            <span className='strong-text'>
                              ARTIRILAN BALANS GERİ QAYTARILMIR.
                            </span>
                          </p>
                          <div className='balance-btn'>
                            <div className='btnBox'>
                              <Link to='/balance' className='btn'>
                                Balansı Artır
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='wallet-box'>
                    <img
                      src='http://localhost:3000/images/wallet1.png'
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='actions'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <th scope='col'>Əməliyyat</th>
                          <th scope='col'>Məbləğ</th>
                          <th scope='col'>Tarix</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
