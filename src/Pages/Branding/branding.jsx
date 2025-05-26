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

  const tabs = ["Car"];

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
        tabs={tabs}
        tabWidth="300px"
      />

    <div className="Branding-wrap-container">
        <div
          className="Branding-content-tab active"
          role="tabpanel"
          aria-hidden={false}
        >
          {/* Image Section */}
          <div className="Branding-content-image">
            <img
              src="./Images/brandingBike.jpg"
              alt="Commercial Vehicle Branding"
              className="Branding-image"
            />
          </div>

          {/* Text Section */}
          <div className="Branding-content-text">
            <h2 className="Branding-title">Commercial Projects</h2>
            <h3 className="Branding-subtitle">Transform Your Business with Mobile Branding</h3>
            <h4 className="Branding-process-heading">Commercial Branding Process:</h4>
            <ul className="listing">
              <li>Thoroughly clean the vehicle with isopropyl alcohol to ensure a pristine surface for branding.</li>
              <li>Design custom vinyl graphics with your organisation’s logo and colours using premium materials (e.g., 3M, Avery Dennison).</li>
              <li>Apply vinyl with precision using squeegees and heat to conform to vehicle contours like bonnets or panels.</li>
              <li>Trim excess vinyl and tuck edges into seams for a seamless, professional finish.</li>
              <li>Lightly heat (around 200°F) to set the adhesive, ensuring long-lasting, vibrant branding.</li>
            </ul>
            <h3 className="Branding-subtitle">Tips for Effective Commercial Branding</h3>
            <ul className="listing">
              <li>Start with flat surfaces like doors or bonnets for easier graphic alignment.</li>
              <li>Collaborate with our designers to create bold, brand-consistent visuals.</li>
              <li>Use a partner to handle large vinyl sheets for accuracy on bigger vehicles.</li>
              <li>Inspect and reapply any bubbles using heat for a flawless look.</li>
            </ul>
            <p className="Branding-highlight">Why Choose Commercial Projects?</p>
            <p className="Branding-text">
              Commercial projects turn your vehicles into powerful mobile billboards, enhancing brand visibility across cars, bikes, vans, or fleets. Custom vinyl wraps offer durable, removable branding that protects original paint, lasting 5–7 years. Whether for a single vehicle or an entire fleet, our professional solutions deliver a showroom-like finish. Contact us to elevate your organisation’s presence on the road!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}