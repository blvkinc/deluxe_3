import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Riptide20gallery from "../products/SlideShows/Riptide20gallery";
import { gsap } from "gsap";
import GoToTop from "../functions/GoToTop";
import SpecsRiptide20xptech from "./Specsmenu/SpecsRiptide20xptech";
import TechspecRiptide20xptech from "./techspecs/TechspecRiptide20xptech";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";
import { Link } from "react-router-dom";

const scrollToSpecs = () => {
  const specsDiv = document.getElementById("specs");
  if (specsDiv) {
    specsDiv.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToLayout = () => {
  const layoutDiv = document.getElementById("layout");
  if (layoutDiv) {
    layoutDiv.scrollIntoView({ behavior: "smooth" });
  }
};

const Riptide20FamilyXPTech = () => {
  const [isWarrantyPopupOpen, setIsWarrantyPopupOpen] = useState(false);

  const openWarrantyPopupWarrantyPolicy = () => {
    setIsWarrantyPopupOpen(true);
  };

  const closeWarrantyPopupWarrantyPolicy = () => {
    setIsWarrantyPopupOpen(false);
  };

  return (
    <div className="container">
      <div className="component">
        <div className="background-image">
          <img
            src="https://deluxcaravan.b-cdn.net/assets/Rip20/Riptide%20Exterior-min.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">RIPTIDE 20`</h1>
              <button
                onClick={scrollToLayout}
                className="btn hover-border-1 revealUp"
              >
                Layout
              </button>
              <button
                onClick={scrollToSpecs}
                className="btn hover-border-1 revealUp"
              >
                Specs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="slideshowcomopnent">
        <Riptide20gallery />
      </div>
      <div className="component">
        <div
          className="product-container"
          id="layout"
          style={{
            gridGap: "100px",
          }}
        >
          <div className="description">
            <p>
              The Riptide 20` offers the perfect balance of comfort and functionality for your family adventures. This model combines spacious living areas with practical features, making it an ideal choice for families seeking a reliable and comfortable caravan. With its well-thought-out layout and premium finishes, the Riptide 20` provides all the amenities you need for memorable journeys. Experience the perfect blend of style and substance with this versatile family caravan.
            </p>
            <p>
              <button className="virtual-btn">
                <a href="/tour">Have a look at RIPTIDE 20`</a>
              </button>
            </p>
          </div>
          <div className="package-details">
            <p>
              <h2>NOW WITH ALL 2025 ORDERS, OFF-GRID PACKAGE INCLUSIONS: </h2>
            </p>
            <p>
              <h3>WORTH $5000 !</h3>
            </p>
            <ul>
              <li>DOMETIC FRESH JET AIRCON</li>
              <li>188L DOMETIC COMPRESSOR FRIDGE</li>
              <li>3 X 170W SOLAR PANELS</li>
              <li>2 X 100AH LITHIUM BATTERIES</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <TechspecRiptide20xptech />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <SpecsRiptide20xptech />
      </div>
      <div className="component" id="xptechbanner">
        <Link to="/xptec">
          <img 
            src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/Find%20out%20More%20About%20Xp%20tec.png" 
            alt="XP Tech Banner" 
            className="xptech-banner"
          />
        </Link>
      </div>
      <GoToTop />
    </div>
  );
};


export default React.memo(Riptide20FamilyXPTech); 