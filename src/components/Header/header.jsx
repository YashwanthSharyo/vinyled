import React, { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Get navigate function from useNavigate hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    navigate(path, { replace: true }); // Navigate and replace history entry
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <header className="header">
      <Link
        to="/"
        className="logo"
        onClick={() => handleMenuItemClick("/")}
      >
        <img src="Images/vinyled_logo.svg" alt="Vinyled Logo" className="logo-img" />
      </Link>

      <input
        type="checkbox"
        className="menu-btn"
        id="menu-btn"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="navicon"></span>
      </label>

      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => handleMenuItemClick("/")}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleMenuItemClick("/")}>
            OUR CLIENTS
          </Link>
        </li>
        <li className="dropdown">
          <a>
            VINYLED SERVICE <i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/ppf" onClick={() => handleMenuItemClick("/ppf")}>
                PPF
              </Link>
            </li>
            <li>
              <Link to="/ceramic" onClick={() => handleMenuItemClick("/ceramic")}>
                CERAMIC /  GRAPHENE COATING
              </Link>
            </li>
            <li>
              <Link
                to="/color-change-wrap"
                onClick={() => handleMenuItemClick("/color-change-wrap")}
              >
                COLOUR WRAP
              </Link>
            </li>
            <li>
              <Link
                to="/custom-design"
                onClick={() => handleMenuItemClick("/custom-design")}
              >
                CUSTOM DESIGNS
              </Link>
            </li>
            <li>
              <Link
                to="/custom-project"
                onClick={() => handleMenuItemClick("/custom-project")}
              >
                CUSTOM PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/branding"
                onClick={() => handleMenuItemClick("/branding")}
              >
                BRANDING
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a>
            CONTENT <i className="fa fa-caret-down"></i>
          </a>

          <ul className="dropdown-menu">
            <li>
              <Link to="/about" onClick={() => handleMenuItemClick("/about")}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => handleMenuItemClick("/team")}>
                OUR PROCESS
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/contact-us"
            onClick={() => handleMenuItemClick("/contact-us")}
          >
            CONTACT US / LOCATION
          </Link>
        </li>
      </ul>

      <a
        href="#flag"
        className="flag-icon"
        onClick={(e) => {
          e.preventDefault();
          handleMenuItemClick("/"); // Assuming flag click navigates to home
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
          alt="Indian Flag"
          className="flag-img"
        />
      </a>
    </header>
  );
};

export default Header;