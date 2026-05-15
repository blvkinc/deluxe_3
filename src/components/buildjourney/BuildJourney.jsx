import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import './BuildJourney.css';

/* ── Inline SVG icons ── */
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconVideo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconWarning = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

/* ── Static data ── */
const steps = [
  {
    num: '01', phase: 'Week 1', title: 'Your first conversation',
    desc: "You reach out — by form, phone, or text. Within 24 hours you're connected to a real person on our team (not a bot, not a call centre). They'll spend time understanding your tow vehicle, your travel style, your family size, and your must-haves.",
    timing: 'Response within 24hrs · No pressure, no scripts',
    details: [
      "Personal introduction to your dedicated Deluxe contact — the same person you'll deal with start to finish",
      "Tow vehicle compatibility check — we'll tell you exactly what your car can handle",
      "Honest conversation about which model suits your needs, including whether a different van is a better fit",
      "Live FaceTime or video call available if you're interstate and want to see our showroom or factory floor",
    ],
  },
  {
    num: '02', phase: 'Week 1–2', title: 'Design your van together',
    desc: "We walk you through every option — floor plan, layout, upgrades, colour, bed configuration — until the spec feels exactly right. Nothing is locked in until you're ready.",
    timing: 'Full spec sheet provided · No surprises at handover',
    details: [
      "Full model range walkthrough with real photos, owner videos, video call",
      "Tell us what you want - fully customisable",
      "Compare side-by-side layouts to find your ideal floor plan",
      "Upgrade pricing is transparent — every option is clearly itemised",
      "You receive a complete written specification before placing any deposit",
    ],
  },
  {
    num: '03', phase: 'Week 2–3', title: 'Deposit & build slot confirmed',
    desc: "Once you're confident in the spec, a deposit secures your build slot. You'll receive a written confirmation including your expected build window, key milestones, and your direct contact details.",
    timing: 'Written confirmation · Build window commitment',
    details: [
      "Deposit amount confirmed upfront — no hidden fees",
      "Estimated delivery window provided in writing",
      "You can still make specification changes — even significant ones — until the frame stage begins",
    ],
  },
  {
    num: '04', phase: 'During build · Weekly', title: 'The Build Journey — weekly updates',
    desc: "This is what sets us apart. Every week during your build, you receive a photo and video update showing exactly where your van is at. Chassis going on. Walls going up. Your kitchen taking shape. Your name written inside the frame.",
    timing: 'Weekly photos · Milestone videos · Direct line to your builder',
    details: [
      "Weekly email update with real photos from the factory floor — your actual van, not a stock image",
      "Video update at major milestones: chassis, frame completion, electrical rough-in, fit-out",
      "Direct access to your contact throughout — questions answered same day",
      "You can request a FaceTime at any point to walk through progress live",
      "Minor adjustments can still be accommodated during early build stages",
    ],
  },
  {
    num: '05', phase: 'Pre-delivery', title: 'Pre-delivery inspection & final walkthrough',
    desc: "Before delivery, your van goes through a full quality check. You'll receive a pre-delivery video walkthrough — every room, every system, every fitting — so there are no surprises on collection day.",
    timing: 'Full QC check · Pre-delivery video · Zero surprises',
    details: [
      "Independent quality control inspection before sign-off",
      "Pre-delivery video call walking through every feature of your completed van",
      "Opportunity to raise any concerns before taking delivery",
      "Final balance confirmed — no price changes from quoted spec",
    ],
  },
  {
    num: '06', phase: 'Delivery day', title: 'Handover — at the factory or your door',
    desc: "Collection from our Campbellfield factory includes a full handover session — typically 2–3 hours. We walk you through every system, every switch, every feature. No rushing. No reading the manual alone.",
    timing: 'Factory collection or Australia-wide delivery · Full handover session',
    details: [
      "Full 2–3 hour handover — every system demonstrated in person",
      "Towing setup and first-hitch guidance included",
      "Interstate delivery available — your van delivered to your door",
      "Remote buyers receive a comprehensive handover video package",
      "Handover checklist signed off by both parties",
    ],
  },
  {
    num: '07', phase: 'After delivery · Ongoing', title: '3-year warranty & ongoing support',
    desc: "Your 3-year structural warranty and 1-year manufacturer warranty cover you Australia-wide. Your original contact remains your first call for any question — from how to use the hot water system to lodging a warranty claim.",
    timing: '3yr structural · 1yr manufacturer · Nationwide service network',
    details: [
      "3-year structural warranty covering chassis, frame, walls, roof and floor",
      "1-year manufacturer warranty covering all fittings and inclusions",
      "Warranty serviced Australia-wide through authorised repairers",
      "Same-day response policy on all warranty enquiries",
      "Your personal Deluxe contact stays accessible — not a generic support line",
    ],
  },
];

const faqs = [
  { q: "Can I really buy a $90K caravan without seeing it in person?", a: "Yes — and many of our customers do exactly this. The combination of detailed spec sheets, weekly build photos, video walkthroughs, and live FaceTime access means you have more visibility into your Deluxe build than you'd typically get visiting a showroom once. Our 5.0 Google rating reflects how comfortable customers feel with this process." },
  { q: "How long does a build take?", a: "Build times vary by model and current slot availability. Typically 8–14 weeks from deposit to handover. We'll give you a realistic build window in writing before you place a deposit — no vague promises." },
  { q: "Can I change my mind after I've placed a deposit?", a: "Yes — specification changes are accepted through to the framing stage and sometimes beyond. We've accommodated significant changes mid-build. Changes may affect pricing if they involve upgrades, which we'll communicate clearly before proceeding." },
  { q: "Do you deliver interstate?", a: "Yes. We can arrange delivery of your completed van to anywhere in Australia. Interstate buyers also receive a full video handover package so you understand every system before you hit the road. Many customers also fly to Melbourne for factory collection — we're happy to recommend where to stay." },
  { q: "What does your warranty actually cover?", a: "Your 3-year structural warranty covers the chassis, frame, walls, roof and floor. Your 1-year manufacturer warranty covers all fittings and inclusions. Both are serviced through our nationwide authorised repairer network — you don't have to come back to Melbourne. Appliances carry their own manufacturer warranties (Dometic, Thetford, AL-KO etc.) which we'll help you navigate." },
  { q: "Will my car tow a Deluxe van?", a: "This is one of the first things we check. Tell us your tow vehicle make, model and year and we'll confirm compatibility across our range before you go any further. We'd rather tell you the honest answer early than have you buy the wrong van." },
];

const timelineItems = [
  { week: 'Wk 1',  event: 'Build confirmed & slot allocated',    sub: 'Spec sheet signed off, build window assigned',      badge: 'done',  label: 'Done' },
  { week: 'Wk 2',  event: 'Chassis fabricated',                  sub: '4 photos sent · Minor layout tweak requested',      badge: 'photo', label: 'Photos' },
  { week: 'Wk 4',  event: 'Frame & walls up',                    sub: 'Video walkthrough — 6 mins',                        badge: 'call',  label: 'Video' },
  { week: 'Wk 6',  event: 'Electrical & plumbing rough-in',      sub: '7 photos sent · Live FaceTime requested & done',    badge: 'photo', label: 'Photos + Call' },
  { week: 'Wk 8',  event: 'Fit-out — cabinetry & kitchen',       sub: '9 photos sent · Bed upgrade confirmed',             badge: 'photo', label: 'Photos' },
  { week: 'Wk 10', event: 'Pre-delivery QC & final walkthrough', sub: 'Full video walkthrough — 18 mins',                  badge: 'call',  label: 'Video' },
  { week: 'Wk 11', event: 'Handover — Campbellfield factory',    sub: '2.5hr handover · Keys handed over',                 badge: 'done',  label: 'Delivered' },
];

const buildFeatures = [
  { icon: <IconCamera />, title: 'Weekly real-build photos',    desc: 'Not renders, not stock images — actual photos of your van in progress, sent every week without you having to ask.' },
  { icon: <IconVideo />,  title: 'Milestone video updates',     desc: 'Video walkthroughs at key stages — chassis, frame, electrical rough-in, fit-out completion — so you can see the van taking shape.' },
  { icon: <IconPhone />,  title: 'Live FaceTime on request',    desc: "Want to see something specific? Call your contact and they'll walk you through it live from the factory floor." },
  { icon: <IconEdit />,   title: 'Changes accepted mid-build',  desc: "We've accommodated 6–8 specification changes on a single build, including significant ones made after framing had started." },
];

const factCards = [
  { icon: <IconWarning />, text: <><strong>#1 complaint</strong> in Australian caravan ownership is being left in the dark after deposit — months of silence, wondering what you're actually going to receive.</> },
  { icon: <IconPin />,     text: <><strong>Most buyers live interstate</strong> from the factory. They're committing $90,000+ to a van they've never touched, trusting people they've never met in person.</> },
  { icon: <IconLock />,    text: <>At Deluxe, <strong>the build process is the product</strong>. You're not just buying a van — you're buying full visibility over how it's made, who makes it, and what you'll receive.</> },
];

const trustItems = [
  "Response within 24 hours — same day where possible",
  "No obligation — just a conversation",
  "FaceTime or video call available from day one",
  "Towing compatibility check included",
  "Finance options available — we'll connect you",
  "3-year structural + 1-year manufacturer warranty",
];

const chipOptions = ['Family van', 'Couples van', 'XP-Tech range', 'Not sure yet'];
const stateOptions = ['VIC','NSW','QLD','SA','WA','TAS','NT','ACT'];

/* ── Component ── */
function BuildJourney() {
  const [openStep, setOpenStep]       = useState(3);
  const [openFaq, setOpenFaq]         = useState(null);
  const [activeChips, setActiveChips] = useState([]);
  const [emailStatus, setEmailStatus] = useState(null);
  const [sending, setSending]         = useState(false);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    state: '', vehicle: '', notes: '',
  });

  // Init EmailJS once
  useEffect(() => {
    emailjs.init('Q_lgPEotr4R0YVRpv');
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('bj-visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.bj-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleStep = (i) => setOpenStep(openStep === i ? null : i);
  const toggleFaq  = (i) => setOpenFaq(openFaq === i ? null : i);
  const toggleChip = (chip) =>
    setActiveChips((prev) => prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) return;

    setSending(true);

    const composedMessage = [
      activeChips.length ? `Interested in: ${activeChips.join(', ')}` : '',
      formData.state   ? `State: ${formData.state}`           : '',
      formData.vehicle ? `Tow vehicle: ${formData.vehicle}`   : '',
      formData.notes   ? `Additional notes:\n${formData.notes}` : '',
    ].filter(Boolean).join('\n');

    emailjs
      .send('hello@infiniterv.com.au', 'template_l57kshl', {
        to_email:   'hello@infiniterv.com.au',
        from_name:  `${firstName} ${lastName}`,
        from_email: email,
        mobile:     phone,
        message:    composedMessage || 'No additional details provided.',
      })
      .then(() => {
        setEmailStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', state: '', vehicle: '', notes: '' });
        setActiveChips([]);
      })
      .catch(() => setEmailStatus('error'))
      .finally(() => setSending(false));
  };

  const resetStatus = useCallback(() => setEmailStatus(null), []);

  return (
    <div className="build-journey-page">

      {/* HERO */}
      <div className="bj-hero">
        <div className="bj-hero-left">
          <div>
            <p className="bj-hero-eyebrow"><span style={{ display:'inline-block', width:'32px', height:'1px', background:'#3c4c5a', marginRight:'12px', flexShrink:0, verticalAlign:'middle' }}></span>The Build Journey</p>
            <h1 className="bj-hero-title">
              WATCH YOUR CARAVAN<br /><em>GET BUILT</em><br />THE WHOLE WAY.
            </h1>
          </div>
          <div className="bj-hero-right-col">
            <p className="bj-hero-sub">
              Buying a $90K caravan online takes <strong>an extraordinary amount of trust</strong>. We've earned it — by letting you see inside our factory, meet your builder, and reshape your van right up until the frame goes up.
            </p>
            <div className="bj-hero-actions">
              <a href="#bj-enquiry" className="bj-btn-primary">Start your build enquiry</a>
              <a href="#bj-journey" className="bj-btn-secondary">See how it works &#x2193;</a>
            </div>
            <div className="bj-hero-stat-bar">
              <div className="bj-hero-stat">
                <div className="bj-hero-stat-num">5.0<span>★</span></div>
                <div className="bj-hero-stat-label">Google rating</div>
              </div>
              <div className="bj-hero-stat">
                <div className="bj-hero-stat-num">10<span>+</span></div>
                <div className="bj-hero-stat-label">Years building</div>
              </div>
              <div className="bj-hero-stat">
                <div className="bj-hero-stat-num">3<span>yr</span></div>
                <div className="bj-hero-stat-label">Structural warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROMISE STRIP */}
      <div className="bj-promise-strip">
        <div className="bj-promise-item">&#10003; Weekly build photos</div>
        <div className="bj-promise-sep">·</div>
        <div className="bj-promise-item">&#10003; Live video walkthroughs</div>
        <div className="bj-promise-sep">·</div>
        <div className="bj-promise-item">&#10003; Changes accepted mid-build</div>
        <div className="bj-promise-sep">·</div>
        <div className="bj-promise-item">&#10003; Named personal contact</div>
        <div className="bj-promise-sep">·</div>
        <div className="bj-promise-item">&#10003; 3-year structural warranty</div>
        <div className="bj-promise-sep">·</div>
        <div className="bj-promise-item">&#10003; Australia-wide delivery</div>
      </div>

      {/* PROBLEM */}
      <section className="bj-problem">
        <div className="bj-problem-quote bj-reveal">
          <blockquote>"Every brand said nope, can't change it — this is how it is. Deluxe said yes to everything. Including changes we made while framing had already started."</blockquote>
          <cite>— Deluxe Owner, Google Review ★★★★★</cite>
        </div>
        <div className="bj-problem-facts">
          {factCards.map((card, i) => (
            <div key={i} className={`bj-fact-card bj-reveal bj-reveal-delay-${i + 1}`}>
              <div className="bj-fact-icon">{card.icon}</div>
              <p className="bj-fact-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bj-journey" id="bj-journey">
        <div className="bj-journey-intro">
          <div className="bj-reveal">
            <p className="bj-section-label"><span style={{ display:'inline-block', width:'24px', height:'1px', background:'#3c4c5a', marginRight:'12px', flexShrink:0, verticalAlign:'middle' }}></span>From first message to open road</p>
            <h2 className="bj-section-title">HOW YOUR BUILD WORKS</h2>
          </div>
          <p className="bj-section-body bj-reveal bj-reveal-delay-1">
            Every Deluxe caravan is built to your order. Here's exactly what happens from your first enquiry through to the day you drive away — including every touchpoint, who you'll speak to, and when.
          </p>
        </div>
        <div className="bj-journey-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`bj-step bj-reveal bj-reveal-delay-${Math.min(i, 4)}`}
              onClick={() => toggleStep(i)}
            >
              <div className={`bj-step-num${openStep === i ? ' bj-active' : ''}`}>{step.num}</div>
              <div className="bj-step-content">
                <div className="bj-step-phase">{step.phase}</div>
                <div className="bj-step-title">{step.title}</div>
                <div className="bj-step-desc">{step.desc}</div>
                <span className="bj-step-timing">{step.timing}</span>
                {openStep === i && (
                  <div className="bj-step-detail">
                    <ul>{step.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUILD WINDOW */}
      <section className="bj-build-window">
        <div className="bj-bw-grid">
          <div className="bj-bw-left bj-reveal">
            <p className="bj-section-label"><span style={{ display:'inline-block', width:'24px', height:'1px', background:'#3c4c5a', marginRight:'12px', flexShrink:0, verticalAlign:'middle' }}></span>Our signature program</p>
            <h2 className="bj-section-title">THE BUILD<br />WINDOW</h2>
            <p className="bj-section-body">No other Australian manufacturer gives you this level of access to your own build. It's not just a feature — it's the reason our customers describe buying remotely as one of the best decisions they've made.</p>
            <div className="bj-bw-features">
              {buildFeatures.map((f, i) => (
                <div key={i} className={`bj-bw-feature bj-reveal bj-reveal-delay-${i + 1}`}>
                  <div className="bj-bw-icon">{f.icon}</div>
                  <div>
                    <div className="bj-bw-feature-title">{f.title}</div>
                    <div className="bj-bw-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bj-bw-right bj-reveal bj-reveal-delay-2">
            <div className="bj-bw-timeline">
              <div className="bj-bw-timeline-header">
                <span className="bj-bw-timeline-title">Your build — live tracker sample</span>
                <div className="bj-bw-status-dot"></div>
              </div>
              <div className="bj-bw-timeline-body">
                {timelineItems.map((item, i) => (
                  <div key={i} className="bj-tl-item">
                    <span className="bj-tl-week">{item.week}</span>
                    <div className="bj-tl-content">
                      <div className="bj-tl-event">{item.event}</div>
                      <div className="bj-tl-sub">{item.sub}</div>
                    </div>
                    <span className={`bj-tl-badge ${item.badge}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bj-reviews">
        <div className="bj-reviews-header">
          <div className="bj-reveal">
            <p className="bj-section-label"><span style={{ display:'inline-block', width:'24px', height:'1px', background:'#3c4c5a', marginRight:'12px', flexShrink:0, verticalAlign:'middle' }}></span>From people who bought exactly this way</p>
            <h2 className="bj-section-title">WHAT OUR<br />OWNERS SAY</h2>
          </div>
          <div className="bj-reviews-rating bj-reveal bj-reveal-delay-2">
            <div className="bj-rating-stars">★★★★★</div>
            <div className="bj-rating-num">5.0</div>
            <div className="bj-rating-label">Google rating · Verified owners</div>
          </div>
        </div>
        <div className="bj-reviews-grid">
          <div className="bj-review-card bj-reveal">
            <div className="bj-review-stars">★★★★★</div>
            <p className="bj-review-text">"We ordered our van blind as we live in QLD and couldn't make the trip to VIC. Lakshan <em>FaceTimed us and did a walk through</em> and answered any questions we had before ordering. We enjoyed <em>regular updates and progress photos via email weekly</em> of our van build."</p>
            <div className="bj-review-author">Darci Dixon</div>
            <div className="bj-review-detail">Stormbreaker · Full-time travel · QLD buyer</div>
          </div>
          <div className="bj-review-card bj-reveal bj-reveal-delay-1">
            <div className="bj-review-stars">★★★★★</div>
            <p className="bj-review-text">"We changed our build <em>in excess of 6–8 times</em>. Nothing was ever a problem, with our last changes being done as framing was starting. It's a testament to the team that with all of these changes they <em>didn't get a single thing wrong</em> in the entire build."</p>
            <div className="bj-review-author">Karney Chester</div>
            <div className="bj-review-detail">Stormbreaker · Custom build</div>
          </div>
          <div className="bj-review-card bj-reveal bj-reveal-delay-2">
            <div className="bj-review-stars">★★★★★</div>
            <p className="bj-review-text">"From build progress photos all the way throughout the build, endless options for additional upgrades and <em>the quality is exemplary</em>. When the time comes for our next caravan build there will be only one stop for us — straight to Deluxe."</p>
            <div className="bj-review-author">Rhys Swan</div>
            <div className="bj-review-detail">Stormbreaker 19'6 Double Bunk · Family of 4</div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="bj-enquiry" id="bj-enquiry">
        <div className="bj-enquiry-left bj-reveal">
          <p className="bj-section-label"><span style={{ display:'inline-block', width:'24px', height:'1px', background:'#3c4c5a', marginRight:'12px', flexShrink:0, verticalAlign:'middle' }}></span>Start your build</p>
          <h2 className="bj-section-title">READY TO<br />SEE INSIDE?</h2>
          <p className="bj-section-body">Fill in the form and your dedicated Deluxe contact will be in touch within 24 hours. No scripts, no call centres — just a real conversation about your next adventure.</p>
          <div className="bj-trust-signals">
            {trustItems.map((item, i) => (
              <div key={i} className="bj-trust-item">
                <div className="bj-trust-check">✓</div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bj-form-panel bj-reveal bj-reveal-delay-2">
          <div className="bj-form-title">LET'S TALK</div>
          <p className="bj-form-sub">Tell us a little about where you're at and what you're looking for.</p>
          <form onSubmit={handleFormSubmit}>
            <div className="bj-form-row">
              <div className="bj-form-group">
                <label className="bj-form-label">First name *</label>
                <input type="text" name="firstName" className="bj-form-input" placeholder="Sarah" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="bj-form-group">
                <label className="bj-form-label">Last name *</label>
                <input type="text" name="lastName" className="bj-form-input" placeholder="Mitchell" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="bj-form-group">
              <label className="bj-form-label">Email address *</label>
              <input type="email" name="email" className="bj-form-input" placeholder="sarah@email.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="bj-form-group">
              <label className="bj-form-label">Phone number *</label>
              <input type="tel" name="phone" className="bj-form-input" placeholder="0400 000 000" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="bj-form-group">
              <label className="bj-form-label">Your state</label>
              <select name="state" className="bj-form-select" value={formData.state} onChange={handleChange}>
                <option value="">Select your state</option>
                {stateOptions.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="bj-form-group">
              <label className="bj-form-label">I'm interested in</label>
              <div className="bj-form-intent">
                {chipOptions.map((chip) => (
                  <button
                    key={chip} type="button"
                    className={`bj-intent-chip${activeChips.includes(chip) ? ' bj-active' : ''}`}
                    onClick={() => toggleChip(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
            <div className="bj-form-group">
              <label className="bj-form-label">Tow vehicle (if known)</label>
              <input type="text" name="vehicle" className="bj-form-input" placeholder="e.g. Toyota LandCruiser 300" value={formData.vehicle} onChange={handleChange} />
            </div>
            <div className="bj-form-group">
              <label className="bj-form-label">Anything else you'd like us to know?</label>
              <textarea name="notes" className="bj-form-textarea" placeholder="Travel style, must-haves, timeline, questions…" value={formData.notes} onChange={handleChange} />
            </div>
            <button type="submit" className="bj-form-submit" disabled={sending}>
              {sending ? 'SENDING…' : 'START MY BUILD ENQUIRY →'}
            </button>
            <p className="bj-form-note">We'll respond within 24 hours. No spam, no pressure, no call centres.</p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bj-faq">
        <div className="bj-faq-grid">
          <div className="bj-reveal">
            <p className="bj-section-label"><span style={{ display:'inline-block', width:'24px', height:'1px', background:'#3c4c5a', marginRight:'12px', flexShrink:0, verticalAlign:'middle' }}></span>Common questions</p>
            <h2 className="bj-section-title">THINGS PEOPLE<br />ASK US</h2>
            <p className="bj-section-body" style={{ marginTop: '20px' }}>
              If your question isn't here, call us directly on{' '}
              <strong style={{ color: '#ffffff' }}>+61 483 939 904</strong> or start an enquiry above.
            </p>
          </div>
          <div className="bj-faq-list bj-reveal bj-reveal-delay-1">
            {faqs.map((faq, i) => (
              <div key={i} className={`bj-faq-item${openFaq === i ? ' bj-open' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="bj-faq-q">{faq.q}<span className="bj-faq-arrow">+</span></div>
                <div className="bj-faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status popups */}
      {emailStatus === 'success' && (
        <div className="bj-popup success" onClick={resetStatus}>
          Email sent successfully! We'll be in touch within 24 hours.
        </div>
      )}
      {emailStatus === 'error' && (
        <div className="bj-popup error" onClick={resetStatus}>
          Error sending email. Please try again or call us directly.
        </div>
      )}

    </div>
  );
}

export default BuildJourney;
