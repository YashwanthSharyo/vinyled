import React, { useState } from "react";
import "./protect.css";

export default function Protect() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose digital marketing agencies in Bangalore?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, felis quis viverra mattis, quam mi elementum ipsum, lacinia blandit ipsum massa a elit...",
    },
    {
      question:
        "What is the difference between white hat and black hat SEO techniques?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, felis quis viverra mattis, quam mi elementum ipsum, lacinia blandit ipsum massa a elit...",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabs = [
    { title: "Level 1", id: "tab-573030cc-5fb9-46ac-ad58-20ed5df58f19", panelId: "panel-573030cc-5fb9-46ac-ad58-20ed5df58f19" },
    { title: "Level 2", id: "tab-f896e550-9cc2-4a44-a198-e518295d247b", panelId: "panel-f896e550-9cc2-4a44-a198-e518295d247b" },
    { title: "Level 3", id: "tab-86b7ae01-e158-4f5a-82c1-2d117ae57b92", panelId: "panel-86b7ae01-e158-4f5a-82c1-2d117ae57b92" },
    { title: "Level 4", id: "tab-12df755b-0f93-412a-ac18-7198e4e26a37", panelId: "panel-12df755b-0f93-412a-ac18-7198e4e26a37" },
  ];

  return (
    <div className="protect-container">
      <div className="banner-container">
        <div className="banner-content">
          <h2 className="banner-title">
            <span className="title-highlight">/</span>PROTECT
          </h2>
          <p className="banner-subtitle">Four Protection Kits</p>
        </div>
        <ul className="shogun-tabs shogun-modern" role="tablist" data-vthemes='{"default":"shogun-modern"}'>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={`shogun-tab ${activeTab === index ? "shogun-tab-active" : ""}`}
              id={tab.id}
              role="tab"
              aria-controls={tab.panelId}
              aria-selected={activeTab === index}
              onClick={() => handleTabClick(index)}
            >
              <div className="shogun-tab-box">
                <span className="shogun-tab-title">{tab.title}</span>
              </div>
              {activeTab === index && <div className="shogun-tab-border"></div>}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-wrapper">
        {tabs.map((tab, index) => (
          <div
            key={tab.panelId}
            className="tab-panel"
            id={tab.panelId}
            role="tabpanel"
            aria-labelledby={tab.id}
            style={{ display: activeTab === index ? "flex" : "none" }}
          >
            <div className="tab-image-container">
              <img
                src="https://files.widgetic.com/file/widgetic-Uploads/app/6092a03fecb2a1363a8b4569/kp6ozbom-2p1z2rw.png"
                alt={`${tab.title} Service`}
                className="tab-image"
              />
            </div>
            <div className="tab-details">
              <div className="service-specification">
                <p className="section-title">Service Specification</p>
                <div className="spec-item">
                  <strong>Service Duration: 6–8 Hours</strong>
                </div>
                <div className="spec-item">
                  Includes: Front bumper, Headlights, and Wing mirrors.
                </div>
              </div>
              <div className="service-description">
                <p className="section-title">Service Description</p>
                <div className="description-text">
                  Installing self-healing film on the highlighted areas.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="info-container">
        <div className="info-text">
          <h2 className="info-title">Your Title Here</h2>
          <p className="info-description">
            This is some descriptive text that explains something important. You
            can write a few lines here to convey your message effectively to the
            viewer.
          </p>
        </div>
        <div className="info-image-container">
          <img
            src="https://i.shgcdn.com/0508ac4d-a95a-4aab-9f51-d5137481c88a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Display"
            className="info-image"
          />
        </div>
      </div>

      <div className="faq-container">
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="faq-item"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/SKkvlYi6JC0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>

      <div className="footer-container">
        <h2 className="footer-title">Vinyled.in</h2>
        <p className="footer-text">Follow Us @vinyled</p>
      </div>

      <div className="bottom-banner"></div>
    </div>
  );
}