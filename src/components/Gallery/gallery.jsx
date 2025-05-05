import React, { useState } from "react";

const Gallery = ({ images, largeImage }) => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleMouseEnter = (imgId) => {
    setHoveredImg(imgId);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  const getImageStyle = (imgId) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: hoveredImg === imgId ? "scale(1.05)" : "scale(1)",
    boxShadow:
      hoveredImg === imgId
        ? "0 8px 16px rgba(255, 255, 255, 0.8)"
        : "none",
    transition: "transform 0.3s, box-shadow 0.3s",
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}
    >
      {/* Left Side (4 images) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "16px",
          width: "60%",
          minWidth: "250px",
        }}
      >
        {images.map((img, index) => {
          const imgId = `img-${index + 1}`;
          return (
            <img
              key={imgId}
              src={img.src}
              alt={img.alt}
              style={getImageStyle(imgId)}
              onMouseEnter={() => handleMouseEnter(imgId)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>

      {/* Right Side (1 large image) */}
      <div
        style={{
          width: "40%",
          minWidth: "200px",
        }}
      >
        <img
          src={largeImage.src}
          alt={largeImage.alt}
          style={getImageStyle("large")}
          onMouseEnter={() => handleMouseEnter("large")}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Gallery;
