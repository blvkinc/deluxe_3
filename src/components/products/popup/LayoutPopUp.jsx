import React, { useState, useRef } from "react";
import "./PopUp.css";
import Layout from "../../../assets/pdfs/Layout.pdf";

const LayoutPopUp = ({ onClose, popupIdentifier }) => {
  const MAILCHIMP_FORM_ACTION_URL = process.env.REACT_APP_MAILCHIMP_URL;
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const alertRef = useRef(null);
  const downloadRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      // Add a hidden input field with the popup identifier
      formData.append("POPUP_IDENTIFIER", popupIdentifier);

      const response = await fetch(MAILCHIMP_FORM_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue);
    setIsEmailValid(isValid);
  };

  const handleDownload = () => {
    // Use React state or refs to manage visibility instead of direct DOM manipulation
    if (alertRef.current) alertRef.current.classList.add("show");
    if (downloadRef.current) downloadRef.current.style.display = "none";
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Download Our Brochure</h1>
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
            <div className="mc-field-group">
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
              />
            </div>
            <div className="download" onClick={handleDownload} ref={downloadRef}>
              <input
                type="submit"
                value="Download"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={`button ${isEmailValid ? "" : "disabled"}`}
                disabled={!isEmailValid}
              />
            </div>
            <div className="alert" ref={alertRef}>
              A team member will email the brochure shortly.
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

export default LayoutPopUp;
