import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertisements } from "../actions";

const Intro = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };

  const dispatch = useDispatch();

  const { advertisements } = useSelector((state) => state.advertisements);

  useEffect(() => {
    dispatch(fetchAdvertisements(3));
  }, [dispatch]);

  return (
    <div className='intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='slider mt-4'>
              <Slider {...settings}>
                {advertisements.map((advertisement) => {
                  return (
                    <div key={advertisement.id}>
                      <Link to='/' className='slider-img-link'>
                        <img
                          src={`./images/${advertisement.image}`}
                          alt={advertisement.title}
                          className='img-fluid'
                        />
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='calculator'>
              <div className='col-xs-6'>
                <div className='calculator-title'>
                  <h4>Kalkulyator</h4>
                  <button className='btn'>Kalkulyatoru sıfırla</button>
                </div>
                <select className='ui dropdown'>
                  <option value=''>Gender</option>
                  <option value='1'>Male</option>
                  <option value='0'>Female</option>
                </select>
              </div>
              <div className='col-xs-6'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
