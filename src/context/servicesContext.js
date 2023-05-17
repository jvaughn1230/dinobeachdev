import React, { useState } from "react";
import { serviceData } from "../constants/serviceData";

const ServicesContext = React.createContext();

function ServicesContextProvider(props) {
  const [selectedService, setSelectedService] = useState("Weekend Getaway");

  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );

  return (
    <ServicesContext.Provider
      value={{ selectedService, setSelectedService, selectedServiceItem }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
}

export { ServicesContextProvider, ServicesContext };
