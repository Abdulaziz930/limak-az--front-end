import React, { useEffect } from "react";
import Banner from "./Banner";
import Moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAdvertisementDetail,
  fetchAdvertisements,
  fetchAdvertisementHeader,
} from "../actions";

const AdvertisementDetail = () => {
  const dispatch = useDispatch();

  const { activeLanguage } = useSelector((state) => state.languages);
  const { advertisement } = useSelector((state) => state.advertisement);
  const { advertisements } = useSelector((state) => state.advertisements);
  const { advertisementHeader } = useSelector(
    (state) => state.advertisementHeader
  );
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(fetchAdvertisementDetail(id, activeLanguage));
    dispatch(fetchAdvertisements(10));
    dispatch(fetchAdvertisementHeader());
  }, [dispatch, activeLanguage, id]);

  const date = new Date(advertisement.creationDate);

  return (
    <div className='advertisement--detail-wrapper'>
      <Banner
        bannerTitle={advertisementHeader.header}
        pathName={advertisementHeader.breadcrumb}
      />
      <div className='advertisement--detail-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='img-box'>
                <img
                  src={`http://localhost:3000/images/${advertisement.image}`}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='content-header'>
                <h3>{advertisement.title}</h3>
                <div className='date-area'>
                  <i className='far fa-calendar-alt'></i>
                  <span>{Moment(date).format("DD.MM.yyyy hh:mm:ss")}</span>
                </div>
              </div>
              <div
                className='description'
                dangerouslySetInnerHTML={{
                  __html: advertisement.description,
                }}></div>
            </div>
            <div className='col-md-3'>
              {advertisements.map((advertisementItem) => {
                const advertisementDate = new Date(
                  advertisementItem.creationDate
                );
                return (
                  <div className='advertisement-box' key={advertisementItem.id}>
                    <h4
                      onClick={() => {
                        push(`${advertisementItem.id}`);
                      }}>
                      {advertisementItem.title}
                    </h4>
                    <div className='date-area'>
                      <i className='far fa-calendar-alt'></i>
                      <span>
                        {Moment(advertisementDate).format(
                          "DD.MM.yyyy hh:mm:ss"
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementDetail;
