import React from "react";

import "./serviceCard.css";

const ServiceCard = (service) => {

  const serviceRecs = service.recs.map((item, idx)=>(idx !== service.recs.length-1 ? <span key={item}>{item} &#10039; </span> : <span key={item}>{item}</span>))

  return (
    <div className="service-card-container">
      <div className="service-bubble gradient-bg">
        <div className="servicecard-packagename">
          <h4>{service.title}</h4>
        </div>
      </div>
      <div className="servicecard-main-container">
        <h2 className="servicecard-title ">{service.longTitle}</h2>
        <p className="servicecard-description">{service.description}</p>
        {/* <h3 className="servicecard-use">{service.details}</h3> */}
        <h3 className="servicecard-use">Perfect for: {serviceRecs}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
