import React from "react";

import ServiceCard from "../serviceCard/serviceCard";
import { serviceData } from "../../constants/serviceData";

import "./serviceSection.css";

const ServiceSection = () => {
  console.log("data:", serviceData);
  const firstRowData = serviceData.slice(0, 2);
  const secondRowData = serviceData.slice(2, 4);

  const newServiceCard = (service) => {
    return (
      <ServiceCard
        key={service.id}
        title={service.title}
        description={service.description}
        details={service.details}
      />
    );
  };

  return (
    <div className="servicesection-container">
      <div>
        <h3 className="servicessection__header">services</h3>
        <h2 className="services-text ">
          we like to create <span className="gradient-text">pretty</span>{" "}
          websites that work <span className="gradient-text">fast</span>
        </h2>
      </div>
      <div className="servicecards-container">
        {firstRowData.map(newServiceCard)}
        <div className="services-side-text ">
          <h3>Need something more custom? Tell us more</h3>
        </div>
        {secondRowData.map(newServiceCard)}
      </div>
    </div>
  );
};

export default ServiceSection;
