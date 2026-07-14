import React from "react";
import "./ResponsiveTable.css";

const tableData = [
  {
    category: "Construction",
    offRoad: "Meranti Timber OR Henrob Riveted Aluminum Framing",
    xpTech:
      "Sandwich-structured composites, combining a fiberglass-reinforced plastic surface with an XPS foam core.",
  },
  {
    category: "Benchtops",
    offRoad: "Laminate",
    xpTech: "Corian or Laminate",
  },
  {
    category: "Electrical System",
    offRoad: "Projecta 30A Charger + 30A Solar Regulator",
    xpTech:
      "Victron Energy System with 3000W Inverter, 120A Charger, Dual MPPT & DC-DC Charger",
  },
  {
    category: "Battery Monitor",
    offRoad: "Projecta Bluetooth Display",
    xpTech: 'Cerbo GX with 7" Touch Display',
  },
  {
    category: "Solar",
    offRoad: "600W Solar (3 x 200W)",
    xpTech: "800W Solar (4 x 200W)",
  },
  {
    category: "Battery Capacity",
    offRoad: "2 x 100Ah Lithium Batteries",
    xpTech: "2 x 200Ah Lithium Battery",
  },
  {
    category: "Hot Water",
    offRoad: "28L Gas/Electric Storage HWS",
    xpTech: "Instant Continuous Hot Water",
  },
  {
    category: "Awning",
    offRoad: "Manual Roll-Out Awning",
    xpTech: "Electric Carefree Awning",
  },
  {
    category: "Toolbox",
    offRoad: "Large Toolbox with Dual Slide-Outs",
    xpTech: "Custom Toolbox with Dual Slide-Outs & Wood Box",
  },
  {
    category: "Front Protection",
    offRoad: "900mm Black Checker Plate",
    xpTech: "900mm Black Raptor Coating",
  },
  {
    category: "Side Protection",
    offRoad: "900mm Black Checker Plate",
    xpTech: "700mm Black Raptor Coating",
  },
  {
    category: "Rear Protection",
    offRoad: "900mm Black Checker Plate",
    xpTech: "900mm Black Raptor Coating",
  },
  {
    category: "Cladding",
    offRoad: "Aluminium Probond Composite",
    xpTech: "Fiberglass",
  },
  {
    category: "Chassis Finish",
    offRoad: "Painted Chassis",
    xpTech: "Raptor-Coated Chassis",
  },
  {
    category: "Jockey Wheel",
    offRoad: "Standard A-Frame Jockey Wheel",
    xpTech: "Electric Black Jack",
  },
  {
    category: "Chassis Design",
    offRoad: '6" Dura-Gal Chassis with 2" Raiser - Truss Flat Chassis',
    xpTech: '6" Dura-Gal Chassis with 6" Raiser - Truss Flat Chassis',
  },
];

const exclusiveFeatures = [
  "Wireless Multi-Switch Control System",
  "Starlink Ready Port",
  "Anderson Plug for Solar Blanket Input",
  "Dometic DRS System",
  "Bug Lights",
  "Sirocco Fans to Bunk Area",
  "Cerbo GX Smart Monitoring System",
];

const ResponsiveTable = () => {
  return (
    <div className="table-wrapper">
      <h1 className="main-heading">XP-TECH DIFFERENCE</h1>
      <p
        className="sub-heading"
        style={{ textAlign: "center", marginTop: "-10px" }}
      >
        Explore the detailed differences between the Expedition model and the
        XP-TECH upgrade.
      </p>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>EXPEDITION</th>
              <th>XP-TECH</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.category}</td>
                <td>{item.offRoad}</td>
                <td>{item.xpTech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="exclusive-features">
        <h2 className="exclusive-features-heading">
          XP-TECH Exclusive Features
        </h2>
        <ul className="exclusive-features-list">
          {exclusiveFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveTable;
