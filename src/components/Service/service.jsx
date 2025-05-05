import React from "react";
import "./service.css";

const Service = ({
  title,
  activeTab,
  handleTabClick,
  handleTabMouseEnter,
  handleTabMouseLeave,
}) => {
  const backgroundUrl =
    "https://i.shgcdn.com/b17e6cc1-2f0a-43c3-a589-d620600587c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/";

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h2 className="title">
        <span className="title-highlight">/</span> {title}
      </h2>
      <div className="tab-container">
        {[1, 2].map((tabNumber) => (
          <div
            key={tabNumber}
            className={`tab ${activeTab === tabNumber ? "active" : ""}`}
            onClick={() => handleTabClick(tabNumber)}
            onMouseEnter={() =>
              handleTabMouseEnter && handleTabMouseEnter(`tab-${tabNumber}`)
            }
            onMouseLeave={handleTabMouseLeave}
            onMouseOut={(e) => {
              e.target.style.background =
                activeTab !== tabNumber ? "white" : "#DD0000";
            }}
            role="tab"
            aria-selected={activeTab === tabNumber}
          >
            {tabNumber === 1 ? "CAR" : "BIKE"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;