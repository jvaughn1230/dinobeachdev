import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footerlinks-container">
                <Link to="about" className="footer-link">
                    About
                </Link>
                <Link to="/services" className="footer-link">
                    Services
                </Link>
                <Link to="/blog" className="footer-link">
                    Blog
                </Link>
                <Link to="contact" className="footer-link">
                    Contact
                </Link>
            </div>

            <div className="footer-script">
                <p className="dinobeach-text-line1">DinoBeach Dev</p>
                <p className="dinobeach-text-line2">&copy; 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
