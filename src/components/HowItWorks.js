import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHowItWorksContent, fetchHowItWorksCardContent } from "../actions";

const HowItWorks = () => {
  const dispatch = useDispatch();

  const { content } = useSelector((state) => state.howItWorkContent);
  const { contents } = useSelector((state) => state.howItWorkCardContent);
  const { activeLanguage } = useSelector((state) => state.languages);

  useEffect(() => {
    dispatch(fetchHowItWorksContent());
    dispatch(fetchHowItWorksCardContent());
  }, [dispatch,activeLanguage]);

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
