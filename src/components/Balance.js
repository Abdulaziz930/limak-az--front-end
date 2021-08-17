import React from "react";
import Banner from "./Banner";
import Panles from "./Panles";

const Balance = () => {
  return (
    <div className='balance-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='balance-body'>
                  <div className='balance-box'>
                    <img
                      src='http://localhost:3000/images/balans-mob.png'
                      alt=''
                      className='w-100'
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='increase-balance-wrapper'>
                  <div className='increase-balance-content'>
                    <h4>ÖDƏNİŞ ÜÇÜN BALANS ARTIMI</h4>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <input
                            type='number'
                            className='form-control'
                            min='0'
                            max='50'
                            placeholder='Məbləğ *'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='btnBox'>
                          <button className='btn'>Ödəniş</button>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='description'>
                          <p>min: 1 USD - max: 50 USD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='actions'>
                  <table class='table table-bordered'>
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
  );
};

export default Balance;
