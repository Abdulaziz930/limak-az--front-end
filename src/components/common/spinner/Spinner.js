import React from "react";

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='d-flex justify-content-center spinner-box'>
        <div className='spinner-grow text-primary-color' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
