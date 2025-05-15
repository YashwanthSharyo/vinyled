import React, { useState } from "react";
import "./maintain.css";
import Service from "../../components/Service/service";

export default function Maintain() {
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

  const tabs = ["Wash", "Detailing"];

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <Service
        title="Maintain"
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleTabMouseEnter={handleTabMouseEnter}
        handleTabMouseLeave={handleTabMouseLeave}
        tabs={tabs}
        tabWidth="300px"
      />

      {activeTab === 1 && (
        <>
          <div className="title-container">
            <h2 className="wash-title">Wash Plan Options</h2>
          </div>
          <div className="wash-plan-content">
            <div className="wash-plan-row">
              <div className="wash-text-section">
                <h2 className="wash-plan-details-title">Wash Plan Details</h2>
                <div className="wash-plan-text">
                  <p>
                    The maintenance washes are a crucial part in maintaining the
                    integrity of your initial treatment. The ongoing washes include
                    all the processes necessary to maintain the longevity of the
                    protective layers. They also prevent any further damage to your
                    vehicle’s paint finish, such as scratches and scrapes.
                  </p>
                  <p>
                    Paying for your wash plan in advance enables you to make
                    significant savings on normal retail prices. You’ll save{" "}
                    <strong>27%</strong> on your washes, and{" "}
                    <strong>38%</strong> on the Level 2 detail at six months, which
                    is crucial for the maintenance of your protective coating. This
                    vital check enables us to spend more time decontaminating the
                    film, freshening up your vehicle, treating the leather and
                    sealing the car.
                    <br />
                    <br />
                    <strong>
                      ALL MAINTENANCE TREATMENTS ARE CURRENTLY ONLY AVAILABLE AT
                      VINYLE'D DETAILING CENTRES.
                    </strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="wash-image-section">
                <img
                  src="https://i.shgcdn.com/0ac37343-348c-42a4-be54-5482fa41e95e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt="Wash Plan"
                  className="wash-image"
                />
              </div>
            </div>
            <div className="wash-details-section">
              <h2 className="section-title">Exterior</h2>
              <div>
                <p className="sub-title">
                  21 STAGE VINYLE'D CLEANING PROCESS INCLUDING:
                </p>
                <ul className="process-list">
                  <li>
                    The vehicle is washed using PH neutral shampoo using twin grit
                    guard bucket system to prevent any stones and sharp edge
                    particles being carried onto the car via the wash mitt.
                  </li>
                  <li>
                    Snow foam is applied to lift any dirt and grit from the
                    paintwork.
                  </li>
                  <li>
                    Wheels are cleaned using a non-acidic citrus based cleaner and
                    specially designed horse hair brushes.
                  </li>
                  <li>
                    Door shuts, petrol cap, arches and lower sections are cleaned
                    (where accessible).
                  </li>
                  <li>
                    The vehicle is hand dried using deep pile microfibre towels.
                  </li>
                </ul>
              </div>
              <h2 className="section-title">Interior</h2>
              <div>
                <ul className="process-list">
                  <li>Windows are cleaned on the inside.</li>
                  <li>
                    Interior trim and surfaces are all cleaned using aerospace –
                    grade products.
                  </li>
                </ul>
              </div>
            </div>
          </div>
           <div className="wash-plans-section">
              <div className="wash-plans-row">
                <div className="wash-plan-column">
                  <h2 className="section-title">6 Wash Plan Details</h2>
                  <p className="wash-plan-text uppercase">
                    6 Washes a year <strong>(bi-monthly)</strong> including Level 2
                    detail at 6 months
                  </p>
                </div>
                <div className="wash-plan-column">
                  <h2 className="section-title">12 Wash Plan Details</h2>
                  <p className="wash-plan-text uppercase">
                    12 Washes a year <strong>(Once a month)</strong> including Level
                    2 detail at 6 months
                  </p>
                </div>
              </div>
              <div className="wash-plans-row">
                <div className="wash-plan-column">
                  <h2 className="section-title">24 Wash Plan Details</h2>
                  <p className="wash-plan-text uppercase">
                    24 Washes a year <strong>(Twice a month)</strong> including
                    Level 2 detail at 6 months
                  </p>
                </div>
                <div className="wash-plan-column">
                  <h2 className="section-title">52 Wash Plan Details</h2>
                  <p className="wash-plan-text uppercase">
                    52 Washes a year <strong>(Once a week)</strong> including a
                    Level 2 detail at 6 months
                  </p>
                </div>
              </div>
            </div>
        </>
      )}

      {activeTab === 2 && (
        <>
          <div className="title-container">
            <h2 className="wash-title">Detailing Plan Options</h2>
          </div>
          <div className="detailing-content">
            <div className="detailing-row">
              <div className="detailing-text-section">
                <h2 className="wash-plan-details-title">Detailing Plan Details</h2>
                <div className="wash-plan-text">
                  <p>
                    Our maintenance detailing plans are designed to keep your vehicle in pristine condition, preserving the results of your initial treatment. These plans include comprehensive cleaning, decontamination, and protection processes to maintain the integrity of your vehicle’s paint, PPF, or ceramic coatings, while preventing damage like swirl marks or scratches.
                  </p>
                  <p>
                    By subscribing to a detailing plan, you benefit from significant cost savings compared to individual services. You’ll save <strong>25%</strong> on detailing sessions and <strong>35%</strong> on a Level 2 enhancement detail every six months, ensuring your vehicle’s protective layers are refreshed and maintained. Our plans allow us to thoroughly decontaminate, polish, and seal your car, keeping it looking showroom-ready.
                    <br />
                    <br />
                    <strong>
                      ALL MAINTENANCE DETAILING TREATMENTS ARE CURRENTLY ONLY AVAILABLE AT VINYLE'D DETAILING CENTRES.
                    </strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="detailing-image-section">
                <img
                  src="https://i.shgcdn.com/297bf929-a9fe-4ae1-afdc-acb9b92042f7/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt="Detailing Plan"
                  className="wash-image"
                />
              </div>
            </div>
            <div className="wash-details-section">
              <h2 className="section-title">Exterior</h2>
              <div>
                <p className="sub-title">
                  24 STAGE VINYLE'D DETAILING PROCESS INCLUDING:
                </p>
                <ul className="process-list">
                  <li>
                    Pre-wash with snow foam to lift dirt and contaminants from the paintwork.
                  </li>
                  <li>
                    Vehicle washed with pH-neutral shampoo using a twin grit guard bucket system to prevent scratches.
                  </li>
                  <li>
                    Wheels cleaned with non-acidic citrus-based cleaner and horsehair brushes for delicate surfaces.
                  </li>
                  <li>
                    Chemical decontamination using a clay bar to remove bonded contaminants like tar and tree sap.
                  </li>
                  <li>
                    Vehicle dried with high-powered air dryer to eliminate water spots.
                  </li>
                  <li>
                    Application of a quick detailer or sealant to enhance gloss and protect the paint.
                  </li>
                </ul>
              </div>
              <h2 className="section-title">Interior</h2>
              <div>
                <ul className="process-list">
                  <li>
                    Vacuuming of carpets, seats, and trunk to remove dust and debris.
                  </li>
                  <li>
                    Interior surfaces cleaned with aerospace-grade products for a spotless finish.
                  </li>
                  <li>
                    Leather surfaces cleaned and conditioned to prevent cracking.
                  </li>
                  <li>
                    Windows polished for crystal-clear visibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}