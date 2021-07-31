import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertisementTitle } from "../actions";
import Moment from "moment";

const News = () => {
  const dispatch = useDispatch();

  const { content } = useSelector((state) => state.advertisimentTitleContent);
  const { advertisements } = useSelector((state) => state.advertisements);

  useEffect(() => {
    dispatch(fetchAdvertisementTitle());
  }, [dispatch]);

  return (
    <div className='news'>
      <div className='container'>
        <div className='title'>
          <h2>{content.title}</h2>
        </div>
        <div className='content'>
          <div className='row'>
            {advertisements?.map((advertisement) => {
              const date = new Date(advertisement.creationDate);
              return (
                <div className='col-md-4' key={advertisement.id}>
                  <Link to={`/Advertisement/${advertisement.id}`}>
                    <div className='news-card'>
                      <img
                        src={`./images/${advertisement.image}`}
                        alt=''
                        className='img-fluid'
                      />
                      <div className='card-caption'>
                        <h4 className='caption-title'>{advertisement.title}</h4>
                        <p className='caption-date'>
                          <i className='far fa-calendar-alt'></i>
                          <span className='date'>
                            {Moment(date).format("DD.MM.yyyy")}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
