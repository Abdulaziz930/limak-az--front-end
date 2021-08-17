import React from "react";
import Banner from "./Banner";
import Panles from "./Panles";

const WriteQuestion = () => {
  return (
    <div className='write-question-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='write-question-content'>
              <div className='header'>
                <h4>Sorğu</h4>
              </div>
              <form>
                <div className='subject'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Başlıq *'
                    />
                  </div>
                </div>
                <div className='content'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      placeholder='Qeyd *'
                      rows='5'></textarea>
                  </div>
                </div>
                <div className='btnBox'>
                  <button type='submit' className='btn'>
                    Göndər
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

export default WriteQuestion;
