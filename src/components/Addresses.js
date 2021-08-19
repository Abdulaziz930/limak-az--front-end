import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Banner from "./Banner";
import Panles from "./Panles";
import axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Addresses = (props) => {
  const [contents, setContents] = useState([]);

  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    const getContent = async () => {
      axios
        .get(
          `https://localhost:44393/api/AddressContent/getAddressContent/${activeLanguage}`,
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((response) => setContents(response.data));
    };

    getContent();
  }, [activeLanguage]);

  const pathNames = pathname.split("/").filter((x) => x);

  return (
    <div className='address-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles pathName={pathNames[0]} />
          </div>
          <div className='col-md-9'>
            <div className='content'>
              <Tabs
                defaultActiveKey='Turkey'
                transition={false}
                id='uncontrolled-tab-example'>
                {contents?.map((content) => {
                  return (
                    <Tab
                      eventKey={content.countryValue}
                      title={content.country}
                      key={content.id}>
                      <div className='row'>
                        {content.addresses?.map((address) => {
                          return (
                            <div className='col-md-6' key={address.id}>
                              <div className='info-box'>
                                <h5>{address.title}</h5>
                                <p>{address.content}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Tab>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Addresses);
