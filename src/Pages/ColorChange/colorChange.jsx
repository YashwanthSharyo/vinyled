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
      title="Color Change Wrap"
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
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1weBUB_bYbgQj6DUmQv3vV-L6tc9154KWBQ&s"
                  : "https://thumbs.dreamstime.com/z/process-nano-coating-motorcycle-applying-soft-fiber-sponge-298512272.jpg?ct=jpeg"
              }
              alt={tab === 1 ? "Car Color Change Wrap" : "Bike Color Change Wrap"}
              className="tab-image"
            />
          </div>

          {/* Text Section */}
          <div className="text-section">
            {tab === 1 ? (
              <>
                <h2 className="section-title">CAR: Color Change Wrap Detail</h2>
                <h3 className="section-subtitle">Exterior – Custom Color Wrapping for Vehicles</h3>
                <h4 className="process-title">Color Change Wrap Process:</h4>
                <ul className="process-list">
                  <li>Thoroughly cleaned and prepped for vinyl application.</li>
                  <li>High-quality vinyl wrap applied to cover all exterior surfaces.</li>
                  <li>Seamless installation to ensure a flawless, uniform look.</li>
                  <li>Custom designs and finishes available for a unique appearance.</li>
                </ul>
                <p className="highlight-text">Why Choose a Color Change Wrap?</p>
                <p className="description">
                  A color change wrap provides a unique look, protects the original paint, and allows for easier maintenance and customization.
                </p>
              </>
            ) : (
              <>
                <h2 className="section-title">BIKE: Color Change Wrap Detail</h2>
                <h3 className="section-subtitle">What is a Color Change Wrap for Bikes?</h3>
                <p className="description">
                  A color change wrap for bikes involves applying a custom vinyl wrap to your bike, allowing for a completely new look while preserving the original paint.
                </p>
                <h3 className="section-subtitle">Benefits of a Color Change Wrap for Bikes</h3>
                <ul className="process-list">
                  <li>Provides a sleek, personalized look for your bike.</li>
                  <li>Offers protection for your bike's paintwork from minor scratches and UV damage.</li>
                  <li>Easy to remove or replace, without damaging the original paint.</li>
                  <li>Wide variety of colors and finishes available for customization.</li>
                </ul>
                <p className="highlight-text">Custom Color Options for Your Bike</p>
                <ul className="process-list">
                  <li>Full Bike Wrap</li>
                  <li>Partial Wrap: Fuel Tank, Frame, Mudguard</li>
                  <li>Unique Custom Designs & Graphics</li>
                </ul>
                <p className="description">
                  Reach out to us for a personalized color change wrap package tailored to your bike's needs.
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
