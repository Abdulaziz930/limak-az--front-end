import React, { useEffect } from "react";
import Banner from "./Banner";
import SectionBox from "./SectionBox";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../actions";

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
      <Banner
        bannerTitle={about.aboutTitle}
        pathName={about.breadcrumbPathname}
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
