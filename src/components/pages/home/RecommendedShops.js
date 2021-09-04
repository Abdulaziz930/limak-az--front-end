import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { mainAPI } from "../../../api";

const RecomendedShops = () => {
  const dispatch = useDispatch();

  const [recommendedShops, setRecommendedShops] = useState([]);

  useEffect(() => {
    const getRecommendedShops = async () => {
      await mainAPI
        .get("Shop")
        .then((response) => setRecommendedShops(response.data));
    };

    getRecommendedShops();
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className='recomendedShops'>
      <div className='container'>
        <Slider {...settings}>
          {recommendedShops?.map((recommendedShop) => {
            return (
              <div className='imgBox' key={recommendedShop.id}>
                <img
                  src={`./images/${recommendedShop.image}`}
                  alt={recommendedShop.image}
                  className='img-fluid'
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default RecomendedShops;
