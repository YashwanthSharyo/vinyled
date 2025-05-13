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

  const tabs = [
    "Stage 1",
    "Stage 2",
    "Stage 3",
    "Stage 4",
    "Stage 5",
    "Stage 6",
  ];

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <Service
        title="Enhance"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs}
        tabWidth="230px"
      />

      {activeTab === 1 && (
        <div className="tab-content">
          <img
            src="https://i.shgcdn.com/8152b67e-9de6-4ffc-a37c-25cb1217482c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="PPF on car hood"
            className="tab-image"
          />
          <div className="text-section">
            <h2 className="main-title">Level 1 - Protection Detail</h2>
            <h2 className="section-title">
              Exterior – Cleaning/Cleansing/Decontamination
            </h2>
            <h4 className="sub-title">
              21 STAGE TOPAZ CLEANING PROCESS INCLUDING:
            </h4>
            <ul className="process-list">
              <li>
                The vehicle is washed using PH neutral shampoo using twin grit
                guard bucket system to prevent any stones and sharp edged
                particles being carried onto the car via wash mitt.
              </li>
              <li>
                Wheels are cleaned using a nonacidic citrus based cleaner and
                specially designed horse hair brushes.
              </li>
              <li>
                Door shuts, petrol cap, arches and lower sections parts will be
                cleaned (where accessible).
              </li>
              <li>
                The vehicle is hand dried using deep-pile microfibre towels.
              </li>
              <li>
                The paintwork is treated with a clay bar (mild or aggressive)
                removing bonded surface contaminants.
              </li>
              <li>
                Body solvent is applied to dissolve and remove tar, road grime,
                honey dew and bug splatter deposits and other petroleum based
                substances.
              </li>
              <li>Tyres are dressed.</li>
              <li>Exterior plastics and door trims are dressed.</li>
            </ul>
            <p className="sealant-title">SEALANT</p>
            <p className="sealant-text">
              Speak to our team for recommendations on ceramic coatings for the
              paintwork, windows, and wheels.
            </p>
            <h2 className="section-title">Interior</h2>
            <ul className="process-list interior-list">
              <li>Carpets vacuumed.</li>
              <li>Windows are cleaned on the inside.</li>
              <li>
                Interior trim and surfaces are all cleaned using aerospace-grade
                products.
              </li>
            </ul>
            <h2 className="section-title">
              Why choose the Level 1 Protection Detail?
            </h2>

            <p>
              The purpose of a Level 1 Detail is to decontaminate the paintwork
              or PPF (Paint Protection Film). Most commonly, a Level 1 Detail is
              used to detail satin paint (which cannot be machine polished) or
              as an ongoing maintenance detail. It doesn’t involve paint
              correction, and instead, is a thorough deep clean involving both
              chemical and mechanical decontamination.
            </p>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="tab-content">
          <img
            src="https://i.shgcdn.com/297bf929-a9fe-4ae1-afdc-acb9b92042f7/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Enhancement Detail on car"
            className="tab-image"
          />
          <div className="text-section">
            <h2 className="main-title">Level 2 - Enhancement Detail</h2>
            <h2 className="section-title">
              Exterior – Cleaning/Cleansing/Decontamination
            </h2>
            <h4 className="sub-title">
              24 STAGE TOPAZ CLEANING PROCESS INCLUDING:
            </h4>
            <ul className="process-list">
              <li>
                A layer of thick white foam is applied to the vehicle to help
                loosen, lift and remove dirt particles from the paintwork
                without inducing micro scratches.
              </li>
              <li>
                The vehicle is then blown dry with “Black Baron Vehicle Dryer”
                peak airflow rate of just over 330mph, eliminating water
                streaks.
              </li>
              <li>The engine bay is cleaned.</li>
            </ul>
            <h4 className="sub-title">
              PAINT CORRECTION – 70-80% CORRECTION FACTOR
            </h4>
            <ul className="process-list">
              <li>
                Paintwork is treated to a one-to-two stage correction process,
                to remove light paint imperfections, such as minor swirl marks
                to increase the gloss factor.
              </li>
              <li>
                Chrome and stainless steel surfaces are treated and protected.
              </li>
              <li>All light clusters are treated and protected.</li>
            </ul>
            <h2 className="section-title">Interior</h2>
            <p>
              The vehicle is deodorised using specially designed anti-bacterial
              treatment, which breaks down and eliminates bad odour and bacteria
              instead of masking them.
            </p>
            <h2 className="section-title">
              Why choose the Level 2 Enhancement Detail?
            </h2>

            <p>
              This is our entry level paint correction detail, which removes
              minor imperfections including fine swirls/scratches in the
              clearcoat/topcoat of the paint. It is perfect for new cars, or
              cars with dulled paint that need a refresh. This process results
              in 70% to 80% 'correction factor', it will not, however, remove
              any deeper scratches.
            </p>

            <p className="sealant-text">
              To seal freshly corrected paintwork we recommend Ceramic Coating
              for added glossiness, hydrophobic properties and easier
              maintenance or PPF for ultimate protection.
            </p>
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div className="tab-content">
          <img
            src="https://i.shgcdn.com/f432b83b-7fb0-4201-8036-08b66e7933c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Correction Detail on car"
            className="tab-image"
          />
          <div className="text-section">
            <h2 className="main-title">Level 3 - Correction Detail</h2>
            <h2 className="section-title">
              Exterior – Cleaning/Cleansing/Decontamination
            </h2>
            <h4 className="sub-title">
              PAINT CORRECTION – 80-95% CORRECTION FACTOR
            </h4>
            <ul className="process-list">
              <li>
                Paint thickness is measured using an ultrasonic paint depth
                gauge.
              </li>
              <li>
                Various lighting is used to establish the condition of the
                paintwork.
              </li>
              <li>
                Paintwork is treated to a three stage paint correction process
                to eliminate defects including medium swirl marks and holograms.
                Panels are alcohol wiped after every stage to ensure true
                correction. Exhaust tips are rejuvenated with specially designed
                metal compounds. Glass is treated with nano polish.
              </li>
            </ul>
            <h2 className="section-title">Interior</h2>
            <ul className="process-list interior-list">
              <li>
                Carpets are shampooed if necessary and dried using a wet suction
                vacuum cleaner.
              </li>
              <li>
                Specifically designed Alcantara cleaner is applied to revive the
                Alcantara fibres.
              </li>
              <li>
                All leather surfaces are cleansed and protected. Air vents,
                button surrounds and fascia are cleaned using specialised
                brushes.
              </li>
            </ul>
            <h2 className="section-title">
              Why choose the Level 3 Correction Detail?
            </h2>

            <p>
              This is our used vehicle three stage paint correction and interior
              detail, which removes medium imperfections including
              swirls/scratches in the clear coat of the paint. This process
              results in 80% to 95% 'correction factor'.
            </p>
            <p>
              The Level 3 Detail also includes a thorough rejuvenation of all
              chromatic and metal elements, e.g. the exhaust tips, door shuts,
              light and air clusters, washing of the interior and deodorisation,
              leather protection, nano polish of the glass inside and out, and
              more.
            </p>
            <p>
              This process is designed to bring out the best of a used car,
              getting the life back into the paintwork and looking as new as it
              possibly could!
            </p>
            <p>
              <em>
                This detailing level doesn't remove any scratches that have gone
                all the way through the paint.
              </em>
            </p>

            <p className="sealant-text bold">
              To seal freshly corrected paintwork we recommend Ceramic Coating
              for added glossiness, hydrophobic properties and easier
              maintenance or PPF for ultimate protection.
            </p>
          </div>
        </div>
      )}
      {activeTab === 4 && (
        <div className="tab-content">
          <img
            src="https://i.shgcdn.com/f84730ff-b168-4edf-bf06-55cb317626d5/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Ultimate Detail on car"
            className="tab-image"
          />
          <div className="text-section">
            <h2 className="main-title">Level 4 - Ultimate Detail</h2>
            <h2 className="section-title">
              Exterior – Cleaning/Cleansing/Decontamination
            </h2>
            <ul className="process-list">
              <li>Door shuts are cleansed.</li>
              <li>
                Wheels are removed, cleaned on the inside and cleansed, then all
                wheel nuts are torque set to the correct manufacturer’s
                specifications.
              </li>
              <li>Wheels are cleansed, polished and sealed inside and out.</li>
              <li>Engine bay is detailed.</li>
            </ul>
            <h4 className="sub-title paint-correction">
              PAINT CORRECTION – 95%-99% CORRECTION FACTOR
            </h4>
            <ul className="process-list">
              <li>Alloy wheels paint corrected.</li>
              <li>
                Paintwork is treated to a three-to-five stage paint correction
                process to eliminate defects such as heavy swirl marks,
                holograms and minor scratches.
              </li>
              <li>
                Deeper surface scratches are leveled using specifically designed
                finishing papers. Paintwork is checked using a digital
                microscope in specific areas.
              </li>
            </ul>
            <h2 className="section-title">Interior</h2>
            <ul className="process-list interior-list">
              <li>Safety belts are steam cleaned.</li>
              <li>
                All leather surfaces are cleaned, de-glossed, fed with essential
                oils and then protected with leather guard.
              </li>
            </ul>
            <h2 className="section-title">
              Why choose the Level 4 Ultimate Detail?
            </h2>

            <p>
              This detailing level is ideal if you wish to bring your car’s
              paint back to life. In addition to what we offer in our lower
              detailing levels, our Level 4 Detail includes an engine bay
              detail, underbody clean, wheels removed and polished and much
              more. With up to five stages of correction we can achieve up to a
              99% ‘correction factor’. This is the best possible detail to
              rejuvenate paintwork and create a ‘better than new’ finish.
            </p>

            <p className="sealant-text bold">
              To seal freshly corrected paintwork we recommend Ceramic Coating
              for added glossiness, hydrophobic properties and easier
              maintenance or PPF for ultimate protection.
            </p>
          </div>
        </div>
      )}
      {activeTab === 5 && (
        <div className="tab-content">
          <img
            src="https://i.shgcdn.com/509fdfbc-571b-4fc3-8ed7-efcc314d7ee4/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Signature Detail on car"
            className="tab-image"
          />
          <div className="text-section">
            <h2 className="main-title">Level 5 - Signature Detail</h2>
            <h4 className="sub-title">
              Paint Distortion (Orange Peel) Removal
            </h4>
            <h4 className="sub-title">UP TO 100% CORRECTION FACTOR</h4>
            <p>
              The focus of this service is to eliminate the inconsistent,
              distorted finish found in modern clear coats. Our Signature
              treatment focuses on improving the factory finish achieving a far
              superior standard.
            </p>
            <p>
              The process includes levelling the clear coat (lacquer) using a
              variety of specialist tools and eliminating the high points found
              on modern paint systems.
            </p>
            <p>
              Our expertise, knowledge and years of experience combine to give
              the Topaz Signature treatment its 100% success rate.
            </p>
            <h2 className="section-title">
              Why choose the Level 5 Signature Detail?
            </h2>

            <p>
              If you are striving for perfection in your paintwork then our
              Signature Detail is for you. ‘Orange peel’ or peaks and troughs in
              the clear coat add unwanted, distortion, texture and dullness to
              the paint. The Topaz Signature Detail will remove unwanted ‘orange
              peel’ texture achieving a glass like finish.
            </p>
            <p>
              Our Level 5 Detail is our Signature Detail which completely
              relevels the clear coat, refining and polishing it in five stages.
              This involves dry sanding, wet sanding, and paint correction. This
              treatment is perfect for a car you want to keep and cherish for
              many years.
            </p>

            <p className="sealant-text bold">
              To seal freshly corrected paintwork we recommend Ceramic Coating
              for added glossiness, hydrophobic properties and easier
              maintenance or PPF for ultimate protection.
            </p>
          </div>
        </div>
      )}
      {activeTab === 6 && (
        <div className="tab-content">
          <img
            src="https://i.shgcdn.com/43a7dc26-3cf8-4f01-a723-a5b1e692d684/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Sub Zero Detail on car"
            className="tab-image"
          />
          <div className="text-section">
            <h2 className="main-title">Level 6 - Dry Ice Blasting</h2>
            <h4 className="sub-title">
              Underbody/Engine Bay – Cleaning/Restoration
            </h4>
            <p>
              At Topaz we are known for our detailing, having offered our Level
              1 to 5 Details for over 12 years. In 2023 we took detailing to the
              next level: Sub Zero. Our Sub Zero detail is a form of ‘dry ice
              blasting’ which uses frozen CO2 pellets to transform your car,
              without damaging it. However, we are not talking about paintwork
              here, our Sub Zero detail goes underneath your car, removing years
              of road grime from the underbody, engine bay and suspension
              components, in many cases making them look like brand new again.
            </p>
            <h4 className="sub-title">What is Dry Ice Blasting?</h4>
            <p>
              Dry Ice Blasting is able to remove everything from dirt, grime and
              grease to rust/oxidisation, overspray and coatings (when desired).
              Better yet, this treatment is safe to use on paint, metal, plastic
              and rubber.
            </p>
            <p>
              This process works by blasting soft CO2 pellets at high pressure
              onto the surface in question. Upon contact the pellets immediately
              turn to gas, and the extreme temperature (-79°C) thermally shocks
              the contaminants, causing them to lose adhesion with the surface.
            </p>
            <p>
              We are also able to combine this treatment with any number of
              underbody coatings/sealants to make sure your car stays corrosion
              free and looking fresh, even underneath!
            </p>
            <h2 className="section-title">Why choose the Sub Zero Detail?</h2>

            <p>
              Dry ice blasting is not a new craft, however, at Topaz we have
              finessed the technique to guarantee that the service is always
              offered at the uncompromising Topaz standard, in line with our
              paint correction and paint protection services. We have the latest
              state of the art equipment coupled with a years of experimentation
              and testing to be able to offer the Ice Blasting like you’ve never
              seen it before.
            </p>
            <p>
              Underneath a car there are many sensitive components, coatings and
              lines that must not be damaged. We are very careful to never use
              excessive pressure on any part of the car to guarantee nothing is
              damaged or compromised, whilst still achieving the maximum effect
              and result. Your car will never have been treated so well or
              looked so good!
            </p>

            <p className="sealant-text">
              Currently we are offering our Sub Zero Detail at our HQ in North
              London, and to date we have transformed everything from classic
              911s to the latest Ferrari hypercars. Contact our team to find out
              what we could do for your car.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
