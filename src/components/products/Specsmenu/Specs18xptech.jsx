import React, { useState, useCallback } from "react";
import "./Specsmenu.css";

const Specs18xptech = () => {
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
      content: `Main Bed: East-West Queen Bed
        Bedside Storage: Bedside Niches on Both Sides
        Bunk Beds: 2 or 3 Bunks with Windows (Length: 2m)
        Mattress: Premium Innerspring Mattress with Pillow-Top Comfort Layer
        Lounge: Straight Lounge with Drop-Down Table
        Storage: Integrated Soft Close Storage Drawers
        Windows: Double-Glazed Windows
        Entry Door: Triple-Lock Door with Separate Security Screen
        Drawer System: Smooth-Glide Roller Drawers
        Flooring: Durable Modern Vinyl Flooring
        Roof Hatch: 700mm x 500mm Roof Hatch
        Additional Roof Hatch: 450mm x 400mm Roof Hatch
        TV Mount: Adjustable TV Bracket
        Cabinet Hardware: Concealed Soft Close Hinges
        Pantry: Half-Height Slide-Out Pantry
        Frame: Sandwich-structured composites, combining a fiberglass-reinforced plastic surface with an XPS foam core.
        Benchtop: Premium Corian or Laminate Benchtop
        Cooktop Cover: Benchtop Lid Over Stove
        Kitchen Splashback: Full-Height Kitchen Splashback
        Cabinetry: Premium Scratch & UV-Resistant Laminate Cupboard Doors
        Upholstery: Premium Faux Leather Vinyl Upholstery`,
    },
    {
      title: "APPLIANCES",
      content: `Air Conditioning: Dometic FreshJet Roof-Mounted Air Conditioner
        Cooktop & Grill: 3 Gas Burners + 1 Electric Hotplate with Integrated Grill
        Rangehood: 12V LED Rangehood with Twin Extraction Fans
        Refrigeration: 188L Dometic Compressor Fridge/Freezer
        Hot Water System: Instant Continuous Hot Water
        Microwave: 25L Microwave
        Entertainment System: CD/DVD/MP3 Stereo with AM/FM Radio
        Smart TV: 24" Smart Television
        Bedroom Ventilation: Sirocco Fan to Main Bed Area and Bunk Area
        Washing Machine: Washing Machine`,
    },
    {
      title: "INTERNAL ELECTRICAL",
      content: `Battery Management System: Victron Energy System with 3000W Inverter, 120A Charger, Dual MPPT & DC-DC Charger
        Battery Monitoring: Cerbo GX with 7" Touch Display
        Interior Lighting: LED Downlights Throughout
        TV Connection: Coaxial TV Point
        TV Antenna Connection: TV Aerial Point
        Audio System: 2 x Internal Speakers
        USB Charging: 1 x Bunk USB Ports, 2 x Bedside USB Ports & Lounge USB Charging Points
        Reading Lights: Dedicated LED Reading Lights`,
    },
    {
      title: "EXTERNAL ELECTRICAL",
      content: `Annexe Lighting: 2 x LED Awning Lights
        Tunnel Boot Lighting: 1 x LED Tunnel Boot Lights (Over Tunnel Boot)
        Exterior Lighting: Front & Rear LED Light Bars
        Entry Handle Lighting: Blue LED Illuminated Door Handle
        Vehicle Connection: 12-Pin Trailer Plug
        12V Power Outlet: Weatherproof External 12V Socket
        240V Power Outlet: Weatherproof External 240V Single Outlet
        Solar System: 4 x 200W Solar Panels (800W Total)
        Water Tank Monitoring: 3 x Water Tank Level Probes
        Safety System: Reverse Camera with In-Cabin Display
        TV Antenna: Multi-Directional Antenna (Horizontal & Vertical Signal Reception)
        Lithium Battery System: 1 x 200Ah Lithium Batteries (200Ah Total Capacity)
        Side Marker Lights: LED Side Marker Lighting with Reflectors`,
    },
    {
      title: "PLUMBING",
      content: `Shower: Lightweight ABS Shower Unit
        Toilet: Thetford Cassette Toilet
        Tapware: Premium Black Taps Throughout
        Bathroom Basin: Black Round Basin
        Kitchen Sink: Single Bowl Black Sink
        Gas Connection: External Gas Bayonet Fitting
        Filtered Water System: 3-Way Mixer Tap with Integrated Water Filter
        External Shower: Convenient External Shower Outlet
        A-Frame Tap: Water Tap Mounted on A-Frame
        Fresh Water Capacity: 2 x 110L Fresh Water Tanks
        Grey Water Capacity: 110L Grey Water Tank`,
    },
    {
      title: "EXTERIOR",
      content: `Awning: Electric Carefree Awning
        Picnic Table: Fold-Out External Picnic Table
        Tunnel Boot: Front Tunnel Boot with Dual-Side Access
        Gas Storage: 2 x 9kg Gas Bottles
        Entry Step: Double Pull-Out Step
        Toolbox: Custom Toolbox with Dual Slide-Outs & Wood Box
        Bike Rack: Front Dual Bike Rack
        TV Mount: Adjustable TV Bracket`,
    },
    {
      title: "CHASSIS & RUNNING GEAR",
      content: `Axle: Single Axle
        Hitch: D035 Off-Road Coupling
        A-Frame: 6" A-Frame Construction
        Chassis: 6" Dura-Gal Chassis with 6" Raiser - Truss Flat Chassis
        Wheels: 16" Alloy Wheels
        Tyres: Heavy-Duty Off-Road Tyres
        Spare Wheel: 1 x Spare Wheel Mounted on Rear Bumper
        Jerry Can Storage: 2 x 20L Jerry Can Holders Mounted on Rear Bumper
        Stabiliser Jacks: Drop-Down Corner Support Jacks
        Jockey Wheel: Electric Black Jack
        A-Frame Storage: Mesh Storage Platform on A-Frame
        Chassis Finish: Raptor-Coated Chassis`,
    },
    {
      title: "SUSPENSION",
      content: `Suspension System: Tuffride 3.0T Independent Full Off-Road Suspension`,
    },
    {
      title: "PROTECTION & SAFETY",
      content: `Front, Back Protection: 900mm Black Raptor Coating. Sides Protection: 700mm Black Raptor Coating
        Cladding: Fiberglass Cladding
        Mudflaps: Heavy-Duty Mudflaps
        Stone Protection: Stone Mesh Guard
        Braking System: 12" Electric Brakes with Breakaway Safety System`,
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

export default React.memo(Specs18xptech);
