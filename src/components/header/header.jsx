import React, { useState } from "react";

import "./header.css";

import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import logo from "../../images/title-logo.svg";
import wavesMenu from "../../images/waves.svg";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="header-container">
            <Link to="/">
                <img src={logo} alt="DinoBeach Log" className="header-logo" />
            </Link>
            <img
                src={wavesMenu}
                alt="waves menu"
                className="waves-menu"
                onClick={() => setToggleMenu(true)}
                style={{ cursor: "pointer" }}
            />

            {/* Mobile Links Container */}
            <div
                className="openMobileMenu"
                style={{
                    width: toggleMenu ? "100vw" : "0px",
                    transition: "all 500ms ease",
                }}
            >
                <div
                    className="nav-flex-container"
                    style={{
                        display: toggleMenu ? "flex" : "none",
                    }}
                >
                    <div class="">
                        <AiOutlineCloseCircle
                            className={`menu-icon ${
                                toggleMenu ? "showCloseIcon" : "hideCloseIcon"
                            }`}
                            size={70}
                            onClick={() => setToggleMenu(false)}
                            style={{ cursor: "pointer" }}
                        />
                    </div>

                    <Link
                        to="/About"
                        className="link-item"
                        onClick={() => setToggleMenu(false)}
                    >
                        About
                    </Link>

                    <Link
                        to="/services"
                        className="link-item"
                        onClick={() => setToggleMenu(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/blog"
                        className="link-item"
                        onClick={() => setToggleMenu(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/contact"
                        className="link-item"
                        onClick={() => setToggleMenu(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Desktop Links Container */}
            <div className="desktop-links-container">
                <Link to="/about" className="link-item">
                    About
                </Link>

                <Link to="/services" className="link-item">
                    Services
                </Link>
                <Link to="/blog" className="link-item">
                    Blog
                </Link>
                <Link to="/contact" className="link-item">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;
