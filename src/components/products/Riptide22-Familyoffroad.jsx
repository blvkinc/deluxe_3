import React, { useEffect } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoToTop from "../functions/GoToTop";
import Rip22specs from "./Specsmenu/SpecsRiptide22";
import TechspecRiptide22 from "./techspecs/TechspecRiptide22";

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

const Riptide22FamilyOffRoad = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20Exterior-min.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">RIPTIDE 22`</h1>
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
                "https://deluxcaravan.b-cdn.net/assets/E22/1-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/E22/2-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/E22/3-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/E22/4-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/E22/5-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/E22/6-min.webp"
              ],
              description: "Explore the stunning exterior design and features",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new-min.webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new2-min.webp"
              ],
              description: "Detailed floor plans and layout configurations",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Rip22/in%20(1).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/in%20(2).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/in%20(3).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/in%20(4).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/in%20(5).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(1).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(2).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(4).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(5).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(6).webp"
              ],
              description: "Interior features and luxury amenities",
            },
          ]}
          productName="Riptide 22'"
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
              Are you on the hunt for a more spacious family bunk caravan? Your
              search ends here with the Riptide 22``, the solution you've been
              seeking. This model offers all the remarkable features found in
              our Stormbreaker range. Every journey transforms into an
              unforgettable experience, thanks to its premium built interior,
              exterior, and mechanical features. when you embark on the open
              road with your loved ones, you'll be treated to an exceptionally
              roomy layout, complete with all the amenities you'd expect from a
              luxury RV adventure. But our commitment doesn't end there- we
              ensure your adventures leave no environmental footprint. With
              eco-friendly features, you can travel without guilt and experience
              all the joy you deserve.
            </p>
            <p>
              <button className="virtual-btn">
                <a href="/tour">Have a look at RIPTIDE 22`</a>
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
        <TechspecRiptide22 />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Rip22specs />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Riptide22FamilyOffRoad);
