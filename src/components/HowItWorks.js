import React from "react";
import { useSelector } from "react-redux";

const HowItWorks = () => {
  const { contents } = useSelector((state) => state.contents);

  return (
    <div className='How-It-Works-wrapper'>
      <div className='container'>
        <div className='title'>
          <h1>{contents.howItWorksDto[0].title}</h1>
        </div>
        <div className='How-It-Works__items'>
          <div className='row'>
            {contents.howItWorkCardsDto.map((howItWorkCard) => {
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
