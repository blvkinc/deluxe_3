import React from "react";
import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000" }}>
      <div className="maintenance-container">
        <div className="maintenance-content">
          <h1>Servicing Requirements</h1>

          <div className="maintenance-section">
            <div className="service-type">
              <h3>First service and every 3000km service</h3>
              <p className="service-note">
                Should cover the below at a minimum:
              </p>
              <ul>
                <li>Wheel bearing check and adjust</li>
                <li>Wheel nut tension</li>
                <li>Tyre pressure and wear pattern</li>
                <li>Visual inspection of suspension</li>
                <li>Visual inspection of under carriage</li>
                <li>Check brakes</li>
                <li>Check operation of external 12 Volt lights</li>
                <li>Check operation of interior lights</li>
                <li>Check operation of appliances</li>
                <li>
                  Check for any exterior seals that show signs of deterioration
                  or gaps that needs resealing
                </li>
                <li>Check adjustment of doors, windows and hatches</li>
                <li>Grease shackle and coupling nipples</li>
                <li>Remove, Clean, Inspect, Repack of wheel Bearings</li>
                <li>Inspect Drum for wearing</li>
                <li>Inspect Magnet Face for wearing</li>
                <li>Remove magnet & check for wearing on ARM & MAGNET</li>
                <li>Inspect Brake Shoes and Oil Backing Plate</li>
                <li>Inspect Bushes for Movement</li>
                <li>Grease shackle and coupling nipples</li>
                <li>Test Brake-Away</li>
              </ul>
            </div>

            <div className="service-type">
              <h3>Major service at 12 month or 10,000km</h3>
              <p className="service-note">
                Should cover the following at a minimum:
              </p>
              <ul>
                <li>Remove, Clean, Inspect, Repack of wheel Bearings</li>
                <li>Inspect Drum for wearing</li>
                <li>Inspect Magnet Face for wearing</li>
                <li>Remove Magnet & check for wearing on ARM & MAGNET</li>
                <li>Inspect Brake Shoes and Oil Backing Plate</li>
                <li>Inspect Bushes for Movement</li>
                <li>Inspect springs & Suspension System (Shock Absorbers)</li>
                <li>Check Tyre Wear and Tyre pressures (INCLUDE SPARE/S)</li>
                <li>Check wind down legs and lubricate</li>
                <li>Check tail light etc.</li>
                <li>Grease Coupling & Adjust</li>
                <li>Adjust Hand Brake</li>
                <li>Grease shackle and coupling nipples</li>
                <li>Check Anode</li>
                <li>Run hot water Tap & Check HWS is full</li>
                <li>Check if Pump</li>
                <li>Test Brakes</li>
                <li>
                  Check for any exterior seals that show signs of deterioration
                  or gaps that needs resealing
                </li>
                <li>Check Battery Condition and Report</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
