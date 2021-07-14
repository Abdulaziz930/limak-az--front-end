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
  };

  const dispatch = useDispatch();

  const { advertisements } = useSelector((state) => state.advertisements);

  useEffect(() => {
    dispatch(fetchAdvertisements(3));
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='slider'>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              {/* {advertisements.map((advertisement) => {
                return (
                  <div key={advertisement.id}>
                    <Link to='/'>
                      <img
                        src={`./images/${advertisement.image}`}
                        alt={advertisement.title}
                      />
                    </Link>
                  </div>
                );
              })} */}
            </Slider>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  );
};

export default Intro;
