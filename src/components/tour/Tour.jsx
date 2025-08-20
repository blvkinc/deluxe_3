import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../home/Home.css";
import "./Tour.css";
import GoToTop from "../functions/GoToTop";

const Tour = React.memo(() => {
  const [selectedTour, setSelectedTour] = useState("Storm Breaker 21'6 FT");
  const [isLoading, setIsLoading] = useState(true);

  const tourData = [
    {
      name: "Eclipse 22' FT",
      url: "https://sh.smartviewmedia.com.au/m/prb7275/?v=prb7275",
      description: "Experience the luxury and comfort of our Eclipse 22' model",
      image:
        "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_1-min.webp",
    },
    {
      name: "Riptide 22' FT",
      url: "https://sh.smartviewmedia.com.au/m/kyd7182/?v=kyd7182",
      description: "Explore the spacious family-friendly Riptide 22' layout",
      image:
        "https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp",
    },
    {
      name: "Storm Breaker 23'11 FT",
      url: "https://sh.smartviewmedia.com.au/m/xmc7473/?v=xmc7473",
      description: "Our largest Storm Breaker model with maximum space",
      image: "https://deluxcaravan.b-cdn.net/assets/header/2311.webp",
    },
    {
      name: "Storm Breaker 21'6 FT",
      url: "https://sh.smartviewmedia.com.au/m/ghk6493/?v=ghk6493",
      description: "The perfect balance of size and functionality",
      image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    },
    {
      name: "Storm Breaker 19'6 FT",
      url: "https://sh.smartviewmedia.com.au/m/xre6796/?v=xre6796",
      description: "Compact yet feature-rich Storm Breaker model",
      image: "https://deluxcaravan.b-cdn.net/assets/header/196.webp",
    },
    {
      name: "Storm Breaker 18'6 FT",
      url: "https://sh.smartviewmedia.com.au/m/yni6491/?v=yni6491",
      description: "Our most compact Storm Breaker with all essentials",
      image: "https://deluxcaravan.b-cdn.net/assets/header/186.webp",
    },
  ];

  const currentTour = tourData.find((tour) => tour.name === selectedTour);

  const handleTourChange = (tourName) => {
    setIsLoading(true);
    setSelectedTour(tourName);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedTour]);

  return (
    <div
      className="virtual-container"
      style={{ backgroundColor: "#fff", color: "#000" }}
    >
      <div className="virtual-hero">
        <div className="hero-content">
          <motion.h1
            className="virtual-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Virtual Tours
          </motion.h1>
          <motion.p
            className="virtual-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Step inside our caravans from the comfort of your home
          </motion.p>
        </div>
      </div>

      <div className="virtual-content">
        <div className="tour-selector">
          <div className="dropdown-container">
            <label htmlFor="tour-select">Choose Your Virtual Experience:</label>
            <select
              id="tour-select"
              value={selectedTour}
              onChange={(e) => handleTourChange(e.target.value)}
              className="tour-dropdown"
            >
              {tourData.map((tour) => (
                <option key={tour.name} value={tour.name}>
                  {tour.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="virtual-viewer">
          <div className="viewer-header">
            <h3>Now Viewing: {currentTour?.name}</h3>
            <div className="viewer-controls">
              <span className="control-hint">
                Use mouse to navigate • Click and drag to look around
              </span>
            </div>
          </div>

          <div className="iframe-container">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  className="loading-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="loading-spinner"></div>
                  <p>Loading virtual tour...</p>
                </motion.div>
              ) : (
                <motion.iframe
                  key={selectedTour}
                  className="virtual-iframe"
                  frameBorder="0"
                  allow="vr;fullscreen;gyroscope;accelerometer"
                  mozAllowFullScreen
                  webkitAllowFullScreen
                  allowFullScreen
                  src={currentTour?.url}
                  title={`Virtual Tour - ${selectedTour}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  );
});

export default Tour;
