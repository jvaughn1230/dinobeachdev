import React from "react";
import "./serviceTitleCard.css";

const ServiceTitleCard = ({
  service,
  selectedService,
  changeSelectedService,
  serviceData,
}) => {
  return (
    <div className="serviceTitleCard">
      <h2
        className={
          selectedService === service.title ? "activeTitle" : "inactiveTitle"
        }
        onClick={() => changeSelectedService(service.title)}
      >
        {service.title}
      </h2>
    </div>
  );
};

export default ServiceTitleCard;
