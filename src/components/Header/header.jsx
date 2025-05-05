import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="Images/vinyled.svg" alt="Vinyled Logo" className="logo-img" />
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
          <Link to="/" onClick={handleMenuItemClick}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleMenuItemClick}>
            OUR CLIENTS
          </Link>
        </li>
        <li className="dropdown">
          <a>
            VINYLED SERVICE <i class="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/ppf" onClick={handleMenuItemClick}>
                PPF
              </Link>
            </li>
            <li>
              <Link to="/ceramic" onClick={handleMenuItemClick}>
                CERAMIC
              </Link>
            </li>
            <li>
              <Link to="/color-change-wrap" onClick={handleMenuItemClick}>
                Colour Change Wrap
              </Link>
            </li>
            <li>
              <Link to="/custom-design" onClick={handleMenuItemClick}>
                CUSTOM DESIGNS
              </Link>
            </li>
            <li>
              <Link to="/customise" onClick={handleMenuItemClick}>
                CUSTOM PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/customise" onClick={handleMenuItemClick}>
                BRANDING
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a>
            CONTENT <i class="fa fa-caret-down"></i>
          </a>

          <ul className="dropdown-menu">
            <li>
              <Link to="/about" onClick={handleMenuItemClick}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={handleMenuItemClick}>
                OUR PROCESS
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact-us" onClick={handleMenuItemClick}>
            CONTACT US / LOCATION
          </Link>
        </li>
        <li className="shop-item">
          <Link
            to="/shop-products"
            className="shop-link"
            onClick={handleMenuItemClick}
          >
            SHOP PRODUCTS
          </Link>
        </li>
      </ul>

      <a href="#flag" className="flag-icon">
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
