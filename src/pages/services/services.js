import React, { useState } from "react";
import { serviceData } from "../../constants/serviceData";
import "./services.css";
import ServiceTitleCard from "../../components/serviceTitleCard/serviceTitleCard";
import ServiceDetailsCard from "../../components/serviceDetailsCard/serviceDetailsCard";
import ServiceImgCol from "../../components/serviceImgCol/serviceImgCol";

const Services = () => {
  const [selectedService, setSelectedService] = useState(serviceData[0].title);

  const changeSelectedService = (serviceName) => {
    setSelectedService(serviceName);
  };

  const newServiceTitleCard = (service) => {
    return (
      <ServiceTitleCard
        key={service.id}
        title={service.title}
        service={service}
        selectedService={selectedService}
        changeSelectedService={changeSelectedService}
        serviceData={serviceData}
      />
    );
  };

  return (
    <div className=" servicespg">
      <div className="servicespg__titlecard-container">
        {serviceData.map(newServiceTitleCard)}
      </div>

      <div className="servicespg-col">
        <ServiceDetailsCard selectedService={selectedService} />
      </div>
      <div className="servicespg-col">
        <ServiceImgCol
          selectedService={selectedService}
          serviceData={serviceData}
        />
      </div>
    </div>
  );
};

export default Services;
