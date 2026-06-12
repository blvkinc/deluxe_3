import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../blog/BlogPost.css";

const Maintenance = () => {
  return (
    <div className="blogpost-page blogpost-page--light">
      <Helmet>
        <title>Caravan Service and Maintenance Guide Australia | Deluxe Caravans</title>
        <meta name="description" content="Caravan service and maintenance intervals for Deluxe Caravans. First service at 1,000 km, ongoing every 3,000 km, and major service at 10,000 km or 12 months." />
        <link rel="canonical" href="https://deluxecaravans.com.au/maintenance" />
      </Helmet>

      {/* ── HERO ── */}
      <div className="blogpost-hero">
        <div className="blogpost-hero-inner">
          <div className="blogpost-hero-left">
            <Link to="/warranty" className="blogpost-back">← WARRANTY POLICY</Link>
          </div>
          <div className="blogpost-hero-right">
            <p className="blogpost-hero-label">
              <span className="blogpost-label-line" />
              SERVICING &amp; CARE
            </p>
            <h1 className="blogpost-hero-title">SERVICE &amp; MAINTENANCE</h1>
            <div className="blogpost-tags">
              <span className="blogpost-tag">Wheel Bearings</span>
              <span className="blogpost-tag">Brakes</span>
              <span className="blogpost-tag">Seals</span>
              <span className="blogpost-tag">Suspension</span>
              <span className="blogpost-tag">Warranty</span>
            </div>
            <span className="blogpost-hero-date">Updated 2026</span>
          </div>
        </div>
      </div>

      {/* ── STRIP ── */}
      <div className="blogpost-strip">
        <div className="blogpost-strip-item">First service at 1,000–1,500 km</div>
        <div className="blogpost-strip-sep">·</div>
        <div className="blogpost-strip-item">Ongoing every 3,000 km or 3 months</div>
        <div className="blogpost-strip-sep">·</div>
        <div className="blogpost-strip-item">Major service at 10,000 km or 12 months</div>
        <div className="blogpost-strip-sep">·</div>
        <div className="blogpost-strip-item">Required to maintain warranty</div>
      </div>

      {/* ── CONTENT ── */}
      <div className="blogpost-body">
        <div className="blogpost-content">
          <div className="blogpost-section">

            {/* Intro */}
            <div className="blogpost-entry blogpost-entry--intro">
              <div className="blogpost-entry-body">
                <p className="blogpost-service-note">
                  Regular servicing is essential to maintain your warranty and keep your caravan in peak condition. The intervals below are the minimum requirements — your Deluxe contact can help arrange an authorised repairer wherever you are in Australia.
                </p>
              </div>
            </div>

            {/* Section 01 */}
            <div className="blogpost-entry">
              <div className="blogpost-entry-header">
                <p className="blogpost-section-label">
                  <span className="blogpost-label-line" />
                  01
                </p>
                <h3 className="blogpost-entry-title">First Service &amp; Every 3,000 km</h3>
              </div>
              <div className="blogpost-entry-body">
                <p className="blogpost-service-note">Should cover the below at a minimum:</p>
                <ul>
                  <li>Wheel bearing check and adjust</li>
                  <li>Wheel nut tension</li>
                  <li>Tyre pressure and wear pattern</li>
                  <li>Visual inspection of suspension</li>
                  <li>Visual inspection of under carriage</li>
                  <li>Check brakes</li>
                  <li>Check operation of external 12V lights</li>
                  <li>Check operation of interior lights</li>
                  <li>Check operation of appliances</li>
                  <li>Check exterior seals for deterioration or gaps requiring resealing</li>
                  <li>Check adjustment of doors, windows and hatches</li>
                  <li>Grease shackle and coupling nipples</li>
                  <li>Remove, clean, inspect and repack wheel bearings</li>
                  <li>Inspect drum for wearing</li>
                  <li>Inspect magnet face for wearing</li>
                  <li>Remove magnet and check for wearing on arm and magnet</li>
                  <li>Inspect brake shoes and oil backing plate</li>
                  <li>Inspect bushes for movement</li>
                  <li>Test brake-away</li>
                </ul>
              </div>
            </div>

            {/* Section 02 */}
            <div className="blogpost-entry">
              <div className="blogpost-entry-header">
                <p className="blogpost-section-label">
                  <span className="blogpost-label-line" />
                  02
                </p>
                <h3 className="blogpost-entry-title">Major Service at 12 Months or 10,000 km</h3>
              </div>
              <div className="blogpost-entry-body">
                <p className="blogpost-service-note">Should cover the following at a minimum:</p>
                <ul>
                  <li>Remove, clean, inspect and repack wheel bearings</li>
                  <li>Inspect drum for wearing</li>
                  <li>Inspect magnet face for wearing</li>
                  <li>Remove magnet and check for wearing on arm and magnet</li>
                  <li>Inspect brake shoes and oil backing plate</li>
                  <li>Inspect bushes for movement</li>
                  <li>Inspect springs and suspension system (shock absorbers)</li>
                  <li>Check tyre wear and tyre pressures (including spare)</li>
                  <li>Check wind-down legs and lubricate</li>
                  <li>Check tail lights and exterior lighting</li>
                  <li>Grease coupling and adjust</li>
                  <li>Adjust hand brake</li>
                  <li>Grease shackle and coupling nipples</li>
                  <li>Check anode</li>
                  <li>Run hot water tap and check HWS is full</li>
                  <li>Check water pump operation</li>
                  <li>Test brakes</li>
                  <li>Check exterior seals for deterioration or gaps requiring resealing</li>
                  <li>Check battery condition and report</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
