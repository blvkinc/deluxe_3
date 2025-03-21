import React, { useEffect, useRef, useCallback } from "react";
import "./HomeComponent.css";

const Partners = () => {
  const sliderRef = useRef(null);

  const animateSlider = useCallback(() => {
    if (sliderRef.current) {
      const slideTrack = sliderRef.current.querySelector(".slide-track");
      const slides = sliderRef.current.querySelectorAll(".slide");
      const slideWidth = slides[0].offsetWidth;

      let currentIndex = 0;

      const cloneFirstSlide = () => {
        const firstSlide = slides[0].cloneNode(true);
        slideTrack.appendChild(firstSlide);
      };

      const removeLastSlide = () => {
        const lastSlide = slideTrack.lastChild;
        slideTrack.removeChild(lastSlide);
      };

      const interval = setInterval(() => {
        currentIndex++;
        const translateX = -currentIndex * slideWidth;
        slideTrack.style.transition = "transform 1s linear";
        slideTrack.style.transform = `translateX(${translateX}px)`;

        if (currentIndex === slides.length - 1) {
          setTimeout(() => {
            slideTrack.style.transition = "none";
            slideTrack.style.transform = "translateX(0)";
            currentIndex = 0;
            removeLastSlide();
            cloneFirstSlide();
          }, 1000);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    animateSlider();
  }, [animateSlider]);

  return (
    <>
      <h1 className="partners-heading">Our Premium Partners</h1>
      <div className="slider" ref={sliderRef}>
        <div className="slide-track">
          {/* Your slide items */}
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/2022_bmpro-logo-hp.webp" width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/Enerdrive-logo.webp" width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/logo.webp" width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/dometic.webp" width="500" height="auto" alt="" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/cruisemaster.webp" width="500" height="auto" alt="" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/atrv-min.webp" width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src="https://deluxcaravan.b-cdn.net/assets/partners/camec-min.webp" width="500" height="200" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Partners);
