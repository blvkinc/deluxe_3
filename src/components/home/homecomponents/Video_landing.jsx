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
              markers: false, // Set this to true for debug markers
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
  }, [revealUpAnimation]);

  return (
    <div className="landing_Page_video_container">
      <div className="video-overlay">
        <div className="video-container">
          <div className="video-background">
            <iframe
              className="landing_page_video"
              src="https://player.vimeo.com/video/1068017438?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="2 MIN Landscape 4K_1"
            ></iframe>
          </div>
          <div className="australian-made-banner">
            <span>AUSTRALIAN MADE</span>
          </div>
        </div>
        <div className="text-overlay">
          <h1 className="revealUp">DELUXE CARAVANS</h1>
          <div className="link-overlay revealUp">
            <Link to="/blog" className="btn hover-border-1">
              Latest Insights
            </Link>
            <Link to="/appointment" className="btn hover-border-1">
              Schedule a visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoLanding;
