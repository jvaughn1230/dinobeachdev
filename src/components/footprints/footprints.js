import React from "react";
import dinoFoot from "../../images/trex_footprint.svg";

import "./footprints.css";

const Footprints = () => {
  return (
    <div className="footprints-container">
      <img src={dinoFoot} alt="dino footprint" className="dinoprint print1" />
      <img src={dinoFoot} alt="dino footprint" className="dinoprint print2" />
      <img src={dinoFoot} alt="dino footprint" className="dinoprint print3" />
      <img src={dinoFoot} alt="dino footprint" className="dinoprint print4" />
      <img
        src={dinoFoot}
        alt="dino footprint"
        className="dinoprint print5 hide-mobile"
      />
      <img
        src={dinoFoot}
        alt="dino footprint"
        className="dinoprint print6 hide-mobile"
      />
      <img
        src={dinoFoot}
        alt="dino footprint"
        className="dinoprint print7 hide-mobile"
      />
      <img
        src={dinoFoot}
        alt="dino footprint"
        className="dinoprint print8 hide-mobile"
      />
      <img
        src={dinoFoot}
        alt="dino footprint"
        className="dinoprint print9 hide-mobile"
      />
      <img
        src={dinoFoot}
        alt="dino footprint"
        className="dinoprint print10 hide-mobile"
      />
    </div>
  );
};

export default Footprints;
