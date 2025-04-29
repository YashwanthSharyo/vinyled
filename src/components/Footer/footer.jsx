import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="left-column">
            <img
              className="logo"
              src="Images/vinyled.svg"
              alt="Company Logo"
            />

            <div className="social-icons">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Images/youtube.svg" alt="YouTube" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Images/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Images/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Images/twitter.svg" alt="Instagram" />
              </a>
            </div>

            <div className="signup-section">
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
              />
              <button className="button" >Sign Up</button>
            </div>
          </div>

          <div className="right-column">
            <p className="title">Service</p>
            <a href="#" className="link">Service</a>
            <a href="#" className="link">Services</a>
            <a href="#" className="link">Service</a>
          </div>

          <div className="right-column">
            <p className="title">Home</p>
            <a href="#" className="link">Service</a>
            <a href="#" className="link">About Us</a>
            <a href="#" className="link">Contact</a>
          </div>

          <div className="right-column">
            <p className="title">Company</p>
            <a href="#" className="link">Terms of Service</a>
            <a href="#" className="link">About Us</a>
          </div>
        </div>

        <div className="footer-divider" />
        <p className="footer-copy">© 2025 Vinyled All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;