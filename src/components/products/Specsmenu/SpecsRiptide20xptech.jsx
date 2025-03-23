import React, { useState, useCallback } from 'react';
import './Specsmenu.css';

const SpecsRiptide20xptech = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback(
    (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    [setActiveIndex]
  );

    const data = [
      {
        title: 'INTERIOR',
        content: `Bed - Queen East - West
        Niche - Bedside - Both Sides
        Mattress - Innerspring with Pillow-Top
        L - Shape Lounge - with Drop Down Table with TIC Cushion
        Storage - Drawers
        Windows - Double-Glazed
        Door - Triple Lock with Separate Security Screen
        Drawers - On Rollers
        Floor Vinyl - Durable Modern Design
        Hatch Roof - 700mm x 500mm
        Hatch Roof - 450mm x 400mm
        TV - Bracket
        Hinges - Piano
        Pantry - Half (Slide-Out)
        Frame – Meranti/ CNC`,
      },
      {
        title: 'SPLASHBACK, BENCHTOP, CUPBOARD DOORS AND UPHOLSTERY',
        content: `Bench Top - Premium Laminate 
        Bench Top Lid - Over Stove
        Splashback Kitchen - Full Height
        Cupboard Doors - Premium Laminate ( Scratch & UV Resistant ) 
        Cupboard Doors - Premium Laminate ( Scratch & UV Resistant ) `,
      },
      {
        title: 'ELECTRICAL - INTERNAL',
        content: `Projecta Intell Grid Compact ( 180A AC Charger, 60A MPPT, 40 A DC & 3000W Inverter)
        Projecta 7 Inch Touch Display Bluetooth & Light Control
        Lighting - LED Down lights 
        TV - Co-Ax Point  
        TV - Aerial Point
        Speakers - 2 x Internal
        USB Ports - 2 x Bedside & 1 x Lounge 
        Reading Lights
        Sirocco Fan – Main bed
        Wireless Multi Switches
        Bug Lights`,
      },
      {
        title: 'PROTECTION',
        content: `Raptor Coated Front 900mm (Black)
        Raptor Coated Sides 700mm (Black)
        Raptor Coated Back 900mm (Black)
        Fiberglass
        Mudflaps
        12" Electric Brake System`,
      },
      {
        title: 'CHASSIS',
        content: `Dual Axle
        Hitch: D035
        A-Frame: 6″
        Chassis: 6″ Dura-Gal
        2" Raiser
        Wheels: 16″ Alloy
        Heavy-Duty Off-Road Tires
        1 x Spare Wheel (Mounted On Rear Bumper)
        2 x Jerry Can Holders (Rear Bumper)
        Jack: CNR Supports (Drop-Down)
        Bos Jack - A-Frame
        Storage Mesh Plate`,
      },
      {
        title: 'OVERALL',
        content: `Approx Ball Weight: 160 kg
        Approx Tare Weight: 2750 kg
        ATM: 3500 kg`,
      },
      {
        title: 'SUSPENSION',
        content: `FULL OFF-ROAD - INDEPENDENT – 3.5T`,
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
                    activeIndex === index ? 'accordionTitleActive' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </button>
              </dt>
              <dd
                className={`accordionItem ${
                  activeIndex === index
                    ? 'animateIn'
                    : 'accordionItemCollapsed animateOut'
                }`}
              >
                <ul className="list">
                  {item.content.split('\n').map((listItem, subIndex) => (
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

export default React.memo(SpecsRiptide20xptech); 
