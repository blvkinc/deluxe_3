import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./HomeComponent.css";
import { gsap } from "gsap";

function VideoLanding() {
  const revealUpAnimation = useMemo(() => {
    return () => {
      gsap.utils.toArray(".revealUp").forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              end: "bottom 20%",
              markers: false,
            },
          }
        );
      });
    };
  }, []);

  useEffect(() => {
    revealUpAnimation();

    // Add slide-in animation for Australian Made banner
    gsap.fromTo(
      ".australian-made-banner",
      { x: -100, opacity: 0 },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Load Vimeo Player API
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [revealUpAnimation]);

  return (
    <div className="landing_Page_video_container">
      <div className="video-overlay">
        <div className="video-container">
          <div className="video-background">
            <iframe
              className="landing_page_video"
              src="https://player.vimeo.com/video/1204696024?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="deluxe landing"
            ></iframe>
          </div>
        </div>
        <div className="text-overlay">
          <div className="hero-content">
            <h1 className="hero-title revealUp">
              <span className="hero-title-part">Deluxe Caravans</span>
              <span className="hero-title-x"> X </span>
              <span className="hero-title-part">Infinite RV</span>
            </h1>
            <h2 className="hero-subtitle revealUp">A partnership creating infinite possibilities</h2>
            <div className="hero-buttons revealUp">
              <Link to="/media" className="btn modern-btn">
                <span>Latest Insights</span>
              </Link>
              <Link to="/appointment" className="btn modern-btn">
                <span>Schedule a visit</span>
              </Link>
            </div>
          </div>
          <div className="australian-made-banner">
            <span>AUSTRALIAN MADE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoLanding;
