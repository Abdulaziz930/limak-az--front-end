import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Banner = ({ bannerTitle, pathName }) => {
  return (
    <div className='banner-wrapper'>
      <div className='banner-header'>
        <div className='container'>
          <div className='banner-header-wrapper'>
            <h4>{bannerTitle}</h4>
            <Breadcrumbs pathName={pathName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
