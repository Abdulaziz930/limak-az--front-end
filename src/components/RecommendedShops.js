import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecommendedShops } from "../actions";
import Slider from "react-slick";

const RecomendedShops = () => {
  const dispatch = useDispatch();

  const { recommendedShops } = useSelector((state) => state.recommendedShops);

  useEffect(() => {
    dispatch(fetchRecommendedShops());
  }, [dispatch]);

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
