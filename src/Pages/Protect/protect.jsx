
import React, { useState } from "react";
import "./protect.css";

import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function Protect() {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleTabMouseEnter = (tabNumber) => {
    setHoveredTab(tabNumber);
  };

  const handleTabMouseLeave = (tabNumber) => {
    setHoveredTab(null);
  };

  const tabs = ["PPF", "Same Colour Wrap", "Colour PPF", "Icon Rock Clear"];

  const galleryData = {
    1: {
      images: [
        {
          src: "./Images/ppf_1.JPG",
          alt: "Full color change wrap on car",
        },
        {
          src: "./Images/ppf_2.JPG",
          alt: "Car wrap in progress",
        },
        {
          src: "./Images/ppf_3.JPG",
          alt: "Vinyl car wrap application",
        },
        {
          src: "./Images/ppf_4.JPG",
          alt: "Sporty blue color racing wrap design",
        },
        {
          src: "./Images/ppf_5.JPG",
          alt: "Full color change wrap on car",
        },
        {
          src: "./Images/ppf_6.JPG",
          alt: "Car wrap in progress",
        },
      ],
    },
 2: {
      images: [
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "Same colour wrap on car bonnet",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2470779147/display_1500/stock-photo-worker-hands-installation-on-luxury-car-headlights-tpu-premium-ppf-film-ppf-cutting-software-2470779147.jpg",
          alt: "Same colour wrap on car headlights",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/zHnHNwh8.webp",
          alt: "Same colour wrap on bike tank",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367802613/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-ppf-applied-on-the-hood-2367802613.jpg",
          alt: "Same colour wrap application on car bonnet",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Same colour wrap on bike fairings",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800293/display_1500/stock-photo-dubai-united-arab-emirates-september-th-vinyl-wrap-applied-on-the-side-panel-of-a-2367800293.jpg",
          alt: "Same colour wrap on car side panel",
        },
      ],
    },
    3: {
      images: [
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "Colour PPF on car bonnet",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2470779147/display_1500/stock-photo-worker-hands-installation-on-luxury-car-headlights-tpu-premium-ppf-film-ppf-cutting-software-2470779147.jpg",
          alt: "Colour PPF on car headlights",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/zHnHNwh8.webp",
          alt: "Colour PPF on bike tank",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367802613/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-ppf-applied-on-the-hood-2367802613.jpg",
          alt: "Colour PPF application on car bonnet",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Colour PPF on bike fairings",
        },
         {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Colour PPF on bike fairings",
        },
      ],
    },
    4: {
      images: [
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "Icon Rock Clear PPF on car bonnet",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2470779147/display_1500/stock-photo-worker-hands-installation-on-luxury-car-headlights-tpu-premium-ppf-film-ppf-cutting-software-2470779147.jpg",
          alt: "Icon Rock Clear PPF on car headlights",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/zHnHNwh8.webp",
          alt: "Icon Rock Clear PPF on bike tank",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367802613/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-ppf-applied-on-the-hood-2367802613.jpg",
          alt: "Icon Rock Clear PPF application on car bonnet",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Icon Rock Clear PPF on bike fairings",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Icon Rock Clear PPF on bike fairings",
        },
      ],
    },
  };

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Service
        title="PROTECT"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs}
        
      />

      <div className="protect-wrap-container">
        {tabs.map((_, index) => {
          const tab = index + 1; // Map index to 1-based tab number
          return (
            <div
              key={tab}
              className={`protect-content-tab ${
                activeTab === tab ? "active" : ""
              }`}
              role="tabpanel"
              aria-hidden={activeTab !== tab}
            >
              {/* Image Section */}
              <div className="protect-content-image">
                <img
                  src={
                    tab === 1
                      ? "./Images/protect_1.jpg"
                      : tab === 2
                      ? "./Images/protect_2.JPG"
                      : tab === 3
                      ? "./Images/protect_3.JPG"
                      : "./Images/protect_4.JPG"
                  }
                  alt={
                    tab === 1
                      ? "Car PPF Application"
                      : tab === 2
                      ? "Same Colour Wrap Application"
                      : tab === 3
                      ? "Colour PPF Application"
                      : "Icon Rock Clear PPF Application"
                  }
                  className="protect-image"
                />
              </div>

              {/* Text Section */}
              <div className="protect-content-text">
                {tab === 1 ? (
                  <>
                    <h2 className="protect-title">PPF</h2>
                    <h3 className="protect-subtitle">Paint Protection Film</h3>
                    <p className="protect-text">
                      Paint Protection Film (PPF) is a transparent, durable layer that safeguards your vehicle’s paint from damage while preserving its original finish.
                    </p>

                    <h3 className="protect-subtitle">PPF Application Process</h3>
                    <ul className="protect-list">
                      <li>Clean the vehicle with soap and isopropyl alcohol for optimal adhesion.</li>
                      <li>Cut high-quality PPF (e.g., XPEL or 3M) to fit panels using precision templates.</li>
                      <li>Apply the film with a squeegee, smoothing bubbles and aligning edges.</li>
                      <li>Seal edges with heat for a durable, seamless bond.</li>
                      <li>Inspect the vehicle to ensure a flawless, self-healing finish.</li>
                    </ul>

                    <h3 className="protect-subtitle">Benefits of PPF</h3>
                    <ul className="protect-list">
                      <li>Protects against scratches, stone chips, bug splatter, and UV damage.</li>
                      <li>Self-healing technology repairs minor scratches with heat.</li>
                      <li>Preserves resale value by protecting the original paint.</li>
                      <li>Invisible finish maintains the vehicle’s natural shine.</li>
                      <li>Long-lasting durability with warranties up to 7–10 years.</li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>Full vehicle coverage for comprehensive protection.</li>
                      <li>High-impact zones like bonnet, front bumper, tank, or fairings.</li>
                      <li>Side panels and mirrors to guard against road debris.</li>
                      <li>Interior accents like glossy trim for added durability.</li>
                      <li>Installed in a controlled, clean facility for precision.</li>
                    </ul>

                    <h3 className="protect-subtitle">Tips for Maintaining PPF</h3>
                    <ul className="protect-list">
                      <li>Wash regularly with mild soap to keep the film clean and effective.</li>
                      <li>Avoid abrasive cleaners or brushes that could damage the film.</li>
                      <li>Apply heat (e.g., warm water) to activate self-healing for minor scratches.</li>
                    </ul>

                    <p className="protect-text">
                      Contact us to protect your vehicle with a custom PPF solution!
                    </p>
                  </>
                ) : tab === 2 ? (
                  <>
                    <h2 className="protect-title">Same Colour Wrap</h2>
                    <h3 className="protect-subtitle">OEM-Style Vinyl Wrapping</h3>
                    <p className="protect-text">
                      Same colour wraps give your vehicle a refreshed, factory-finish appearance while protecting the original paint. Ideal for those looking to restore or modernize without changing the original colour.
                    </p>

                    <h3 className="protect-subtitle">Same Colour Wrap Application Process</h3>
                    <ul className="protect-list">
                      <li>Clean and decontaminate the vehicle surface thoroughly.</li>
                      <li>Remove or loosen panels and trims for seamless wrap application.</li>
                      <li>Apply premium vinyl wrap material matching your original paint shade.</li>
                      <li>Smooth out surfaces with heat guns and squeegees to ensure a paint-like finish.</li>
                      <li>Post-heat and finish edges to ensure durability and a flawless look.</li>
                    </ul>

                    <h3 className="protect-subtitle">Benefits of Same Colour Wrap</h3>
                    <ul className="protect-list">
                      <li>Maintains your vehicle’s original look while protecting the paint underneath.</li>
                      <li>Easily removable with no damage to OEM paintwork.</li>
                      <li>Acts as a barrier against minor scratches, UV rays, and contaminants.</li>
                      <li>Cost-effective solution compared to a full respray.</li>
                      <li>Quick turnaround with minimal downtime.</li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>Full exterior for a complete factory-style finish.</li>
                      <li>Select panels like bonnets, roofs, or bumpers to restore worn areas.</li>
                      <li>Ideal for leased vehicles or restoring resale value.</li>
                      <li>Suitable for both matte and gloss finish options.</li>
                      <li>Applied with precision in a controlled studio environment.</li>
                    </ul>

                    <h3 className="protect-subtitle">Tips for Maintaining a Vinyl Wrap</h3>
                    <ul className="protect-list">
                      <li>Hand wash regularly using mild soap—avoid high-pressure jets at edges.</li>
                      <li>Use wrap-safe detailing sprays to maintain sheen and finish.</li>
                      <li>Park in shade or use a car cover to prolong vinyl life.</li>
                    </ul>

                    <p className="protect-text">
                      Reach out today to restore and protect your vehicle with a factory-fresh same colour wrap!
                    </p>
                  </>
                ) : tab === 3 ? (
                  <>
                    <h2 className="protect-title">Colour PPF</h2>
                    <h3 className="protect-subtitle">What is Colour PPF?</h3>
                    <p className="protect-text">
                      Colour Paint Protection Film (PPF) provides the dual benefit of restyling your vehicle with vibrant finishes while offering superior protection against scratches, chips, and UV damage. It's a bold way to personalize and preserve.
                    </p>

                    <h3 className="protect-subtitle">Colour PPF Application Process</h3>
                    <ul className="protect-list">
                      <li>Begin with a thorough wash and surface decontamination of the vehicle.</li>
                      <li>Remove key trims and panels for seamless film integration.</li>
                      <li>Precisely apply premium colour PPF, ensuring a bubble-free, paint-like finish.</li>
                      <li>Use heat and pressure to conform the film to the body contours.</li>
                      <li>Post-application inspection to ensure flawless, long-lasting results.</li>
                    </ul>

                    <h3 className="protect-subtitle">Benefits of Colour PPF</h3>
                    <ul className="protect-list">
                      <li>Combines paint protection and a custom look in one solution.</li>
                      <li>Self-healing surface that eliminates light scratches with heat.</li>
                      <li>Resistant to yellowing, UV rays, stone chips, and environmental contaminants.</li>
                      <li>Removable without damage to the original paint.</li>
                      <li>Available in gloss, matte, satin, or metallic finishes for standout style.</li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>Full-body wraps for a complete color transformation and protection.</li>
                      <li>Accent panels such as roofs, mirrors, or bonnets for unique styling.</li>
                      <li>High-impact zones to preserve against chips and road debris.</li>
                      <li>Ideal for luxury, sports, and performance vehicles.</li>
                      <li>Applied in a temperature-controlled dust-free studio for best results.</li>
                    </ul>

                    <h3 className="protect-subtitle">Tips for Maintaining Colour PPF</h3>
                    <ul className="protect-list">
                      <li>Hand wash with PPF-safe pH-balanced car shampoo.</li>
                      <li>Avoid harsh chemicals or abrasive tools to maintain clarity and finish.</li>
                      <li>Use a microfibre drying towel and avoid automated car washes.</li>
                    </ul>

                    <p className="protect-text">
                      Contact us to transform and protect your vehicle with vibrant Colour PPF technology!
                    </p>
                  </>
                ) : tab === 4 ? (
                  <>
                    <h2 className="protect-title">Icon Rock Clear</h2>
                    <h3 className="protect-subtitle">What is Icon Rock Clear?</h3>
                    <p className="protect-text">
                      Icon Rock Clear is a premium, ultra-clear paint protection film (PPF) designed to shield your vehicle’s paint with exceptional clarity and durability while maintaining its original showroom-like finish.
                    </p>

                    <h3 className="protect-subtitle">Icon Rock Clear Application Process</h3>
                    <ul className="protect-list">
                      <li>Thoroughly wash and decontaminate the vehicle to ensure a pristine surface.</li>
                      <li>Lightly polish the paint to remove minor blemishes for optimal film adhesion.</li>
                      <li>Apply high-quality Icon Rock Clear PPF with precision for a seamless fit.</li>
                      <li>Heat and mould the film to contours, ensuring a crystal-clear, invisible finish.</li>
                      <li>Final inspection to confirm a flawless, protected, showroom-like appearance.</li>
                    </ul>

                    <h3 className="protect-subtitle">Benefits of Icon Rock Clear</h3>
                    <ul className="protect-list">
                      <li>Superior protection against scratches, stone chips, and UV damage.</li>
                      <li>Advanced self-healing technology repairs minor scratches with heat.</li>
                      <li>Ultra-clear finish preserves the vehicle’s original paint with no visible film.</li>
                      <li>Long-lasting durability for 7–10 years, enhancing resale value.</li>
                      <li>Resistant to yellowing and environmental contaminants for lasting clarity.</li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>Full exterior coverage for comprehensive protection.</li>
                      <li>High-impact areas like bonnet, front bumper, or side panels for targeted shielding.</li>
                      <li>Wheels and mirrors to guard against road debris and brake dust.</li>
                      <li>Interior glossy trim to enhance durability and aesthetics.</li>
                      <li>Applied in a dust-free, controlled studio for precision and quality.</li>
                    </ul>

                    <h3 className="protect-subtitle">Tips for Maintaining Icon Rock Clear</h3>
                    <ul className="protect-list">
                      <li>Wash with pH-neutral soap and a soft sponge to avoid scratching the film.</li>
                      <li>Use microfibre cloths for drying to maintain the film’s clarity.</li>
                      <li>Apply heat (e.g., warm water) to activate self-healing for minor scratches.</li>
                    </ul>

                    <p className="protect-text">
                      Contact us to safeguard your vehicle with premium Icon Rock Clear PPF!
                    </p>
                  </>
                ) : null}
              </div>

              {/* Gallery Section */}
              {(tab === 1 || tab === 2 || tab === 3 || tab === 4) && (
                <Gallery
                  images={galleryData[tab].images}
                  largeImage={galleryData[tab].largeImage}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
