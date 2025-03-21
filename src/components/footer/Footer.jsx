import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Your local CSS

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="logo">
          <Link to="/" className="footer-link">
            <img
              src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
              alt="Logo"
              className="footer-logo"
              height="100px"
              width="120px"
            />
          </Link>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Caravans</div>
          <Link to="/familyoffroad" className="footer-link">
            Family Off-Road
          </Link>
          <Link to="/familyxptech" className="footer-link">
            Family XP Tech
          </Link>
          <Link to="/couplesoffroad" className="footer-link">
            Couples Off-Road
          </Link>
          <Link to="/couplesxptech" className="footer-link">
            Couples XP Tech
          </Link>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Resources</div>
          <Link to="/about" className="footer-link">
            About us
          </Link>
          <Link to="/blog" className="footer-link">
            UPDATES
          </Link>
          <Link to="/video" className="footer-link">
            Videos
          </Link>
          <Link to="/tour" className="footer-link">
            Virtual tour
          </Link>
          <Link to="/warranty" className="footer-link">
            Warranty policy
          </Link>
          <Link to="/maintenance" className="footer-link">
            Service & Maintenance
          </Link>
          <Link to="/xptech" className="footer-link">
            XP TECH
          </Link>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Contact</div>
          <a
            href="https://maps.app.goo.gl/kv9EtFoKUDLt5m8P7"
            className="footer-link"
          >
            32 Scammel Street, Campbellfield, VIC 3061
          </a>
          <a href="tel:+61483939904" className="footer-link">
            +61 483 939 904
          </a>
          <a href="mailto:hello@infiniterv.com.au" className="footer-link">
            hello@infiniterv.com.au
          </a>
        </div>
      </div>

      <hr className="footer-hr" />

      <div className="copyright-and-social">
        <div className="copyright">
          © {new Date().getFullYear()} Copyright: Deluxe Caravans
        </div>
        <div className="social-icons">
          <div className="social-links">
            <a
              href="https://www.instagram.com/deluxecaravansaustralia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://deluxcaravan.b-cdn.net/assets/icons/instagram.webp"
                alt="Instagram"
                className="icon"
              />
            </a>
            <a
              href="https://www.facebook.com/deluxecaravansaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://deluxcaravan.b-cdn.net/assets/icons/facebook.webp"
                alt="Facebook"
                className="icon"
              />
            </a>
            <a
              href="https://twitter.com/CaravansDeluxe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://deluxcaravan.b-cdn.net/assets/icons/twitter.webp"
                alt="Twitter"
                className="icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@deluxecaravansaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://deluxcaravan.b-cdn.net/assets/icons/tik-tok.webp"
                alt="TikTok"
                className="icon"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=a_KE1CVPT48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://deluxcaravan.b-cdn.net/assets/icons/youtube.webp"
                alt="YouTube"
                className="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
