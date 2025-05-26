import React, { useState } from "react";
import "./personolization.css"; // Corrected filename spelling
import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function Personalization() {
  // Corrected component name spelling
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

  const tabs = ["Printed Partial Graphics", "Full Body Custom Graphics", "Full Body Colour Change", "Colour PPF"];


  const galleryData = {
    1: {
      images: [
        {
          src: "./Images/color_change_1.JPG",
          alt: "Full color change wrap on car",
        },
        {
          src: "./Images/color_change_2.JPG",
          alt: "Car wrap in progress",
        },
        {
          src: "./Images/color_change_3.JPG",
          alt: "Vinyl car wrap application",
        },
        {
          src: "./Images/color_change_4.JPG",
          alt: "Sporty blue color racing wrap design",
        },
        {
          src: "./Images/color_change_5.JPG",
          alt: "Full color change wrap on car",
        },
        {
          src: "./Images/color_change_6.JPG",
          alt: "Car wrap in progress",
        },
      ],
    },
    2: {
      images: [
        {
          src: "./Images/ppf_1.JPG",
          alt: "Color PPF on car hood",
        },
        {
          src: "./Images/ppf_2.JPG",
          alt: "Color PPF on car headlights",
        },
        {
          src: "./Images/ppf_3.JPG",
          alt: "Color PPF on bike tank",
        },
        {
          src: "./Images/ppf_4.JPG",
          alt: "Color PPF application on car hood",
        },
        {
          src: "./Images/ppf_5.JPG",
          alt: "Color PPF on car hood",
        },
        {
          src: "./Images/ppf_6.JPG",
          alt: "Color PPF on bike fairings",
        },
      ],
    },
    3: {
      images: [
        {
          src: "./Images/coating_1.JPG",
          alt: "Custom livery on Kawasaki Ninja",
        },
        {
          src: "./Images/coating_2.JPG",
          alt: "Racing decals on motorbike",
        },
        {
          src: "./Images/coating_3.JPG",
          alt: "Car with custom racing livery",
        },
        {
          src: "./Images/coating_4.JPG",
          alt: "Motorcycle with custom decals",
        },
        {
          src: "./Images/coating_5.JPG",
          alt: "Custom livery on Kawasaki Ninja",
        },
        {
          src: "./Images/coating_6.JPG",
          alt: "Sport bike with graphic decals",
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
        title="PERSONALIZATION"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs}
      />

      <div className="personalization-wrap-container">
        {tabs.map((_, index) => {
          const tab = index + 1;
          return (
            <div
              key={tab}
              className={`personalization-content-tab ${
                activeTab === tab ? "personalization-active" : ""
              }`}
              role="tabpanel"
              aria-hidden={activeTab !== tab}
            >
              <div className="personalization-content-image">
                <img
                  src={
                    tab === 1
                      ? "./Images/protect_2.JPG"
                      : tab === 2
                      ? "./Images/protect_1.jpg"
                      : "./Images/about_us_3.JPG"
                  }
                  alt={
                    tab === 1
                      ? "Car Color Change Wrap"
                      : tab === 2
                      ? "Color PPF Application"
                      : "Livery & Decals Design"
                  }
                  className="personalization-image"
                />
              </div>

            <div className="personalization-content-text">
                {tab === 1 ? (
                  <>
                    <h2 className="personalization-title">Printed Partial Graphics</h2>
                    <h3 className="personalization-subtitle">What are Printed Partial Graphics?</h3>
                    <p className="personalization-text">
                      Printed partial graphics add custom-designed vinyl decals or logos to specific areas of your vehicle, offering a unique, eye-catching style without a full wrap.
                    </p>

                    <h3 className="personalization-subtitle">Printed Partial Graphics Process</h3>
                    <ul className="personalization-list">
                      <li>Design custom graphics or logos with our in-house design team.</li>
                      <li>Print high-quality vinyl using vibrant, eco-friendly inks.</li>
                      <li>Clean the vehicle with isopropyl alcohol for a flawless base.</li>
                      <li>Apply decals precisely with alignment templates, using heat for curves.</li>
                      <li>Seal edges with a clear coat for a durable, showroom-like finish.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Benefits of Printed Partial Graphics</h3>
                    <ul className="personalization-list">
                      <li>Personalized style with custom logos or graphic accents.</li>
                      <li>Protects applied areas from minor scratches and UV rays.</li>
                      <li>Removable without damaging paint, preserving resale value.</li>
                      <li>Cost-effective way to enhance specific vehicle areas.</li>
                      <li>Quick application, completed in a single day.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Application Areas</h3>
                    <ul className="personalization-list">
                      <li>Bonnet or roof for bold, prominent graphic accents.</li>
                      <li>Side panels or doors for branding or sponsor logos.</li>
                      <li>Bike tanks or fairings for a sporty, custom look.</li>
                      <li>Interior trim or steering wheel for a cohesive aesthetic.</li>
                      <li>Applied in a controlled, clean facility for precision.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Tips for Stunning Graphics</h3>
                    <ul className="personalization-list">
                      <li>Choose high-contrast colours for maximum visual impact.</li>
                      <li>Start with smaller decals to test placement and design.</li>
                      <li>Work with our team to ensure graphics align with vehicle contours.</li>
                    </ul>

                    <p className="personalization-text">
                      Contact us to create custom printed partial graphics that make your vehicle stand out!
                    </p>
                  </>
                ) : tab === 2 ? (
                  <>
                    <h2 className="personalization-title">Full Body Custom Graphics</h2>
                    <h3 className="personalization-subtitle">What are Full Body Custom Graphics?</h3>
                    <p className="personalization-text">
                      Full body custom graphics transform your vehicle with vibrant, bespoke vinyl designs covering the entire exterior, perfect for branding or unique styling.
                    </p>

                    <h3 className="personalization-subtitle">Full Body Custom Graphics Process</h3>
                    <ul className="personalization-list">
                      <li>Collaborate to design custom graphics using advanced design software.</li>
                      <li>Print premium vinyl with durable, weather-resistant inks.</li>
                      <li>Thoroughly clean the vehicle to ensure a flawless surface.</li>
                      <li>Apply graphics with precision, using heat for seamless contour fitting.</li>
                      <li>Trim and seal edges for a long-lasting, factory-like finish.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Benefits of Full Body Custom Graphics</h3>
                    <ul className="personalization-list">
                      <li>Unique, head-turning designs tailored to your vision.</li>
                      <li>Protects original paint from scratches and environmental damage.</li>
                      <li>Removable, allowing design updates without paint damage.</li>
                      <li>Ideal for racing teams, businesses, or personal expression.</li>
                      <li>Enhances resale value by preserving the vehicle’s paint.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Application Areas</h3>
                    <ul className="personalization-list">
                      <li>Full vehicle exterior for a complete graphic overhaul.</li>
                      <li>Bonnet, roof, and bumpers for prominent design elements.</li>
                      <li>Side panels and doors for branding or sponsor logos.</li>
                      <li>Interior accents like dashboard trim for a unified look.</li>
                      <li>Applied in a dust-free studio for impeccable results.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Tips for Full Body Custom Graphics</h3>
                    <ul className="personalization-list">
                      <li>Plan designs with our team to ensure cohesive patterns.</li>
                      <li>Opt for durable vinyl to withstand Indian weather conditions.</li>
                      <li>Schedule regular cleaning to maintain vibrant graphics.</li>
                    </ul>

                    <p className="personalization-text">
                      Reach out to design a full body custom graphic wrap that reflects your style!
                    </p>
                  </>
                ) : tab === 3 ? (
                  <>
                    <h2 className="personalization-title">Full Body Colour Change</h2>
                    <h3 className="personalization-subtitle">Personalized Vehicle Wrapping</h3>
                    <p className="personalization-text">
                      A full body colour change wrap transforms your vehicle’s appearance with high-quality vinyl, offering a custom look without permanent paint changes.
                    </p>

                    <h3 className="personalization-subtitle">Full Body Colour Change Process</h3>
                    <ul className="personalization-list">
                      <li>Clean the vehicle thoroughly with soap and isopropyl alcohol for a flawless base.</li>
                      <li>Design and cut high-quality vinyl (e.g., 3M or Avery Dennison) with custom colours, allowing 2–3 inch overlap.</li>
                      <li>Apply vinyl with a squeegee, aligning designs precisely, using heat for curves.</li>
                      <li>Trim excess vinyl and tuck edges into seams for a seamless, vibrant finish.</li>
                      <li>Heat lightly (around 200°F) to set the adhesive, ensuring long-lasting designs.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Benefits of a Full Body Colour Change</h3>
                    <ul className="personalization-list">
                      <li>Personalized style with vibrant colours or custom finishes.</li>
                      <li>Protects original paint from scratches and UV rays.</li>
                      <li>Removable without damaging paint, preserving resale value.</li>
                      <li>Cost-effective alternative to a full repaint.</li>
                      <li>Quick process, completed in a few days.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Application Areas</h3>
                    <ul className="personalization-list">
                      <li>Full vehicle wrap for a complete colour transformation.</li>
                      <li>Bonnet, roof, or bumpers for consistent colour accents.</li>
                      <li>Interior panels or trim for a unified aesthetic.</li>
                      <li>Smaller parts like mirrors or spoilers for added flair.</li>
                      <li>Applied in a controlled, clean facility for precision.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Tips for a Stunning Full Body Colour Change</h3>
                    <ul className="personalization-list">
                      <li>Start with flat panels like the bonnet to practice alignment.</li>
                      <li>Work with our designers to select vibrant or unique colour palettes.</li>
                      <li>Use a partner to handle large vinyl sheets for accuracy.</li>
                    </ul>

                    <p className="personalization-text">
                      Contact us to create a full body colour change wrap that brings your vision to life!
                    </p>
                  </>
                ) : tab === 4 ? (
                  <>
                    <h2 className="personalization-title">Colour PPF</h2>
                    <h3 className="personalization-subtitle">What is Colour PPF?</h3>
                    <p className="personalization-text">
                      Colour Paint Protection Film (PPF) combines the protective qualities of traditional PPF with vibrant, custom colours, shielding your vehicle’s paint while transforming its appearance.
                    </p>

                    <h3 className="personalization-subtitle">Colour PPF Application Process</h3>
                    <ul className="personalization-list">
                      <li>Thoroughly clean the vehicle to remove dirt and contaminants.</li>
                      <li>Cut coloured PPF to fit specific panels using precision templates.</li>
                      <li>Apply the film with a squeegee, smoothing out bubbles and aligning edges.</li>
                      <li>Use heat to conform the film to curves for a seamless look.</li>
                      <li>Inspect and seal edges for a durable, paint-like finish.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Benefits of Colour PPF</h3>
                    <ul className="personalization-list">
                      <li>Protects against scratches, stone chips, and UV damage.</li>
                      <li>Offers glossy or matte coloured finishes without permanent paint changes.</li>
                      <li>Self-healing properties repair minor scuffs with heat.</li>
                      <li>Removable, preserving original paint for resale.</li>
                      <li>Versatile finishes with a range of colours and textures.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Application Areas</h3>
                    <ul className="personalization-list">
                      <li>Full vehicle coverage for comprehensive protection and colour change.</li>
                      <li>High-impact areas like bonnet, bumpers, tank, or fairings.</li>
                      <li>Accents on mirrors, side panels, or handlebars for customization.</li>
                      <li>Interior trim or panels for a cohesive aesthetic.</li>
                      <li>Installed in a clean, professional facility for precision.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Tips for Maintaining Colour PPF</h3>
                    <ul className="personalization-list">
                      <li>Hand wash with PPF-safe pH-balanced shampoo to maintain clarity.</li>
                      <li>Avoid abrasive tools or chemicals to preserve the finish.</li>
                      <li>Use a microfibre towel for drying to prevent scratches.</li>
                    </ul>

                    <p className="personalization-text">
                      Contact us to explore colour PPF options for your car or bike!
                    </p>
                  </>
                ) : null}
              </div>

              {(tab === 1 || tab === 2 || tab === 3) && (
                <Gallery images={galleryData[tab].images} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
