import React, { useEffect } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoToTop from "../functions/GoToTop";
import Storm23specs from "./Specsmenu/Specs23";
import Techspec23 from "./techspecs/Techspec23";

gsap.registerPlugin(ScrollTrigger);

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

const Stormbreaker23FamilyOffRoad = () => {
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

  return (
    <div className="container">
      <div className="component">
        <div className="background-image">
          <img
            src="https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB2311Exterior.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Stormbreaker23`11</h1>
              <div className="btn-holder">
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
      </div>

      <div className="slideshowcomopnent">
        <EnhancedGallery 
          sections={[
            {
              name: "Exterior",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23des.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%201.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%202.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%203.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%204.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%205.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%206.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/23%20ex%207.webp"
              ],
              description: "Explore the stunning exterior design and features",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB2311layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/23lay2.webp"
              ],
              description: "Detailed floor plans and layout configurations",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_1-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_2-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_3-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_4-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_5-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_6-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_7-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_8-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_9-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/23/newin/2311_in_10-min.webp"
              ],
              description: "Interior features and luxury amenities",
            },
          ]}
          productName="Stormbreaker 23'11"
        />
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
        <Techspec23 />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm23specs />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Stormbreaker23FamilyOffRoad);
