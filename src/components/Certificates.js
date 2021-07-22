import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCertificateContents } from "../actions";

const Certificates = () => {
  const dispatch = useDispatch();

  const { certificateContents } = useSelector(
    (state) => state.certificateContents
  );

  const { certificate } = useSelector((state) => state.certificate);

  useEffect(() => {
    dispatch(fetchCertificateContents());
  }, [dispatch]);

  return (
    <div className='certificates'>
      <div className='container'>
        <div className='header'>
          <h2>{certificate[0].title}</h2>
        </div>
        <div className='content'>
          <div className='row'>
            {certificateContents.map((certificateContent) => {
              return (
                <div className='col-md-3' key={certificateContent.id}>
                  <div className='imgBox'>
                    <img
                      src={`./images/${certificateContent.image}`}
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
