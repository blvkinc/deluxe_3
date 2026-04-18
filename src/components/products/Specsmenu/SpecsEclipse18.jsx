import React, { useState, useCallback } from "react";
import "./Specsmenu.css";

const SpecsEclipse18 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback(
    (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    [setActiveIndex]
  );

  const data = [
    {
      title: "INTERIOR",
      content: `Bed - Queen Island
        Niche - Bedside (Both Sides)
        Mattress - Innerspring with Pillow-top
        Straight Lounge - with Drop Down Table
        Storage - Drawers
        Windows - Double-Glazed
        Door - Triple Lock with sep Security Screen
        Drawers - On Rollers
        Floor Vinyl - Durable Modern Design
        Hatch Roof - 700mm x 500mm
        Hatch Roof - 450mm x 400mm
        TV - Bracket
        Hinges
        Frame – Meranti`,
    },
    {
      title: "SPLASHBACK, BENCHTOP, CUPBOARD DOORS AND UPHOLSTERY",
      content: `Bench Top - Laminate
        Bench Top Lid - Over Stove
        Splashback Kitchen - Full Height
        Cupboard Doors - Premium Laminate (Scratch & UV Resistant)
        Upholstery - Faux Leather Vinyl`,
    },
    {
      title: "ELECTRICAL - INTERNAL",
      content: `Projecta 30A Charger
        Projecta 30A Solar Regulator
        Bluetooth Touch Screen Display
        Lighting - LED Down lights
        TV - Co-Ax Point
        TV - Aerial Point
        Speakers - 2 x Internal
        USB Ports - 1 x in Each Bunk (2), 2 x Bedside & Lounge
        Reading Lights
        Sirocco Fan – Main bed`,
    },
    {
      title: "ELECTRICAL - EXTERNAL",
      content: `2 x LED Annexe (Dual)
        LED Tunnel Boot (Dual)
        Light – LED Light Bar (Front & Back)
        Light - Blue LED Door Handle
        Light - Blue LED Strip Light (Door Footwell)
        Plug Car - 12 Pin
        Power - 12V Weather Proof Cig Socket
        Power - 240V Weather Proof Outlet (Single)
        Solar - 3 x 170 Watt Panel
        2 x Water Tank Level Probes
        Reverse Camera & Display
        Antenna - (Reads Horizontal & Vertical Signals)
        Battery - 2 x 100AH Lithium
        Side Markers`,
    },
    {
      title: "APPLIANCES",
      content: `Air Conditioning – Dometic FreshJet Pro
        3KG Washing Machine
        Mini Grill - 3 Gas / 1 Electric Burner & Grill
        Range Hood - 12V LED with Twin Fans
        Fridge / Freezer – Dometic 188L Compressor
        Hot Water Service - 28ltr Gas/Electric
        25L Microwave
        Stereo CD/DVD/MP3/Radio System
        TV - 24" Smart`,
    },
    {
      title: "PLUMBING",
      content: `ABS Light Weight Shower
        Toilet - Thetford
        Taps - Premium Black
        Black Round Basin
        Sink - Single Black
        Gas Bayonet
        3 Way Tap with Water Filter
        External Shower
        Tap - On A-frame
        Water Tanks - 2 x 95Ltr`,
    },
    {
      title: "EXTERIOR",
      content: `Awning - Roll-Out (Charcoal)
        Hatch - Storage Compartment (Rear Off-Side)
        Picnic Table - Fold-Out
        Tunnel Boot - Front (Dual Access)
        Gas Bottles - 2 x 9kg
        Step - Double (Pull-Out)
        Large Toolbox with Dual Slide Out
        Stone Mesh Guard`,
    },
    {
      title: "PROTECTION",
      content: `Checker Plate Front 900mm (Black)
        Checker Plate Sides 900mm (Black)
        Cladding - Aluminium Composite
        Mudflaps
        Brakes – 12" Electric Breakaway System`,
    },
    {
      title: "CHASSIS",
      content: `Axle - Single
        Hitch - D035
        A-Frame - 6"
        Chassis - 6" Dura-Gal
        2" Raiser
        Wheels - 16" Alloy
        Tyres - Heavy-Duty Off-Road
        Spare Wheel - 1 x Mounted on (Rear Bumper)
        Jerry Can Holders - 2 x 20Ltr (Rear Bumper)
        Jack - CNR Supports (Drop Down)
        Jockey Wheel - A-Frame
        Storage Mesh Plate - A-Frame`,
    },
    {
      title: "OVERALL",
      content: `Ball Weight: 180 kg
        Tare Weight: 2350 kg
        ATM: 3000 kg`,
    },
    {
      title: "SUSPENSION",
      content: `TuffRide - 3.0T`,
    },
  ];

  return (
    <div className="specs_container">
      <div className="accordion">
        <dl>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <dt>
                <button
                  className={`accordionTitle ${
                    activeIndex === index ? "accordionTitleActive" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </button>
              </dt>
              <dd
                className={`accordionItem ${
                  activeIndex === index
                    ? "animateIn"
                    : "accordionItemCollapsed animateOut"
                }`}
              >
                <ul className="list">
                  {item.content.split("\n").map((listItem, subIndex) => (
                    <li key={subIndex}>{listItem.trim()}</li>
                  ))}
                </ul>
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default React.memo(SpecsEclipse18);
