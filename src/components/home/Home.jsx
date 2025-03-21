import React, { useState, useEffect } from "react";
import "./Home.css";
import GoToTop from "../functions/GoToTop";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";
import HomeDesc from "./homecomponents/HomeDescription";
import CarouselSection from "./homecomponents/CarouselSection";
import Model from "../popup-ad/model";
import Promovid from "./homecomponents/Promovid"

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showAdIfNecessary = () => {
      const lastShownTimestamp = localStorage.getItem("adLastShownTimestamp");
      const currentTime = Date.now();
      const ONE_MINUTE = 60 * 1000;

      if (!lastShownTimestamp || currentTime - lastShownTimestamp >= ONE_MINUTE) {
        setIsOpen(true);
        localStorage.setItem("adLastShownTimestamp", currentTime);
      }
    };

    showAdIfNecessary();
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      {/* {isOpen && (
        // <div className="ad-model">
        //   <Model isOpen={isOpen} onClose={handleCloseModal} />
        // </div>
      )} */}
      <div className="videocomponent">
        <Video />
      </div>
      <div className="videocomponent">
        <Promovid />
      </div>
      <div className="component">
        <CarouselSection />
      </div>
      <div className="component">
        <HomeDesc />
      </div>
      <div className="component">
        <Gallery />
      </div>
      <div className="component">
        <Reviews />
      </div>
      <div className="partnercomponent">
        <Partners />
      </div>
      <GoToTop />
    </div>
  );
}

export default Home;
