import React from "react";
import "./Xptec.css";
import XpTech from "../products/Specsmenu/XpTech";
import GoToTop from "../functions/GoToTop";

const WarrantyPolicy = React.memo(() => {
  return (
    <div className="xptech-container">
      <div className="xptech-hero">
        <div className="hero-content">
          <h1 className="xptech-title">XP-TECH</h1>
          <h2 className="xptech-subtitle">Innovative • Timeless • Tough</h2>
          <div className="hero-description">
            <p className="hero-tagline">
              A revolutionary composite technology elevating your caravanning experience.
            </p>
          </div>
        </div>
      </div>
      
      <div className="warrantycontainer">
        <div className="intro-section">
          <h2 className="section-title">Welcome to the Future of Caravanning</h2>
          
          <div className="intro-content">
            <p className="intro-text">
              Our full composite, XP-TECH is the solution you have been looking for to create a lifetime of memories. 
              Built to withstand the toughest of terrain across Australia with its unique features and upgrades.
            </p>
            
            <p className="intro-text">
              Our XP-TECH offers a range of solutions that your average caravan meranti and aluminium frame constructions cannot offer.
            </p>
            
            <p className="tech-intro">
              Let's explore the technical specifications behind this revolutionary technology.
            </p>
          </div>
        </div>
        <div className="tech-section cfrt-section">
          <div className="tech-content">
            <div className="tech-text">
              <h2 className="tech-title">What is CFRT Skin?</h2>
              <p className="tech-description">
                CFRT skins use the latest thermoplastic properties, laminated by
                multiple layers of continuous fiber-reinforced unidirectional tapes.
                Their toughness is unparalleled, with high durability and exceptional
                impact damage tolerance.
              </p>
            </div>
            <div className="tech-image">
              <img
                src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image1.png"
                alt="CFRT Skin Technology"
              />
            </div>
          </div>
        </div>

        <div className="tech-section advantages-section">
          <div className="tech-content reverse">
            <div className="tech-image">
              <img
                src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image3.png"
                alt="CFRT Skin Advantages"
              />
            </div>
            <div className="tech-text">
              <h2 className="tech-title">The Main Advantages of CFRT Skin</h2>
              <div className="advantages-list">
                <div className="advantage-item">
                  <span className="checkmark">✓</span>
                  <span className="advantage-text">Lightweight Construction</span>
                </div>
                <div className="advantage-item">
                  <span className="checkmark">✓</span>
                  <span className="advantage-text">Superior High Strength</span>
                </div>
                <div className="advantage-item">
                  <span className="checkmark">✓</span>
                  <span className="advantage-text">Complete Anti-corrosion</span>
                </div>
                <div className="advantage-item">
                  <span className="checkmark">✓</span>
                  <span className="advantage-text">Electrical Insulation</span>
                </div>
                <div className="advantage-item">
                  <span className="checkmark">✓</span>
                  <span className="advantage-text">Thermal Insulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-section xps-section">
          <div className="tech-content">
            <div className="tech-text">
              <h2 className="tech-title">XPS Foam Technology</h2>
              <p className="tech-description">
                XPS (extruded polystyrene) is produced using polystyrene resin
                combined with auxiliary materials and polymers. Through a heating,
                catalyzation, and extrusion process, it forms a rigid foam plastic
                board with a uniform, flat surface and a fully closed-cell interior.
              </p>
              <p className="tech-description">
                This structure ensures exceptional properties, including low water
                absorption, high compression resistance, low thermal conductivity,
                and superior durability. Lightweight and airtight, XPS is also
                wear-resistant, non-degradable, and built to withstand high pressure.
              </p>
            </div>
            <div className="tech-image">
              <img
                src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image2.png"
                alt="XPS Foam Technology"
              />
            </div>
          </div>
        </div>

        <div className="tech-section value-section">
          <div className="tech-content single-column">
            <div className="value-text-content">
              <h2 className="tech-title">Why Choose XP-TECH Panels?</h2>
              <h3 className="value-subtitle">The Investment That Pays Off</h3>
              
              <p className="tech-description">
                XP-TECH panels are advanced sandwich-structured composites,
                combining a fiberglass-reinforced plastic surface with an XPS foam
                core. Unlike aluminum panels, they resist dents due to their high
                surface strength and flexibility. Unlike wooden boards, they are
                moisture-resistant, preventing internal cavity rot for enhanced
                durability.
              </p>
              
              <div className="highlights-wrapper">
                <h3 className="highlights-subtitle">XP-TECH Highlights</h3>
                <div className="xptech-highlights">
                  <XpTech />
                </div>
              </div>
            </div>
          </div>
        </div>

        <GoToTop />
      </div>
    </div>
  );
});

export default WarrantyPolicy;
