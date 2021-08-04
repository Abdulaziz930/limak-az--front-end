import React, { useEffect } from "react";
import TariffsTab from "./TariffsTab";
import { useSelector, useDispatch } from "react-redux";
import { fetchTariffHeader } from "../actions";

const Tariffs = () => {
  const dispatch = useDispatch();

  const { activeLanguage } = useSelector((state) => state.languages);
  const { tariffHeader } = useSelector((state) => state.tariffHeader);

  useEffect(() => {
    dispatch(fetchTariffHeader());
  }, [dispatch, activeLanguage]);

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
