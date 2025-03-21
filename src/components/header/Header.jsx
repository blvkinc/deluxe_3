import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import _ from "lodash"; // Import lodash for debounce
import "./Header.css";
import Navbar from "./mobileNavbar/Navbar";

const Header = () => {
  const location = useLocation();
  const isCustomHeaderPage =
    location.pathname === "/maintenance" ||
    location.pathname === "/warranty" ||
    location.pathname === "/Xptec";

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(
    useMemo(() => window.innerWidth <= 768, [])
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [nestedSubMenu, setNestedSubMenu] = useState(null);

  const handleResize = useCallback(
    _.debounce(() => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setIsMobile(newWidth <= 768);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleMenuHover = useCallback((menu) => {
    setTimeout(() => {
      setActiveMenu(menu);
      setHoveredSubMenu(null);
      setNestedSubMenu(null);
    }, 100);
  }, []);

  const handleSubMenuHover = useCallback((submenuLabel) => {
    setTimeout(() => {
      setHoveredSubMenu(submenuLabel);
      setNestedSubMenu(null);
    }, 100);
  }, []);

  const handleNestedSubMenuHover = useCallback((nestedSubmenuLabel) => {
    setNestedSubMenu(nestedSubmenuLabel);
  }, []);

  const handleMenuLeave = useCallback(() => {
    setTimeout(() => {
      setActiveMenu(null);
      setHoveredSubMenu(null);
      setNestedSubMenu(null);
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setVisible(true);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const menuData = useMemo(
    () => [
      {
        label: "FAMILY",
        submenu: [
          {
            label: "FAMILY OFF-ROAD",
            link: "/familyoffroad",
            submenu: [
              {
                label: "STORMBREAKER",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/186.webp"
                        alt="stormbreaker18"
                      />
                    ),
                    link: "/stormbreaker18familyoffroad",
                    text: "Stormbreaker 18`6",
                    price: "FULL OFF-ROAD: $89,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/196.webp"
                        alt="stormbreaker19"
                      />
                    ),
                    link: "/stormbreaker19familyoffroad",
                    text: "Stormbreaker 19`6",
                    price: "FULL OFF-ROAD: $92,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="stormbreaker21"
                      />
                    ),
                    link: "/stormbreaker21familyoffroad",
                    text: "Stormbreaker 21`6",
                    price: "FULL OFF-ROAD: $94,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp"
                        alt="stormbreaker23"
                      />
                    ),
                    link: "/stormbreaker23familyoffroad",
                    text: "Stormbreaker 23`11",
                    price: "FULL OFF-ROAD: $96,900",
                  },
                ],
              },
              {
                label: "RIPTIDE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                        alt="Riptide20"
                      />
                    ),
                    link: "/riptide20familyoffroad",
                    text: "Riptide 20",
                    price: "FULL OFF-ROAD: $96,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                        alt="Riptide22"
                      />
                    ),
                    link: "/riptide22familyoffroad",
                    text: "Riptide 22",
                    price: "FULL OFF-ROAD: $98,900",
                  },
                ],
              },
            ],
          },
          {
            label: "FAMILY XP-TECH",
            link: "/familyxptech",
            submenu: [
              {
                label: "STORMBREAKER",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/186.webp"
                        alt="stormbreaker18"
                      />
                    ),
                    link: "/stormbreaker18familyxptech",
                    text: "Stormbreaker 18`6",
                    // price: "FULL OFF-ROAD: $129,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/196.webp"
                        alt="stormbreaker19"
                      />
                    ),
                    link: "/stormbreaker19familyxptech",
                    text: "Stormbreaker 19`6",
                    // price: "FULL OFF-ROAD: $132,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="stormbreaker21"
                      />
                    ),
                    link: "/stormbreaker21familyxptech",
                    text: "Stormbreaker 21`6",
                    // price: "FULL OFF-ROAD: $134,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp"
                        alt="stormbreaker23"
                      />
                    ),
                    link: "/stormbreaker23familyxptech",
                    text: "Stormbreaker 23`11",
                    // price: "FULL OFF-ROAD: $136,900",
                  },
                ],
              },
              {
                label: "RIPTIDE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                        alt="Riptide20"
                      />
                    ),
                    link: "/riptide20familyxptech",
                    text: "Riptide 20",
                    // price: "FULL OFF-ROAD: $136,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                        alt="Riptide22"
                      />
                    ),
                    link: "/riptide22familyxptech",
                    text: "Riptide 22",
                    // price: "FULL OFF-ROAD: $138,900",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        label: "COUPLES",
        submenu: [
          {
            label: "COUPLES OFF-ROAD",
            link: "/couplesoffroad",
            submenu: [
              {
                label: "ECLIPSE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="Eclipse 216"
                      />
                    ),
                    link: "/eclipse21couplesoffroad",
                    text: "ECLIPSE - 21`6FT",
                    price: "$92,900",
                  },
                  {
                    link: "/eclipse22couplesoffroad",
                    text: "ECLIPSE - 22FT",
                    price: "$98,900",
                  },
                ],
              },
            ],
          },
          {
            label: "COUPLES XP-TECH",
            link: "/couplesxptech",
            submenu: [
              {
                label: "ECLIPSE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="Eclipse 216"
                      />
                    ),
                    link: "/eclipse21couplesxptech",
                    text: "ECLIPSE - 21`6FT",
                    // price: "$92,900",
                  },
                  {
                    link: "/eclipse22couplesxptech",
                    text: "ECLIPSE - 22FT",
                    // price: "$98,900",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "RESOURCES",
        submenu: [
          { label: "ABOUT US", link: "/about" },
          { label: "UPDATES", link: "/blog" },
          { label: "VIDEOS", link: "/video" },
          { label: "WARRANTY POLICY", link: "/warranty" },
          { label: "SERVICE & MAINTENANCE", link: "/maintenance" },
          { label: "VIRTUAL TOURS", link: "/tour" },
        ],
      },
      {
        label: "DISCOVER",
        submenu: [
          {
            label: (
              <a
                href="https://www.instagram.com/deluxecaravansaustralia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/instagramh.webp"
                  alt="Instagram"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.instagram.com/deluxecaravansaustralia/",
          },
          {
            label: (
              <a
                href="https://www.facebook.com/deluxecaravansaustralia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/facebookh.webp"
                  alt="Facebook"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.facebook.com/deluxecaravansaustralia",
          },
          {
            label: (
              <a
                href="https://twitter.com/CaravansDeluxe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/twitterh.webp"
                  alt="Twitter"
                  className="iconh"
                />
              </a>
            ),
            link: "https://twitter.com/CaravansDeluxe",
          },
          {
            label: (
              <a
                href="https://www.tiktok.com/@deluxecaravansaustralia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/tik-tokh.webp"
                  alt="TikTok"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.tiktok.com/@deluxecaravansaustralia",
          },
          {
            label: (
              <a
                href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/youtubeh.webp"
                  alt="YouTube"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.youtube.com/watch?v=a_KE1CVPT48",
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      {isMobile ? (
        <Navbar />
      ) : (
        <motion.header
          className={`header ${visible ? "" : "hidden"} ${
            isCustomHeaderPage ? "custom-header" : ""
          }`} // Add custom-header class for Maintenance and Warranty pages
          initial={{ backgroundColor: "transparent" }}
          whileHover={{
            backgroundColor: isCustomHeaderPage ? "black" : "white",
            color: isCustomHeaderPage ? "white" : "black",
          }} // Conditional hover styles
          animate={
            activeMenu
              ? {
                  backgroundColor: isCustomHeaderPage ? "black" : "white",
                  color: isCustomHeaderPage ? "white" : "black",
                } // Conditional active menu styles
              : { backgroundColor: "transparent" }
          }
          transition={{ duration: 0.5 }}
          onMouseLeave={handleMenuLeave}
        >
          <div className="header-logo">
            <Link to="/">
              <img
                src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
                alt="Deluxe Caravan Logo"
                height={50}
              />
            </Link>
          </div>
          <nav
            className="header-nav"
            onMouseLeave={handleMenuLeave} // Reset states when leaving the entire menu
          >
            <ul className="menu">
              {menuData.map((menu, index) => (
                <motion.li
                  key={index}
                  className={`menu-item ${
                    activeMenu === menu.label ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMenuHover(menu.label)}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <button>
                    <span>{menu.label}</span>
                  </button>
                  <AnimatePresence>
                    {activeMenu === menu.label && menu.submenu && (
                      <motion.div
                        className="sub-menu"
                        initial={{ opacity: 1, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {menu.submenu.map((subitem, subIndex) => (
                          <div
                            key={subIndex}
                            onMouseEnter={() =>
                              handleSubMenuHover(subitem.label)
                            }
                          >
                            <Link to={subitem.link || "#"}>
                              <motion.div
                                className={`sub-menu-item ${
                                  hoveredSubMenu === subitem.label
                                    ? "active-submenu"
                                    : ""
                                }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                  duration: 0.3,
                                  delay: subIndex * 0.1,
                                }}
                              >
                                <span
                                  className={`submenu-label ${String(
                                    subitem.label
                                  ).toLowerCase()}`}
                                >
                                  {subitem.label}
                                </span>
                                {subitem.text && <h3>{subitem.text}</h3>}
                                {subitem.price && <h5>{subitem.price}</h5>}
                                {/* Nested Submenu */}
                                {hoveredSubMenu === subitem.label &&
                                  subitem.submenu && (
                                    <motion.div
                                      className="nested-submenu"
                                      initial={{ opacity: 1, scaleY: 0 }}
                                      animate={{ opacity: 1, scaleY: 1 }}
                                      exit={{ opacity: 0, scaleY: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                      }}
                                    >
                                      {subitem.submenu.map(
                                        (nestedSubitem, nestedIndex) => (
                                          <div
                                            key={nestedIndex}
                                            onMouseEnter={() =>
                                              handleNestedSubMenuHover(
                                                nestedSubitem.label
                                              )
                                            }
                                          >
                                            <Link
                                              to={nestedSubitem.link || "#"}
                                            >
                                              <motion.div
                                                className="nested-submenu-item"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{
                                                  duration: 0.3,
                                                  delay: nestedIndex * 0.1,
                                                }}
                                              >
                                                {nestedSubitem.label}
                                                {nestedSubitem.text && (
                                                  <h4>{nestedSubitem.text}</h4>
                                                )}
                                                {nestedSubitem.price && (
                                                  <h6>{nestedSubitem.price}</h6>
                                                )}

                                                {/* Deep Nested Submenu */}
                                                {nestedSubMenu ===
                                                  nestedSubitem.label &&
                                                  nestedSubitem.submenu && (
                                                    <motion.div
                                                      className="deep-nested-submenu"
                                                      initial={{
                                                        opacity: 1,
                                                        scaleY: 0,
                                                      }}
                                                      animate={{
                                                        opacity: 1,
                                                        scaleY: 1,
                                                      }}
                                                      exit={{
                                                        opacity: 0,
                                                        scaleY: 0,
                                                      }}
                                                      transition={{
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                      }}
                                                      onMouseLeave={() =>
                                                        setNestedSubMenu(null)
                                                      } // Reset nestedSubMenu when leaving deep nested submenu
                                                    >
                                                      {nestedSubitem.submenu.map(
                                                        (
                                                          deepNestedSubitem,
                                                          deepIndex
                                                        ) => (
                                                          <Link
                                                            key={deepIndex}
                                                            to={
                                                              deepNestedSubitem.link ||
                                                              "#"
                                                            }
                                                          >
                                                            <motion.div
                                                              className="deep-nested-submenu-item"
                                                              initial={{
                                                                opacity: 0,
                                                                y: -10,
                                                              }}
                                                              animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                              }}
                                                              exit={{
                                                                opacity: 0,
                                                                y: -10,
                                                              }}
                                                              transition={{
                                                                duration: 0.3,
                                                                delay:
                                                                  deepIndex *
                                                                  0.1,
                                                              }}
                                                            >
                                                              {
                                                                deepNestedSubitem.label
                                                              }
                                                              {deepNestedSubitem.text && (
                                                                <h4>
                                                                  {
                                                                    deepNestedSubitem.text
                                                                  }
                                                                </h4>
                                                              )}
                                                              {deepNestedSubitem.price && (
                                                                <h6>
                                                                  {
                                                                    deepNestedSubitem.price
                                                                  }
                                                                </h6>
                                                              )}
                                                            </motion.div>
                                                          </Link>
                                                        )
                                                      )}
                                                    </motion.div>
                                                  )}
                                              </motion.div>
                                            </Link>
                                          </div>
                                        )
                                      )}
                                    </motion.div>
                                  )}
                              </motion.div>
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
              <li className="menu-item">
                <Link to="/Xptec">
                  <button onMouseEnter={() => handleMenuHover("XP-TECH")}>
                    XP-TECH
                  </button>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">
                  <button onMouseEnter={() => handleMenuHover("CONTACT")}>
                    CONTACT
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </motion.header>
      )}
    </div>
  );
};

export default React.memo(Header);
