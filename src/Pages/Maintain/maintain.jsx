import React, { useState } from 'react';
import './maintain.css';

export default function Maintain() {
  const [activeTab, setActiveTab] = useState(1);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const washPlans = [
    {
      title: '6 Wash Plan Details',
      description: '6 Washes a year (bi-monthly) including Level 2 detail at 6 months',
    },
    {
      title: '12 Wash Plan Details',
      description: '12 Washes a year (Once a month) including Level 2 detail at 6 months',
    },
    {
      title: '24 Wash Plan Details',
      description: '24 Washes a year (Twice a month) including Level 2 detail at 6 months',
    },
    {
      title: '52 Wash Plan Details',
      description: '52 Washes a year (Once a week) including a Level 2 detail at 6 months',
    },
  ];

  return (
    <div className="maintain-wrapper">
      <div className="maintain-hero">
        <h2 className="maintain-hero__title">
          <span className="maintain-hero__highlight">/</span> MAINTAIN
        </h2>
        <p className="maintain-hero__subtitle">Topaz Wash Plans</p>
        <div className="maintain-tabs">
          {[1, 2].map((tabNumber) => (
            <div
              key={tabNumber}
              className={`maintain-tab ${activeTab === tabNumber ? 'maintain-tab--active' : ''}`}
              onClick={() => handleTabClick(tabNumber)}
            >
              Tab {tabNumber}
            </div>
          ))}
        </div>
      </div>

      <div className="maintain-content">
        {[1, 2].map((tab) => (
          <div
            key={tab}
            className={`maintain-panel ${activeTab === tab ? 'maintain-panel--active' : ''}`}
          >
            <h2 className="maintain-panel__title">Wash Plan Options</h2>
            <div className="maintain-details">
              <div className="maintain-details__content">
                <div className="maintain-details__description">
                  <h2 className="maintain-details__section-title">Wash Plan Details</h2>
                  <p className="maintain-details__text">
                    The maintenance washes are a crucial part in maintaining the
                    integrity of your initial treatment. The ongoing washes include
                    all the processes necessary to maintain the longevity of the
                    protective layers. They also prevent any further damage to your
                    vehicle’s paint finish, such as scratches and scrapes.
                  </p>
                  <p className="maintain-details__text">
                    Paying for your wash plan in advance enables you to make
                    significant savings on normal retail prices. You’ll save 27% on
                    your washes, and 38% on the Level 2 detail at six months, which
                    is crucial for the maintenance of your protective coating. This
                    vital check enables us to spend more time decontaminating the
                    film, freshening up your vehicle, treating the leather and
                    sealing the car.
                    <br />
                    <br />
                    <strong>
                      ALL MAINTENANCE TREATMENTS ARE CURRENTLY ONLY AVAILABLE AT
                      TOPAZ DETAILING CENTRES.
                    </strong>
                  </p>
                </div>
                <div className="maintain-details__image-section">
                  <img
                    src="https://i.shgcdn.com/0ac37343-348c-42a4-be54-5482fa41e95e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                    alt="Wash Plan"
                    className="maintain-details__image"
                  />
                </div>
              </div>
              <div className="maintain-process">
                <div className="maintain-process__exterior">
                  <h2 className="maintain-details__section-title">Exterior</h2>
                  <p className="maintain-process__label">21 Stage Topaz Cleaning Process Including:</p>
                  <ul className="maintain-process__list">
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
                <div className="maintain-process__interior">
                  <h2 className="maintain-details__section-title">Interior</h2>
                  <ul className="maintain-process__list">
                    <li>Windows are cleaned on the inside.</li>
                    <li>
                      Interior trim and surfaces are all cleaned using aerospace–grade
                      products.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="maintain-plans">
        <div className="maintain-plans__container">
          {washPlans.map((plan, index) => (
            <div key={index} className="maintain-plan-card">
              <p className="maintain-plan-card__title">{plan.title}</p>
              <ul className="maintain-plan-card__list">
                <li>{plan.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="maintain-banner">
        <img
          src="https://i.shgcdn.com/1f9ae6c7-8573-492c-a4fc-eaf186e3d402/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="Topaz Service"
          className="maintain-banner__image"
        />
        <button className="maintain-banner__button">Enquire Now</button>
      </div>

      <div className="maintain-image">
        <img
          src="https://i.shgcdn.com/5f9018c8-5862-475b-834a-337690d76a2a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="Topaz Service"
          className="maintain-image__image"
        />
      </div>

      <div className="maintain-footer">
        <h2 className="maintain-footer__title">Vinyled.in</h2>
        <p className="maintain-footer__text">Follow Us @vinyled</p>
      </div>

      <div className="maintain-final-banner"></div>
    </div>
  );
}
