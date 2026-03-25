import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import { gsap } from "gsap";
import GoToTop from "../functions/GoToTop";
import Storm23specs from "./Specsmenu/Specs23xptech";
import Techspec23xptech from "./techspecs/Techspec23xptech";
import ResponsiveTable from "./ResponsiveTable/ResponsiveTable";
import { Link } from "react-router-dom";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";

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

const Stormbreaker23FamilyXPTech = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/XP-TECH%20SB186%20big%20window-min.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">S2311</h1>
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
                "https://deluxcaravan.b-cdn.net/assets/23/2311newex/2311%20ex%20(1).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newex/2311%20ex%20(2).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newex/2311%20ex%20(3).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newex/2311%20ex%20(5).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newex/2311%20ex%20(6).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newex/2311%20ex%20(7).webp",
                
              ],
              description: "",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB2311layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB2311layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB2311layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB2311layout.webp",
              ],
              description: "",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(4).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(1).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(2).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(3).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(5).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(6).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(7).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(8).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(9).webp",
                "https://deluxcaravan.b-cdn.net/assets/23/2311newin/2311%20in%20(10).webp",
                
                
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
        <div
          className="product-container"
          id="layout"
          style={{
            gridGap: "100px",
          }}
        >
          <div className="description">
            <p>
              Got more than 3 kids or always wanted buy a caravan with a
              spacious living space for your kids. Look no further than our
              Stormbreaker 23&#39;11, the solution you&#39;ve been seeking. This
              model offers all the remarkable features unique to this family
              bunk model. A key feature that set this model apart it the large,
              separate ensuite at the rear. Built with premium interior,
              exterior, and mechanical features when you embark on the open road
              with your loved ones, you&#39;ll be treated to an exceptionally
              roomy layout, complete with all the amenities you&#39;d expect
              from a luxury RV.
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
              <h2>NOW WITH ALL 2026 ORDERS, OFF-GRID PACKAGE INCLUSIONS: </h2>
            </p>
            <p>
              <h3>WORTH $7000 !</h3>
            </p>
            <ul>
              <li>DOMETIC FRESH JET AIRCON</li>
              <li>188L DOMETIC COMPRESSOR FRIDGE</li>
              <li>4 X 200W SOLAR PANELS</li>
              <li>2 X 200AH LITHIUM BATTERIES</li>
              <li>Raptor Painted Chassis</li>
              <li>AuFocus Diesel Heater</li>
              <li>2 X RECOVERY POINTS</li>
              <li>AIRBAG READY SUSPENSION</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <Techspec23xptech />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm23specs />
      </div>
      <div>
        <ResponsiveTable />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Stormbreaker23FamilyXPTech);
