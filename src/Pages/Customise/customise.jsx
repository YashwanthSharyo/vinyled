import React, { useState } from 'react';
import './customise.css';

export default function Customise() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="customise-wrapper">
      <div className="customise-hero">
        <div className="customise-hero__content">
          <h2 className="customise-hero__title">
            <span className="customise-hero__highlight">/</span>CUSTOMISE
          </h2>
          <p className="customise-hero__subtitle">with Vinyled</p>
        </div>
      </div>

      <div className="customise-options">
        <h2 className="customise-options__title">Select a Customisation Type</h2>
        <div className="customise-options__cards">
          <div
            className="customise-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="customise-card__overlay"></div>
            <div className="customise-card__title">
              <h2>
                <span className="customise-hero__highlight">/</span> COLOURED PPF
              </h2>
            </div>
            <div
              className="customise-card__hover-text"
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
            className="customise-card customise-card--vinyl-decals"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="customise-card__overlay"></div>
            <div className="customise-card__title">
              <h2>
                <span className="customise-hero__highlight">/</span> VINYL AND DECALS
              </h2>
            </div>
            <div
              className="customise-card__hover-text"
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
            className="customise-card customise-card--resprays-interiors"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div className="customise-card__overlay"></div>
            <div className="customise-card__title">
              <h2>
                <span className="customise-hero__highlight">/</span> RESPRAYS & INTERIORS
              </h2>
            </div>
            <div
              className="customise-card__hover-text"
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

      <div className="customise-video">
        <iframe
          src="https://www.youtube.com/embed/t9-cMiEDNyk"
          title="YouTube video player"
          className="customise-video__iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="customise-banner"></div>
    </div>
  );
}