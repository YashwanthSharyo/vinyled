import React, { useState } from "react";
import "./ceramic.css";
import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function Ceramic() {
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
          src: "https://media.istockphoto.com/id/1273682054/photo/car-service-worker-applying-nano-coating-on-a-car-detail.jpg?s=612x612&w=0&k=20&c=w2YoGPnv24lcITfiH7jnTYLAj9xCXUrlbHn33lxcd2U=",
          alt: "Applying nano coating on car",
        },
        {
          src: "https://media.istockphoto.com/id/1276960885/photo/car-service-worker-applying-nano-coating-on-a-car-detail.jpg?s=612x612&w=0&k=20&c=uG2gei5RiQf5biOUegOLjzOiZFUdznwcxfNwTaL7h0Y=",
          alt: "Car service worker applying nano coating",
        },
        {
          src: "https://t3.ftcdn.net/jpg/05/39/32/14/360_F_539321407_RATbD7roySrBYmDtGGJZ3phZaKWS5l4P.jpg",
          alt: "Ceramic coating application",
        },
        {
          src: "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg?semt=ais_hybrid&w=740",
          alt: "Car wash detailing station",
        },
        {
          src: "https://media.istockphoto.com/id/1273682054/photo/car-service-worker-applying-nano-coating-on-a-car-detail.jpg?s=612x612&w=0&k=20&c=w2YoGPnv24lcITfiH7jnTYLAj9xCXUrlbHn33lxcd2U=",
          alt: "Applying nano coating on car",
        },
        {
          src: "https://media.istockphoto.com/id/1276960885/photo/car-service-worker-applying-nano-coating-on-a-car-detail.jpg?s=612x612&w=0&k=20&c=uG2gei5RiQf5biOUegOLjzOiZFUdznwcxfNwTaL7h0Y=",
          alt: "Car service worker applying nano coating",
        }
        
      ],
      largeImage: {
        src: "https://media.istockphoto.com/id/1434542471/photo/process-of-applying-ceramic-protective-coat-on-body-car-using-sponge-in-detailing-auto.jpg?s=612x612&w=0&k=20&c=csC-5vvQDqAzjGLvEcrR-yShuGwb-9J9uCGfEGjvfM4=",
        alt: "Applying ceramic protective coat on car",
      },
    },

    2: {
      images: [
        {
          src: "https://thumbs.dreamstime.com/b/process-nano-coating-motorcycle-applying-soft-fiber-sponge-292065684.jpg?w=768",
          alt: "Nano coating on motorcycle 1",
        },
        {
          src: "https://carmica.in/wp-content/uploads/2024/08/IMG_7036-768x768.jpg",
          alt: "Bike nano coating application 2",
        },
        {
          src: "https://5.imimg.com/data5/TK/OH/KO/SELLER-73546474/46200384-2207669842577923-8097496100224630784-n-jpg-500x500.jpg",
          alt: "Bike nano coating application 3",
        },
        {
          src: "https://thumbs.dreamstime.com/b/process-nano-coating-motorcycle-applying-soft-fiber-sponge-292064974.jpg?w=768",
          alt: "Nano coating on motorcycle 4",
        },
      ],
      largeImage: {
        src: "https://thumbs.dreamstime.com/b/process-nano-coating-motorcycle-applying-soft-fiber-sponge-300123612.jpg?w=768",
        alt: "Large nano coating on motorcycle",
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
        title="Ceramic"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
      />

      <div className="tab-content-container">
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
                    ? "https://media.istockphoto.com/id/1273682054/photo/car-service-worker-applying-nano-coating-on-a-car-detail.jpg?s=612x612&w=0&k=20&c=w2YoGPnv24lcITfiH7jnTYLAj9xCXUrlbHn33lxcd2U="
                    : "https://thumbs.dreamstime.com/z/process-nano-coating-motorcycle-applying-soft-fiber-sponge-298512272.jpg?ct=jpeg"
                }
                alt={
                  tab === 1
                    ? "Ceramic Car Illustration"
                    : "Ceramic Bike Illustration"
                }
                className="tab-image"
              />
            </div>

            {/* Text Section */}
            <div className="text-section">
              {tab === 1 ? (
                <>
                  <h2 className="section-title">
                    CAR: Ceramic Protection Detail
                  </h2>

                  <h3 className="section-subtitle">
                    Exterior – Cleaning and Ceramic Coating
                  </h3>
                  <h4 className="process-title">Ceramic Coating Process:</h4>
                  <ul className="process-list">
                    <li>Wash with pH-neutral shampoo and two-bucket system.</li>
                    <li>
                      Use a clay bar to remove contaminants and smooth the
                      paint.
                    </li>
                    <li>Apply ceramic coating for durable protection.</li>
                    <li>
                      Seal edges for a hydrophobic and scratch-resistant finish.
                    </li>
                    <li>
                      Allow the coating to cure for 12-24 hours for full effect.
                    </li>
                  </ul>

                  <p className="highlight-text">Why Choose Ceramic Coating?</p>
                  <ul className="process-list">
                    <li>Repels water, dirt, and stains for easy cleaning.</li>
                    <li>Enhances the paint’s depth and gloss.</li>
                    <li>Protects against UV rays, preventing paint fading.</li>
                    <li>
                      Long-lasting protection, reducing the need for frequent
                      detailing.
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h2 className="section-title">
                    BIKE: Ceramic Protection Detail
                  </h2>

                  <h3 className="section-subtitle">
                    What is Ceramic Coating for Bikes?
                  </h3>
                  <p className="description">
                    Ceramic coating is a hydrophobic layer that provides
                    long-lasting protection to your motorcycle’s paint. It helps
                    repel water, dirt, and road debris, while preserving a
                    glossy finish and protecting the bike's surface from
                    scratches and UV damage.
                  </p>

                  <h3 className="section-subtitle">
                    Benefits of Ceramic Coating for Bikes
                  </h3>
                  <ul className="process-list">
                    <li>
                      Protects against road grime, dirt, and small scratches.
                    </li>
                    <li>
                      Enhances the bike's shine and deepens the paint's color.
                    </li>
                    <li>
                      Makes cleaning easier by preventing dirt from sticking to
                      the surface.
                    </li>
                    <li>
                      Offers UV protection to prevent paint oxidation and
                      fading.
                    </li>
                    <li>
                      Prevents water spots by causing water to bead off the
                      surface.
                    </li>
                    <li>
                      Improves the bike's overall durability against the
                      elements.
                    </li>
                  </ul>

                  <p className="highlight-text">Ceramic Coverage Options</p>
                  <ul className="process-list">
                    <li>
                      Full Bike Protection (includes tank, fairings, wheels, and
                      exhaust)
                    </li>
                    <li>
                      Partial Kit: Tank, Fairings, Mudguard, and Rear Fender
                    </li>
                    <li>
                      Helmet & Accessory Coverage (for visor and helmet paint)
                    </li>
                  </ul>

                  <p className="description">
                    Get in touch for a tailored ceramic coating package that
                    suits your motorcycle’s needs and enhances its protection.
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
