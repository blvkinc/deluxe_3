import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
import GoToTop from "../functions/GoToTop";
import { gsap } from "gsap";
import Storm19specs from "./Specsmenu/Specs19xptech";
import Techspec19xptech from "./techspecs/Techspec19xptech";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";
import ResponsiveTable from "./ResponsiveTable/ResponsiveTable";
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

const Stormbreaker19FamilyXPTech = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB196Exterior.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Stormbreaker19`6</h1>
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
        <EnhancedGallery
          sections={[
            {
              name: "Exterior",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19des.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%201.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%202.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%203.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%204.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%205.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%206.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%203.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20ex%204.webp",
              ],
              description: "",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB196%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19laydes.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB196%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB196%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB196%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/19lay2.webp",
              ],
              description: "",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%201-1.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%201-2.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%201-3.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%204.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%205.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%206.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%207.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%208.webp",
                "https://deluxcaravan.b-cdn.net/assets/19/19%20in%209.webp",
              ],
              description: "",
            },
          ]}
          productName="Riptide 20'"
        />
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
        <div className="product-container" id="layout">
          <div className="description">
            <p>
              Searching for a compact family bunk caravan? Look no further. The
              Stormbreaker 19'6 is the perfect solution, offering all the
              features of the 21'6 model. Every journey becomes a memorable
              experience with its premium built interior, exterior, and
              mechanical attributes. When you hit the open road with your loved
              ones, you'll enjoy a spacious layout and all the amenities you'd
              expect from a luxury RV. But our commitment doesn't end there- we
              ensure your adventures leave no environmental footprint. With
              eco-friendly features, you can travel without guilt and experience
              all the joy you deserve.
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
                <li>4 X 200W SOLAR PANELS</li>
                <li>2 X 100AH LITHIUM BATTERIES</li>
                <li>Raptor Painted Chassis</li>
                <li>AuFocus Diesel Heater</li>
              </ul>
            </div>
            <p>
              <button className="virtual-btn">
                <a href="/tour">Have a look at STORMBREAKER 19`6</a>
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
              src="https://esceneyf.sirv.com/Spins/SB196/SB196.spin"
              title="Stormbreaker 19'6"
              width="1000px"
              height="1000px"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <Techspec19xptech />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm19specs />
      </div>
      <div>
        <ResponsiveTable />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Stormbreaker19FamilyXPTech);
