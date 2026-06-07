import React from "react";
import "../blog/Blog.css";
import "../blog/BlogPost.css";

const Maintenance = () => {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1 className="blog-heading">SERVICE &amp; MAINTENANCE</h1>
        <p className="blog-subheading">Servicing requirements and maintenance guides</p>
      </div>

      <div className="blogpost-container" style={{ paddingTop: 0 }}>
        <div className="blogpost-content">
          <div className="blogpost-section">

            <div className="blogpost-service-type">
              <h3>First service and every 3000km service</h3>
              <p className="blogpost-service-note">Should cover the below at a minimum:</p>
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
                <li>Check for any exterior seals that show signs of deterioration or gaps that needs resealing</li>
                <li>Check adjustment of doors, windows and hatches</li>
                <li>Grease shackle and coupling nipples</li>
                <li>Remove, Clean, Inspect, Repack of wheel Bearings</li>
                <li>Inspect Drum for wearing</li>
                <li>Inspect Magnet Face for wearing</li>
                <li>Remove magnet &amp; check for wearing on ARM &amp; MAGNET</li>
                <li>Inspect Brake Shoes and Oil Backing Plate</li>
                <li>Inspect Bushes for Movement</li>
                <li>Grease shackle and coupling nipples</li>
                <li>Test Brake-Away</li>
              </ul>
            </div>

            <div className="blogpost-service-type">
              <h3>Major service at 12 month or 10,000km</h3>
              <p className="blogpost-service-note">Should cover the following at a minimum:</p>
              <ul>
                <li>Remove, Clean, Inspect, Repack of wheel Bearings</li>
                <li>Inspect Drum for wearing</li>
                <li>Inspect Magnet Face for wearing</li>
                <li>Remove Magnet &amp; check for wearing on ARM &amp; MAGNET</li>
                <li>Inspect Brake Shoes and Oil Backing Plate</li>
                <li>Inspect Bushes for Movement</li>
                <li>Inspect springs &amp; Suspension System (Shock Absorbers)</li>
                <li>Check Tyre Wear and Tyre pressures (INCLUDE SPARE/S)</li>
                <li>Check wind down legs and lubricate</li>
                <li>Check tail light etc.</li>
                <li>Grease Coupling &amp; Adjust</li>
                <li>Adjust Hand Brake</li>
                <li>Grease shackle and coupling nipples</li>
                <li>Check Anode</li>
                <li>Run hot water Tap &amp; Check HWS is full</li>
                <li>Check if Pump</li>
                <li>Test Brakes</li>
                <li>Check for any exterior seals that show signs of deterioration or gaps that needs resealing</li>
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
