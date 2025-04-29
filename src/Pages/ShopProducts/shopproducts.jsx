import React, { useState } from 'react';
import './shopproducts.css';

export default function ShopProducts() {
  const [activeTab, setActiveTab] = useState('tab-one');

  const tabStyle = (isActive) => ({
    color: isActive ? '#000' : '#999',
  });

  const panelStyle = (isActive) => ({
    display: isActive ? 'block' : 'none',
  });

  const handleTabClick = (tabId) => setActiveTab(tabId);

  return (
    <div className="main-container">
      <div className="shop-section">
        <div className="shop-content">
          <div className="shop-title">THE DECAL SHOP</div>
          <div className="tab-container">
            <div className="tab-nav">
              <div
                className="tab-item"
                style={tabStyle(activeTab === 'tab-one')}
                onClick={() => handleTabClick('tab-one')}
              >
                Porsche Decals
              </div>
              <div
                className="tab-item"
                style={tabStyle(activeTab === 'tab-two')}
                onClick={() => handleTabClick('tab-two')}
              >
                Lamborghini Decals
              </div>
              <div
                className="tab-item"
                style={tabStyle(activeTab === 'tab-three')}
                onClick={() => handleTabClick('tab-three')}
              >
                Ferrari Decals
              </div>
              <div
                className="tab-item"
                style={tabStyle(activeTab === 'tab-four')}
                onClick={() => handleTabClick('tab-four')}
              >
                BMW Decals
              </div>
              <div
                className="tab-item"
                style={tabStyle(activeTab === 'tab-five')}
                onClick={() => handleTabClick('tab-five')}
              >
                Nissan Decals
              </div>
            </div>
            <div className="tab-panels">
              <div
                className="tab-panel"
                style={panelStyle(activeTab === 'tab-one')}
              >
                <div className="product-grid">
                  <div className="product-item">
                    <a
                      href="/products/992-gt3rs-spoiler-side-decal"
                      title="911 (992) GT3 RS Style Rear Wing End Plate Decals (x2)"
                      className="product-link"
                    >
                      <img
                        src="//thetopazshop.com/cdn/shop/files/911_992_GT3_RS_Style_Rear_Wing_End_Plate_Decals.jpg?v=1738333622&width=1100"
                        alt="Porsche GT3 RS Style Decal"
                        className="product-image"
                        loading="lazy"
                      />
                      <p className="product-title">
                        911 (992) GT3 RS Style Rear Wing End Plate Decals (x2)
                      </p>
                    </a>
                  </div>
                  <div className="product-item">
                    <a
                      href="#"
                      title="992 Turbo S Door Decal"
                      className="product-link"
                    >
                      <img
                        src="https://thetopazshop.com/cdn/shop/files/992_turbo_s_door.jpg?v=1738324424&width=1100"
                        alt="992 Turbo S Door Decal"
                        className="product-image"
                        loading="lazy"
                      />
                      <p className="product-title">992 Turbo S Door Decal</p>
                    </a>
                  </div>
                  <div className="product-item">
                    <a
                      href="#"
                      title="911 (992) GT3 RS Style Spoiler Decal"
                      className="product-link"
                    >
                      <img
                        src="https://thetopazshop.com/cdn/shop/files/911_992_GT3_RS_Style_Spoiler_Decal.jpg?v=1738333650&width=1100"
                        alt="911 (992) GT3 RS Style Spoiler Decal"
                        className="product-image"
                        loading="lazy"
                      />
                      <p className="product-title">
                        911 (992) GT3 RS Style Spoiler Decal
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-panel"
                style={panelStyle(activeTab === 'tab-two')}
              >
                <h3>Lamborghini Decals</h3>
                <p>Bold and exotic styles inspired by Lamborghini design.</p>
              </div>
              <div
                className="tab-panel"
                style={panelStyle(activeTab === 'tab-three')}
              >
                <h3>Ferrari Decals</h3>
                <p>Classic red and prancing horse decals for Ferrari fans.</p>
              </div>
              <div
                className="tab-panel"
                style={panelStyle(activeTab === 'tab-four')}
              >
                <h3>BMW Decals</h3>
                <p>Sporty and elegant decals crafted for BMW styling.</p>
              </div>
              <div
                className="tab-panel"
                style={panelStyle(activeTab === 'tab-five')}
              >
                <h3>Nissan Decals</h3>
                <p>Decals tailored for Nissan performance and looks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}