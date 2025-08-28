import React from "react";
import "./ResponsiveTable.css";

const tableData = [
  {
    group: "INTERIOR",
    rows: [
      {
        spec: "Framing - Meranti or Henrob Rivet Aluminium",
        value: "Framing - Composite Fiberglass Sandwich Panels",
      },
    ],
  },
  {
    group: "SPLASHBACK, BENCHTOP, CUPBOARD DOORS AND UPHOLSTERY",
    rows: [{ spec: "Benchtop - Laminate", value: "Benchtop - Laminate" }],
  },
  {
    group: "ELECTRICAL (INTERNAL)",
    rows: [
      {
        spec: "Projecta 30A Charger + 30A Solar Regulator",
        value:
          "Victron Management System ( 3000W Inverter, 120A Charger, 2 x 30A MPPT & 30A DC-DC )",
      },
      {
        spec: "Projecta Display Bluetooth",
        value: "Cerbo GX 70, 7 Inch Screen",
      },
      {
        spec: "",
        value: "Sirocco Fans - Bunks",
      },
      {
        spec: "",
        value: "Wireless Multi Switches",
      },
      {
        spec: "",
        value: "Bug Lights",
      },
    ],
  },
  {
    group: "ELECTRICAL (EXTERNAL)",
    rows: [
      { spec: "Light - Blue LED Door Handle", value: "Door Handle" },
      { spec: "Solar -3 x 170 watt Panel", value: "Solar - 800W" },
      {
        spec: "Battery - 2 x 100AH Lithium",
        value: "Battery - 1 x 200AH Lithium",
      },
      {
        spec: "",
        value: "Starlink Port",
      },
      {
        spec: "",
        value: "Anderson plug for solar blanket",
      },
    ],
  },
  {
    group: "APPLIANCES",
    rows: [
      {
        spec: "Hot Water Service - 28ltr Gas/Electric",
        value: "Instant Hot Water",
      },
    ],
  },
  {
    group: "PROTECTION",
    rows: [
      {
        spec: "Checker Plate Front 900mm (Black)",
        value: "Raptor Coated Front 900mm (Black)",
      },
      {
        spec: "Checker Plate Sides 900mm (Black)",
        value: "Raptor Coated Sides 700mm (Black)",
      },
      {
        spec: "Checker Plate Sides 900mm (Black)",
        value: "Raptor Coated Back 900mm (Black)",
      },
      {
        spec: "Cladding - Aluminium Composite",
        value: "Fiberglass",
      },
    ],
  },
  {
    group: "EXTERIOR",
    rows: [
      {
        spec: "Awning - Roll-Out (Charcoal)",
        value: "Awning - Electric Carefree",
      },
      {
        spec: "Large Toolbox with Double Slide Out",
        value: "Custom Toolbox with Double Slide Out & Wood box",
      },
      {
        spec: "",
        value: "Dometic DRS",
      },
    ],
  },
  {
    group: "CHASSIS",
    rows: [
      {
        spec: "Painted Chassis",
        value: "Raptor Coated Chassis",
      },
      {
        spec: "Jockey Wheel - A-Frame",
        value: "Gator Jack - A-Frame",
      },
      {
        spec: '2" Raiser',
        value: "Truss Chassis ( 6' Raiser )",
      },
    ],
  },
  {
    group: "COLOUR SELECTIONS",
    rows: [
      {
        spec: "",
        value:
          "Internal colors - No additional cost across all premium options",
      },
    ],
  },
];

const ResponsiveTable = () => {
  return (
    <div className="table-wrapper">
      <h1 className="main-heading">
        Compare Off-Road vs XP-TECH Specifications
      </h1>
      <p
        className="sub-heading"
        style={{ textAlign: "center", marginTop: "-10px" }}
      >
        Explore the detailed differences between the off-road model and the
        XP-TECH upgrade.
      </p>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>OFF ROAD</th>
              <th>XP - TECH</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((section, index) => (
              <React.Fragment key={index}>
                <tr className="subheading-row">
                  <td colSpan="2">{section.group}</td>
                </tr>
                {section.rows.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.spec}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;
