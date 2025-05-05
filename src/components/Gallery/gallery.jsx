import React, { useState } from "react";
import "./gallery.css";

const Gallery = ({ images, largeImage }) => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleMouseEnter = (imgId) => {
    setHoveredImg(imgId);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  return (
    <div className="gallery">
      {/* Left Side (4 images) */}
      <div className="image-grid">
        {images.map((img, index) => {
          const imgId = `img-${index + 1}`;
          return (
            <img
              key={imgId}
              src={img.src}
              alt={img.alt}
              className={`grid-image ${hoveredImg === imgId ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(imgId)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>

      {/* Right Side (1 large image) */}
      <div className="large-image-container">
        <img
          src={largeImage.src}
          alt={largeImage.alt}
          className={`large-image ${hoveredImg === "large" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("large")}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Gallery;