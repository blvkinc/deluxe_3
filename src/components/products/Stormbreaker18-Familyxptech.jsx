import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import GoToTop from "../functions/GoToTop";
import Strom18inside from "./SlideShows/Stormbreaker18inside";
import { gsap } from "gsap";
import Storm18specs from "./Specsmenu/Specs18xptech";
import Techspec18xptech from "./techspecs/Techspec18xptech";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";
import LayoutPopUp from "./popup/LayoutPopUp";
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

const Stormbreaker18FamilyXPTech = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB186Exterior.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Stormbreaker18`6</h1>
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
        <Strom18inside />
      </div>
      {/* <div className='slideshowcomopnent'>
    </div> */}
      <div className="component">
        <div className="product-container" id="layout">
          <div className="description">
            <p>
              Are you looking for a small compact caravan that has everything
              for your family caravanning adventure? Discover the ideal
              combination of snug comfort and stylish travel with the Deluxe
              Caravan 18'6 Stormbreaker. This is our smallest family bunk van
              and this model effortlessly combines convenience and comfort,
              ensuring your journeys are truly enjoyable. Its space-saving
              design and well-appointed interior provide everything you need for
              your adventures. The quality and features are uncompromised in
              this compact caravan, guaranteeing all you desire for memorable
              travels. Additionally, its thoughtfully designed with eco-friendly
              elements to minimize your environmental footprint, so you can
              explore with a clear conscience. Your next adventure awaits with
              the 18'6 Stormbreaker.
            </p>
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
            <p>
              <button className="virtual-btn">
                <a href="/tour">Have a look at STORMBREAKER 18`6</a>
              </button>
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
          <div className="image">
            <iframe
              src="https://esceneyf.sirv.com/Spins/18/18.spin"
              width="1000px"
              height="1000px"
              frameborder="0"
              allowFullScreen
              title="Stormbreaker 18'6"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <Techspec18xptech />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm18specs />
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

export default React.memo(Stormbreaker18FamilyXPTech);
