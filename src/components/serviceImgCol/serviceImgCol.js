import React from "react";
import "./serviceImgCol.css";
import stamp from "../../images/stamp_p.svg";
import beach from "../../images/vintage-beach-short.jpg";
import { FaArrowRight } from "react-icons/fa";

// Need to position stamp once sizing is finalized for columns.
//Want to create a page container before doing this so that all pages are aligned correctly

const ServiceImgCol = ({ selectedService, serviceData }) => {
  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );

  return (
    <div className="servicespg__col3">
      <img src={beach} alt="beach" className="pricingpg__beachImg" />
      <img
        src={stamp}
        alt="dinobeach stamp"
        className="rotating pricingpg__stamp"
      />
      <div>
        <h4>Pricing Starts at</h4>
      </div>
      <div className="pricing-row2">
        <h5>{selectedServiceItem.price} USD</h5>

        <FaArrowRight className="pricing-arrow" />
      </div>
    </div>
  );
};

export default ServiceImgCol;
