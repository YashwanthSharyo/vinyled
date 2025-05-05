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
              ? "https://media.istockphoto.com/id/1273682054/photo/car-service-worker-applying-nano-coating-on-a-car-detail.jpg?s=612x612&w=0&k=20&c=w2YoGPnv24lcITfiH7jnTYLAj9xCXUrlbHn33lxcd2U="  // Replace with actual Ceramic image
              : "https://thumbs.dreamstime.com/z/process-nano-coating-motorcycle-applying-soft-fiber-sponge-298512272.jpg?ct=jpeg" // Replace with actual Ceramic bike image
          }
          alt={tab === 1 ? "Ceramic Car Illustration" : "Ceramic Bike Illustration"}
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
              CAR: Ceramic Protection Detail
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
              Exterior – Cleaning and Ceramic Coating
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
              Ceramic Coating Process:
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
                Washed with pH-neutral shampoo and two-bucket system.
              </li>
              <li
                style={{
                  marginBottom: "0.1875rem",
                }}
              >
                Decontaminated with clay bar to remove embedded contaminants.
              </li>
              <li
                style={{
                  marginBottom: "0.1875rem",
                }}
              >
                Applied ceramic coating for long-lasting protection.
              </li>
              <li
                style={{
                  marginBottom: "0.1875rem",
                }}
              >
                Sealed to provide hydrophobic and scratch-resistant finish.
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
              Why Choose Ceramic Coating?
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#333333",
                textAlign: "justify",
                margin: "0 0 0.5rem 0",
              }}
            >
              Ceramic coatings protect your vehicle from environmental
              contaminants, making it easier to clean, maintain a glossy finish, and
              maintain long-term durability.
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
              BIKE: Ceramic Protection Detail
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
              What is Ceramic Coating for Bikes?
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#333333",
                textAlign: "justify",
                margin: "0 0 0.5rem 0",
              }}
            >
              Ceramic coating is a hydrophobic protective layer that shields your
              bike's paint from dirt, water, and scratches while giving it a long-lasting
              glossy finish.
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
              Benefits of Ceramic Coating for Bikes
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
                Protects the bike from road debris and scratches.
              </li>
              <li
                style={{
                  marginBottom: "0.1875rem",
                }}
              >
                Maintains the original paint quality and enhances shine.
              </li>
              <li
                style={{
                  marginBottom: "0.1875rem",
                }}
              >
                Easier to clean and maintain the bike's appearance.
              </li>
              <li
                style={{
                  marginBottom: "0.1875rem",
                }}
              >
                Offers UV protection to prevent paint fading.
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
              Ceramic Coverage Options
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
              Contact us for a personalized ceramic coating package suited to your bike.
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
