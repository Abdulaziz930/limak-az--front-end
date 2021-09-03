import React, { useEffect } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../../../actions";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import aboutRoute from "../../../routes/pages/about/about.json";

const About = (props) => {
  const dispatch = useDispatch();

  const { about } = useSelector((state) => state.about);
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch, activeLanguage]);

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
