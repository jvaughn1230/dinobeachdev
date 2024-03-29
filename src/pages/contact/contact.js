import React from "react";

import "./contact.css";
import Mailer from "../../components/mailer/mailer";
import dinoFoot from "../../images/trex_footprint.svg";
import ContactHeader from "../../components/contactHeader/contactHeader";

const Contact = () => {
  return (
    <div className="contactpg">
      <ContactHeader />
      <Mailer />
    </div>
  );
};

export default Contact;
