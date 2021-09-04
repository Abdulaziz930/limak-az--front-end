import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Moment from "moment";
import { mainAPI } from "../../../api";

const News = () => {
  const { advertisements } = useSelector((state) => state.advertisements);
  const { activeLanguage } = useSelector((state) => state.languages);

  const [advertisementTitle, setTitle] = useState({});

  useEffect(() => {
    const getAdvertisimentTitle = async () => {
      await mainAPI
        .get(`Content/GetAdvertisimentTitleContent/${activeLanguage}`)
        .then((response) => setTitle(response.data));
    };

    getAdvertisimentTitle();
  }, [activeLanguage]);

  return (
    <div className='news'>
      <div className='container'>
        <div className='title'>
          <h2>{advertisementTitle.title}</h2>
        </div>
        <div className='content'>
          <div className='row'>
            {advertisements?.map((advertisement) => {
              const date = new Date(advertisement.creationDate);
              return (
                <div className='col-md-4' key={advertisement.id}>
                  <Link to={`advertisements/${advertisement.id}`}>
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
