import React, { useState, useEffect } from "react";
import "./Stormbreaker21inside.css";

import Rip22carousel from "../mobile-carousels/Riptide22insidecarousel";

const sections = [
  {
    name: "Exterior",
    images: [
    "https://deluxcaravan.b-cdn.net/assets/E22/1-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/2-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/3-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/4-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/5-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/6-min.webp",
    ],
    description: "",
  },
  {
    name: "Layout",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new2-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new2-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new2-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new2-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new-min.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/riptide%20layout%20new2-min.webp",
     
    ],
    description: "",
  },
  {
    name: "Inside",
    images: ["https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(1).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(2).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(4).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(5).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(6).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(7).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20%20(8).webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Ripin9.webp",
      "https://deluxcaravan.b-cdn.net/assets/Rip22/Rip%20In%20(10).webp",
],
    description: "",
  },
];

function Rip22gallery() {
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
        <Rip22carousel />
      </div>
    </>
  );
}

export default Rip22gallery;
