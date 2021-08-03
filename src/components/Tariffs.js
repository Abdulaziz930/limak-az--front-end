import React from "react";
import TariffsTab from "./TariffsTab";

const Tariffs = () => {
  return (
    <div className='tariffs'>
      <div className='container'>
        <div className='header'>
          <h2>ÖLKƏLƏR ÜZRƏ TARİFLƏR</h2>
        </div>
        <TariffsTab />
      </div>
    </div>
  );
};

export default Tariffs;
