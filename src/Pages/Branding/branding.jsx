import React, { useState } from "react";
import "./branding.css";

import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function Branding() {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleTabMouseEnter = (tabId) => {
    setHoveredTab(tabId);
  };

  const handleTabMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Service
        title="BRANDING"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
      />

      <div className="color-change-container">
        {[1, 2].map((tab) => (
          <div
            key={tab}
            className={`tab-content ${activeTab === tab ? "active" : ""}`}
            role="tabpanel"
            aria-hidden={activeTab !== tab}
          >
            {/* Image Section */}
            <div className="image-section">
              <img
                src={
                  tab === 1
                    ? "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/2l7wg9L0DjUYOoZ0/image.jpg"
                    : "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/kZPGobLsGzjxKwpF/image.jpg"
                }
                alt={
                  tab === 1 ? "Car Color Change Wrap" : "Bike Color Change Wrap"
                }
                className="tab-image"
              />
            </div>

            {/* Text Section */}
            <div className="text-section">
              {tab === 1 ? (
                <>
                  <h2 className="section-title">
                    CAR: Custom Branding Solutions
                  </h2>
                  <h3 className="section-subtitle">
                    Elevate Your Brand on the Road
                  </h3>
                  <h4 className="process-title">Car Branding Process:</h4>
                  <ul className="process-list">
                    <li>
                      Collaborate to design custom graphics and logos that
                      reflect your brand.
                    </li>
                    <li>
                      Apply high-quality decals and graphics to targeted vehicle
                      areas.
                    </li>
                    <li>
                      Ensure precise installation for a professional,
                      eye-catching look.
                    </li>
                    <li>
                      Offer tailored design options to align with your marketing
                      goals.
                    </li>
                  </ul>
                  <p className="highlight-text">Why Choose Car Branding?</p>
                  <p className="description">
                    Car branding turns your vehicle into a mobile advertisement,
                    boosting brand visibility and recognition while offering a
                    cost-effective marketing solution.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="section-title">
                    BIKE: Custom Branding Solutions
                  </h2>
                  <h3 className="section-subtitle">
                    Showcase Your Brand with Style
                  </h3>
                  <h4 className="process-title">Bike Branding Process:</h4>
                  <ul className="process-list">
                    <li>
                      Design consultation to create graphics that match your
                      brand identity.
                    </li>
                    <li>
                      Apply premium decals and logos to key bike components.
                    </li>
                    <li>
                      Professional installation for a sleek, standout
                      appearance.
                    </li>
                    <li>
                      Customizable designs to enhance your brand’s unique
                      appeal.
                    </li>
                  </ul>
                  <p className="highlight-text">Why Choose Bike Branding?</p>
                  <p className="description">
                    Bike branding transforms your motorcycle into a dynamic
                    marketing platform, offering bold visibility and a
                    personalized look that captures attention wherever you ride.
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
