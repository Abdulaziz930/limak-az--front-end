import React, { useEffect } from "react";
import Banner from "../../common/banner/Banner";
import TariffsTab from "../../common/tariff/TariffsTab";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryContent } from "../../../actions";

const Countries = () => {
  const dispatch = useDispatch();

  const { countryContent } = useSelector((state) => state.countryContent);
  const { activeLanguage } = useSelector((state) => state.languages);

  useEffect(() => {
    dispatch(fetchCountryContent());
  }, [dispatch, activeLanguage]);

  return (
    <div className='countries-wrapper'>
      <Banner
        bannerTitle={countryContent.title}
        pathName={countryContent.breadcrumbPathname}
      />
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
