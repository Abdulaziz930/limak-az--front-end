import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainAPI } from "../../../api";

const Certificates = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  const [certificateContents, setContent] = useState([]);
  const [certificateHeader, setCertificateHeader] = useState({});

  useEffect(() => {
    const getCertificateHeader = async () => {
      await mainAPI
        .get(`Content/getCertificateContent/${activeLanguage}`)
        .then((response) => setCertificateHeader(response.data));
    };

    getCertificateHeader();
  }, [activeLanguage]);

  useEffect(() => {
    const getCertificateContent = async () => {
      await mainAPI
        .get("CertificateContent")
        .then((response) => setContent(response.data));
    };

    getCertificateContent();
  }, []);

  return (
    <div className='certificates'>
      <div className='container'>
        <div className='header'>
          <h2>{certificateHeader.title}</h2>
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
