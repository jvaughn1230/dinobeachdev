import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container title-text">
      <div className="footerlinks-container">
        <Link to="/services" className="footer-link">
          {" "}
          Services{" "}
        </Link>
        <Link to="/blog" className="footer-link">
          Blog
        </Link>
        <Link to="about" className="footer-link">
          About
        </Link>
        <Link to="contact" className="footer-link">
          Contact
        </Link>
      </div>

      <div className="footer-script">
        <p className="dinobeach-text-line1">dinobeach</p>
        <p className="dinobeach-text-line2">dev</p>
      </div>
    </footer>
  );
};

export default Footer;
