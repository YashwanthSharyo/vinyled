import React from "react";
import "./Footer.css";
import WhatsApp from "../WhatsApp/whatsApp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // Get navigate function from useNavigate hook

  const handleServiceClick = (path) => {
    // Navigate to the path and replace the current history entry
    navigate(path, { replace: true });
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <WhatsApp />
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick("https://www.youtube.com");
                  }}
                >
                  <img src="Images/youtube.svg" alt="YouTube" />
                </a>
                <a
                  href="https://www.facebook.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick("https://www.facebook.com");
                  }}
                >
                  <img src="Images/facebook.svg" alt="Facebook" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick("https://www.linkedin.com");
                  }}
                >
                  <img src="Images/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick("https://www.instagram.com");
                  }}
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
                <button className="button">Sign Up</button>
              </div>
            </div>
            <div className="right-column">
              <p className="title">Quick Links</p>
              <div className="link" onClick={() => handleServiceClick("/")}>
                Home
              </div>
              <div className="link" onClick={() => handleServiceClick("/about")}>
                About Us
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/color-change-wrap")}
              >
                Our Process
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/custom-design")}
              >
                Contact Us
              </div>
              <div className="link">Privacy and Policy</div>

            </div>
            <div className="right-column">
              <p className="title">VinyLed Service</p>
              <div className="link" onClick={() => handleServiceClick("/ppf")}>
                PPF
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/ceramic")}
              >
                Ceramic / Graphene Coating
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/color-change-wrap")}
              >
                Colour Change Wrap
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/custom-design")}
              >
                CUSTOM DESIGNS
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/custom-project")}
              >
                CUSTOM PROJECTS
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/branding")}
              >
                BRANDING
              </div>
            </div>
            <div className="right-column">
              <p className="title">Have a Question?</p>
              <div className="link">
                88/6, Situated at Chelekere Village, Kalyannagar Post,
                <br />
                Bangalore East, Karnataka 560043,
                <br />
                Bengaluru, Karnataka 560084
              </div>
              <div className="link">Phone: 90664 31968</div>
              <div className="link">Email: info@vinyled.in</div>
            </div>
          </div>
          <div className="footer-divider" />
          <p className="footer-copy">© 2025 Vinyled All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;