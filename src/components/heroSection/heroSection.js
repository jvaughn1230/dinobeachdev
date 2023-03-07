import React from "react";
import "./heroSection.css";

import beachBackground from "../../images/vintage-beach-short.jpg";
import stamp from "../../images/stamp_p.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-txt-container">
        <h1 className="hero-header title-text gradient-text">
          creating fun digital experiences
        </h1>
        <div className="hero-subtext content-text">
          <p>
            we're a web development team specializing in fast, unique websites
          </p>
        </div>

        <button className="hero-button content-text">find out how</button>
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
