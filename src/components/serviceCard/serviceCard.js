import React from "react";

import "./serviceCard.css";

const ServiceCard = (service) => {
  return (
    <div className="service-card-container">
      <div className="service-bubble gradient-bg">
        <div className="servicecard-packagename">
          <h4>{service.title}</h4>
        </div>
      </div>
      <div className="servicecard-main-container">
        <h2 className="servicecard-title ">{service.title}</h2>
        <p>{service.description}</p>
        <h3>{service.details}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
