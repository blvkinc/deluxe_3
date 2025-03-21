import React from "react";
import "./model.css";
import { motion, AnimatePresence } from "framer-motion";

const Model = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <div className="model-overlay">
        <div className="model">
          <motion.div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            <div className="model-buttons">
              <button className="model-button model-cancel" onClick={onClose}>
                Close
              </button>
            </div>
            {/* <div className="model-title">
              <h1>1 Sold, 1 Stock Caravan Left. Hurry,Don't Miss Out❗️❗️</h1>
              <p className="model-disc2">
                OUR CHRISTMAS GIFT TO YOU <b>19'6</b> AND{" "}
                <b>21'6 STORMBREAKER</b>
              </p>
            </div> */}
            <div className="model-content">
              {/* <img src="https://deluxcaravan.b-cdn.net/assets/Ads/popup2.webp" className="model-ad-image"></img> */}
              {/* <p className="model-disc3">
                <b>
                  <u>WITH OFF-GRID KIT</u>
                </b>
              </p>
              <p className="model-disc3">
                <b>2 X 100AH LITHIUM BATTERIES</b>
              </p>
              <p className="model-disc3">
                <b>COMPRESSOR FRIDGE</b>
              </p>
              <p className="model-disc3">
                <b>3 X SOLAR PANELS</b>
              </p>
              <p className="model-disc3">
                <b>DOMETIC FRESHJET AIRCON</b>
              </p> */}
              <h2>"Stock Demo OFF-GRID 19'6 Stormbreaker - 2 Bunks Available Now. Save 14K!"</h2>
            </div>
            <button className="model-button model-inqurie">
              <a href="/contact">&#128073;Contact us</a>
            </button>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default React.memo(Model);
