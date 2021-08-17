import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Banner from "./Banner";
import Panles from "./Panles";
import axios from "axios";
import { useSelector } from "react-redux";

const Addresses = () => {
  const [contents, setContents] = useState([]);

  const { activeLanguage } = useSelector((state) => state.languages);

  useEffect(() => {
    const getContent = async () => {
      axios
        .get(
          `https://localhost:44393/api/AddressContent/getAddressContent/${activeLanguage}`
        )
        .then((response) => setContents(response.data));
    };

    getContent();
  }, [activeLanguage]);

  return (
    <div className='address-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
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

export default Addresses;
