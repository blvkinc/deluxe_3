import React, { useState, useRef } from "react";
import "./PopUp.css";
import emailjs from "emailjs-com";

const WarrantyPolicyPopup = ({ onClose }) => {
  const MAILCHIMP_FORM_ACTION_URL = process.env.REACT_APP_MAILCHIMP_URL;
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const alertRef = useRef(null);
  const downloadRef = useRef(null);
  const requiredEmailRef = useRef(null);
  const fieldRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(MAILCHIMP_FORM_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(e.target)),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormSubmitted(true);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    sendEmailToMe();
  };

  const sendEmailToMe = () => {
    const templateParams = {
      email: email,
      phone: phone,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log(
          "Email sent successfully to your address:",
          response.status,
          response.text
        );
      })
      .catch((error) => {
        console.error("Failed to send email to your address:", error);
      });
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      emailValue
    );
    setIsEmailValid(isValid);
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);
    const isValid = /^[0-9]{10,15}$/.test(phoneValue);
    setIsPhoneValid(isValid);
  };

  const isFormValid = isEmailValid && isPhoneValid;

  const handleDownload = () => {
    if (alertRef.current) alertRef.current.classList.add("show");
    if (downloadRef.current) downloadRef.current.style.display = "none";
    if (requiredEmailRef.current)
      requiredEmailRef.current.style.display = "none";
    if (fieldRef.current) fieldRef.current.style.display = "none";
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Download Our Brochure and Upgrade List</h1>
        <form
          onSubmit={handleFormSubmit}
          action={MAILCHIMP_FORM_ACTION_URL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group" ref={fieldRef}>
              <label htmlFor="mce-EMAIL" className="field">
                Please enter your email here!
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required-email"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={handleEmailChange}
                ref={requiredEmailRef}
              />
              {!isEmailValid && email && (
                <span className="error-message">Invalid email address</span>
              )}

              <label htmlFor="mce-PHONE" className="field">
                Please enter your phone number here!
              </label>
              <input
                type="tel"
                name="PHONE"
                className="required-phone"
                id="mce-PHONE"
                required=""
                value={phone}
                onChange={handlePhoneChange}
              />
              {!isPhoneValid && phone && (
                <span className="error-message">
                  Please enter a valid phone number (10-15 digits).
                </span>
              )}
            </div>

            <div
              className="download"
              onClick={handleDownload}
              ref={downloadRef}
            >
              <input
                type="submit"
                value="Download"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={`button ${isFormValid ? "" : "disabled"}`}
                disabled={!isFormValid}
              />
            </div>

            <div className="alert" ref={alertRef}>
              A team member will email the upgrade list shortly.
            </div>
          </div>
        </form>

        <button className="closeButton" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default WarrantyPolicyPopup;
