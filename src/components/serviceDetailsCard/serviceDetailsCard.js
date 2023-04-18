import React from "react";
import "./serviceDetailsCard.css";
import { serviceData } from "../../constants/serviceData";
import { FaArrowRight } from "react-icons/fa";

const ServiceDetailsCard = ({ selectedService }) => {
  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );

  const newServiceDetail = (serviceDetail, idx) => (
    <p key={idx}>{serviceDetail}</p>
  );

  return (
    <div className="serviceDetails__container">
      {selectedServiceItem.details.map(newServiceDetail)}
      <div className="pricingContainer__tablet">
        <span>
          <h4>Pricing Starts at</h4>
          <h5>Pricing Here USD</h5>
        </span>

        <FaArrowRight className="pricingArrow__tablet" />
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
