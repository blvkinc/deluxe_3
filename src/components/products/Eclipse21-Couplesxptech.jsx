import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Eclipse21gallery from "../products/SlideShows/Eclipse21gallery";
import { gsap } from "gsap";
import GoToTop from "../functions/GoToTop";
import SpecsEclipse21 from "./Specsmenu/SpecsEclipse21xptech";
import TechspecEclipse21xptech from "./techspecs/TechspecEclipse21xptech";
import ResponsiveTable from "./ResponsiveTable/ResponsiveTable";
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

const Eclipse21CouplesXPTech = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".revealUp").forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
          },
        }
      );
    });
  }, []);

  const [isWarrantyPopupOpen, setWarrantyPopupOpen] = useState(false);

  const openWarrantyPopupWarrantyPolicy = useCallback(() => {
    setWarrantyPopupOpen(true);
  }, []);

  const closeWarrantyPopupWarrantyPolicy = useCallback(() => {
    setWarrantyPopupOpen(false);
  }, []);

  return (
    <div className="container">
      <div className="component">
        <div className="background-image">
          <img
            src="https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Eclipse 21`6</h1>
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
        <Eclipse21gallery />
      </div>
      <div className="component" id="xptechbanner">
        <Link to="/xptec">
          <h1 style={{ color: "white", fontSize: "8vw" }}>
            <span style={{ textTransform: "uppercase" }}>F</span>
            <span style={{ textTransform: "lowercase" }}>ind out </span>
            <span style={{ textTransform: "uppercase" }}>m</span>
            <span style={{ textTransform: "lowercase" }}>ore</span>
            <br /> <span style={{ textTransform: "uppercase" }}>a</span>
            <span style={{ textTransform: "lowercase" }}>bout</span>{" "}
            <span style={{ textTransform: "uppercase" }}>XP-TECH</span>
          </h1>
        </Link>
      </div>
      {/* <div className='slideshowcomopnent'>
    </div> */}
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
              Introducing our first 2 Berth Caravan and we can tell you it's a
              special one. The most notable feature is the massive rear ensuite.
              Ideal for a couple who loves to travel for extended periods of
              time. Then again this an ideal setup for anyone who likes life on
              the road.Built with premium interior, exterior, and mechanical
              features when you embark on the open road with your loved ones,
              you'll be treated to an exceptionally roomy layout, complete with
              all the amenities you'd expect from a luxury RV.
            </p>
            {/* <button
              className="btn hover-border-1 revealUp"
              onClick={openWarrantyPopupWarrantyPolicy}
            >
              Download Our Brochure and Upgrade List
            </button>
            {isWarrantyPopupOpen && (
              <WarrantyPolicyPopup onClose={closeWarrantyPopupWarrantyPolicy} />
            )} */}
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
              <li>4 X 200W SOLAR PANELS</li>
              <li>2 X 100AH LITHIUM BATTERIES</li>
              <li>Raptor Painted Chassis</li>
              <li>AuFocus Diesel Heater</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <TechspecEclipse21xptech />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <SpecsEclipse21 />
      </div>
      <div>
        <ResponsiveTable />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Eclipse21CouplesXPTech);
