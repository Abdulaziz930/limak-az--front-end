import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, fetchContactContent } from "../actions";
import Breadcrumbs from "./Breadcrumbs";

const Contact = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector((state) => state.contacts);
  const { contactContent } = useSelector((state) => state.contactContent);

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchContactContent());
  }, [dispatch]);

  //   const handleClickTab = (cityName) => {
  //     console.log(cityName);
  //   };

  return (
    <div className='contact-wrapper'>
      <div className='contact-header'>
        <div className='container'>
          <div className='contact-header-wrapper'>
            <h4>{contactContent.pageTitle}</h4>
            <Breadcrumbs />
          </div>
        </div>
      </div>
      <div className='contact-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <h1>{contactContent.pageTitle}</h1>
              <div className='contact-content-wrapper'>
                <Tabs
                  defaultActiveKey='Baku'
                  transition={false}
                  id='uncontrolled-tab-example'>
                  {contacts.map((contact) => {
                    return (
                      <Tab
                        eventKey={contact.cityValue}
                        title={contact.cityName}
                        key={contact.id}>
                        <div className='row'>
                          <div className='col-md-7'>
                            <div className='tab-item phone'>
                              <i className='fas fa-phone-alt'></i>
                              <span>{contact.phone}</span>
                            </div>
                            <div className='tab-item mail'>
                              <i className='far fa-envelope'></i>
                              <span>{contact.email}</span>
                            </div>
                            <div className='tab-item location'>
                              <i className='fas fa-map-marker-alt'></i>
                              <span>{contact.location}</span>
                            </div>
                            <div className='tab-item services'>
                              {contact.servicesDto.map((service) => {
                                return (
                                  <div
                                    className='service-item'
                                    key={service.id}>
                                    <h5>{service.serviceTitle}:</h5>
                                    <span>{service.serviceValue}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Tab>
                    );
                  })}
                </Tabs>
              </div>
            </div>
            <div className='col-md-2 offset-md-1'>
              <div className='question-box'>
                <h4>{contactContent.writeUsTitle}</h4>
                <Link to='/write-question' className='btn'>
                  {contactContent.writeUsButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='map-wrapper'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.894559334037!2d49.827483615247466!3d40.36686226659498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d164e83a7d9%3A0x899cce04d36a5797!2sLimak.az!5e0!3m2!1str!2s!4v1627847024636!5m2!1str!2s'
            width='100%'
            height='450'
            style={{ border: "0" }}
            allowFullScreen=''
            loading='lazy'
            title='as'></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
