import React, { useEffect } from "react";
import Breadcrumbs from "./Breadcrumbs";
import TariffsTab from "./TariffsTab";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryContent } from "../actions";

const Countries = () => {
  const dispatch = useDispatch();

  const { countryContent } = useSelector((state) => state.countryContent);

  useEffect(() => {
    dispatch(fetchCountryContent());
  }, [dispatch]);

  return (
    <div className='countries-wrapper'>
      <div className='countries-header'>
        <div className='container'>
          <div className='countries-header-wrapper'>
            <h4>{countryContent.title}</h4>
            <Breadcrumbs />
          </div>
        </div>
      </div>
      <div className='countries-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <TariffsTab />
            </div>
            <div className='col-md-5'>
              <div className='imgBox'>
                <img
                  src='http://localhost:3000/images/countries.png'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
