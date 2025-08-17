import React, { useEffect } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoToTop from "../functions/GoToTop";
import Rip20specs from "./Specsmenu/SpecsRiptide20";
import TechspecRiptide20 from "./techspecs/TechspecRiptide20";

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

const Riptide20FamilyOffRoad = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(7).webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">RIPTIDE 20`</h1>
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
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(1).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(2).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(3).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(4).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(5).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(6).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/exmin%20(7).webp"
              ],
              description: "Explore the stunning exterior design and features",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Rip20/rip20layout.webp"
              ],
              description: "Detailed floor plans and layout configurations",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(1).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(2).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(3).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(4).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(5).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(6).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(7).webp",
                "https://deluxcaravan.b-cdn.net/assets/Rip20/in%20(8).webp"
              ],
              description: "Interior features and luxury amenities",
            },
          ]}
          productName="Riptide 20'"
        />
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
        <TechspecRiptide20 />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Rip20specs />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Riptide20FamilyOffRoad); 