import React from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";

import beachBackground from "../../images/vintage-beach-short.jpg";
import stamp from "../../images/stamp-2-var.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-txt-container">
        <h1 className="hero-header gradient-text">
          creating fun digital experiences
        </h1>
        <div className="hero-subtext">
          <p>
            we're a web development team specializing in fast, unique websites
          </p>
        </div>

        {/* <Link to="/services" className="hero-button">
          find out how
        </Link> */}
      </div>

      {/* Images */}
      <img src={beachBackground} alt="beach" className="hero-img hide-mobile" />
      <img
        src={stamp}
        alt="dinobeach stamp"
        className="hero-stamp rotating hide-mobile"
      />
    </div>
  );
};

export default HeroSection;
