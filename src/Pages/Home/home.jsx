

import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="section black">
        <div className="black-content">
          <div className="text">
          <h1>Transform Your Ride with Vinyl'ed</h1>
          <p>
    Revamp your vehicle with Vinyl'ed’s expert car wraps, premium paint protection films, and bespoke graphics. Since 2018, our Bangalore team has delivered standout style at our new Chelekere, Kalyannagar facility. Trust us to transform your car or bike with top-tier materials and unmatched craftsmanship.
  </p>
            <button className="action-btn">Get started</button>
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="green-top">
          <h1 className="service-title">Service</h1>
          <div className="image-row">
            <img src="Images/carpart1.svg" alt="Service 1" />
            <img src="Images/carpart2.svg" alt="Service 2" />
            <img src="Images/carpart3.svg" alt="Service 3" />
            <img src="Images/carpart4.svg" alt="Service 4" />
          </div>
        </div>

        <div className="green-bottom">
          <div className="green-bottom-left">
            <div className="left-content">
              <h2 className="left-title">About Us</h2>
              <p className="left-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum felis, sed ullamcorper tempus faucibus in imperdiet.
                Semper justo mauris sed fusce erat aenean tristique. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Elementum felis,
                sed ullamcorper tempus faucibus in imperdiet. Semper justo
                mauris sed fusce erat aenean tristique.
              </p>
              <div className="button-container">
                <button className="left-button">Know More</button>
              </div>
              <div className="left-image-container">
                <img
                  src="Images/carpart5.svg"
                  alt="Car Part"
                  className="left-image"
                />
              </div>
            </div>
          </div>

          <div className="green-bottom-right">
            <div className="right-content-centered">
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtext">
                Everything you need to know about Vinyled. Can’t find the answer
                you’re looking for?
              </p>
              <p className="faq-contact">
                Feel free to{" "}
                <a href="/contact" className="contact-link">
                  contact us
                </a>
              </p>

              <button className="faq-button">FAQ's</button>
            </div>
          </div>
        </div>

        <div className="section-container">
      {/* Left Column - Contact Form */}
      <div className="form-column">
        <div className="form-content">
          <h2 className="form-heading">Get in Touch</h2>

          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="tel" placeholder="Phone Number" className="form-input" />

          <select className="form-select">
            <option value="">How did you find us?</option>
            <option value="google">Google</option>
            <option value="friend">Friend</option>
            <option value="social_media">Social Media</option>
            <option value="ad">Advertisement</option>
            <option value="other">Other</option>
          </select>

          <button className="submit-btn">Submit</button>

          <div className="contact-details">
            <div className="contact-box">
              <p className="contact-label">&#9742; PHONE</p>
              <p className="contact-text">9999999999</p>
            </div>
            <div className="contact-box">
              <p className="contact-label">&#9993; EMAIL</p>
              <p className="contact-text">info@vinyled.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Location Info */}
      <div className="location-column">
        <div className="location-content" >
          <h2 className="location-heading" >Location</h2>

          <div className="location-box">
            <p className="location-item">📞<span>9999999999</span></p>
            <p className="location-item">📧<span>info@vinyled.in</span></p>
            <p className="location-item">📍<span>#609 AECS layout, Kundalahalli, Karnataka, India</span></p>
          </div>

          <div className="location-box">
            <p className="location-item">📞<span>9999999999</span></p>
            <p className="location-item">📧<span>info@vinyled.in</span></p>
            <p className="location-item">📍<span>#609 AECS layout, Kundalahalli, Karnataka, India</span></p>
          </div>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
};

export default HomePage;
