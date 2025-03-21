import React, { useState, useEffect } from "react";
import "./Stormbreaker23inside.css";

import Eclipse21crousel from "../mobile-carousels/Eclipse21carousel";

const sections = [
  {
    name: "Exterior",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%201.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%202.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%203.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%204.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%205.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%206.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%207.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%208.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%209.webp"
    ],
    description: "",
  },
  {
    name: "Layout",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp","https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp",
    ],
    description: "",
  },
  {
    name: "Inside",
    images: ["https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%201.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%202.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%203.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%204.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%205.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%201.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%202.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%203.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%204.webp","https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%205.webp"],
    description: "",
  },
];

function Eclipse21gallery() {
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
        <Eclipse21crousel />
      </div>
    </>
  );
}

export default Eclipse21gallery;
