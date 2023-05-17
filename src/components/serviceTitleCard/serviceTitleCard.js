import React, { useContext } from "react";
import { ServicesContext } from "../../context/servicesContext";
import "./serviceTitleCard.css";
import { FaArrowRight } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ServiceTitleCard = (service) => {
  const { selectedService, selectedServiceItem, setSelectedService } =
    useContext(ServicesContext);

  const newDetail = (detail, idx) => <p key={idx}>{detail}</p>;

  return (
    <div className="serviceTitleCard">
      <div className="mobile-title">
        <h2
          className={
            selectedService === service.title ? "activeTitle" : "inactiveTitle"
          }
          onClick={() => setSelectedService(service.title)}
        >
          {service.title}
        </h2>
        <VscTriangleRight
          className={`${
            selectedService === service.title
              ? "activeToggle"
              : "inactiveToggle"
          }`}
          size="24px"
          onClick={() => setSelectedService(service.title)}
        />
      </div>

      <div
        className={`${
          selectedService === service.title
            ? "showMobileDetails"
            : "hideMobileDetails"
        }`}
      >
        <div className="mobile-details">
          {selectedServiceItem.details.map(newDetail)}
        </div>

        <div className="pricingContainer__mobile">
          <p>Pricing starts at {selectedServiceItem.price} USD</p>
          <Link to="/contact" className="arrowcontainer-mobile">
            <FaArrowRight className="pricing-arrow__mobile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTitleCard;
