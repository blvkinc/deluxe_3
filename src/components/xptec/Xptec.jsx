import React from "react";
import "./Xptec.css";
import XpTech from "../products/Specsmenu/XpTech";
import GoToTop from "../functions/GoToTop";

const WarrantyPolicy = React.memo(() => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000" }}>
      <div className="warrantycontainer">
        <h1>XP TECH</h1>
        <h2>Innovative • Timeless • Tough</h2>
        
        <div className="warrantycomponent" style={{ margin: '40px 0' }}>
          <h2 style={{ marginBottom: '30px' }}>Welcome to the Future of Caravanning</h2>
          
          <p style={{ fontSize: '1.2em', marginBottom: '25px', fontWeight: '500' }}>
            A revolutionary composite technology elevating your caravanning experience.
          </p>
          
          <div style={{ margin: '30px 0' }}>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Our full composite, XP-TECH is the solution you have been looking for to create a lifetime of memories. 
              Built to withstand the toughest of terrain across Australia with its unique features and upgrades.
            </p>
            
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Our XP-TECH offers a range of solutions that your average caravan meranti and aluminium frame constructions can not offer.
            </p>
          </div>

          <p style={{ fontSize: '1.1em', fontWeight: '500', marginTop: '30px', fontStyle: 'italic' }}>
            Let's look at some of these technical specifications involved in creating this technology.
          </p>
        </div>
        <div className="warrantycomponent">
          <img
            src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image1.png"
            alt="xptec"
          />
          <h2>What is CFRT Skin?</h2>
          <p>
            CFRT skins use the latest thermoplastic properties, laminated by
            multiple layers of continuous fiber-reinforced unidirectional tapes.
            Their toughness is unparalleled, high durability, and has high
            impact damage tolerance.
          </p>
        </div>
        <div className="warrantycomponent">
          <h2>The Main Advantages of CFRT Skin</h2>
          <img
            src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image3.png"
            alt="xptec"
          />
          <p>&#x2714; Light Weight:</p>
          <p>&#x2714; High Strength: </p>
          <p>&#x2714; Anti-corrosion:</p>
          <p>&#x2714; Electrical Insulation:</p>
          <p>&#x2714; Thermal Insulation:</p>
        </div>
        <div className="warrantycomponent">
          <h2>XPS Foam</h2>
          <img
            src="https://deluxcaravan.b-cdn.net/assets/xp%20tec/image2.png"
            alt="xptec"
          />
          <p>
            "XPS (extruded polystyrene) is produced using polystyrene resin
            combined with auxiliary materials and polymers. Through a heating,
            catalyzation, and extrusion process, it forms a rigid foam plastic
            board with a uniform, flat surface and a fully closed-cell interior.
            This structure ensures exceptional properties, including low water
            absorption, high compression resistance, low thermal conductivity,
            and superior durability. Lightweight and airtight, XPS is also
            wear-resistant, non-degradable, and built to withstand high
            pressure."
          </p>
        </div>
        <div className="warrantycomponent">
          <h2>Why Choose Fiberglass Panels for RV Wall Panels?</h2>
          <h3>IS IT WORTH THE BIG BUCKS?</h3>
          <p>
            XP-TECH panels are advanced sandwich-structured composites,
            combining a fiberglass-reinforced plastic surface with an XPS foam
            core. Unlike aluminum panels, they resist dents due to their high
            surface strength and flexibility. Unlike wooden boards, they are
            moisture-resistant, preventing internal cavity rot for enhanced
            durability."
          </p>
          <h3>XP-TECH Highlights:</h3>
          <XpTech />
        </div>

        <GoToTop />
      </div>
    </div>
  );
});

export default WarrantyPolicy;
