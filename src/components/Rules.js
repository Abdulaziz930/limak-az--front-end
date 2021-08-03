import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import SectionBox from "./SectionBox";
import Accordion from "./Accordion";

const Rules = () => {
  return (
    <div className='rules-wrapper'>
      <div className='rules-header'>
        <div className='container'>
          <div className='rules-header-wrapper'>
            <h4>QAYDALAR</h4>
            <Breadcrumbs />
          </div>
        </div>
      </div>
      <div className='rules-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SectionBox />
            </div>
            <div className='col-md-9'>
              <div className='rules-content-header'>
                <h2>Limak.Az istifadəçi qaydaları</h2>
              </div>
              <div className='rules-content-wrapper'>
                <Accordion
                  title='What is your return policy?'
                  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Accordion
                  title='What is your return policy?'
                  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
