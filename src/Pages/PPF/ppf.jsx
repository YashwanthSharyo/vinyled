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
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg",
          alt: "PPF on car hood",
        },
        {
          src: "https://www.shutterstock.com/shutterstock/photos/2470779147/display_1500/stock-photo-worker-hands-installation-on-luxury-car-headlights-tpu-premium-ppf-film-ppf-cutting-software-2470779147.jpg",
          alt: "PPF on car headlights",
        }
      ],
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
        {
          src: "https://www.carzspa.com/wp-content/uploads/2024/12/dec-blog-2.webp",
          alt: "Bike PPF application 1",
        },
        {
          src: "https://cdn.dotpe.in/longtail/store-items/7253175/zHnHNwh8.webp",
          alt: "Bike PPF application 2",
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
        title="PPF"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
      />

      <div className="protection-container">
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
                    ? "https://videos.openai.com/vg-assets/assets%2Ftask_01jt7yxcc4ffs9jdaamcsx2wk5%2F1746171584_img_0.webp?st=2025-05-02T06%3A10%3A54Z&se=2025-05-08T07%3A10%3A54Z&sks=b&skt=2025-05-02T06%3A10%3A54Z&ske=2025-05-08T07%3A10%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=iYwsg9oSmf9Gr7KCk3GesDwiNizFwdlFt15ueEqzNsU%3D&az=oaivgprodscus"
                    : "https://tasdetailing.in/static/a0f140055db123cacdd4612735d7934e/5ba4c/DSC_3522.webp"
                }
                alt={tab === 1 ? "Car illustration" : "Bike illustration"}
                className="tab-image"
              />
            </div>

            {/* Text Section */}
            <div className="text-section">
              {tab === 1 ? (
                <>
                  <h2 className="section-title">CAR: Paint Protection Film (PPF) Service</h2>
                  <h3 className="section-subtitle">What is PPF?</h3>
                  <p className="description">
                    PPF is a special clear film that we put on your car to protect the paint. It helps stop scratches, stone chips, bird droppings, and other things that can damage your car’s shine. It’s like an invisible shield!
                  </p>
                  <h3 className="section-subtitle">How We Apply the Film</h3>
                  <ul className="process-list">
                    <li>
                      <strong>1. Clean the Car:</strong> We wash the car very well so there’s no dirt, dust, or marks left.
                    </li>
                    <li>
                      <strong>2. Smooth the Paint:</strong> We make the surface smooth so the film can stick properly.
                    </li>
                    <li>
                      <strong>3. Put the Film On:</strong> We gently place the clear film on the car and move it into the right position.
                    </li>
                    <li>
                      <strong>4. Remove Water & Air:</strong> We use a soft tool to push out any bubbles or water under the film.
                    </li>
                    <li>
                      <strong>5. Seal the Edges:</strong> We heat and press the edges so the film stays tight and clean.
                    </li>
                    <li>
                      <strong>6. Check Everything:</strong> We check every part to make sure it looks perfect with no bubbles or folds.
                    </li>
                  </ul>
                  <h3 className="section-subtitle">Why People Love PPF</h3>
                  <ul className="process-list">
                    <li>Keeps your car looking brand new</li>
                    <li>Stops small scratches and stone chips</li>
                    <li>Protects the paint from the sun and weather</li>
                    <li>Makes cleaning your car easier</li>
                    <li>Increases resale value of your car</li>
                  </ul>
                  <p className="highlight-text">Aftercare Tips</p>
                  <p className="description">
                    Don’t wash your car for 2–3 days after the film is applied. After that, use soft cloths and gentle shampoo. Avoid strong water jets near the film’s edges.
                  </p>
                  <h3 className="section-subtitle">Extra Options</h3>
                  <ul className="process-list">
                    <li>PPF for the full car or only the front parts (like bumper and bonnet)</li>
                    <li>Special ceramic coating to add extra shine and water protection</li>
                    <li>Matte (non-shiny) film for a stylish look</li>
                  </ul>
                  <h3 className="section-subtitle">Is It Worth It?</h3>
                  <p className="description">
                    Yes! PPF protects your car for years. It’s perfect if you love your car and want to keep it looking fresh and beautiful for a long time.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="section-title">BIKE: PPF Protection Detail</h2>
                  <h3 className="section-subtitle">What is PPF?</h3>
                  <p className="description">
                    Paint Protection Film (PPF) is a transparent, self-healing film that protects your bike from chips, scratches, and UV damage while keeping the paint looking fresh and glossy.
                  </p>
                  <h3 className="section-subtitle">Why Choose PPF for Bikes?</h3>
                  <ul className="process-list">
                    <li>Protects the tank and fairings from road debris and stone chips.</li>
                    <li>Preserves the original paint finish, maintaining your bike’s resale value.</li>
                    <li>Self-healing properties that automatically repair minor scuffs and scratches.</li>
                    <li>Precision-cut templates ensure a seamless and perfect fit on your bike.</li>
                  </ul>
                  <p className="highlight-text">Coverage Options</p>
                  <ul className="process-list">
                    <li>Full Bike Protection – covering the entire bike for maximum safety.</li>
                    <li>Partial Kit – protect key areas like the tank, fairings, and mudguard.</li>
                    <li>Helmet & Accessory Coverage – extra protection for helmets, mirrors, and other accessories.</li>
                  </ul>
                  <p className="description">
                    Contact us to create a customized PPF package tailored to your bike’s needs. Let us help you keep your ride looking like new!
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