import React from "react";
import "./serviceTitleCard.css";
import { FaArrowRight } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ServiceTitleCard = ({
  service,
  selectedService,
  changeSelectedService,
  serviceData,
}) => {
  const newDetail = (detail, idx) => <p key={idx}>{detail}</p>;

  return (
    <div className="serviceTitleCard">
      <div className="mobile-title">
        <h2
          className={
            selectedService === service.title ? "activeTitle" : "inactiveTitle"
          }
          onClick={() => changeSelectedService(service.title)}
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
          onClick={() => changeSelectedService(service.title)}
        />
      </div>

      <div
        className={`${
          selectedService === service.title
            ? "showMobileDetails"
            : "hideMobileDetails"
        }`}
      >
        <div className="mobile-details">{service.details.map(newDetail)}</div>

        <div className="pricingContainer__mobile">
          <p>Pricing starts at {service.price} USD</p>
          <Link to="/contact" className="arrowcontainer-mobile">
            <FaArrowRight className="pricing-arrow__mobile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTitleCard;
