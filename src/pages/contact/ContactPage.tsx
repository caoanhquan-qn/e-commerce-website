import React from 'react';
import './ContactPage.scss';
import maintenanceLogo from '../../assets/img/maintenance.png';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <img alt="maintenance logo" src={maintenanceLogo} />
      <span>Something awesome is coming from Contact Page Project in August 2022</span>
    </div>
  );
};

export default ContactPage;
