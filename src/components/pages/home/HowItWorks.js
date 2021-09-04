import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainAPI } from "../../../api";

const HowItWorks = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  const [content, setContent] = useState({});
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getHowItWorkContent = async () => {
      await mainAPI
        .get(`Content/getHowItWorkContent/${activeLanguage}`)
        .then((response) => setContent(response.data));
    };

    const getHowItWorkCardContent = async () => {
      await mainAPI
        .get(`Content/getHowItWorkCardContent/${activeLanguage}`)
        .then((response) => setContents(response.data));
    };

    getHowItWorkContent();
    getHowItWorkCardContent();
  }, [activeLanguage]);

  return (
    <div className='How-It-Works-wrapper'>
      <div className='container'>
        <div className='title'>
          <h1>{content.title}</h1>
        </div>
        <div className='How-It-Works__items'>
          <div className='row'>
            {contents.map((howItWorkCard) => {
              return (
                <div className='col-md-4' key={howItWorkCard.id}>
                  <div className='How-It-Works__item'>
                    <div className='imgBox'>
                      <img src={`./images/${howItWorkCard.image}`} alt='' />
                    </div>
                    <div className='title'>
                      <h4>{howItWorkCard.title}</h4>
                    </div>
                    <div
                      className='description'
                      dangerouslySetInnerHTML={{
                        __html: howItWorkCard.description,
                      }}></div>
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

export default HowItWorks;
