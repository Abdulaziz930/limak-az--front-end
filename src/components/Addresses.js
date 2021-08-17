import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Banner from "./Banner";
import Panles from "./Panles";

const Addresses = () => {
  return (
    <div className='address-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='content'>
              <Tabs
                defaultActiveKey='Turkey'
                transition={false}
                id='uncontrolled-tab-example'>
                <Tab eventKey='Turkey' title='Türkiyə'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='info-box'>
                        <h5>Adres</h5>
                        <p>0075635 - LİMAK İTHALAT VE İHRACAT LİMİTED</p>
                      </div>
                      <div className='info-box'>
                        <h5>Şəhər</h5>
                        <p>İstanbul</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='info-box'>
                        <h5>Zip/Poct</h5>
                        <p>34400</p>
                      </div>
                      <div className='info-box'>
                        <h5>Telefon</h5>
                        <p>35650276048</p>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey='USA' title='Amerika'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='info-box'>
                        <h5>Adres</h5>
                        <p>0075635 - LİMAK İTHALAT VE İHRACAT LİMİTED</p>
                      </div>
                      <div className='info-box'>
                        <h5>Şəhər</h5>
                        <p>İstanbul</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='info-box'>
                        <h5>Zip/Poct</h5>
                        <p>34400</p>
                      </div>
                      <div className='info-box'>
                        <h5>Telefon</h5>
                        <p>35650276048</p>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
