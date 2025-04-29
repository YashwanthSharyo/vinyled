import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img
          src="/Images/vinyled.svg"
          alt="Vinyled Logo"
          className="logo-img"
        />
      </Link>

      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li className="dropdown">
          <a href="#service">
            SERVICE<span className="icon">˅</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/enhance">ENHANCE</Link>
            </li>
            <li>
              <Link to="/protect">PROTECT</Link>
            </li>
            <li>
              <Link to="/maintain">MAINTAIN</Link>
            </li>
            <li>
              <Link to="/customise">CUSTOMISE</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#about">
            ABOUT US<span className="icon">˅</span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about">About Vinyled</Link>
            </li>
            <li>
              <Link to="/team">The Team</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact-us">CONTACT US</Link>
        </li>
        <li className="shop-item">
          <Link to="/shop-products" className="shop-link">
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