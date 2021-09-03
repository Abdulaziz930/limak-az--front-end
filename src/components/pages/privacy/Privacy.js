import React, { useEffect } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchPrivacy } from "../../../actions";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import privacyRoute from "../../../routes/privacy/privacy.json";

const Privacy = (props) => {
  const dispatch = useDispatch();

  const { privacy } = useSelector((state) => state.privacy);
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    dispatch(fetchPrivacy());
  }, [dispatch, activeLanguage]);

  return (
    <div className='privacy-wrapper'>
      <MetaDecorator
        title={privacyRoute[activeLanguage].pageTitle}
        description={privacyRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle={privacy.privacyTitle}
        pathName={privacyRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='privacy-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SectionBox pathName={pathNames[0]} />
            </div>
            <div className='col-md-9'>
              <div className='img-box'>
                <img
                  src={`http://localhost:3000/images/${privacy.image}`}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: privacy.description }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Privacy);
