import React from "react";
import "./service.css";

const Service = ({
  title,
  activeTab,
  handleTabClick,
  handleTabMouseEnter,
  handleTabMouseLeave,
  tabs = [], // Default to empty array
  tabWidth, // Prop for custom tab width
}) => {
  const backgroundUrl =
    "https://i.shgcdn.com/b17e6cc1-2f0a-43c3-a589-d620600587c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/";

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h2 className="title">
        <span className="title-highlight"></span> {title}
      </h2>
      {Array.isArray(tabs) && tabs.length > 0 && (
        <div className="tab-container">
          {tabs.map((tabName, index) => {
            const tabNumber = index + 1;
            return (
              <div
                key={tabNumber}
                className={`tab ${activeTab === tabNumber ? "active" : ""}`}
                style={{ minWidth: tabWidth || "300px" }}
                onClick={() => handleTabClick(tabNumber)}
                onMouseEnter={() =>
                  handleTabMouseEnter && handleTabMouseEnter(tabNumber)
                }
                onMouseLeave={() =>
                  handleTabMouseLeave && handleTabMouseLeave(tabNumber)
                }
                role="tab"
                aria-selected={activeTab === tabNumber}
              >
                {tabName}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Service;