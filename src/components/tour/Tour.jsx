import React, { useState } from "react";
import "../home/Home.css";
import "./Tour.css";
import GoToTop from "../functions/GoToTop";

const Tour = React.memo(() => {
  const initialTour = "Storm Breaker Off-Road 21’6";
  const [selectedTour, setSelectedTour] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const tourData = [
    {
      name: "Eclipse 22` FT",
      url: "https://sh.smartviewmedia.com.au/m/prb7275/?v=prb7275 ",
    },
    {
      name: "Riptide 22’ FT",
      url: "https://sh.smartviewmedia.com.au/m/kyd7182/?v=kyd7182",
    },
    {
      name: "Storm Breaker 23'11 FT",
      url: "https://sh.smartviewmedia.com.au/m/xmc7473/?v=xmc7473",
    },
    {
      name: "Storm Breaker 21’6 FT",
      url: "https://sh.smartviewmedia.com.au/m/ghk6493/?v=ghk6493",
    },
    {
      name: "Storm Breaker 19’6 FT",
      url: "https://sh.smartviewmedia.com.au/m/xre6796/?v=xre6796",
    },
    {
      name: "Storm Breaker 18’6 FT",
      url: "https://sh.smartviewmedia.com.au/m/yni6491/?v=yni6491",
    },
  ];

  const handleTourChange = (event) => {
    setSelectedTour(event.target.value);
    setInitialLoad(false);
  };

  return (
    <div className="virtualcontainer">
      <h1>Virtual tours</h1>
      <div className="dropdown-container">
        <select value={selectedTour} onChange={handleTourChange}>
          <option value="" disabled>
            Select virtual tour
          </option>
          {tourData.map((tour) => (
            <option key={tour.name} value={tour.name}>
              {tour.name}
            </option>
          ))}
        </select>
      </div>
      <div className="virtualcomponent">
        <iframe
          frameBorder="0"
          allow="vr;fullscreen"
          mozAllowFullScreen
          webkitAllowFullScreen
          src={
            initialLoad
              ? tourData.find((tour) => tour.name === initialTour)?.url
              : selectedTour
              ? tourData.find((tour) => tour.name === selectedTour)?.url
              : ""
          }
          title={`Virtual Tour - ${initialLoad ? initialTour : selectedTour}`}
        ></iframe>
      </div>
      <GoToTop />
    </div>
  );
});

export default Tour;
