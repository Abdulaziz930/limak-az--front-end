import React from "react";
import Slider from "react-slick";

const RecomendedShops = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className='recomendedShops'>
      <div className='container'>
        <Slider {...settings}>
          <div className='imgBox'>
            <img src='./images/koton.png' alt='' />
          </div>
          <div>
            <img src='./images/markafoni.png' alt='' />
          </div>
          <div>
            <img src='./images/trendyol.png' alt='' />
          </div>
          <div>
            <img src='./images/defacto.png' alt='' />
          </div>
          <div>
            <img src='./images/trendyol.png' alt='' />
          </div>
          <div>
            <img src='./images/n11com.png' alt='' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RecomendedShops;
