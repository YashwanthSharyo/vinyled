import React, { useState } from "react";
import "./colorChange.css";

import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function ColorChangeWrap() {
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
          src: "https://i0.wp.com/www.atlanticcustomwraps.com/wp-content/uploads/2021/08/Full-color-change-wrap0006.jpg?w=800&ssl=1",
          alt: "Full color change wrap on car",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh67NC5qLHYSfrDix1q-CUHw0W8rLjS18YXg&s",
          alt: "Car wrap in progress",
        },
        {
          src: "https://image.made-in-china.com/318f0j00RtefsLPauizo/car-wrap-3-mp4.webp",
          alt: "Vinyl car wrap application",
        },
        {
          src: "https://www.shutterstock.com/image-vector/exclusive-sporty-blue-color-racing-600nw-2533122201.jpg",
          alt: "Sporty blue color racing wrap design",
        },
        {
          src: "https://i0.wp.com/www.atlanticcustomwraps.com/wp-content/uploads/2021/08/Full-color-change-wrap0006.jpg?w=800&ssl=1",
          alt: "Full color change wrap on car",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh67NC5qLHYSfrDix1q-CUHw0W8rLjS18YXg&s",
          alt: "Car wrap in progress",
        }
      ],
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
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q,pp:ANd9GcTj1FeZ4HLXRUmucKRrLDLpHoSMtZmxbCli4g&s",
          alt: "Motorcycle with custom wrap design 1",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl_0CXCf6jx5kBYTRDcKfewmxY17NPg4ekg&s",
          alt: "Sport bike wrapped with color graphics",
        }
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
        title="Color Change Wrap"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
      />

      <div className="wrap-container">
        {[1, 2].map((tab) => (
          <div
            key={tab}
            className={`content-tab ${activeTab === tab ? "active" : ""}`}
            role="tabpanel"
            aria-hidden={activeTab !== tab}
          >
            {/* Image Section */}
            <div className="content-image">
              <img
                src={
                  tab === 1
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1weBUB_bYbgQj6DUmQv3vV-L6tc9154KWBQ&s"
                    : "https://thumbs.dreamstime.com/z/process-nano-coating-motorcycle-applying-soft-fiber-sponge-298512272.jpg?ct=jpeg"
                }
                alt={
                  tab === 1 ? "Car Color Change Wrap" : "Bike Color Change Wrap"
                }
                className="image"
              />
            </div>

            {/* Text Section */}
            <div className="content-text">
              {tab === 1 ? (
                <>
                  <h2 className="title">
                    CAR: Color Change Wrap Guide
                  </h2>
                  <h3 className="subtitle">
                    Transform Your Vehicle with a Custom Vinyl Wrap
                  </h3>
                  <h4 className="process-heading">
                    Easy Color Change Wrap Process:
                  </h4>
                  <ul className="list">
                    <li>
                      Clean the car thoroughly with soap and isopropyl alcohol
                      to ensure a grease-free surface.
                    </li>
                    <li>
                      Measure and cut high-quality vinyl (e.g., 3M or Avery
                      Dennison) with 2–3 inch overlap for each panel.
                    </li>
                    <li>
                      Apply vinyl using a squeegee, working from the center
                      outward, with light heat for curves.
                    </li>
                    <li>
                      Trim excess vinyl and tuck edges into seams for a
                      seamless, professional finish.
                    </li>
                    <li>
                      Heat the surface lightly (around 200°F) to set the
                      adhesive and prevent peeling.
                    </li>
                  </ul>
                  <h3 className="subtitle">
                    Beginner Tips for a Flawless Wrap
                  </h3>
                  <ul className="list">
                    <li>
                      Start with flat surfaces like the hood or roof to build
                      confidence.
                    </li>
                    <li>
                      Work with a partner to hold and align large vinyl sheets.
                    </li>
                    <li>
                      Fix bubbles by lifting vinyl, applying heat, and
                      reapplying smoothly.
                    </li>
                    <li>
                      Use a felt-edged squeegee to avoid scratching the vinyl.
                    </li>
                  </ul>
                  <p className="text">
                    A color change wrap provides a bold, custom look while
                    protecting your car's paint from scratches and UV damage.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="title">
                    BIKE: Color Change Wrap Guide
                  </h2>
                  <h3 className="subtitle">
                    Revamp Your Motorcycle with a Vinyl Wrap
                  </h3>
                  <p className="text">
                    A color change wrap gives your bike a fresh, custom
                    appearance while safeguarding its paint from scratches and
                    UV damage.
                  </p>
                  <h3 className="subtitle">
                    Easy Color Change Wrap Process
                  </h3>
                  <ul className="list">
                    <li>
                      Wash and degrease the bike with soap and isopropyl alcohol
                      for perfect adhesion.
                    </li>
                    <li>
                      Remove seats or fairings (optional) and cut vinyl with 1–2
                      inch overlap for each part.
                    </li>
                    <li>
                      Apply vinyl with a small squeegee, using heat to mold over
                      curves like the tank or frame.
                    </li>
                    <li>
                      Trim carefully with a scalpel and tuck edges for a clean,
                      polished look.
                    </li>
                    <li>
                      Reheat lightly to set the adhesive, ensuring durability on
                      intricate parts.
                    </li>
                  </ul>
                  <p className="highlight">
                    Benefits of Wrapping Your Bike
                  </p>
                  <ul className="list">
                    <li>
                      Personalized style with vibrant colors and unique
                      finishes.
                    </li>
                    <li>Protects paint from minor damage and fading.</li>
                    <li>Removable without harming the original surface.</li>
                    <li>
                      Affordable customization ($100–$500) for full or partial
                      wraps (e.g., tank, frame).
                    </li>
                  </ul>
                  <p className="text">
                    Ready to transform your bike? Contact us for a custom wrap
                    package or try our DIY tips for a stunning result.
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