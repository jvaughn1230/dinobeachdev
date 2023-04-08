import React from "react";

import ServiceCard from "../serviceCard/serviceCard";

import "./serviceSection.css";

const serviceData = [
  {
    packageName: "Day at Dino Beach",
    title: "Single landing page",
    description:
      "Everything your customers need to know on a single page, straight to the point",
    useCase: "Perfect for: product ads, restaurants ",
  },
  {
    packageName: "Weekend Getaway",
    title: "Multi-page Brochure Site",
    description: "Some text describing it goes here",
    useCase: "Perfect for: small businesses",
  },
  {
    packageName: "Dinofluencer",
    title: "Blogging Platform",
    description: "Some text describing it goes here",
    useCase: "Perfect for: fashion, food, lifestyle blogs, podcast site",
  },
  {
    packageName: "Dinoland",
    title: "E-Commerce Site",
    description: "Some text describing it goes here",
    useCase: "Perfect for: small and large online stores",
  },
];

const ServiceSection = () => {
  return (
    <div className="servicesection-container">
      <div>
        <h3 className="servicessection__header">services</h3>
        <h2 className="services-text ">
          we like to create <span className="gradient-text">pretty</span>{" "}
          websites that work <span className="gradient-text">fast</span>
        </h2>
      </div>
      <div className="servicecards-container">
        <ServiceCard />
        <ServiceCard />
        <div className="services-side-text ">
          <h3>Need something more custom? Tell us more</h3>
        </div>
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServiceSection;
