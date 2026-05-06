import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import "./BrochurePopUp.css";

const SERVICE_ID = "service_he9ijfd";
const TEMPLATE_ID = "template_6519r2v";
const PUBLIC_KEY = "W61evKNsxeHvEgUlN";

const BrochurePopUp = ({ onClose, productName, pdfUrl }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isFormValid = name.trim().length > 0 && isEmailValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || sending) return;

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          customer_name: name.trim(),
          customer_email: email.trim(),
          product_name: productName,
        },
        PUBLIC_KEY
      );

      if (pdfUrl) {
        window.open(pdfUrl, "_blank", "noopener,noreferrer");
      }
      onClose();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setSending(false);
    }
  };

  return createPortal(
    <div className="brochure-overlay" onClick={onClose}>
      <div className="brochure-popup" onClick={(e) => e.stopPropagation()}>
        <button className="brochure-close" onClick={onClose} aria-label="Close">
          &#x2715;
        </button>
        <h2 className="brochure-title">Download Our Brochure</h2>
        <p className="brochure-subtitle">
          Enter your details below and the PDF will open instantly.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="brochure-field">
            <label htmlFor="brochure-name">Full Name</label>
            <input
              id="brochure-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>
          <div className="brochure-field">
            <label htmlFor="brochure-email">Email Address</label>
            <input
              id="brochure-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
          </div>
          {error && <p className="brochure-error">{error}</p>}
          <button
            type="submit"
            className={`brochure-submit${!isFormValid || sending ? " disabled" : ""}`}
            disabled={!isFormValid || sending}
          >
            {sending ? "Sending…" : "Send & Download PDF"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default BrochurePopUp;
