import React, { useContext } from "react";
import { ServicesContext } from "../../context/servicesContext";
import "./serviceImgCol.css";
import stamp from "../../images/stamp_p.svg";
import beach from "../../images/vintage-beach-short.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceImgCol = () => {
  const { selectedServiceItem } = useContext(ServicesContext);
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
        <Link to="/contact">
          <FaArrowRight className="pricing-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceImgCol;
