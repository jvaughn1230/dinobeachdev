import React, { useContext } from "react";
import { ServicesContext } from "../../context/servicesContext";

import "./serviceDetailsCard.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceDetailsCard = () => {
  const { selectedServiceItem } = useContext(ServicesContext);
  console.log(selectedServiceItem.price);

  const newServiceDetail = (serviceDetail, idx) => (
    <p key={idx}>{serviceDetail}</p>
  );

  return (
    <div className="serviceDetails__container">
      {selectedServiceItem.details.map(newServiceDetail)}
      <div className="pricingContainer__tablet">
        <span>
          <h4>Pricing Starts at </h4>
          <h5>{selectedServiceItem.price} USD</h5>
        </span>
        <Link to="/contact" className="arrowcontainer__tablet">
          <FaArrowRight className="pricingArrow__tablet" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
