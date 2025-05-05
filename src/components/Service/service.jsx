// components/SectionBanner.js
import React from "react";

const Service= ({
  title,
  activeTab,
  handleTabClick,
  handleTabMouseEnter,
  handleTabMouseLeave,
}) => {
  const backgroundUrl =
    "https://i.shgcdn.com/b17e6cc1-2f0a-43c3-a589-d620600587c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/";

  const getTabStyle = (isActive) => ({
    padding: "10px 30px",
    cursor: "pointer",
    background: isActive ? "#DD0000" : "white",
    color: "black",
    marginLeft: "-20px",
    zIndex: 1,
    position: "relative",
    borderRadius: "5px 5px 0 0",
    transition: "background 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s",
    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
    minWidth: "400px",
    textAlign: "center",
  });

  return (
    <div
      style={{
        minHeight: "18.75rem",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "1.25rem",
          fontWeight: 400,
        }}
      >
        <span style={{ color: "#ec1d24" }}>/</span> {title}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #ccc",
          width: "100%",
          maxWidth: "37.5rem",
          position: "absolute",
          bottom: 0,
        }}
      >
        {[1, 2].map((tabNumber) => (
          <div
            key={tabNumber}
            style={getTabStyle(activeTab === tabNumber)}
            onClick={() => handleTabClick(tabNumber)}
            onMouseEnter={() =>
              handleTabMouseEnter && handleTabMouseEnter(`tab-${tabNumber}`)
            }
            onMouseLeave={handleTabMouseLeave}
            onMouseOut={(e) =>
              (e.target.style.background =
                activeTab !== tabNumber ? "white" : "#DD0000")
            }
          >
            {tabNumber === 1 ? "CAR" : "BIKE"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
