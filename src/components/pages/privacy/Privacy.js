import React, { useEffect, useState } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import privacyRoute from "../../../routes/pages/privacy/privacy.json";
import { mainAPI } from "../../../api";

const Privacy = (props) => {
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const [privacy, setPrivacy] = useState({});

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    const getPrivacy = async () => {
      await mainAPI
        .get(`Privacy/${activeLanguage}`)
        .then((response) => setPrivacy(response.data));
    };

    getPrivacy();
  }, [activeLanguage]);

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
