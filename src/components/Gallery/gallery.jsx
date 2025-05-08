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
      {/* Added horizontal line and text */}
      <hr className="gallery-divider" />
      <p className="gallery-text">Work Done By Vinyled</p>

      {/* Left Side (6 images, unchanged) */}
      <div className="image-grid">
        {images.slice(0, 6).map((img, index) => {
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
    </div>
  );
};

export default Gallery;
