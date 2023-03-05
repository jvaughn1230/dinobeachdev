import React, { useState } from "react";

import "./header.css";

import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import logo from "../../images/title-logo.svg";
import wavesMenu from "../../images/waves.svg";

const Header2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header-container">
      <img src={logo} alt="DinoBeach Log" className="header-logo" width="180" />

      <img
        src={wavesMenu}
        alt="waves-menu"
        className="waves-menu"
        onClick={() => setToggleMenu(true)}
      />

      <div className={`${toggleMenu ? "mobileMenuOpen" : "mobileMenuClosed"}`}>
        <AiOutlineCloseCircle
          className={`${toggleMenu ? "closeIconActive" : "closeIcon"}`}
          size={70}
          color="red"
          onClick={() => setToggleMenu(false)}
        />

        <div className="links-container title-text">
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
    </header>
  );
};

export default Header2;
