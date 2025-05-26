import React, { useState } from "react";
import "./enhance.css";
import Service from "../../components/Service/service";

export default function Enhance() {
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

  const tabs = ["Detailing", "Ceramic Coating", "Graphene Coating"];

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <Service
        title="ENHANCE"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs}
        tabWidth="300px"
      />

      {activeTab === 1 && (
        <div className="enhance-tab-content">
          <img
            src="./Images/enhance_2.JPG"
            alt="PPF on car hood"
            className="enhance-tab-image"
          />
          <div className="enhance-text-section">
            <h2 className="enhance-main-title">Premium Vehicle Detailing</h2>
            <h2 className="enhance-section-title">
              Exterior Vehicle Detailing
            </h2>
            <h4 className="enhance-sub-title">
              COMPLETE EXTERIOR DETAILING PROCESS
            </h4>
            <ul className="enhance-process-list">
              <li>
                Pre-wash with citrus foam to remove loose dirt and grime safely.
              </li>
              <li>
                Two-bucket hand wash with pH-neutral shampoo to avoid swirl
                marks.
              </li>
              <li>
                Wheels cleaned with non-acidic cleaner and soft brushes for a
                sparkling finish.
              </li>
              <li>
                Door frames, wheel arches, and hard-to-reach areas thoroughly
                cleaned.
              </li>
              <li>
                Clay bar treatment to remove tar, tree sap, and other stuck-on
                contaminants.
              </li>
              <li>
                Hand-dried with soft microfibre towels to prevent scratches.
              </li>
              <li>
                High-quality wax or sealant applied for UV protection and
                showroom-like shine.
              </li>
              <li>
                Tyres and exterior plastic trims dressed for a neat, polished
                look.
              </li>
            </ul>
            <p className="enhance-sealant-title">OPTIONAL ADD-ONS</p>
            <p className="enhance-sealant-text">
              Ask our team about ceramic coatings, glass sealants, or wheel
              protectants to enhance your vehicle’s protection.
            </p>
            <h2 className="enhance-section-title">
              Interior Vehicle Detailing
            </h2>
            <ul className="enhance-process-list enhance-interior-list">
              <li>Thorough vacuuming of carpets, seats, and boot.</li>
              <li>
                Interior surfaces cleaned and conditioned with high-quality
                products.
              </li>
              <li>Windows cleaned for a crystal-clear, streak-free finish.</li>
              <li>
                Leather seats cleaned and conditioned to keep them soft and
                durable.
              </li>
            </ul>
            <h2 className="enhance-section-title">
              Why Choose Our Vehicle Detailing?
            </h2>
            <p>
              Our premium vehicle detailing service restores your vehicle’s
              shine and protects its surfaces. Perfect for all vehicles, this
              service focuses on deep cleaning and protection, ideal for
              maintaining paint protection films or matte finishes. Regular
              vehicle detailing keeps your vehicle looking brand new and helps
              retain its resale value.
            </p>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="enhance-tab-content">
          <img
            src="./Images/enhance_3.jpg"
            alt="Enhancement Detail on car"
            className="enhance-tab-image"
          />
          <div className="enhance-text-section">
            <h2 className="enhance-main-title">Premium Ceramic Coating</h2>
            <h2 className="enhance-section-title">
              Exterior Preparation & Application
            </h2>
            <h4 className="enhance-sub-title">
              COMPREHENSIVE CERAMIC COATING PROCESS
            </h4>
            <ul className="enhance-process-list">
              <li>
                Pre-wash with citrus foam to lift dirt and grime safely from the
                vehicle’s surface.
              </li>
              <li>
                Two-bucket hand wash with pH-neutral shampoo to ensure a clean,
                swirl-free base.
              </li>
              <li>
                Clay bar treatment to remove bonded contaminants like tar, tree
                sap, and industrial fallout.
              </li>
              <li>
                Single-stage polish to enhance gloss and prepare the paint for
                coating adhesion.
              </li>
              <li>
                Application of premium ceramic coating for long-lasting
                protection and hydrophobic properties.
              </li>
              <li>
                Wheels coated with specialised ceramic sealant for durability
                and easy cleaning.
              </li>
              <li>
                Glass surfaces treated with ceramic-based sealant for improved
                visibility and water repellency.
              </li>
              <li>
                Final inspection to ensure a flawless, showroom-like shine.
              </li>
            </ul>
            <h4 className="enhance-sub-title">
              ADDITIONAL PROTECTIVE TREATMENTS
            </h4>
            <ul className="enhance-process-list">
              <li>
                Tyres dressed with UV-protectant dressing for a sleek,
                long-lasting finish.
              </li>
              <li>
                Exterior plastic trims coated to prevent fading and maintain a
                polished look.
              </li>
              <li>
                Chrome or metal surfaces treated to resist corrosion and enhance
                shine.
              </li>
            </ul>
            <h2 className="enhance-section-title">Interior Protection</h2>
            <p>
              Interior surfaces are treated with a protective coating to repel
              spills and stains, while leather seats are conditioned to stay
              soft and resistant to wear.
            </p>
            <h2 className="enhance-section-title">
              Why Choose Our Ceramic Coating?
            </h2>
            <p>
              Our premium ceramic coating service provides your vehicle with
              advanced protection against UV rays, scratches, and environmental
              contaminants. It enhances gloss, ensures a showroom-like shine,
              and makes maintenance effortless with its hydrophobic properties.
              Ideal for vehicles with paint protection films or those seeking
              long-term protection, this service boosts durability and retains
              resale value.
            </p>
            <p className="enhance-sealant-text">
              For ultimate protection, ask our team about combining ceramic
              coating with paint protection film (PPF) or specialised wheel and
              glass coatings.
            </p>
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div className="enhance-tab-content">
          <img
            src="./Images/enhance_4.JPG"
            alt="Correction Detail on car"
            className="enhance-tab-image"
          />
          <div className="enhance-text-section">
            <h2 className="enhance-main-title">Premium Graphene Coating</h2>
            <h2 className="enhance-section-title">
              Exterior Preparation & Application
            </h2>
            <h4 className="enhance-sub-title">
              COMPREHENSIVE GRAPHENE COATING PROCESS
            </h4>
            <ul className="enhance-process-list">
              <li>
                Pre-wash with citrus foam to safely lift dirt and grime from the
                vehicle’s surface.
              </li>
              <li>
                Two-bucket hand wash with pH-neutral shampoo to ensure a
                swirl-free base.
              </li>
              <li>
                Clay bar treatment to remove bonded contaminants like tar, tree
                sap, and industrial fallout.
              </li>
              <li>
                Paint thickness measured with a digital gauge to assess coating
                suitability.
              </li>
              <li>
                Single-stage polish to remove minor swirl marks and enhance
                gloss for optimal coating adhesion.
              </li>
              <li>
                Application of advanced graphene coating for superior
                durability, heat resistance, and hydrophobic properties.
              </li>
              <li>
                Wheels and glass treated with graphene-based sealants for
                enhanced protection and easy maintenance.
              </li>
              <li>
                Final inspection to ensure a flawless, showroom-like shine.
              </li>
            </ul>
            <h2 className="enhance-section-title">Interior Protection</h2>
            <ul className="enhance-process-list enhance-interior-list">
              <li>
                Interior surfaces coated with graphene-infused protectant to
                repel stains and spills.
              </li>
              <li>
                Leather seats cleaned and treated to maintain softness and
                resist wear.
              </li>
              <li>
                Windows cleaned inside and out for a crystal-clear, streak-free
                finish.
              </li>
            </ul>
            <h2 className="enhance-section-title">
              Why Choose Our Graphene Coating?
            </h2>
            <p>
              Our premium graphene coating service offers cutting-edge
              protection for your vehicle, shielding it from UV rays, minor
              scratches, and environmental contaminants. The graphene coating
              provides exceptional durability, heat resistance, and a slick,
              showroom-like shine that lasts longer than traditional coatings.
              Ideal for vehicles with paint protection films or those seeking
              top-tier protection, this service simplifies maintenance and
              boosts resale value.
            </p>
            <p>
              The process includes thorough surface preparation, application of
              graphene coating to paint, wheels, and glass, and interior
              protection to keep your vehicle in pristine condition. It enhances
              the appearance and longevity of your vehicle, making it look brand
              new.
            </p>
            <p>
              <em>
                This coating does not repair deep scratches that penetrate the
                paint layer.
              </em>
            </p>
            <p className="enhance-sealant-text enhance-bold">
              For ultimate protection, ask our team about combining graphene
              coating with paint protection film (PPF) or specialised wheel and
              glass treatments.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
