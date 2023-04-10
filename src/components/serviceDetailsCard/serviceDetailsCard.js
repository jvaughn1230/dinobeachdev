import React from "react";
import "./serviceDetailsCard.css";
import { serviceData } from "../../constants/serviceData";

const ServiceDetailsCard = ({ selectedService }) => {
  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );

  const newServiceDetail = (serviceDetail) => <p>{serviceDetail}</p>;

  return (
    <div className="serviceDetails__container">
      {selectedServiceItem.details.map(newServiceDetail)}
    </div>
  );
};

export default ServiceDetailsCard;
