import React from "react";
import Banner from "./Banner";
import Panles from "./Panles";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import language from "../translation/language.json";

const Settings = () => {
  const { activeLanguage } = useSelector((state) => state.languages);
  return (
    <div className='settings-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='content'>
              <Tabs
                defaultActiveKey='Profile'
                transition={false}
                id='uncontrolled-tab-example'>
                <Tab eventKey='Profile' title='Profil Məlumatları'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Ad'
                          value='Abdulaziz'
                        />
                      </div>
                      <div className='form-group'>
                        <select className='form-control' name='city'>
                          <option value=''>
                            --
                            {language[activeLanguage].cityInput.placeholder}
                            --
                          </option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Ad'
                          value='Abdulaziz'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Ad'
                          value='Abdulaziz'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Ad'
                          value='Abdulaziz'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Ad'
                          value='Abdulaziz'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='btnBox'>
                    <button className='btn' type='submit'>
                      Yadda Saxla
                    </button>
                  </div>
                </Tab>
                <Tab eventKey='ID' title='Ş/V Məlumatları'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Seriya'
                          value='Seriya'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='FIN'
                          value='FIN'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-9'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='FIN'
                          value='FIN'
                        />
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <select className='form-control' name='city'>
                        <option value=''>
                          --
                          {language[activeLanguage].genderInput.placeholder}
                          --
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='btnBox'>
                    <button className='btn' type='submit'>
                      Yadda Saxla
                    </button>
                  </div>
                </Tab>
                <Tab eventKey='Password' title='Şifrə'>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='old password'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='new password'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='confirm password'
                    />
                  </div>
                  <div className='btnBox'>
                    <button className='btn' type='submit'>
                      Yadda Saxla
                    </button>
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

export default Settings;
