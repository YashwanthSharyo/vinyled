import React from "react";
import "./Footer.css";
import WhatsApp from "../WhatsApp/whatsApp";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Added to get current path

  const handleServiceClick = (path) => {
    navigate(path, { replace: true });
    window.scrollTo(0, 0);
  };

  // Handle logo click to scroll to top if on home page
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0); // Scroll to top if already on home page
    } else {
      navigate("/", { replace: true }); // Navigate to home if not on home page
      window.scrollTo(0, 0); // Scroll to top after navigation
    }
  };

  return (
    <div>
      <WhatsApp />
      <footer className="footer">
        <div className="container">
          <div className="grid">
            <div className="left-column">
              <Link to="/" onClick={handleLogoClick}>
                <img
                  className="logo"
                  src="Images/vinyled.svg"
                  alt="Company Logo"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <div className="social-icons">
                <a
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@vinyled7482",
                      "_blank"
                    )
                  }
                >
                  <img src="Images/youtube.svg" alt="YouTube" />
                </a>
                <a
                  onClick={() =>
                    window.open("https://www.facebook.com/vinyled", "_blank")
                  }
                >
                  <img src="Images/facebook.svg" alt="Facebook" />
                </a>
                <a
                  onClick={() =>
                    window.open(
                      "https://in.linkedin.com/in/vaibhav-vel-457a46133",
                      "_blank"
                              )
                  }
                >
                  <img src="Images/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/vinyled.in",
                      "_blank"
                    )
                  }
                >
                  <img src="Images/instagram.svg" alt="Instagram" />
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
              <div
                className="link"
                onClick={() => handleServiceClick("/about")}
              >
                About Us
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/our-process")}
              >
                Our Process
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("contact-us")}
              >
                Contact Us
              </div>
              <div className="link">Privacy and Policy</div>
            </div>

            <div className="right-column">
              <p className="title">VINYLE'D Services</p>
              <div
                className="link"
                onClick={() => handleServiceClick("/enhance")}
              >
                Enhance
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/personolization")}
              >
                Personalize
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/protect")}
              >
                Protect
              </div>
              <div
                className="link"
                onClick={() => handleServiceClick("/maintain")}
              >
                Maintain
              </div>
              
              {/* <div
                className="link"
                onClick={() => handleServiceClick("/custom-project")}
              >
                Custom Projects
              </div> */}
              <div
                className="link"
                onClick={() => handleServiceClick("/branding")}
              >
                Fleet Branding / Commercial Project
              </div>
            </div>

            <div className="right-column">
              <p className="title">Have a Question?</p>
              <div className="link">
                88/6, Situated at Chelekere Village, Kalyannagar Post, Bangalore East, Karnataka 560043
                <br />
              </div>
              <div className="link">
                {" "}
                <a href="tel:9066431968">Phone: 90664 31968</a>
              </div>
              <div className="link">
                <a href="mailto:info@vinyled.in">Email: info@vinyled.in</a>
              </div>
            </div>
          </div>
          <div className="footer-divider" />
          <p className="footer-copy">© 2025 VINYLE'D All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;