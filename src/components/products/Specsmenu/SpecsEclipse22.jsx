import React, { useState, useCallback } from 'react';
import './Specsmenu.css';

const SpecsEclipse22 = () => {
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
        content: `Bed - Queen Island with Lift-up Storage 
        Niche - Bedside (Both Sides) 
        Mattress - Innerspring with Pillow-top 
        Club Lounge - with Drop Down Table & Tic Cushion
        Storage - Drawers 
        Windows - Double-Glazed 
        Door - Triple Lock with separate Security Screen 
        Drawers - On Rollers 
        Floor Vinyl - Durable Modern Design 
        Hatch Roof - 700mm x 500mm 
        Hatch Roof - 450mm x 400mm 
        Hinges - 
        Pantry - Half (Slide-Out) 
        TV - Bracket 
        Frame – Meranti  `,
      },
        {
          title: 'SPLASHBACK, BENCHTOP, CUPBOARD DOORS AND UPHOLSTERY',
          content: `Bench Top - Laminate 
          Bench Top Lid - Over Stove 
          Splashback Kitchen - Full Height 
          Cupboard Doors - Premium Laminate (Scratch & UV Resistant) 
          Upholstery - Faux Leather Vinyl `,
      },
        {
          title: 'ELECTRICAL - INTERNAL',
          content: `Projecta 30A charger 
          Projecta Display w Bluetooth 
          Lighting - LED Down lights
          TV - Co-Ax Point
          TV - Aerial Point
          Speakers - 2 x Internal
          USB Ports - 2 x Bedside & 1 x Lounge
          Reading Lights
          Sirocco Fan – Main bed`,
      },
        {
            title: 'ELECTRICAL - EXTERNAL',
            content: `Light - 3 x LED Annexe 
            Light - LED Tunnel Boot 
            Light - Blue LED Door Handle 
            Plug Car - 12 Pin 
            Power - 12V Weather Proof Cig Socket 
            Power - 240V Weather Proof Outlet (Single) 
            Solar - 3 x 170 watt Panel 
            3 x Water Tank Level Probes 
            Antenna - (Reads Horizontal & Vertical Signals) 
            Reverse Camera 
            Battery - 2 x 100AH `,},
          {
            title: 'APPLIANCES',
            content: `Air Conditioning – Dometic Fresh Jet 
            Full Oven - 3 Gas / 1 Electric Burner & Grill 
            Range hood - 12v LED with Twin Fans 
            Fridge / Freezer – Compressor 188L (Dometic) 
            Hot Water Service - 28ltr Gas/Electric 
            25L Microwave 
            Stereo CD/DVD/MP3/Radio System 
            Smart TV - 24" 
            3.2KG Top Load Washing Machine `,
          },
          {
            title: 'PLUMBING',
            content: `Shower 
            Toilet - Thetford 
            Taps - 3 Way Premium Tap 
            Basin ●
            Sink - Single Bowl 
            Gas Bayonet 
            Tap - On A-frame 
            External Shower
            Water Tanks - 2 x 95Ltr 
            Grey Water Tank - 1 x 95Ltr `,
          },
          {
            title: 'EXTERIOR',
            content: `Awning - Roll-Out (Charcoal) 
            Hatch - Storage Compartment
            Picnic Table - Fold-Out 
            Tunnel Boot - Front (Dual Access) 
            Gas Bottles - 2 x 9kg 
            Step - Double (Pull-Out) 
            Large Toolbox with Dual Slide Out 
            Stone Mesh Guard 
            Dual Bike Rack`,
          },
          {
            title: 'PROTECTION',
            content: `Checker Plate Front & Back 900mm (Black) 
            Checker Plate Sides 900mm (Black) 
            Cladding - Aluminium Composite
            Mudflaps 
            Brakes – 12” Electric Brakeaway System `,
          },
          {
            title: 'CHASSIS',
            content: `Axle - Double 
            Hitch - D035 
            A-Frame - 6" 
            Chassis - 6" Dura-Gal 
            Wheels - 16" Alloy 
            Tyres - Heavy-Duty Off-Road 
            Spare Wheel - 1 x Mounted on (Rear Bumper) 
            Jerry Can Holders - 2 x 20Ltr (Rear Bumper) 
            Jack – CNR Supports (Drop Down) 
            Jockey Wheel - A-Frame 
            Storage Mesh Plate- A-Frame`,
          },
          {
            title: 'OVERALL',
            content: `Ball Weight: 220 kg
            Tare Weight: 2860 kg
            ATM: 3500 kg`,
          },
          {
            title: 'SUSPENSION',
            content: `Tuff Ride - 3.5T`,
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

export default React.memo(SpecsEclipse22);