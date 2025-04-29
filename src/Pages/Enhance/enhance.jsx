import React, { useState } from "react";
import "./enhance.css";

export default function Enhance() {
  const [activeTab, setActiveTab] = useState(1);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const faqData = [
    {
      question: "Question 1.1",
      answer: "Answer to question 1.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Question 1.2",
      answer: "Answer to question 1.2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 1.3",
      answer: "Answer to question 1.3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const tabStyle = (isActive) => ({
    padding: "0.625rem 1.25rem",
    cursor: "pointer",
    background: isActive ? "#DD0000" : "white",
    color: isActive ? "white" : "black",
    marginLeft: "-1.25rem",
    zIndex: isActive ? 2 : 1,
    position: "relative",
    borderRadius: "0.3125rem 0.3125rem 0 0",
    transition: "background 0.3s",
    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
    minWidth: "9.375rem",
    textAlign: "center",
  });

  return (
    <div className="enhance-container">
      <div className="banner-container">
        <h2 className="banner-title">
          <span className="title-highlight">/</span> ENHANCE
        </h2>
        <div className="tab-container">
          {[1, 2, 3, 4, 5, 6].map((tabNumber) => (
            <div
              key={tabNumber}
              className={`tab-item ${activeTab === tabNumber ? "active" : ""}`}
              style={tabStyle(activeTab === tabNumber)}
              onClick={() => handleTabClick(tabNumber)}
              onMouseOut={(e) =>
                (e.target.style.background = activeTab === tabNumber ? "#DD0000" : "white")
              }
            >
              Tab {tabNumber}
            </div>
          ))}
        </div>
      </div>

      <div className="main-wrapper">
        {[1, 2, 3, 4, 5, 6].map((tab) => (
          <div key={tab} className="tab-panel" style={{ display: activeTab === tab ? "flex" : "none" }}>
            <img
              src="https://i.shgcdn.com/8152b67e-9de6-4ffc-a37c-25cb1217482c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt={`Tab ${tab} illustration`}
              className="tab-image"
            />
            <div className="tab-details">
              <h2 className="main-heading">Level 1 - Protection Detail</h2>
              <h2 className="sub-heading">Exterior – Cleaning/Cleansing/Decontamination</h2>
              <h4 className="section-header">21 STAGE TOPAZ CLEANING PROCESS INCLUDING:</h4>
              <ul className="detail-list">
                <li className="detail-item">
                  The vehicle is washed using pH neutral shampoo with a twin grit guard bucket system to prevent any stones or sharp-edged particles from being carried onto the car via the wash mitt.
                </li>
                <li className="detail-item">
                  Wheels are cleaned using a non-acidic citrus-based cleaner and specially designed horse hair brushes.
                </li>
                <li className="detail-item">
                  Door shuts, petrol cap, arches, and lower sections are cleaned (where accessible).
                </li>
                <li className="detail-item">The vehicle is hand dried using deep-pile microfibre towels.</li>
                <li className="detail-item">
                  The paintwork is treated with a clay bar (mild or aggressive) to remove bonded surface contaminants.
                </li>
                <li className="detail-item">
                  Body solvent is applied to dissolve and remove tar, road grime, honey dew, bug splatter deposits, and other petroleum-based substances.
                  <ul className="sub-detail-list">
                    <li className="sub-detail-item">Tyres are dressed.</li>
                  </ul>
                </li>
                <li className="detail-item">Exterior plastics and door trims are dressed.</li>
              </ul>
              <p className="section-caption">Sealant</p>
              <p className="text-block">
                Speak to our team for recommendations on ceramic coatings for the paintwork, windows, and wheels.
              </p>
              <h2 className="sub-heading">Interior</h2>
              <ul className="detail-list">
                <li className="detail-item">Carpets vacuumed.</li>
                <li className="detail-item">Windows are cleaned on the inside.</li>
                <li className="detail-item">
                  Interior trim and surfaces are all cleaned using aerospace-grade products.
                </li>
              </ul>
              <h2 className="sub-heading">Why choose the Level 1 Protection Detail?</h2>
              <p className="text-block">
                The purpose of a Level 1 Detail is to decontaminate the paintwork or PPF (Paint Protection Film). Most commonly, a Level 1 Detail is used to detail satin paint (which cannot be machine polished) or as an ongoing maintenance detail. It doesn’t involve paint correction, and instead, is a thorough deep clean involving both chemical and mechanical decontamination.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-container">
        <div className="faq-section">
          <h2 className="faq-title">FAQs</h2>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="accordion">
                <div onClick={() => toggleAccordion(index)} className="accordion-header">
                  {item.question}
                  <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && (
                  <div className="accordion-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="image-section">
          <img
            src="https://i.shgcdn.com/8ef12e42-d9f0-486c-aff1-9ac2c3b6963f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="FAQ Illustration"
            className="faq-image"
          />
        </div>
      </div>

      <div className="banner"></div>
    </div>
  );
}