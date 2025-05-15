import React, { useState } from "react";
import "./customProject.css";

import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function CustomProject() {
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

  const tabs = ["Coloured PPF", " ReSpray And Interiors"];

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
  };

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Service
        title="Custom Project"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs}
        tabWidth={"300px"}
      />

      <div className="customProject-container">
        {tabs.map((_, index) => {
          const tab = index + 1;
          return (
            <div
              key={tab}
              className={`customProject-tabContent ${
                activeTab === tab ? "active" : ""
              }`}
              role="tabpanel"
              aria-hidden={activeTab !== tab}
            >
              <div className="customProject-tabImage">
                <img
                  src={
                    tab === 1
                      ? "https://autodesignmagazine.com/wp-content/uploads/2019/04/Polestar-2_web.jpg"
                      : "https://www.shutterstock.com/shutterstock/photos/2367800287/display_1500/stock-photo-dubai-united-arab-emirates-september-th-paint-protection-film-applied-on-the-hood-of-a-2367800287.jpg"
                  }
                  alt={
                    tab === 1
                      ? "Car Color Change Wrap"
                      : "Color PPF Application"
                  }
                  className="image"
                />
              </div>

              <div className="customProject-tabText">
                {tab === 1 ? (
                  <>
                    <h2 className="customProject-mainTitle">Coloured PPF</h2>
                    <h3 className="customProject-sectionTitle">
                      Coloured Paint Protection Film
                    </h3>
                    <p className="customProject-description">
                      Coloured Paint Protection Film (PPF) combines the
                      protective benefits of traditional PPF with vibrant color
                      options, allowing you to personalize and safeguard your
                      vehicle's appearance.
                    </p>

                    <h3 className="customProject-sectionTitle">
                      Coloured PPF Application Process
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Thoroughly wash and decontaminate the vehicle for proper
                        film adhesion.
                      </li>
                      <li>
                        Choose from a range of premium coloured PPFs like satin
                        black, matte grey, or gloss red.
                      </li>
                      <li>
                        Use precision cutting tools or templates to match the
                        exact panel shapes.
                      </li>
                      <li>
                        Apply the coloured film carefully, eliminating bubbles
                        and aligning edges.
                      </li>
                      <li>
                        Heat-seal the film edges to ensure a seamless,
                        long-lasting bond.
                      </li>
                    </ul>

                    <h3 className="customProject-sectionTitle">
                      Benefits of Coloured PPF
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Combines color customization with industry-leading paint
                        protection.
                      </li>
                      <li>
                        Offers scratch resistance, UV protection, and
                        self-healing technology.
                      </li>
                      <li>
                        Eliminates the need for repainting or full vinyl wraps.
                      </li>
                      <li>
                        Available in gloss, matte, satin, and metallic finishes.
                      </li>
                      <li>
                        Enhances aesthetics while preserving original paint
                        underneath.
                      </li>
                    </ul>

                    <h3 className="customProject-sectionTitle">
                      Popular Application Areas
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Entire body panels for a full color change with
                        protection.
                      </li>
                      <li>
                        Hoods, bumpers, mirrors, and door handles for visual
                        accents.
                      </li>
                      <li>
                        Motorbike tanks and fairings for custom styling and
                        durability.
                      </li>
                      <li>
                        Roof wraps and trunk lids for bold design contrasts.
                      </li>
                    </ul>

                    <h3 className="customProject-sectionTitle">
                      Coloured PPF Maintenance Tips
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Use pH-neutral car shampoos to clean the film safely.
                      </li>
                      <li>
                        Avoid harsh chemicals and abrasive sponges or brushes.
                      </li>
                      <li>
                        Use heat (e.g., sun or warm water) to activate the
                        self-healing effect.
                      </li>
                      <li>Dry with microfiber towels to avoid swirl marks.</li>
                    </ul>

                    <p className="customProject-description">
                      Contact us today to explore Coloured PPF options and give
                      your vehicle a bold, protected finish!
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="customProject-mainTitle">
                      ReSpray & Interiors
                    </h2>

                    <h3 className="customProject-sectionTitle">
                      ReSpray Service
                    </h3>
                    <p className="customProject-description">
                      Our in-house paint studio allows us to mix any car paint
                      colour. This means we are able to professionally restore
                      the paintwork on any car, fixing damages such as stone
                      chips, scratches, yellowing, blistering and even rust. We
                      paint cars with micron precision, making the finish
                      indistinguishable from a factory job.
                    </p>

                    <h3 className="customProject-sectionTitle">
                      ReSpray Application Process
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Thorough vehicle cleaning and prep, including stripping
                        down panels if necessary.
                      </li>
                      <li>
                        Use of our in-house spray booth for dust-free,
                        high-precision resprays.
                      </li>
                      <li>
                        Paint mixing capabilities for exact OEM or custom
                        colours.
                      </li>
                      <li>
                        Micron-level spraying for a flawless, factory-quality
                        finish.
                      </li>
                      <li>
                        Full inspection and polishing for a showroom-ready look.
                      </li>
                    </ul>

                    <h3 className="customProject-sectionTitle">
                      Benefits of a Full Respray
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Professional correction of chips, scratches, rust, and
                        faded areas.
                      </li>
                      <li>
                        Factory-matching or full colour-change options for total
                        transformation.
                      </li>
                      <li>
                        Durable finish that protects and enhances resale value.
                      </li>
                      <li>
                        Undetectable results—even the manufacturer wouldn't know
                        it’s not original.
                      </li>
                      <li>
                        Perfect for restoration or complete visual overhaul.
                      </li>
                    </ul>

                    <h3 className="customProject-sectionTitle">
                      Interior Customisation
                    </h3>
                    <p className="customProject-description">
                      We are able to restore and retrim any interior using the
                      finest leathers or materials of your choice. Whether
                      you're going for a subtle upgrade or a complete redesign,
                      we deliver a bespoke experience tailored to your vision.
                    </p>

                    <h3 className="customProject-sectionTitle">
                      What: Interior Customisation Options
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Full retrims using premium leather, alcantara, or custom
                        materials.
                      </li>
                      <li>
                        Matching your new paint finish for a cohesive design.
                      </li>
                      <li>
                        Complete overhauls from dashboard to door cards and even
                        stalks.
                      </li>
                      <li>
                        Steering wheel reshaping and trimming to match your
                        aesthetic.
                      </li>
                      <li>
                        Custom stitching, embossing, and detailing available on
                        request.
                      </li>
                    </ul>

                    <h3 className="customProject-sectionTitle">
                      Service Duration
                    </h3>
                    <ul className="customProject-infoList">
                      <li>
                        Typical turnaround time: 10–20 days, depending on the
                        scope of the job.
                      </li>
                    </ul>

                    <p className="customProject-description">
                      Whether restoring or reinventing, our ReSpray & Interiors
                      service delivers factory-level quality with completely
                      customised results. Contact us to start your
                      transformation journey.
                    </p>
                  </>
                )}
              </div>

              {(tab === 1 || tab === 2) && (
                <Gallery
                  images={galleryData[tab].images}
                  largeImage={galleryData[tab].largeImage}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
