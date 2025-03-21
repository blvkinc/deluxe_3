import React, { useState } from "react";
import "./Strombreaker18insidecarousel.css";

const sections = [
  {
    name: "Exterior",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_1-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_2-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_3-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_4-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_5-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_6-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_7-min.webp",
    ],
    description: "",
  },
  {
    name: "Layout",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", "https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp", 
    ],
    description: "",
  },
  {
    name: "Inside",
    images: ["https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_1-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_2-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_3-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_4-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_5-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_6-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_7-min.webp",],
    description: "",
  },
];

const Eclipse22carousel = () => {
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

export default Eclipse22carousel;