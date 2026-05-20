import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Brochures.css";
import LayoutPdf from "../../assets/pdfs/Layout.pdf";
import UpgradeListPdf from "../../assets/pdfs/UpgradeList.pdf";
import InteriorColoursPdf from "../../assets/pdfs/Interior-Colours-2026-Deluxe Caravans-Infinite RV.pdf";

const SERVICE_ID = "service_60prb7s";
const TEMPLATE_ID = "template_ygh58ti";
const CUSTOMER_TEMPLATE_ID = ""; // paste your customer-facing template ID here
const PUBLIC_KEY = "W61evKNsxeHvEgUlN";

const brochureItems = [
  {
    id: "off-road",
    title: "Off Road Range",
    description: "Built tough for remote tracks — our complete off road caravan lineup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M1 18h2M7 18h10M21 18h2M3 10l2-6h14l2 6M3 10h18" />
      </svg>
    ),
    pdfUrl: LayoutPdf,
  },
  {
    id: "xptech",
    title: "XP-Tech Range",
    description: "Next-gen technology and innovation across our XP-Tech series",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    pdfUrl: UpgradeListPdf,
  },
  {
    id: "interior",
    title: "Interior Colour Guide",
    description: "Browse our full palette of interior finishes and colour combinations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20C6.48 22 2 17.52 2 12" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    pdfUrl: InteriorColoursPdf,
  },
  {
    id: "xptech-deep",
    title: "All About XP-Tech",
    description: "Deep dive into the XP-Tech system — features, specs, and innovations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    pdfUrl: UpgradeListPdf,
  },
];

const Brochures = () => {
  const [selected, setSelected] = useState(new Set());
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    state: "",
    timeframe: "",
    optin: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleCard = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const validate = () => {
    const e = {};
    if (!form.fname.trim()) e.fname = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (selected.size === 0) e.selection = true;
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setLoading(true);

    const selectedTitles = brochureItems
      .filter((b) => selected.has(b.id))
      .map((b) => b.title)
      .join(", ");

    const templateVars = {
      customer_fname: form.fname.trim(),
      customer_lname: form.lname.trim(),
      customer_email: form.email.trim(),
      customer_phone: form.phone.trim() || "Not provided",
      customer_state: form.state || "Not specified",
      customer_timeframe: form.timeframe || "Not specified",
      selected_brochures: selectedTitles,
      optin: form.optin ? "Yes" : "No",
    };

    try {
      const sends = [emailjs.send(SERVICE_ID, TEMPLATE_ID, templateVars, PUBLIC_KEY)];
      if (CUSTOMER_TEMPLATE_ID) {
        sends.push(emailjs.send(SERVICE_ID, CUSTOMER_TEMPLATE_ID, templateVars, PUBLIC_KEY));
      }
      await Promise.all(sends);
      selectedBrochures.forEach((b) => {
        if (b.pdfUrl) window.open(b.pdfUrl, "_blank", "noopener,noreferrer");
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectedBrochures = brochureItems.filter((b) => selected.has(b.id));

  return (
    <div className="br-page">
      <div className="br-section">
        <div className="br-header">
          <h2>Download our brochures</h2>
          <p>
            Select the brochures you'd like, then enter your details to receive
            instant access.
          </p>
        </div>

        {errors.selection && (
          <p className="br-error-msg">Please select at least one brochure above.</p>
        )}

        <div className="br-grid">
          {brochureItems.map((item) => {
            const isSelected = selected.has(item.id);
            return (
              <div
                key={item.id}
                className={`br-card${isSelected ? " br-card--selected" : ""}`}
                onClick={() => toggleCard(item.id)}
              >
                <div className="br-card-top">
                  <div className="br-card-icon">{item.icon}</div>
                  <div className={`br-check${isSelected ? " br-check--active" : ""}`}>
                    <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke={isSelected ? "#000" : "transparent"} strokeWidth="2">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="br-form-wrapper">
          {!submitted ? (
            <div className="br-form-area">
              <h3>Get instant access</h3>
              <p>
                Enter your details and we'll send the selected brochures to
                your inbox.
              </p>

              <div className="br-row">
                <div className="br-field">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className={errors.fname ? "br-input--error" : ""}
                    value={form.fname}
                    onChange={(e) =>
                      setForm({ ...form, fname: e.target.value })
                    }
                  />
                </div>
                <div className="br-field">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    value={form.lname}
                    onChange={(e) =>
                      setForm({ ...form, lname: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="br-row">
                <div className="br-field">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="jane@email.com"
                    className={errors.email ? "br-input--error" : ""}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div className="br-field">
                  <label>Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="br-row">
                <div className="br-field">
                  <label>State</label>
                  <select
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                  >
                    <option value="">Select state…</option>
                    <option>VIC</option>
                    <option>NSW</option>
                    <option>QLD</option>
                    <option>SA</option>
                    <option>WA</option>
                    <option>TAS</option>
                    <option>ACT</option>
                    <option>NT</option>
                  </select>
                </div>
                <div className="br-field">
                  <label>Timeframe to buy</label>
                  <select
                    value={form.timeframe}
                    onChange={(e) =>
                      setForm({ ...form, timeframe: e.target.value })
                    }
                  >
                    <option value="">Select…</option>
                    <option>Just researching</option>
                    <option>3–6 months</option>
                    <option>6–12 months</option>
                    <option>Ready to buy</option>
                  </select>
                </div>
              </div>

              <div className="br-consent">
                <input
                  type="checkbox"
                  id="optin"
                  checked={form.optin}
                  onChange={(e) =>
                    setForm({ ...form, optin: e.target.checked })
                  }
                />
                <label htmlFor="optin">
                  I'm happy to receive emails from Deluxe Caravans about
                  products, offers, and news. You can unsubscribe at any time.
                </label>
              </div>

              <button
                className="br-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending…" : "Send me the brochures"}
              </button>
            </div>
          ) : (
            <div className="br-success">
              <div className="br-tick">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Brochures on their way!</h3>
              <p>
                Check your inbox — we've emailed your selected brochures. In
                the meantime, you can view them here:
              </p>
              <div className="br-links">
                {selectedBrochures.map((b) => (
                  <a key={b.id} className="br-link-btn" href={b.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <span>{b.title}</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="br-note">
          Your information is kept private and never sold to third parties.
        </p>
      </div>
    </div>
  );
};

export default Brochures;
