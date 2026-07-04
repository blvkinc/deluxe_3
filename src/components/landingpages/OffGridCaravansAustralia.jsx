import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './LandingPages.css';
import scenicImage08 from '../../assets/scenicimages/scenic-image-08.jpg';

const reviews = [
  {
    stars: '★★★★★',
    text: '"We have been travelling in our 20ft XP-TECH Deluxe Caravan for 2 months now and are absolutely in love with it!! Can\'t express my thanks enough to the team and Lakshan for making our dream van come to life!!"',
    author: 'Tailsdownunder',
    detail: 'Eclipse XP-TECH 20\' · 2 months full-time',
  },
  {
    stars: '★★★★★',
    text: '"The van rode really well through all conditions and the interior is second to none. Super comfortable and with the big inverter we were able to run the aircon wherever, whenever."',
    author: 'Nikki Vagg',
    detail: 'Stormbreaker 19\'6 · Off-grid travel',
  },
  {
    stars: '★★★★★',
    text: '"We also love the extras we added — pulling inspiration from all our previous setups to make this build truly tick every box, from outdoor storage and the pull-out kitchen to the creature comforts like a washing machine and a BMS that can run the aircon."',
    author: 'Julianne Schryver',
    detail: 'Riptide 20\'6 · XP-TECH owner',
  },
];

const trustItems = [
  '400Ah Lithium · Standard in XP-TECH',
  '6 × 190W Solar Panels',
  '3,000W Pure Sine Inverter',
  'Enerdrive BmPro Battery Monitor',
];

const powerSpecs = [
  { label: 'Battery', standard: '12V lead acid (if "solar ready")', xptech: '400Ah lithium (LiFePO4)' },
  { label: 'Solar', standard: 'Wiring only — panels not included', xptech: '6 × 190W panels (1,140W total)' },
  { label: 'MPPT Charger', standard: 'Not included', xptech: '40A MPPT solar charger' },
  { label: 'Inverter', standard: 'Not included', xptech: '3,000W pure sine wave inverter' },
  { label: 'Battery Monitor', standard: 'Basic voltage gauge (if any)', xptech: 'Enerdrive BmPro 7" display' },
  { label: 'Generator', standard: 'Required for aircon / microwave', xptech: 'Optional — rarely needed' },
  { label: 'Tested before handover', standard: 'No', xptech: 'Yes — fully commissioned' },
];

const powerCapability = [
  { item: 'Dometic fridge', capability: 'Indefinitely', icon: '✓' },
  { item: 'IBIS 4 air conditioner (overnight)', capability: '4–6 hours from battery alone', icon: '✓' },
  { item: 'Laptops, phones, tablets', capability: 'No limitation', icon: '✓' },
  { item: 'Microwave', capability: 'Yes', icon: '✓' },
  { item: 'Washing machine', capability: 'Yes (with upgrade)', icon: '✓' },
  { item: 'Starlink RV', capability: 'Fully supported', icon: '✓' },
  { item: 'CPAP machine', capability: 'Yes', icon: '✓' },
];

const models = [
  {
    name: "ECLIPSE 22'",
    price: 'From $98,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
    link: '/eclipse22couplesxptech',
    specs: ['XP-TECH power — standard', '400Ah lithium · 1,140W solar', 'Couples off-grid range', 'Largest Eclipse model'],
    badge: '⭐ Hero Off-Grid Model',
  },
  {
    name: "ECLIPSE 21'6\"",
    price: 'From $96,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
    link: '/eclipse21couplesxptech',
    specs: ['XP-TECH power — standard', '400Ah lithium · 1,140W solar', 'Queen bed configuration', 'Full couples fit-out'],
    badge: 'Couples XP-TECH',
  },
  {
    name: "STORMBREAKER XP-TECH",
    price: 'From $129,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-header%5B2%5Dnewer.webp',
    link: '/stormbreaker21familyxptech',
    specs: ['XP-TECH power on family models', 'Triple bunk available', 'Off-grid + off-road', 'Full family configuration'],
    badge: 'Family XP-TECH',
  },
];

const faqs = [
  { q: 'How many days can I camp fully off grid?', a: 'With the XP-TECH power system (400Ah lithium, six 190W solar panels), most Deluxe owners camp indefinitely without shore power in normal conditions. In low sun periods or high consumption situations, the system typically sustains 3 to 5 days without any solar input at all.' },
  { q: 'Can I run the air con from battery alone overnight?', a: 'Yes. The XP-TECH system with 400Ah lithium can run the IBIS 4 air conditioner for approximately 4 to 6 hours overnight from battery alone, without any solar input. In most Australian conditions where some solar charging occurs during the day, overnight air con is fully manageable.' },
  { q: 'What solar comes as standard, not as an upgrade?', a: 'On XP-TECH models, six 190W solar panels are standard — not an upgrade. This is paired with 400Ah of lithium batteries, a 40A MPPT charger and a 3,000W pure sine inverter, all installed and tested before handover.' },
  { q: 'Can I add extra batteries later?', a: 'Yes. The XP-TECH system is designed to be expandable. Additional battery capacity can be added at the time of build or retrofitted later. Discuss your power requirements on a video call and we\'ll spec the right setup from the start.' },
  { q: 'Does XP-TECH work with Starlink?', a: 'Yes. The XP-TECH power system fully supports Starlink. The inverter and battery capacity handle Starlink\'s power draw without any issue.' },
  { q: 'What happens on cloudy days?', a: 'On overcast days, solar input is reduced but not zero. The 400Ah lithium battery bank provides a substantial buffer, and the system can also be topped up via the tow vehicle\'s alternator while driving. In extended low sun conditions, most users manage power carefully for 2 to 3 days before needing to move or use an external source.' },
  { q: 'Is XP-TECH available on family models?', a: 'Yes. The XP-TECH power system is available on Stormbreaker family models, not just the Eclipse range. Ask about XP-TECH availability on your preferred model during a video call.' },
  { q: 'Can I see the XP-TECH system on a video call before I buy?', a: 'Yes. Our Zoom walkthroughs specifically cover the XP-TECH system — we can show you the battery setup, the monitoring panel and walk through exactly what the system runs and for how long. Book a call via the button on this page.' },
];

export default function OffGridCaravansAustralia() {
  const [openFaq, setOpenFaq] = useState(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    if (window.fbq) window.fbq('track', 'ViewContent', { content_name: 'Off Grid Caravans Australia', content_category: 'Landing Page' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('lp-visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.lp-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const handleCTAClick = () => {
    if (window.fbq) window.fbq('track', 'Lead', { content_name: 'Book a Video Call' });
  };

  return (
    <div className="lp-page">
      <Helmet>
        <title>Off Grid Caravans Australia: XP-TECH Power Systems | Deluxe Caravans</title>
        <meta name="description" content="Deluxe off grid caravans come with 400Ah lithium, 6 solar panels and a 3,000W inverter — not just 'solar ready'. Built in Australia. Book a video call to get a custom XP-TECH quote." />
        <link rel="canonical" href="https://deluxecaravans.com.au/off-grid-caravans-australia" />
      </Helmet>

      {/* HERO */}
      <div className="lp-hero">
        <div className="lp-hero-video">
          <iframe
            ref={heroVideoRef}
            src="https://player.vimeo.com/video/1204696897?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Off Grid Caravans Australia"
            onLoad={() => heroVideoRef.current?.classList.add('lp-video-ready')}
          />
        </div>
        <div className="lp-hero-overlay" />
        <div className="lp-hero-inner">
          <p className="lp-hero-eyebrow">
            <span className="lp-eyebrow-line" />
            XP-TECH Off Grid Power · Australian Made
          </p>
          <h1 className="lp-hero-title">Off Grid Caravans Australia: Built for Remote Adventure</h1>
          <p className="lp-hero-intro">
            Most caravans say "solar ready." Deluxe XP-TECH models come with <strong>400Ah lithium batteries, six 190W solar panels, a 3,000W inverter, and a 40A MPPT charger</strong> — installed and tested before handover. Not an upgrade. Standard.
          </p>
          <div className="lp-cta-row">
            <a href="/appointment" className="lp-btn-primary" onClick={handleCTAClick}>Book a Video Call</a>
            <a href="#xptech-models" className="lp-btn-ghost">View the Eclipse Range</a>
          </div>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="lp-trust-strip">
        {trustItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className="lp-trust-item">{item}</div>
            {i < trustItems.length - 1 && <div className="lp-trust-sep">·</div>}
          </React.Fragment>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="lp-section lp-section--panel">
        <p className="lp-reviews-intro lp-reveal">Our off-grid customers travel remote. Here's what they're saying after months on the road.</p>
        <div className="lp-reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className={`lp-review-card lp-reveal lp-reveal-d${i + 1}`}>
              <div className="lp-review-stars">{r.stars}</div>
              <p className="lp-review-text">{r.text}</p>
              <div className="lp-review-author">{r.author}</div>
              <div className="lp-review-detail">{r.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* XP-TECH DEEP DIVE */}
      <div className="lp-section">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />The full system</p>
          <h2 className="lp-section-title">What the XP-TECH power system actually gives you</h2>
        </div>
        <div className="lp-two-col lp-two-col--start">
          <div className="lp-reveal">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />What you can run</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px' }}>
              {powerCapability.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'var(--lp-card)', border: '1px solid var(--lp-border)', borderRadius: '3px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--lp-muted)' }}>{item.item}</span>
                  <span style={{ color: 'var(--lp-accent)', fontFamily: 'var(--lp-font-mono)', fontSize: '12px', letterSpacing: '0.05em' }}>{item.icon} {item.capability}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '24px' }}>
              <div className="lp-img-placeholder">
                <img src={scenicImage08} alt="XP-TECH battery bay / interior power setup" />
              </div>
            </div>
          </div>
          <div className="lp-reveal lp-reveal-d2">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Plain language spec</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              {[
                { label: 'Battery', value: '400Ah lithium (LiFePO4) — usable to 80% DoD' },
                { label: 'Solar', value: '6 × 190W panels = 1,140W total rooftop solar' },
                { label: 'MPPT Charger', value: '40A MPPT solar charger — fast, efficient recharge' },
                { label: 'Inverter', value: '3,000W pure sine wave — runs any 240V appliance' },
                { label: 'Monitor', value: 'Enerdrive BmPro — 7" touchscreen battery management' },
                { label: 'Status', value: 'Installed, commissioned and tested before handover' },
              ].map((row, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--lp-border)', paddingBottom: '16px' }}>
                  <div style={{ fontFamily: 'var(--lp-font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lp-accent)', marginBottom: '6px' }}>{row.label}</div>
                  <div style={{ fontSize: '15px', color: 'var(--lp-white)' }}>{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODEL CARDS */}
      <div className="lp-section lp-section--panel" id="xptech-models">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />XP-TECH range</p>
          <h2 className="lp-section-title">Choose your off-grid van</h2>
        </div>
        <div className="lp-models-grid">
          {models.map((m, i) => (
            <Link key={i} to={m.link} className={`lp-model-card lp-reveal lp-reveal-d${(i % 2) + 1}`}>
              <img src={m.image} alt={m.name} className="lp-model-card-img" loading="lazy" />
              <div className="lp-model-card-body">
                <span className="lp-model-card-badge">{m.badge}</span>
                <div className="lp-model-card-name">{m.name}</div>
                <ul className="lp-model-card-specs">
                  {m.specs.map((s, j) => <li key={j}>{s}</li>)}
                </ul>
                <div className="lp-model-card-price">{m.price}</div>
                <div className="lp-model-card-cta">View {m.name.split(' ').slice(0, 2).join(' ')} →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="lp-section">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />The honest comparison</p>
          <h2 className="lp-section-title">"Solar ready" vs actually off-grid: what's the difference?</h2>
          <p className="lp-section-body" style={{ marginTop: '16px' }}>"Solar ready" means wiring in place for you to add solar later. It's a starting point, not a system. Here's what XP-TECH actually delivers.</p>
        </div>
        <div className="lp-table-wrap lp-reveal">
          <table className="lp-table">
            <thead>
              <tr>
                <th>System component</th>
                <th>Standard "solar ready" van</th>
                <th>Deluxe XP-TECH</th>
              </tr>
            </thead>
            <tbody>
              {powerSpecs.map((row, i) => (
                <tr key={i}>
                  <td>{row.label}</td>
                  <td style={{ color: 'var(--lp-muted)' }}>{row.standard}</td>
                  <td style={{ color: 'var(--lp-accent)' }}>{row.xptech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="lp-section lp-section--panel">
        <div className="lp-two-col lp-two-col--start">
          <div className="lp-reveal">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Common questions</p>
            <h2 className="lp-section-title">Common questions about off grid caravanning</h2>
            <p className="lp-section-body" style={{ marginTop: '16px' }}>
              Call us on <strong style={{ color: '#f4f4f4' }}>+61 483 939 904</strong> or book a Zoom call to see the XP-TECH system live.
            </p>
            <div style={{ marginTop: '32px' }}>
              <p className="lp-section-body">Also see:</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link to="/off-road-caravans-for-sale" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Off Road Caravans for Sale</Link></li>
                <li><Link to="/family-caravans-australia" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Family Caravans Australia</Link></li>
                <li><Link to="/xptech" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ XP-TECH System Overview</Link></li>
              </ul>
            </div>
          </div>
          <div className="lp-reveal lp-reveal-d2">
            <div className="lp-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`lp-faq-item${openFaq === i ? ' lp-open' : ''}`}>
                  <div className="lp-faq-q" onClick={() => toggleFaq(i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(i)}>
                    {faq.q}
                    <span className="lp-faq-arrow">+</span>
                  </div>
                  <div className="lp-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="lp-final-cta lp-reveal">
        <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><span className="lp-eyebrow-line" />Go properly off grid</p>
        <h2 className="lp-section-title">Ready to go properly off grid?</h2>
        <p className="lp-section-body">Book a Zoom call with the team. We can walk you through the XP-TECH system live on screen and answer every question about what it will and won't run on your trip.</p>
        <div className="lp-cta-row">
          <a href="/appointment" className="lp-btn-primary" onClick={handleCTAClick}>Book a Video Call</a>
          <a href="/contact" className="lp-btn-ghost">Request a Build Quote</a>
        </div>
      </div>
    </div>
  );
}
