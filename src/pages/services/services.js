import React, { useState } from "react";
import { serviceData } from "../../constants/serviceData";
import "./services.css";
import ServiceTitleCard from "../../components/serviceTitleCard/serviceTitleCard";
import ServiceDetailsCard from "../../components/serviceDetailsCard/serviceDetailsCard";
import ServiceImgCol from "../../components/serviceImgCol/serviceImgCol";
import surfboard from "../../images/ico-surfboardpink.svg";
import sun from "../../images/ico-sunpink.svg";
import { Link } from "react-router-dom";

const Services = () => {
    const [selectedService, setSelectedService] = useState(
        serviceData[0].title
    );

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
        <div className="">
            <div className="headerTag">
                <img
                    src={surfboard}
                    alt="dinobeach stamp"
                    className="stamp-left rocking hide-mobile"
                />
                <img
                    src={sun}
                    alt="dinobeach stamp"
                    className="stamp-right rotating hide-mobile"
                />
                <h1>
                    We like <span className="gradient-text">pretty</span>{" "}
                    websites that work
                    <span className="gradient-text"> fast</span>
                </h1>
                <p>
                    We like to have fun, but we don't compromise on quality.
                    We'll make sure your website runs smoothly and stands out
                    from your competitors
                </p>
            </div>
            <div className="servicesList">
                {serviceData.map((service) => (
                    <div key={service.id} className="serviceRow">
                        <div className="serviceDesc">
                            <h3 className="gradient-text">{service.title}</h3>
                            <p className="serviceDescMain">
                                {service.description}
                            </p>
                            <p className="serviceDescMain">
                                Timeline: {service.timeline}
                            </p>
                            <p className="serviceDescSub">
                                Perfect for:{" "}
                                {service.recs.map((item, idx) =>
                                    idx !== service.recs.length - 1 ? (
                                        <span key={item}>{item} &#10039; </span>
                                    ) : (
                                        <span key={item}>{item}</span>
                                    )
                                )}
                            </p>
                        </div>

                        {/* adapted from servicecard.js */}
                        <div className="serviceCardContainer">
                            <div className="servicePriceBubble gradient-bg">
                                <div className="servicePrice">
                                    <h4>{service.price}</h4>
                                </div>
                            </div>
                            <div className="serviceCardDescContainer">
                                <h2 className="serviceCardTitle">
                                    What You Get in This Package
                                </h2>
                                <ol>
                                    {service.details.map((detail) => (
                                        <li key={detail}>{detail}</li>
                                    ))}
                                </ol>
                            </div>
                            <Link to="/contact" className="serviceContactBtn">
                                Enquire
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
