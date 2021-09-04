import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { mainAPI } from "../../../api";

const TariffsTab = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  const [tariffs, setTariffs] = useState([]);

  useEffect(() => {
    const getTariffs = async () => {
      await mainAPI
        .get(`Content/getTariffContent/${activeLanguage}`)
        .then((response) => setTariffs(response.data));
    };

    getTariffs();
  }, [activeLanguage]);

  return (
    <div className='content'>
      <Tabs
        defaultActiveKey='Turkey'
        transition={false}
        id='uncontrolled-tab-example'>
        {tariffs.map((tariff) => {
          return (
            <Tab
              eventKey={tariff.countryValue}
              title={tariff.conutryName}
              key={tariff.id}>
              <div className='tab-header'>
                <div className='flag'>
                  <img
                    src={`http://localhost:3000/images/${tariff.tabImage}`}
                    alt='turkey-flag'
                    className='img-fluid'
                  />
                </div>
                <div className='title'>
                  <h4>{tariff.tabTitle}</h4>
                </div>
              </div>
              <div className='tab-main'>
                {tariff.productTypesDto.map((productType) => {
                  return (
                    <div className='type' key={productType.id}>
                      <div className='type-title'>
                        <h5>{productType.name}</h5>
                      </div>
                      <ul>
                        {productType.tariffsDto.map((tariffItem) => {
                          return (
                            <li key={tariffItem.id}>
                              <span className='tariff-title'>
                                {tariffItem.title}
                              </span>
                              <span className='tariff-price'>
                                {tariffItem.price} $
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className='tab-description'>
                <p>{tariff.tabDescription}</p>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TariffsTab;
