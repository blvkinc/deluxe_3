import React, { useCallback } from "react";
import "./HomeComponent.css";

const Gallery_landing = () => {
  const handleImageClick = useCallback((message) => {
    alert(message); // Placeholder alert for demonstration
  }, []);

  return (
    <div className="wcontainer">
      <h1>Why Choose Us</h1>
      <div className="image-container_landing">
        <div className="image-item" onClick={() => handleImageClick("Bespoke Models")}>
          <img
            src="https://deluxcaravan.b-cdn.net/assets/why%20choose%20us/customer-support.webp"
            alt="Bespokemodels"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <p>Bespoke models</p>
        </div>
          <div className="image-item">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/why%20choose%20us/ecology.webp"
              alt="Ecofriendly"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>Eco-friendly Options</p>
          </div>
          <div className="image-item">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/why%20choose%20us/certification.webp"
              alt="Experience"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>10+ Years of Manufacturing Experience</p>
          </div>
          <div className="image-item">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/why%20choose%20us/customer-review.webp"
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>Ratings</p>
          </div>
          <div className="image-item">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/why%20choose%20us/warranty.webp"
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>3 Year Structural Warranty</p>
          </div>
          <div className="image-item">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/why%20choose%20us/technical-support.webp"
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>Nation Wide Warranty</p>
          </div>
          </div>
    </div>
  );
};


export default React.memo(Gallery_landing);
