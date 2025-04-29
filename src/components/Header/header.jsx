import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a list item is clicked
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="Images/vinyled.svg" alt="Vinyled Logo" className="logo-img" />
      </Link>

      {/* Menu checkbox to control the open/close state */}
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
          <Link to="/" onClick={handleMenuItemClick}>HOME</Link>
        </li>
        <li className="dropdown">
          <a href="#service" >
            SERVICE<span className="icon">˅</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/enhance" onClick={handleMenuItemClick}>ENHANCE</Link>
            </li>
            <li>
              <Link to="/protect" onClick={handleMenuItemClick}>PROTECT</Link>
            </li>
            <li>
              <Link to="/maintain" onClick={handleMenuItemClick}>MAINTAIN</Link>
            </li>
            <li>
              <Link to="/customise" onClick={handleMenuItemClick}>CUSTOMISE</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#about" >
            ABOUT US<span className="icon">˅</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about" onClick={handleMenuItemClick}>About Vinyled</Link>
            </li>
            <li>
              <Link to="/team" onClick={handleMenuItemClick}>The Team</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact-us" onClick={handleMenuItemClick}>CONTACT US</Link>
        </li>
        <li className="shop-item">
          <Link to="/shop-products" className="shop-link" onClick={handleMenuItemClick}>
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
