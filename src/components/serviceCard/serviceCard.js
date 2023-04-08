import React from "react";

import "./serviceCard.css";

const ServiceCard = () => {
  return (
    <div className="service-card-container">
      <div className="service-bubble gradient-bg">
        <h4 className="servicecard-packagename">Temp Title</h4>
      </div>
      <div className="servicecard-main-container">
        <h2 className="title-text servicecard-title ">Title</h2>
        <p>Description</p>
        <h3>useCase</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
