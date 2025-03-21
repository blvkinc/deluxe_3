import React, { useState, useCallback } from "react";
import "./XpTechSpecs.css";

const XpTech = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback(
    (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    [setActiveIndex]
  );
  const data = [
    {
      title: "A GENERATIONAL CARAVAN",
      content: `Full-composite caravans are the ultimate choice, and Deluxe Caravans leads the way. Engineered with XP-TECH’s cutting-edge construction, these caravans offer superior durability and reliability. Say goodbye to concerns about rot and leaks—this is a caravan you can trust. Designed to last for generations, it not only boasts a sleek appearance but also delivers unparalleled benefits."`,
    },
    {
      title: "TOUGH",
      content: `Crafted with a durable yet lightweight fiberglass exterior, this caravan is built to handle Australia’s tough roads and harsh weather. The high strength-to-weight ratio ensures superior resilience, offering long-lasting protection without unnecessary bulk.`,
    },
    {
      title: "NOISE INSULATION",
      content: `XP-TECH composite panels offer superior noise insulation, creating a quiet and relaxing atmosphere inside your caravan. By significantly reducing sound transmission, both from inside and outside, these panels enhance privacy and comfort. The advanced acoustic properties of XP_TECH composite panels are especially beneficial in caravan parks or crowded holiday destinations. You'll quickly appreciate the difference in soundproofing, making every trip more enjoyable.`,
    },
    {
      title: "LIGHTWEIGHT",
      content: `The weight of a caravan is largely determined by its construction materials and methoid. XP-TECH composite panels are designed to be lightweight, resulting in a caravan that’s easier to tow and compatible with a wider range of vehicles. The reduced weight allows you to carry more personal belongings without worrying about exceeding weight limits.
      What good is a caravan if you are overweight and struggling to stay within your legal limits?`,
    },
    {
      title: "WATERPROOF",
      content: `XP-TECH composite panles are built using a seamless one-piece construction, minimizing the risk of water leaks. This design enhances durability, ensuring your caravan can withstand Australia’s tough conditions.
      If you have dealt with water damage in the past, this is the ultimate solution for long-lasting protection.`,
    },
    {
      title: "HIGH THERMAL INSULATION",
      content: `XP-TECH composite material delivers superior insulation, helping maintain a cooler interior in summer and a warmer one in winter. Its enhanced thermal efficiency allows you to achieve your ideal temperature faster while using less energy—especially beneficial for off-grid adventures.`,
    },
    {
      title: "ROTPROOF",
      content: `XP-TECH composite material makes the caravan lighter, reducing fuel consumption for your tow vehicle. This not only saves you money but also helps minimize environmental impact.`,
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

export default React.memo(XpTech);
