import React, { useState } from "react";
import "./ppf.css";
import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function PPF() {
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
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "PPF on car hood",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2470779147/display_1500/stock-photo-worker-hands-installation-on-luxury-car-headlights-tpu-premium-ppf-film-ppf-cutting-software-2470779147.jpg",
          alt: "PPF on car headlights",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2427461453/display_1500/stock-photo-car-wrapping-a-car-wrapping-specialist-applies-a-polyurethane-film-to-the-car-selective-focus-2427461453.jpg",
          alt: "Car wrapping with polyurethane film",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367802613/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-ppf-applied-on-the-hood-2367802613.jpg",
          alt: "PPF application on car hood",
        },
      ],
      largeImage: {
        src: "https://www.shutterstock.com/shutterstock/photos/2367800283/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800283.jpg",
        alt: "Large PPF on car hood",
      },
    },
    2: {
      images: [
        {
          src: "https://www.carzspa.com/wp-content/uploads/2024/12/dec-blog-2.webp",
          alt: "Bike PPF application 1",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/zHnHNwh8.webp",
          alt: "Bike PPF application 2",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/IyGuFG0q.webp",
          alt: "Bike PPF application 3",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/FgVDP6qU.webp",
          alt: "Bike PPF application 4",
        },
      ],
      largeImage: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_sf1no4u5GLawfq0D23-9yl43XnMFlqtTg&s",
        alt: "Large Bike PPF application",
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
        title="PPF"
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
                    ? "https://videos.openai.com/vg-assets/assets%2Ftask_01jt7yxcc4ffs9jdaamcsx2wk5%2F1746171584_img_0.webp?st=2025-05-02T06%3A10%3A54Z&se=2025-05-08T07%3A10%3A54Z&sks=b&skt=2025-05-02T06%3A10%3A54Z&ske=2025-05-08T07%3A10%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=iYwsg9oSmf9Gr7KCk3GesDwiNizFwdlFt15ueEqzNsU%3D&az=oaivgprodscus"
                    : "https://tasdetailing.in/static/a0f140055db123cacdd4612735d7934e/5ba4c/DSC_3522.webp"
                }
                alt={tab === 1 ? "Car illustration" : "Bike illustration"}
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
                    CAR: Level 1 - Protection Detail
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
                    Exterior – Cleaning/Cleansing/Decontamination
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
                    21 STAGE TOPAZ CLEANING PROCESS INCLUDING:
                  </h4>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Washed using pH neutral shampoo with twin grit guard
                      buckets.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Wheels cleaned with citrus-based cleaner and horsehair
                      brushes.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Door shuts, arches, petrol cap cleaned (where accessible).
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Dried with deep-pile microfibre towels.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Clay bar treatment to remove bonded contaminants.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Body solvent removes tar, grime, bugs.
                      <ul
                        style={{
                          paddingLeft: "1.25rem",
                          margin: "0.1875rem 0",
                        }}
                      >
                        <li
                          style={{
                            marginBottom: "0.1875rem",
                          }}
                        >
                          Tyres dressed.
                        </li>
                      </ul>
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Exterior plastics and door trims dressed.
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
                    Sealant
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#333333",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Speak to our team for ceramic coating options for paint,
                    glass, and wheels.
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
                    Interior
                  </h3>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Carpets vacuumed.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Interior windows cleaned.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Trim and surfaces cleaned with aerospace-grade products.
                    </li>
                  </ul>

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
                    Why choose Level 1?
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#333333",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    A Level 1 Detail is designed to decontaminate paint/PPF and
                    is ideal for satin finishes or regular maintenance without
                    paint correction.
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
                    BIKE: PPF Protection Detail
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
                    What is PPF?
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#333333",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Paint Protection Film (PPF) is a self-healing transparent
                    film that shields your bike from chips, scratches, and UV
                    damage while preserving the paint.
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
                    Why choose PPF for bikes?
                  </h3>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Protects tank and fairings from road debris.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Maintains original paint finish and resale value.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Self-healing surface repairs minor scuffs automatically.
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Precision-cut templates for seamless installation.
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
                    Coverage Options
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      fontSize: "0.875rem",
                      textAlign: "justify",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Full Bike Protection
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Partial Kit: Tank, Fairings, Mudguard
                    </li>
                    <li
                      style={{
                        marginBottom: "0.1875rem",
                      }}
                    >
                      Helmet & Accessory Coverage
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
                    Contact us for a customized PPF package suited Coppa bike.
                  </p>
                </>
              )}
            </div>

            {/* First Gallery Section */}
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
