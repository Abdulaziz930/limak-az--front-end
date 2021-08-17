import React from "react";
import Banner from "./Banner";
import Panles from "./Panles";

const Courier = () => {
  return (
    <div className='courier-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='courier-content'>
              <div className='header'>
                <h4>Kuryer</h4>
              </div>
              <form>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Şəhər'
                      />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Rayon'
                      />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Qəsəbə'
                      />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Küçə'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Ev'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Telefon'
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <select className='form-control' name='city' multiple>
                      <option value=''>-- Bağlama Seçin --</option>
                      <option value='1'>test1</option>
                      <option value='2'>test2</option>
                    </select>
                  </div>
                </div>
                <div className='btnBox'>
                  <button className='btn' type='submit'>
                    Sifariş Et
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courier;
