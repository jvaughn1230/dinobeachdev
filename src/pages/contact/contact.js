import React from "react";
import Mailer from "../../components/mailer/mailer";
import dinoFoot from "../../images/trex_footprint.svg";
import ContactHeader from "../../components/contactHeader/contactHeader";

const Contact = () => {
  return (
    <div className="page-container contactpg">
      <ContactHeader />
      <Mailer />
    </div>
  );
};

export default Contact;
