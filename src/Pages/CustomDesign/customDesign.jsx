import React, { useState } from "react";
import "./customDesign.css";
import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function CustomDesign() {
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

  const galleryData = {
    1: {
      images: [
        {
          src: "https://www.wrapstock.com/images/banner_square_1.jpg",
          alt: "Full color change wrap on car",
        },
        {
          src: "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/dvstZTctHDcBDWLu/image.jpg",
          alt: "Car wrap in progress",
        },
        {
          src: "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/oTCLvsVBIZtlvbYl/image.jpg",
          alt: "Vinyl car wrap application",
        },
        {
          src: "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/MvfYWMWUXldE50qq/image.jpg",
          alt: "Sporty blue color racing wrap design",
        },
      ],
      largeImage: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VSjwskuXjorAzQ7K-vSRau2qt17cg_Q8gw&s",
        alt: "High gloss car color wrap finish",
      },
    },

    2: {
      images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1FeZ4HLXRUmucKRrLDLpHoSMtZmxbCli4g&s",
          alt: "Motorcycle with custom wrap design 1",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl_0CXCf6jx5kBYTRDcKfewmxY17NPg4ekg&s",
          alt: "Sport bike wrapped with color graphics",
        },
        {
          src: "https://leifalvarssonart.com/cdn/shop/files/kawasaki_ninja_636-kawasaki-funhouse-zx6r-wrap-leif-alvarsson-art-Clown_Wrap.jpg",
          alt: "Custom clown-themed wrap on Kawasaki Ninja",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXqm9tprxCmyfbCOu0Qun6ZgPesX1LvVtyA&s",
          alt: "Motorbike with racing wrap",
        },
      ],
      largeImage: {
        src: "https://www.shutterstock.com/shutterstock/photos/1654567075/display_1500/stock-vector-motorcycle-wrap-decal-and-vinyl-sticker-design-vector-illustration-1654567075.jpg",
        alt: "Motorcycle wrap decal design illustration",
      },
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
        title="Custom Design"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
      />

      <div className="custom-design-container">
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
                    ? "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/P0cXcMhAE5ReAJY2/image.jpg"
                    : "https://www.acmegraphic.com/wp-content/uploads/2021/08/motorcycle-decal-wrap.jpg"
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
                    CAR: Custom Design Wrap Detail
                  </h2>
                  <h3 className="section-subtitle">
                    Exterior – Personalized Graphic Wrapping for Vehicles
                  </h3>
                  <h4 className="process-title">Custom Design Wrap Process:</h4>
                  <ul className="process-list">
                    <li>
                      Clean the car thoroughly with soap and isopropyl alcohol
                      for a flawless base.
                    </li>
                    <li>
                      Design and cut high-quality vinyl (e.g., 3M or Avery
                      Dennison) with custom graphics, allowing 2–3 inch overlap.
                    </li>
                    <li>
                      Apply vinyl with a squeegee, aligning designs precisely,
                      using heat for curves.
                    </li>
                    <li>
                      Trim excess vinyl and tuck edges into seams for a
                      seamless, vibrant finish.
                    </li>
                    <li>
                      Heat lightly (around 200°F) to set the adhesive, ensuring
                      long-lasting designs.
                    </li>
                  </ul>
                  <h3 className="section-subtitle">
                    Tips for a Stunning Custom Wrap
                  </h3>
                  <ul className="process-list">
                    <li>
                      Start with flat panels like the hood to practice graphic
                      alignment.
                    </li>
                    <li>
                      Work with our designers to create unique patterns or
                      logos.
                    </li>
                    <li>
                      Use a partner to handle large vinyl sheets for accuracy.
                    </li>
                    <li>
                      Lift and reapply with heat to fix any bubbles or wrinkles.
                    </li>
                  </ul>
                  <p className="highlight-text">
                    Why Opt for a Custom Design Wrap?
                  </p>
                  <p className="description">
                    Custom design wraps let you express your style or promote
                    your brand with bold, personalized graphics. They protect
                    your car’s paint, last 5–7 years, and cost $500–$2,000. DIY
                    for a creative challenge or contact our pros for a flawless
                    result!
                  </p>
                </>
              ) : (
                <>
                  <h2 className="section-title">
                    BIKE: Custom Design Wrap Detail
                  </h2>
                  <h3 className="section-subtitle">
                    What is a Custom Design Wrap for Bikes?
                  </h3>
                  <p className="description">
                    A custom design wrap transforms your bike with personalized
                    graphics and patterns, showcasing your unique style while
                    protecting the original paint.
                  </p>
                  <h3 className="section-subtitle">
                    Benefits of a Custom Design Wrap for Bikes
                  </h3>
                  <ul className="process-list">
                    <li>
                      Reflects your individuality with bespoke colors and
                      designs.
                    </li>
                    <li>
                      Shields paint from scratches, UV rays, and minor
                      abrasions.
                    </li>
                    <li>
                      Fully removable, allowing for easy updates or restoration.
                    </li>
                    <li>
                      Offers diverse finishes (matte, gloss, metallic) for
                      customization.
                    </li>
                  </ul>
                  <h3 className="section-subtitle">
                    Custom Design Options for Your Bike
                  </h3>
                  <ul className="process-list">
                    <li>Full bike wrap with vibrant, personalized graphics.</li>
                    <li>
                      Partial wrap: Fuel tank, frame, or fairings for targeted
                      style.
                    </li>
                    <li>
                      Unique patterns, logos, or graphics tailored to your
                      vision.
                    </li>
                  </ul>
                  <p className="description">
                    Contact us to create a custom design wrap package that
                    brings your bike’s aesthetics to life, or try our DIY tips
                    for a bold transformation.
                  </p>
                </>
              )}
            </div>

            {/* Gallery Section */}
            {(tab === 1 || tab === 2) && (
              <Gallery
                images={galleryData[tab].images}
                largeImage={galleryData[tab].largeImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
