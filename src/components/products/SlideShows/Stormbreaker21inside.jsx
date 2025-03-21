import React, { useState, useEffect } from "react";
import "./Stormbreaker21inside.css";

import Strombreaker21insidecarousel from "../mobile-carousels/Strombreaker21insidecarousel";

const sections = [
  {
    name: "Exterior",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21des.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%201.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%202.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%203.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%204.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%205.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%203.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%202.webp",
      "https://deluxcaravan.b-cdn.net/assets/21/21%20ex%201.webp",
    ],
    description: "",
  },
  {
    name: "Layout",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216%20layout.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21laydes.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21lay2.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216%20layout.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21lay2.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216%20layout.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21lay2.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/SB216%20layout.webp",
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/21lay2.webp",
    ],
    description: "",
  },
  {
    name: "Inside",
    images: ["https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%201n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%202n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%203n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%204n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%205n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%206n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%207n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%208n.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%209n.webp",],
    description: "",
  },
];

function Strombreaker21inside() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    var $cont = document.querySelector(".cont_19_i");
    var $elsArr = [].slice.call(document.querySelectorAll(".el_19_i"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn_19_i")
    );

    setTimeout(function () {
      $cont.classList.remove("s--inactive");
    }, 200);

    let activeElement = null;

    $elsArr.forEach(function ($el, index) {
      $el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        $cont.classList.add("s--el-active");
        this.classList.add("s--active");
        activeElement = this;
        setActiveSection(index);
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener("click", function (e) {
        e.stopPropagation();
        $cont.classList.remove("s--el-active");
        if (activeElement) {
          activeElement.classList.remove("s--active");
          activeElement = null;
        }
      });
    });
  }, []);

  const handleNextImage = () => {
    if (
      activeSection !== null &&
      sections[activeSection] &&
      sections[activeSection].images
    ) {
      const maxIndex = sections[activeSection].images.length - 1;
      setActiveImageIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : 0
      );
    }
    console.log(activeImageIndex);
  };

  const handlePrevImage = () => {
    if (
      activeSection !== null &&
      sections[activeSection] &&
      sections[activeSection].images
    ) {
      const maxIndex = sections[activeSection].images.length - 1;
      setActiveImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : maxIndex
      );
    }
    console.log(activeImageIndex);
  };

  return (
    <>
      <div className="desktop-div">
        <div className="cont_19_i s--inactive">
          <div className="cont__inner_19_i">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`el_19_i ${
                  activeSection === index ? "s--active" : ""
                }`}
              >
                <div className="el__overflow_19_i">
                  <div className="el__inner_19_i">
                    <div className="el__bg_19_i">
                      <div className="mySlides active">
                        <img
                          src={section.images[activeImageIndex]}
                          alt={`Image ${activeImageIndex + 1}`}
                        />
                      </div>
                    </div>
                    <div className="el__preview-cont_19_i">
                      <h2 className="el__heading_19_i">{section.name}</h2>
                    </div>
                    <div className="el__content_19_i">
                      <button className="prev" onClick={handlePrevImage}>
                        &#10094; Previous
                      </button>
                      <button className="next" onClick={handleNextImage}>
                        Next &#10095;
                      </button>
                      <div className="el__text_19_i">{section.description}</div>
                      <div className="el__close-btn_19_i">
                        <h3>Close</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile-div">
        <Strombreaker21insidecarousel />
      </div>
    </>
  );
}

export default Strombreaker21inside;
