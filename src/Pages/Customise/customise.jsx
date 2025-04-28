import React, { useState } from 'react';
import './customise.css';

export default function Customise() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="main-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            <span className="highlight">/</span>CUSTOMISE
          </h2>
          <p className="hero-subtitle">with Vinyled</p>
        </div>
      </div>

      <div className="customisation-section">
        <h2 className="section-title">Select a Customisation Type</h2>
        <div className="customisation-options">
          <div
            className="option-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overlay"></div>
            <div className="option-title">
              <h2>
                <span className="highlight">/</span> COLOURED PPF
              </h2>
            </div>
            <div
              className="hover-text"
              style={{
                visibility: isHovered ? 'visible' : 'hidden',
                opacity: isHovered ? 1 : 0,
              }}
            >
              <p>
                Our world renowned vinyl and decals allow you to add a personal
                touch to your vehicle. Choose from a wide range of styles,
                finishes, and effects.
              </p>
            </div>
          </div>

          <div
            className="option-card vinyl-decals"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="overlay"></div>
            <div className="option-title">
              <h2>
                <span className="highlight">/</span> VINYL AND DECALS
              </h2>
            </div>
            <div
              className="hover-text"
              style={{
                visibility: isHovered2 ? 'visible' : 'hidden',
                opacity: isHovered2 ? 1 : 0,
              }}
            >
              <p>
                At Topaz we specialise in race car liveries and decals. Designed
                and produced in-house, we can match decals, accents and sponsor
                logos to colours of your choice.
              </p>
            </div>
          </div>

          <div
            className="option-card resprays-interiors"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div className="overlay"></div>
            <div className="option-title">
              <h2>
                <span className="highlight">/</span> RESPRAYS & INTERIORS
              </h2>
            </div>
            <div
              className="hover-text"
              style={{
                visibility: isHovered3 ? 'visible' : 'hidden',
                opacity: isHovered3 ? 1 : 0,
              }}
            >
              <p>
                Our facilities extend to full vehicle resprays and interior
                re-trims upon request.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/t9-cMiEDNyk"
          title="YouTube video player"
          className="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="banner-section"></div>
    </div>
  );
}