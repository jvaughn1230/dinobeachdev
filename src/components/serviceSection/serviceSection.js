import { Link } from "react-router-dom";
import ServiceCard from "../serviceCard/serviceCard";
import {serviceData} from "../../constants/serviceData";
import "./serviceSection.css";

const ServiceSection = () => {
  const firstRowData = serviceData.slice(0, 2);
  const secondRowData = serviceData.slice(2, 4);

  const newServiceCard = (service) => {
    return (
      <ServiceCard
        key={service.id}
        title={service.title}
        longTitle={service.longTitle}
        description={service.description}
        details={service.details}
        recs={service.recs}
      />
    );
  };

  return (
    <div className="servicesection-container">
      <h2 className="services-text">Services</h2>
      <h3 className="servicessection__header-text">
        we like to create <span className="gradient-text">pretty</span> websites
        that work <span className="gradient-text">fast</span>
      </h3>
      <div className="servicecards-container">
        {firstRowData.map(newServiceCard)}

        <Link to="/services" className="services-link">
          <div className="services-side-text gradient-bg">
            <h3>Need something more custom? Tell us more</h3>
          </div>
        </Link>

        {secondRowData.map(newServiceCard)}
      </div>
    </div>
  );
};

export default ServiceSection;
