import React from "react";
import "./contactHeader.css";

import dinoFoot from "../../images/trex_footprint.svg";

const ContactHeader = () => {
  return (
    <div className="contactpg__header">
      <h2 className="gradient-text">
        Interested in working with us? Let's Talk
      </h2>
      <img src={dinoFoot} alt="dino footprint" className="contact__print1" />
      <img src={dinoFoot} alt="dino footprint" className="contact__print2" />
      <img src={dinoFoot} alt="dino footprint" className="contact__print3" />
      <img src={dinoFoot} alt="dino footprint" className="contact__print4" />
    </div>
  );
};

export default ContactHeader;
