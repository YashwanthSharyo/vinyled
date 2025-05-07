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
                      Clean the car with soap and isopropyl alcohol to prepare
                      for custom vinyl graphics.
                    </li>
                    <li>
                      Design and cut high-quality vinyl (e.g., 3M or Avery
                      Dennison) with your logo or branding, allowing 2–3 inch
                      overlap.
                    </li>
                    <li>
                      Apply vinyl graphics using a squeegee, ensuring precise
                      alignment on panels, with heat for curves.
                    </li>
                    <li>
                      Trim excess vinyl and tuck edges into seams for a
                      professional, seamless look.
                    </li>
                    <li>
                      Heat lightly (around 200°F) to set the adhesive, ensuring
                      durability and vibrancy.
                    </li>
                  </ul>
                  <h3 className="section-subtitle">
                    Tips for Stunning Car Branding
                  </h3>
                  <ul className="process-list">
                    <li>
                      Start with flat areas like doors or hoods for easier
                      graphic placement.
                    </li>
                    <li>
                      Collaborate with our designers to create bold,
                      eye-catching logos.
                    </li>
                    <li>
                      Use a partner to align large vinyl decals accurately.
                    </li>
                    <li>
                      Fix bubbles by lifting vinyl and reapplying with heat.
                    </li>
                  </ul>
                  <p className="highlight-text">Why Choose Car Branding?</p>
                  <p className="description">
                    Car branding transforms your vehicle into a mobile
                    billboard, boosting visibility while protecting the original
                    paint. Custom vinyl wraps (matte, gloss, or metallic) last
                    5–7 years and cost $500–$2,000. DIY for a creative project
                    or let our pros deliver a flawless finish—contact us today!
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
                      Wash and degrease the bike with soap and isopropyl alcohol
                      for perfect graphic adhesion.
                    </li>
                    <li>
                      Design and cut vinyl with 1–2 inch overlap, featuring your
                      logo or custom graphics.
                    </li>
                    <li>
                      Apply vinyl to components like the tank or frame, using
                      heat and a small squeegee for curves.
                    </li>
                    <li>
                      Trim carefully with a scalpel and tuck edges for a
                      polished, professional appearance.
                    </li>
                    <li>
                      Reheat lightly to set the adhesive, ensuring long-lasting
                      branding.
                    </li>
                  </ul>
                  <h3 className="section-subtitle">
                    Tips for Bold Bike Branding
                  </h3>
                  <ul className="process-list">
                    <li>
                      Begin with the fuel tank or fairings for easier
                      application.
                    </li>
                    <li>
                      Work with our team to design standout graphics that
                      reflect your brand.
                    </li>
                    <li>
                      Use heat generously to mold vinyl over curved surfaces.
                    </li>
                    <li>Practice on scrap parts to perfect your technique.</li>
                  </ul>
                  <p className="highlight-text">Why Choose Bike Branding?</p>
                  <p className="description">
                    Bike branding turns your motorcycle into a dynamic marketing
                    tool, offering bold visibility and paint protection. With
                    custom designs for $100–$500, wraps are removable and
                    durable. Try our DIY tips or contact us for a tailored
                    branding package that makes your bike unforgettable.
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
