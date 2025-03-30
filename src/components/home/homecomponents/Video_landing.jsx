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
          <div
            className="video-background"
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            <iframe
              className="landing_page_video"
              src="https://player.vimeo.com/video/1069631317?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="deluxe landing"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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