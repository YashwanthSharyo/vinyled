import React, { useState } from "react";
import "./protect.css";

import Service from "../../components/Service/service";
import Gallery from "../../components/Gallery/gallery";

export default function Protect() {
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

  const tabs = ["PPF", "Ceramic", "Graphene Coating"];

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
        title="PROTECT"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs} // Pass the tabs array to Service component
      />

      <div className="protect-wrap-container">
        {tabs.map((_, index) => {
          const tab = index + 1; // Map index to 1-based tab number
          return (
            <div
              key={tab}
              className={`protect-content-tab ${activeTab === tab ? "active" : ""}`}
              role="tabpanel"
              aria-hidden={activeTab !== tab}
            >
              {/* Image Section */}
              <div className="protect-content-image">
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
                  className="protect-image"
                />
              </div>

              {/* Text Section */}
              <div className="protect-content-text">
                {tab === 1 ? (
                  <>
                    <h2 className="protect-title">PPF</h2>
                    <h3 className="protect-subtitle">Paint Protection Film</h3>
                    <p className="protect-text">
                      Paint Protection Film (PPF) is a transparent, durable
                      layer that safeguards your vehicle’s paint from damage
                      while preserving its original finish.
                    </p>

                    <h3 className="protect-subtitle">PPF Application Process</h3>
                    <ul className="protect-list">
                      <li>
                        Clean the vehicle with soap and isopropyl alcohol for
                        optimal adhesion.
                      </li>
                      <li>
                        Cut high-quality PPF (e.g., XPEL or 3M) to fit panels
                        using precision templates.
                      </li>
                      <li>
                        Apply the film with a squeegee, smoothing bubbles and
                        aligning edges.
                      </li>
                      <li>
                        Seal edges with heat for a durable, seamless bond.
                      </li>
                      <li>
                        Inspect the vehicle to ensure a flawless, self-healing
                        finish.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">Benefits of PPF</h3>
                    <ul className="protect-list">
                      <li>
                        Protects against scratches, stone chips, bug splatter,
                        and UV damage.
                      </li>
                      <li>
                        Self-healing technology repairs minor scratches with
                        heat.
                      </li>
                      <li>
                        Preserves resale value by protecting the original paint.
                      </li>
                      <li>
                        Invisible finish maintains the vehicle’s natural shine.
                      </li>
                      <li>
                        Long-lasting durability with warranties up to 7–10
                        years.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>
                        Full vehicle coverage for comprehensive protection.
                      </li>
                      <li>
                        High-impact zones like hood, front bumper, tank, or
                        fairings.
                      </li>
                      <li>
                        Side panels and mirrors to guard against road debris.
                      </li>
                      <li>
                        Interior accents like glossy trim for added durability.
                      </li>
                      <li>
                        Installed in a controlled, clean facility for precision.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">Tips for Maintaining PPF</h3>
                    <ul className="protect-list">
                      <li>
                        Wash regularly with mild soap to keep the film clean and
                        effective.
                      </li>
                      <li>
                        Avoid abrasive cleaners or brushes that could damage the
                        film.
                      </li>
                      <li>
                        Apply heat (e.g., warm water) to activate self-healing
                        for minor scratches.
                      </li>
                    </ul>

                    <p className="protect-text">
                      Contact us to protect your vehicle with a custom PPF
                      solution!
                    </p>
                  </>
                ) : tab === 2 ? (
                  <>
                    <h2 className="protect-title">Ceramic</h2>
                    <h3 className="protect-subtitle">Ceramic Coating</h3>
                    <p className="protect-text">
                      Ceramic coatings provide a durable, hydrophobic layer that
                      protects your vehicle’s paint and enhances its shine,
                      offering long-lasting beauty and ease of maintenance.
                    </p>

                    <h3 className="protect-subtitle">
                      Ceramic Coating Application Process
                    </h3>
                    <ul className="protect-list">
                      <li>
                        Wash, decontaminate, and polish the vehicle to ensure a
                        smooth base.
                      </li>
                      <li>
                        Correct minor scratches and blemishes for optimal
                        coating adhesion.
                      </li>
                      <li>
                        Apply high-quality ceramic coating (e.g., Gtechniq,
                        Ceramic Pro) in even layers.
                      </li>
                      <li>
                        Allow the coating to cure for 24–48 hours in a
                        controlled environment.
                      </li>
                      <li>
                        Inspect for a glossy, protected finish, adding layers if
                        needed.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">
                      Benefits of Ceramic Coating
                    </h3>
                    <ul className="protect-list">
                      <li>
                        Protects against UV rays, oxidation, bird droppings, and
                        chemical stains.
                      </li>
                      <li>
                        Hydrophobic properties repel water, dirt, and grime for
                        easy cleaning.
                      </li>
                      <li>
                        Enhances paint depth and shine for a showroom-quality
                        appearance.
                      </li>
                      <li>
                        Durable protection lasting 2–7 years, reducing waxing
                        needs.
                      </li>
                      <li>
                        Saves on maintenance costs by minimizing cleaning time.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>
                        Full exterior coverage for comprehensive protection and
                        gloss.
                      </li>
                      <li>
                        High-exposure areas like hoods, bumpers, tanks, or
                        fairings.
                      </li>
                      <li>
                        Wheels and calipers to resist brake dust and grime.
                      </li>
                      <li>Glass and trim to repel water and resist fading.</li>
                      <li>
                        Applied in a controlled, dust-free studio for precision.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">
                      Tips for Maintaining Ceramic Coating
                    </h3>
                    <ul className="protect-list">
                      <li>
                        Wash with pH-neutral soap to preserve the coating’s
                        integrity.
                      </li>
                      <li>
                        Use a microfiber cloth to avoid scratches during
                        cleaning.
                      </li>
                      <li>
                        Apply a ceramic booster every 3–6 months to enhance
                        hydrophobicity.
                      </li>
                    </ul>

                    <p className="protect-text">
                      Contact us to elevate your vehicle with a premium ceramic
                      coating!
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="protect-title">Graphene Coating</h2>
                    <h3 className="protect-subtitle">What is Graphene Coating?</h3>
                    <p className="protect-text">
                      Graphene Coating is an advanced protective layer infused
                      with graphene nanoparticles, offering superior durability,
                      hydrophobicity, and shine compared to traditional
                      coatings, protecting your vehicle while enhancing its
                      appearance.
                    </p>

                    <h3 className="protect-subtitle">
                      Graphene Coating Application Process
                    </h3>
                    <ul className="protect-list">
                      <li>
                        Wash, decontaminate, and polish the vehicle to create a
                        pristine base.
                      </li>
                      <li>
                        Correct minor scratches and blemishes for optimal
                        adhesion.
                      </li>
                      <li>
                        Apply premium graphene coating (e.g., Adam’s Graphene,
                        Ethos) in even layers.
                      </li>
                      <li>
                        Allow the coating to cure for 24–48 hours in a dust-free
                        environment.
                      </li>
                      <li>
                        Inspect for a glossy, protected finish, adding layers if
                        needed.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">
                      Benefits of Graphene Coating
                    </h3>
                    <ul className="protect-list">
                      <li>
                        Unmatched durability, resisting scratches and chemicals
                        for 7–10 years.
                      </li>
                      <li>
                        Superior hydrophobicity for easy cleaning and water
                        repellency.
                      </li>
                      <li>
                        Enhanced gloss and depth for a premium, showroom-quality
                        shine.
                      </li>
                      <li>
                        Thermal resistance protects against heat and UV
                        degradation.
                      </li>
                      <li>
                        Reduced maintenance saves time and costs on cleaning.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">Application Areas</h3>
                    <ul className="protect-list">
                      <li>
                        Full exterior coverage for comprehensive protection and
                        shine.
                      </li>
                      <li>
                        High-wear areas like hoods, bumpers, tanks, or fairings.
                      </li>
                      <li>
                        Wheels and exhausts to resist brake dust, heat, and
                        corrosion.
                      </li>
                      <li>
                        Glass and plastic trim to improve water repellency and
                        resist fading.
                      </li>
                      <li>
                        Applied in a controlled, clean studio for precision.
                      </li>
                    </ul>

                    <h3 className="protect-subtitle">
                      Tips for Maintaining Graphene Coating
                    </h3>
                    <ul className="protect-list">
                      <li>
                        Wash with pH-neutral soap to preserve the coating’s
                        performance.
                      </li>
                      <li>
                        Use microfiber towels to avoid micro-scratches during
                        cleaning.
                      </li>
                      <li>
                        Apply a graphene maintenance spray every 4–6 months to
                        boost protection.
                      </li>
                    </ul>

                    <p className="protect-text">
                      Contact us to safeguard your vehicle with a
                      state-of-the-art graphene coating!
                    </p>
                  </>
                )}
              </div>

              {/* Gallery Section */}
              {(tab === 1 || tab === 2 || tab === 3) && (
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