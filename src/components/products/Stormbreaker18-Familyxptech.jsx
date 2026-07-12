import React, { useEffect, useState } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
import { gsap } from "gsap";
import GoToTop from "../functions/GoToTop";

import Storm18specs from "./Specsmenu/Specs18xptech";
import Techspec18xptech from "./techspecs/Techspec18xptech";
import BrochurePopUp from "./popup/BrochurePopUp";
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

const Stormbreaker18FamilyXPTech = () => {
  useEffect(() => {
    window.fbq("track", "ViewContent", { content_name: "Stormbreaker 18 Family XP-Tech", content_category: "Caravan" });
  }, []);

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

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="container">
      <div className="component">
        <div className="background-image">
          <img
            src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/XP-TECH%20SB186%20small%20window-min.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">STORMBREAKER S186</h1>
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
      <div className="slideshowcomopnent" id="layout">
        <EnhancedGallery
          sections={[
            {
              name: "Exterior",
              images: ["https://deluxcaravan.b-cdn.net/assets/E23new/E23%20(1).webp","https://deluxcaravan.b-cdn.net/assets/E23new/E23%20(2).webp","https://deluxcaravan.b-cdn.net/assets/E23new/E23%20(3).webp","https://deluxcaravan.b-cdn.net/assets/E23new/E23%20(4).webp","https://deluxcaravan.b-cdn.net/assets/E23new/E23%20(5).webp"
],
              description: "",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB18%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18laydes.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB18%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18lay2.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB18%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/18lay2.webp",
              ],
              description: "",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/18/18%20in%201.webp",
                "https://deluxcaravan.b-cdn.net/assets/18/18%20in%202.webp",
                "https://deluxcaravan.b-cdn.net/assets/18/18%20in%203.webp",
                "https://deluxcaravan.b-cdn.net/assets/18/18%20in%204.webp",
                "https://deluxcaravan.b-cdn.net/assets/18/18%20in%205.webp",
                "https://deluxcaravan.b-cdn.net/assets/18/18%20in%206.webp",
              ],
              description: "",
            },
          ]}
          productName="Stormbreaker 18'6"
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
        <div className="product-container">
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
            <p>
              <button className="virtual-btn">
                <a href="/tour">Have a look at STORMBREAKER S186</a>
              </button>
            </p>
            <button
              className="btn hover-border-1"
              onClick={() => setIsBrochureOpen(true)}
            >
              Download Our Brochure
            </button>
            {isBrochureOpen && (
              <BrochurePopUp
                onClose={() => setIsBrochureOpen(false)}
                productName="Stormbreaker 18'6 Family XP-Tech"
                pdfUrl="/brochures/XPTECH_Stormbreaker18-6_brochure_2026.html"
              />
            )}
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
        <Techspec18xptech />
      </div>
      <div className="component" id="specs">
        <h1>Features & Specifications</h1>
        <Storm18specs />
      </div>
      <div>
        <ResponsiveTable />
      </div>
      
      <GoToTop />
    </div>
  );
};

export default React.memo(Stormbreaker18FamilyXPTech);
