import React, { useState } from "react";

import "./header.css";

import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import logo from "../../images/title-logo.svg";
import wavesMenu from "../../images/waves.svg";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <head className="header-container">
      <img src={logo} alt="DinoBeach Log" className="header-logo" width="180" />
      <img
        src={wavesMenu}
        alt="waves menu"
        className="waves-menu"
        onClick={() => setToggleMenu(true)}
      />

      {/* Desktop Links Container */}
      <div className="desktop-links-container title-text">
        <Link to="/about" className="link-item">
          About
        </Link>
        <Link to={"/contact"} className="link-item">
          Contact
        </Link>
        <Link to="/services" className="link-item">
          Services
        </Link>
        <Link to="/blog" className="link-item">
          Blog
        </Link>
      </div>

      {/* Mobile Links Container */}
      <div className={`${toggleMenu ? "openMobileMenu" : "closeMobileMenu"}`}>
        <div className="nav-flex-container">
          <AiOutlineCloseCircle
            className={`${toggleMenu ? "showCloseIcon" : "hideCloseIcon"}`}
            size={70}
            color="white"
            onClick={() => setToggleMenu(false)}
          />

          <Link to="/about" className="link-item">
            About
          </Link>
          <Link to={"/contact"} className="link-item">
            Contact
          </Link>
          <Link to="/services" className="link-item">
            Services
          </Link>
          <Link to="/blog" className="link-item">
            Blog
          </Link>
        </div>
      </div>
    </head>
  );
};

export default Header;

// {/* <header className="header-container">
//

//

//       {/* Mobile Container */}

//       </div>
//       </div>
//     </header> */}
