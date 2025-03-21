import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Strom21inside from "./SlideShows/Stormbreaker21inside";
import { gsap } from "gsap";
import GoToTop from "../functions/GoToTop";
import Storm21specs from "./Specsmenu/Specs21xptech";
import Techspec21xptech from "./techspecs/Techspec21xptech";
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

const Stormbreaker21FamilyXPTech = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216Exterior.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Stormbreaker21`6</h1>
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
        <Strom21inside />
      </div>
      {/* <div className='slideshowcomopnent'>
    </div> */}
      <div className="component">
        <div className="product-container" id="layout">
          <div className="description">
            <p>
              Are you on the hunt for a more spacious family bunk caravan? Your
              search ends here with the Stormbreaker 21'6, the solution you've
              been seeking. This model offers all the remarkable features found
              in the 19'6. Every journey transforms into an unforgettable
              experience, thanks to its premium built interior, exterior, and
              mechanical features. when you embark on the open road with your
              loved ones, you'll be treated to an exceptionally roomy layout,
              complete with all the amenities you'd expect from a luxury RV
              adventure. But our commitment doesn't end there- we ensure your
              adventures leave no environmental footprint. With eco-friendly
              features, you can travel without guilt and experience all the joy
              you deserve.
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
                <a href="/tour">Have a look at STORMBREAKER 21`6</a>
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
              src="https://esceneyf.sirv.com/Spins/test2/test2.spin"
              title="Stormbreaker21"
              width="1000px"
              height="1000px"
              frameborder="0"
              allowFullScreen
            ></iframe>{" "}
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <Techspec21xptech />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm21specs />
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

export default React.memo(Stormbreaker21FamilyXPTech);
