import React, { useEffect } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoToTop from "../functions/GoToTop";
import Storm21specs from "./Specsmenu/Specs21";
import Techspec21 from "./techspecs/Techspec21";

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

const Stormbreaker21FamilyOffRoad = () => {
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
            src="https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216Exterior.webp"
            alt=""
          />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Stormbreaker21`6</h1>
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
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21des.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%201.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%202.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%203.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%204.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%205.webp"
              ],
              description: "Explore the stunning exterior design and features",
            },
            {
              name: "Layout",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216%20layout.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21laydes.webp",
                "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21lay2.webp"
              ],
              description: "Detailed floor plans and layout configurations",
            },
            {
              name: "Inside",
              images: [
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%201.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%202.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%203.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%204.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%205.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%206.webp",
                "https://deluxcaravan.b-cdn.net/assets/21/21%20in%207.webp"
              ],
              description: "Interior features and luxury amenities",
            },
          ]}
          productName="Stormbreaker 21'6"
        />
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
        <Techspec21 />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm21specs />
      </div>
      <GoToTop />
    </div>
  );
};

export default React.memo(Stormbreaker21FamilyOffRoad);
