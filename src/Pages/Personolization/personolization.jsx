import React, { useState } from "react";
import "./personolization.css"; // Corrected filename spelling
import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function Personalization() { // Corrected component name spelling
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

  const tabs = ["Color Change Wrap", "Color PPF", "Livery & Decals"]; 

  const galleryData = {
    1: {
      images: [
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Automobili-Pininfarina-Battista_web.jpg",
          alt: "Full color change wrap on car",
        },
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Citroe%E2%95%A0%C3%AAn-C5-Aircross_web.jpg",
          alt: "Car wrap in progress",
        },
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Ferrari-F8-tributo_web.jpg",
          alt: "Vinyl car wrap application",
        },
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Polestar-2_web.jpg",
          alt: "Sporty blue color racing wrap design",
        },
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Automobili-Pininfarina-Battista_web.jpg",
          alt: "Full color change wrap on car",
        },
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Citroe%E2%95%A0%C3%AAn-C5-Aircross_web.jpg",
          alt: "Car wrap in progress",
        },
      ],
    },
    2: {
      images: [
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "Color PPF on car hood",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2470779147/display_1500/stock-photo-worker-hands-installation-on-luxury-car-headlights-tpu-premium-ppf-film-ppf-cutting-software-2470779147.jpg",
          alt: "Color PPF on car headlights",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/zHnHNwh8.webp",
          alt: "Color PPF on bike tank",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367802613/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-ppf-applied-on-the-hood-2367802613.jpg",
          alt: "Color PPF application on car hood",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "Color PPF on car hood",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Color PPF on bike fairings",
        },
      ],
    },
    3: {
      images: [
        {
          src: "https://leifalvarssonart.com/cdn/shop/files/kawasaki_ninja_636-kawasaki-funhouse-zx6r-wrap-leif-alvarsson-art-Clown_Wrap.jpg",
          alt: "Custom livery on Kawasaki Ninja",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXqm9tprxCmyfbCOu0Qun6ZgPesX1LvVtyA&s",
          alt: "Racing decals on motorbike",
        },
        {
          src: "https://autodesignmagazine.com/wp-content/uploads/2019/04/Ferrari-F8-tributo_web.jpg",
          alt: "Car with custom racing livery",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1FeZ4HLXRUmucKRrLDLpHoSMtZmxbCli4g&s",
          alt: "Motorcycle with custom decals",
        },
        {
          src: "https://leifalvarssonart.com/cdn/shop/files/kawasaki_ninja_636-kawasaki-funhouse-zx6r-wrap-leif-alvarsson-art-Clown_Wrap.jpg",
          alt: "Custom livery on Kawasaki Ninja",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl_0CXCf6jx5kBYTRDcKfewmxY17NPg4ekg&s",
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
        title="Personalization"
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
              className={`personalization-content-tab ${activeTab === tab ? "personalization-active" : ""}`}
              role="tabpanel"
              aria-hidden={activeTab !== tab}
            >
              <div className="personalization-content-image">
                <img
                  src={
                    tab === 1
                      ? "https://autodesignmagazine.com/wp-content/uploads/2019/04/Polestar-2_web.jpg"
                      : tab === 2
                      ? "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg"
                      : "https://leifalvarssonart.com/cdn/shop/files/kawasaki_ninja_636-kawasaki-funhouse-zx6r-wrap-leif-alvarsson-art-Clown_Wrap.jpg"
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
                    <h2 className="personalization-title">Color Change Wrap</h2>
                    <h3 className="personalization-subtitle">Personalized Vehicle Wrapping</h3>
                    <p className="personalization-text">
                      A color change wrap transforms your vehicle’s appearance
                      with high-quality vinyl, offering a custom look without
                      permanent paint changes.
                    </p>

                    <h3 className="personalization-subtitle">Color Change Wrap Process</h3>
                    <ul className="personalization-list">
                      <li>
                        Clean the vehicle thoroughly with soap and isopropyl
                        alcohol for a flawless base.
                      </li>
                      <li>
                        Design and cut high-quality vinyl (e.g., 3M or Avery
                        Dennison) with custom colors, allowing 2–3 inch overlap.
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
                        Heat lightly (around 200°F) to set the adhesive,
                        ensuring long-lasting designs.
                      </li>
                    </ul>

                    <h3 className="personalization-subtitle">Benefits of a Color Change Wrap</h3>
                    <ul className="personalization-list">
                      <li>
                        Personalized style with vibrant colors or custom
                        graphics.
                      </li>
                      <li>
                        Protects original paint from scratches and UV rays.
                      </li>
                      <li>
                        Removable without damaging paint, preserving resale
                        value.
                      </li>
                      <li>Cost-effective alternative to a full repaint.</li>
                      <li>Quick process, completed in a few days.</li>
                    </ul>

                    <h3 className="personalization-subtitle">Application Areas</h3>
                    <ul className="personalization-list">
                      <li>
                        Full vehicle wrap for a complete color transformation.
                      </li>
                      <li>
                        Partial wrap on hood, roof, tank, or fairings for
                        accents.
                      </li>
                      <li>Interior panels or trim for a unified aesthetic.</li>
                      <li>
                        Smaller parts like mirrors or spoilers for added flair.
                      </li>
                      <li>
                        Applied in a controlled, clean facility for precision.
                      </li>
                    </ul>

                    <h3 className="personalization-subtitle">Tips for a Stunning Color Change Wrap</h3>
                    <ul className="personalization-list">
                      <li>
                        Start with flat panels like the hood to practice graphic
                        alignment.
                      </li>
                      <li>
                        Work with our designers to select vibrant or unique
                        color palettes.
                      </li>
                      <li>
                        Use a partner to handle large vinyl sheets for accuracy.
                      </li>
                    </ul>

                    <p className="personalization-text">
                      Contact us to create a custom color change wrap that
                      brings your vision to life!
                    </p>
                  </>
                ) : tab === 2 ? (
                  <>
                    <h2 className="personalization-title">Color PPF</h2>
                    <h3 className="personalization-subtitle">What is Color PPF?</h3>
                    <p className="personalization-text">
                      Color Paint Protection Film (PPF) combines the protective
                      qualities of traditional PPF with vibrant, custom colors,
                      shielding your vehicle’s paint while transforming its
                      appearance.
                    </p>

                    <h3 className="personalization-subtitle">Color PPF Application Process</h3>
                    <ul className="personalization-list">
                      <li>
                        Clean the vehicle to remove dirt and contaminants.
                      </li>
                      <li>
                        Cut colored PPF to fit specific panels using precision
                        templates.
                      </li>
                      <li>
                        Apply the film, smoothing out bubbles and aligning
                        edges.
                      </li>
                      <li>
                        Seal edges with heat for a durable, seamless look.
                      </li>
                    </ul>

                    <h3 className="personalization-subtitle">Benefits of Color PPF</h3>
                    <ul className="personalization-list">
                      <li>
                        Protects against scratches, stone chips, and UV damage.
                      </li>
                      <li>
                        Offers glossy or matte colored finishes without
                        permanent paint changes.
                      </li>
                      <li>
                        Self-healing properties repair minor scuffs with heat.
                      </li>
                      <li>Removable, preserving original paint for resale.</li>
                      <li>
                        Versatile finishes with a range of colors and textures.
                      </li>
                    </ul>

                    <h3 className="personalization-subtitle">Application Areas</h3>
                    <ul className="personalization-list">
                      <li>
                        Full vehicle coverage for comprehensive protection and
                        color change.
                      </li>
                      <li>
                        High-impact areas like hood, bumpers, tank, or fairings.
                      </li>
                      <li>
                        Accents on mirrors, side panels, or handlebars for
                        customization.
                      </li>
                      <li>Interior trim or panels for a cohesive aesthetic.</li>
                      <li>
                        Installed in a clean, professional facility for
                        precision.
                      </li>
                    </ul>

                    <p className="personalization-text">
                      Contact us to explore color PPF options for your car or
                      bike!
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="personalization-title">Livery & Decals</h2>
                    <h3 className="personalization-subtitle">What are Livery & Decals?</h3>
                    <p className="personalization-text">
                      Livery and decals involve applying custom graphics, logos,
                      or racing-inspired designs to vehicles, enhancing their
                      visual appeal and brand identity.
                    </p>

                    <h3 className="personalization-subtitle">How: Livery & Decals Application Process</h3>
                    <ul className="personalization-list">
                      <li>
                        Collaborate to design custom graphics or logos using
                        in-house tools.
                      </li>
                      <li>
                        Select high-quality vinyl or paint for vibrant, durable
                        finishes.
                      </li>
                      <li>
                        Clean the vehicle with isopropyl alcohol for a flawless
                        base.
                      </li>
                      <li>
                        Apply graphics with precision templates, using heat for
                        curves.
                      </li>
                      <li>
                        Trim edges and seal with optional clear coats for a
                        factory-like finish.
                      </li>
                    </ul>

                    <h3 className="personalization-subtitle">Why: Benefits of Livery & Decals</h3>
                    <ul className="personalization-list">
                      <li>Unique, eye-catching designs for cars or bikes.</li>
                      <li>
                        Professional branding for racing teams or personal
                        expression.
                      </li>
                      <li>Durable vinyl withstands weather and wear.</li>
                      <li>
                        Removable for design updates without damaging paint.
                      </li>
                      <li>
                        Pair with interior retrims (e.g., leather, alcantara)
                        for a cohesive look.
                      </li>
                    </ul>

                    <h3 className="personalization-subtitle">Where: Application Areas</h3>
                    <ul className="personalization-list">
                      <li>
                        Full vehicle livery for a complete transformation.
                      </li>
                      <li>
                        Decals on hoods, tanks, fairings, or side panels for
                        accents.
                      </li>
                      <li>
                        Sponsor logos on doors, bumpers, or frames for racing.
                      </li>
                      <li>
                        Interior panels or steering wheels with decals or
                        retrims.
                      </li>
                      <li>Applied in our in-house facility for precision.</li>
                    </ul>

                    <p className="personalization-text">
                      Let us design a livery or decal package that makes your
                      vehicle stand out!
                    </p>
                  </>
                )}
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