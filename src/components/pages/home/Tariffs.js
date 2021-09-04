import React, { useEffect, useState } from "react";
import TariffsTab from "../../common/tariff/TariffsTab";
import { useSelector } from "react-redux";
import { mainAPI } from "../../../api";

const Tariffs = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  const [tariffHeader, setTariffHeader] = useState({});

  useEffect(() => {
    const getTariffHeader = async () => {
      await mainAPI
        .get(`Content/getTariffHeaderContent/${activeLanguage}`)
        .then((response) => setTariffHeader(response.data));
    };

    getTariffHeader();
  }, [activeLanguage]);

  return (
    <div className='tariffs'>
      <div className='container'>
        <div className='header'>
          <h2>{tariffHeader.title}</h2>
        </div>
        <TariffsTab />
      </div>
    </div>
  );
};

export default Tariffs;
