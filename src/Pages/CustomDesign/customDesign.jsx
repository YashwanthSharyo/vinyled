import React, { useState } from "react";

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
        src: "https://sdmntprwestus.oaiusercontent.com/files/00000000-8bb8-6230-93ba-0766a6661635/raw?se=2025-05-05T08%3A53%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=08b9aaa8-b633-5f7b-85b1-70a79b4cc919&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T16%3A04%3A38Z&ske=2025-05-05T16%3A04%3A38Z&sks=b&skv=2024-08-04&sig=GifQkIXDLJgWBBGoqNdn/yjr05Mmm85keqAUSROrGkY%3D",
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
          src: "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/VUDZhktwgm0bTllo/image.jpg",
          alt: "Sport bike wrapped with color graphics",
        },
        {
          src: "https://sdmntprwestus.oaiusercontent.com/files/00000000-62fc-6230-adaf-3681996afc48/raw?se=2025-05-05T08%3A57%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=4385dd79-4ffc-581a-aa11-4e5f7e178d02&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T18%3A36%3A23Z&ske=2025-05-05T18%3A36%3A23Z&sks=b&skv=2024-08-04&sig=4y27U7dRjmmPlcvMuZEaTXsXMJNg6Z1JqCdnNV8XMXM%3D",
          alt: "Custom clown-themed wrap on Kawasaki Ninja",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Y71Ysq1qD-bWHp231WEzWNZAArIzhZ_UXg&s",
          alt: "Motorbike with racing wrap",
        },
      ],
      largeImage: {
        src: "https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/07/37377548_1784076388344264_5730035828030177280_n-620x406.jpg",
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

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          padding: "2.5rem",
        }}
      >
        {[1, 2].map((tab) => (
          <div
            key={tab}
            style={{
              display: activeTab === tab ? "flex" : "none",
              flexDirection: "row",
              gap: "1.25rem",
              borderRadius: "0.3125rem",
              padding: "1.875rem",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Image Section */}
            <div
              style={{
                flex: 1,
                minWidth: "300px",
              }}
            >
              <img
                src={
                  tab === 1
                    ? "https://assets.grok.com/users/d008ba0b-9248-430b-8962-9021a7a88c8a/generated/P0cXcMhAE5ReAJY2/image.jpg"
                    : "https://www.acmegraphic.com/wp-content/uploads/2021/08/motorcycle-decal-wrap.jpg"
                }
                alt={
                  tab === 1 ? "Car Color Change Wrap" : "Bike Color Change Wrap"
                }
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "25rem",
                  borderRadius: "0.3125rem",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Text Section */}
            <div
              style={{
                flex: 1,
                minWidth: "300px",
              }}
            >
              {tab === 1 ? (
                <>
                  <h2
                    style={{
                      color: "#ec1d24",
                      fontWeight: "normal",
                      fontStyle: "normal",
                      fontSize: "2.4375rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    CAR: Custom Design Wrap Detail
                  </h2>
                  <h3
                    style={{
                      color: "#ec1d24",
                      fontWeight: "normal",
                      fontStyle: "normal",
                      fontSize: "1.5625rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Exterior – Personalized Graphic Wrapping for Vehicles
                  </h3>
                  <h4
                    style={{
                      color: "#3a3a3a",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Custom Design Wrap Process:
                  </h4>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Collaborative consultation to capture your vision and
                      branding.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Creation of unique graphics tailored to your vehicle's
                      contours.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      High-resolution printing on premium vinyl materials.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Professional installation ensuring seamless integration of
                      the design.
                    </li>
                  </ul>

                  <p
                    style={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                      color: "#ec1d24",
                    }}
                  >
                    Why Opt for a Custom Design Wrap?
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#333333",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Custom design wraps offer a distinctive appearance, allowing
                    for brand promotion, personal expression, and protection of
                    the original paintwork.
                  </p>
                </>
              ) : (
                <>
                  <h2
                    style={{
                      color: "#ec1d24",
                      fontWeight: "normal",
                      fontStyle: "normal",
                      fontSize: "2.4375rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    BIKE: Custom Design Wrap Detail
                  </h2>
                  <h3
                    style={{
                      color: "#ec1d24",
                      fontWeight: "normal",
                      fontStyle: "normal",
                      fontSize: "1.5625rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    What is a Custom Design Wrap for Bikes?
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#333333",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    A custom design wrap for bikes involves applying
                    personalized graphics and patterns to your bike, reflecting
                    your unique style while safeguarding the original finish.
                  </p>

                  <h3
                    style={{
                      color: "#ec1d24",
                      fontWeight: "normal",
                      fontStyle: "normal",
                      fontSize: "1.5625rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Benefits of a Custom Design Wrap for Bikes
                  </h3>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Showcases your individuality with bespoke designs.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Protects against minor abrasions and environmental
                      elements.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Easily removable, allowing for design updates or
                      restoration.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Wide array of colors, textures, and finishes for
                      customization.
                    </li>
                  </ul>

                  <p
                    style={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                      color: "#ec1d24",
                    }}
                  >
                    Custom Design Options for Your Bike
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Full Bike Wrap with personalized graphics.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Partial Wrap: Targeted areas like fuel tank, frame, or
                      mudguard.
                    </li>
                    <li style={{ marginBottom: "0.1875rem" }}>
                      Unique Custom Designs & Graphics tailored to your
                      preferences.
                    </li>
                  </ul>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#333333",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Contact us to craft a custom design wrap package that aligns
                    with your bike's aesthetics and your personal style.
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
