import React from "react";

const News = () => {
  return (
    <div className='news'>
      <div className='container'>
        <div className='title'>
          <h2>YENİLİKLƏR VƏ ELANLAR</h2>
        </div>
        <div className='content'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='news-card'>
                <img
                  src='./images/03ffa9ae-970e-4779-9491-949141a66b83-news_1624611190.png'
                  alt=''
                  className='img-fluid'
                />
                <div className='card-caption'>
                  <h4 className='caption-title'>
                    Türkiyə anbarımız yeni ünvanda!
                  </h4>
                  <p className='caption-date'>
                    <i className='far fa-calendar-alt'></i>
                    <span className='date'>23.07.2021</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='news-card'>
                <img
                  src='./images/03ffa9ae-970e-4779-9491-949141a66b83-news_1624611190.png'
                  alt=''
                  className='img-fluid'
                />
                <div className='card-caption'>
                  <h4 className='caption-title'>
                    Limak.az Xırdalanda xidmətinizdədir
                  </h4>
                  <p className='caption-date'>
                    <i className='far fa-calendar-alt'></i>
                    <span className='date'>23.07.2021</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='news-card'>
                <img
                  src='./images/03ffa9ae-970e-4779-9491-949141a66b83-news_1624611190.png'
                  alt=''
                  className='img-fluid'
                />
                <div className='card-caption'>
                  <h4 className='caption-title'>
                    BirKart-la sifariş et, faizsiz ödə!
                  </h4>
                  <p className='caption-date'>
                    <i className='far fa-calendar-alt'></i>
                    <span className='date'>23.07.2021</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
