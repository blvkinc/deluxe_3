import React, { useState } from "react";
import "./Strombreaker18insidecarousel.css";

const sections = [
  {
    name: "Exterior",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%201.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%202.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%203.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%204.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%205.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%206.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%207.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%208.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%209.webp"
    ],
    description: "",
  },
  {
    name: "Layout",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp",
    ],
    description: "",
  },
  {
    name: "Inside",
    images: ["https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%201.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%202.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%203.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%204.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%205.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%206n.webp",],
    description: "",
  },
];

const Eclipse21carousel = () => {
  const [activeImageIndices, setActiveImageIndices] = useState(
    Array(sections.length).fill(0)
  );

  const [showOverlays, setShowOverlays] = useState(
    Array(sections.length).fill(true)
  );

  const [lastClickedSection, setLastClickedSection] = useState(null);

  const handleOverlayTouch = (sectionIndex) => {
    setShowOverlays((prev) => {
      const newOverlays = [...prev];
      newOverlays[sectionIndex] = false;
      if (lastClickedSection !== null && lastClickedSection !== sectionIndex) {
        newOverlays[lastClickedSection] = true;
      }
      setLastClickedSection(sectionIndex);
      return newOverlays;
    });
  };

  const handleNextImage = (sectionIndex) => {
    const currentSection = sections[sectionIndex];
    if (activeImageIndices[sectionIndex] < currentSection.images.length - 1) {
      setActiveImageIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        newIndices[sectionIndex] += 1;
        return newIndices;
      });
    }
  };

  const handlePrevImage = (sectionIndex) => {
    if (activeImageIndices[sectionIndex] > 0) {
      setActiveImageIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        newIndices[sectionIndex] -= 1;
        return newIndices;
      });
    }
  };

  return (
    <div className="slider-container">
      {sections.map((section, sectionIndex) => (
        <div key={section.name} className="slider-section">
          {showOverlays[sectionIndex] && (
            <div
              className="slider-overlay"
              onClick={() => handleOverlayTouch(sectionIndex)}
            >
              <h1 className="slider-heading">{section.name}</h1>
            </div>
          )}

          <div className="slider-inner">
            <img
              src={section.images[activeImageIndices[sectionIndex]]}
              alt={`Img ${activeImageIndices[sectionIndex] + 1}`}
            />

            {!showOverlays[sectionIndex] && (
              <div className="slider-controls">
                <button
                  className="slider-prev"
                  onClick={() => handlePrevImage(sectionIndex)}
                >
                  Previous
                </button>
                <button
                  className="slider-next"
                  onClick={() => handleNextImage(sectionIndex)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eclipse21carousel;