import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import "./About.css";
import GoToTop from "../functions/GoToTop";


function About() {
  const [refCaravans, inViewCaravans] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refValues, inViewValues] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="aboutcontainer">
      <div className="component">
        <div className="context">
          <h1>About Us</h1>
          <p className="subheader">
            Discover why we do what we do & why we love it!
          </p>
          <p>
            At Deluxe Caravans, our story starts with an all-consuming passion
            for life on the road. For over 10 years, we’ve helped families enjoy
            the beauty of Australia while creating the joy and kinship you can
            only forge on long road trips together. Our dedication to this stems
            from our wonderful experiences exploring the outback or roasting
            s’mores around a cozy campfire. Being avid travelers to the remotest
            parts of the country and an active part of the caravan industry, we
            know what it takes to create top-of-the-line, bespoke caravans that
            meet your every expectation.
            </p>
        </div>
      </div>
      <div className="component" ref={refCaravans}>
        <div className="context">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inViewCaravans ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            A bit about our caravans
          </motion.h2>
          <p>
            Our caravans are built for durability with the following features to
            set us apart from the market;
            <ul>
              <li>Built In House</li>
              <li>Lightweight</li>
              <li>Fully Insulated</li>
              <li>Meranti Timber or Riveted Aluminium Frames</li>
              <li>
                CNC Furniture to provide a Clean Finish and a Modern Design.
              </li>
              <li>One Piece Composite Roof options</li>
              <li>Single Piece Flooring options</li>
            </ul>
            We understand the importance of building caravans that last
            generations and can be passed on to the next generation of
            caravanning Nomads. From OFF-ROAD to Extreme OFF-GRID capabilities
            that will help you reach destinations unknown. We equip our caravans
            with the latest technology so you don’t miss a beat when traveling.
            Our vast experience in manufacturing through times of change has
            allowed us to adapt and create the ultimate OFF-ROAD caravans
            Australia has to offer. Our Eco-Friendly, Bespoke options give us
            the edge in the competitive market.
            </p>
        </div>
      </div>
      <div className="component" ref={refValues}>
        <h1>Our Values</h1>
        <div className="image-container">
          <motion.div
            className="image-item"
            variants={imageVariants}
            initial="initial"
            animate={inViewValues ? "animate" : "initial"}
          >
            <img
              src="https://deluxcaravan.b-cdn.net/assets/ourval/ausmade.webp"
              alt="Bespokemodels"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <h3>AUSTRALIAN MADE</h3>
            <p>
              Founded in 2011, Everything from the design to the construction of
              each deluxe caravan is done in-house.
            </p>
          </motion.div>
          <motion.div
            className="image-item"
            variants={imageVariants}
            initial="initial"
            animate={inViewValues ? "animate" : "initial"}
          >
            <img
              src="https://deluxcaravan.b-cdn.net/assets/ourval/teamwork.webp"
              alt="Ecofriendly"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <h3>TEAMWORK</h3>
            <p>
              Our customers mean the world to us; that’s why we go out of our
              way to provide the care they deserve.
            </p>
          </motion.div>
          <motion.div
            className="image-item"
            variants={imageVariants}
            initial="initial"
            animate={inViewValues ? "animate" : "initial"}
          >
            <img
              src="https://deluxcaravan.b-cdn.net/assets/ourval/badge.webp"
              alt="Experience"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <h3>QUALITY & INNOVATION</h3>
            <p>
              We don’t believe in cutting corners. Our work is driven by the
              utmost precision, innovation, and quality.
            </p>
          </motion.div>
          <motion.div
            className="image-item"
            variants={imageVariants}
            initial="initial"
            animate={inViewValues ? "animate" : "initial"}
          >
            <img
              src="https://deluxcaravan.b-cdn.net/assets/ourval/technical-support.webp"
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <h3>TOP NOTCH SUPPORT</h3>
            <p>
              Our team is at the heart of our success. That’s why we give them
              the support they need to flourish.
            </p>
          </motion.div>
          <motion.div
            className="image-item"
            variants={imageVariants}
            initial="initial"
            animate={inViewValues ? "animate" : "initial"}
          >
            <img
              src="https://deluxcaravan.b-cdn.net/assets/ourval/community.webp"
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <h3>COMMUNITY</h3>
            <p>
              We’re big believers in our local community. At Deluxe Caravans, we
              support businesses in our area.
            </p>
          </motion.div>
          <motion.div
            className="image-item"
            variants={imageVariants}
            initial="initial"
            animate={inViewValues ? "animate" : "initial"}
          >
            <img
              src="https://deluxcaravan.b-cdn.net/assets/ourval/ecology.webp"
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <h3>ECO FRIENDLY OPTIONS</h3>
            <p>
              From faux leather to composting toilets, we ensure your carbon
              footprint on the road is at a minimum.
            </p>
          </motion.div>
        </div>
        </div>
      <GoToTop />
    </div>
  );
}

export default React.memo(About);