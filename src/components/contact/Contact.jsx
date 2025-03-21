import React, { useEffect, useState, useCallback } from "react";
import "./Contact.css";
import GoToTop from "../functions/GoToTop";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);

  useEffect(() => {
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
            end: "bottom 40%",
            markers: false,
          },
        }
      );
    });

    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    const emailJsScript = document.createElement("script");
    emailJsScript.type = "text/javascript";
    emailJsScript.src = "https://cdn.emailjs.com/dist/email.min.js";
    emailJsScript.async = true;
    document.head.appendChild(emailJsScript);

    emailJsScript.onload = () => {
      emailjs.init("Q_lgPEotr4R0YVRpv");
    };

    return () => {
      document.head.removeChild(emailJsScript);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSendEmail = useCallback(() => {
    const { name, email, mobile, message } = formData;

    emailjs
      .send("hello@infiniterv.com.au", "template_l57kshl", {
        to_email: "hello@infiniterv.com.au",
        from_name: name,
        from_email: email,
        mobile: mobile,
        message: message,
      })
      .then(() => {
        setEmailStatus("success");
      })
      .catch(() => {
        setEmailStatus("error");
      });
  }, [formData]);

  const resetEmailStatus = useCallback(() => {
    setEmailStatus(null);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, message } = formData;
    if (!name || !email || !mobile || !message) {
      console.log("All fields are required.");
      return;
    }

    handleSendEmail();
  };

  return (
    <div className="contact__container revealUp">
      <h1 className={animate ? "lineUp" : ""}>Contact us</h1>
      <div className="contact-container">
        <form className="contact__form" onSubmit={handleFormSubmit}>
          <div className="input__group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__group">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__group input__group--message">
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="send">
            Send
          </button>
          <Link to="/appointment" className="book">
            BOOK A TOUR!
          </Link>
        </form>
      </div>
      <GoToTop />

      {/* Pop-up for email status */}
      {emailStatus === "success" && (
        <div className="popup success" onClick={resetEmailStatus}>
          <p>Email sent successfully!</p>
        </div>
      )}
      {emailStatus === "error" && (
        <div className="popup error" onClick={resetEmailStatus}>
          <p>Error sending email. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(Contact);
