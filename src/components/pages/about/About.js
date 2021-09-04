import React, { useEffect, useState } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import aboutRoute from "../../../routes/pages/about/about.json";
import { mainAPI } from "../../../api";

const About = (props) => {
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const [about, setAbout] = useState({});

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    const getAbout = async () => {
      await mainAPI
        .get(`About/${activeLanguage}`)
        .then((response) => setAbout(response.data));
    };

    getAbout();
  }, [activeLanguage]);

  return (
    <div className='about-wrapper'>
      <MetaDecorator
        title={aboutRoute[activeLanguage].pageTitle}
        description={aboutRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle={about.aboutTitle}
        pathName={aboutRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='about-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SectionBox pathName={pathNames[0]} />
            </div>
            <div className='col-md-9'>
              <div className='img-box'>
                <img
                  src={`http://localhost:3000/images/${about.image}`}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: about.description }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(About);
