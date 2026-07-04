import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './LandingPages.css';
import scenicImage06 from '../../assets/scenicimages/scenic-image-06.jpg';
import scenicImage07 from '../../assets/scenicimages/scenic-image-07.jpg';

const reviews = [
  {
    stars: '★★★★★',
    text: '"The palette is stunning and the finish is absolutely flawless. Deluxe have given us every luxury we wanted in a high quality, family friendly van. She tows beautifully and is a dream to manoeuvre into sites."',
    author: 'Julianne Schryver',
    detail: 'Riptide 20\'6 · Owner',
  },
  {
    stars: '★★★★★',
    text: '"The van rode really well through all conditions and the interior is second to none. Super comfortable and with the big inverter we were able to run the aircon wherever, whenever."',
    author: 'Nikki Vagg',
    detail: 'Stormbreaker 19\'6 · Owner',
  },
  {
    stars: '★★★★★',
    text: '"From the first contact Lakshan and Deluxe had perfect customer service. They were really knowledgeable about their product, the caravan industry and what would be the best fit for us."',
    author: 'Nikki Vagg',
    detail: 'Verified Google Review',
  },
];

const trustItems = [
  '15 Years in Business',
  'Australian Made · Campbellfield',
  'Composite Timber-Free Frame',
  'Nationwide Warranty Coverage',
];

const models = [
  {
    name: "STORMBREAKER 18'6\"",
    price: 'From $89,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/186.webp',
    link: '/stormbreaker18familyoffroad',
    specs: ['18\'6" body length', 'Composite aluminium frame', 'Tuff Ride airbag suspension', 'Dust reduction system'],
    badge: 'Entry Off Road',
  },
  {
    name: "STORMBREAKER 19'6\"",
    price: 'From $92,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
    link: '/stormbreaker19familyoffroad',
    specs: ['19\'6" body length', 'Double bunk layout', 'Tuff Ride airbag suspension', 'Off-grid power options'],
    badge: 'Popular Choice',
  },
  {
    name: "STORMBREAKER 21'6\"",
    price: 'From $94,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/216.webp',
    link: '/stormbreaker21familyoffroad',
    specs: ['21\'6" body length', 'Triple bunk layout', 'Tuff Ride airbag suspension', 'XP-TECH power available'],
    badge: 'Most Popular',
  },
  {
    name: "RIPTIDE 20'",
    price: 'From $96,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
    link: '/riptide20familyoffroad',
    specs: ['20\' body length', 'Heavy off-road spec', 'Tuff Ride airbag suspension', 'Full XP-TECH power standard'],
    badge: 'Serious Off Road',
  },
];

const features = [
  { icon: 'fa-solid fa-road', title: 'Tuff Ride Airbag Suspension', desc: 'Absorbs corrugated road impact that standard suspension wasn\'t designed to handle.' },
  { icon: 'fa-solid fa-layer-group', title: 'Composite Aluminium Frame', desc: 'Timber-free, moisture-proof, lighter and warrantied for Australian conditions.' },
  { icon: 'fa-solid fa-wind', title: 'Dust Reduction System', desc: 'Engineered to keep the interior clean on unsealed outback roads.' },
  { icon: 'fa-solid fa-bolt', title: 'Lithium Battery Options', desc: 'XP-TECH off-grid power systems available — 400Ah lithium, 6 solar panels standard.' },
  { icon: 'fa-solid fa-droplet', title: 'On-Board Water Capacity', desc: 'Generous fresh and grey water tanks for remote travel and free camping.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Structural Warranty', desc: '3-year structural warranty serviced through a national repairer network.' },
];

const faqs = [
  { q: 'What off road rating do Deluxe caravans have?', a: 'Deluxe off road caravans are built for genuine unsealed Australian conditions, including corrugated dirt roads, creek crossings and remote outback tracks. All models feature a composite aluminium frame, Tuff Ride airbag suspension and dust reduction as standard. We don\'t use a single off road rating number because Australian road conditions vary so widely — we\'d rather walk you through what each model can handle on a video call.' },
  { q: 'Do Deluxe caravans come with solar panels?', a: 'Yes. All Deluxe caravans come with solar as standard, not as an optional upgrade. XP-TECH models include six 190W solar panels, 400Ah of lithium batteries, a 3,000W pure sine inverter and a 40A MPPT charger, all installed and tested before handover. Entry level models include a solar setup sized for everyday use.' },
  { q: 'What suspension system do Deluxe off road vans use?', a: 'Deluxe off road caravans use the Tuff Ride airbag suspension system. Unlike standard independent suspension, Tuff Ride is designed to absorb the impact of corrugated dirt roads and reduce stress on the van\'s frame and fittings over long distances of unsealed travel.' },
  { q: 'What is the warranty on off road models?', a: 'Deluxe caravans come with a structural warranty backed by a national repairer network, so you\'re covered wherever you are in Australia — not just near our Campbellfield factory. Full warranty terms are available on our warranty page.' },
  { q: 'How long is the build time?', a: 'Current build times are approximately 3 to 5 months from deposit to handover, depending on the model and any custom specifications. We\'ll confirm your exact build timeline before you commit.' },
  { q: 'Can I do a video call before I buy?', a: 'Yes, and we encourage it. We offer Zoom video calls with the Deluxe team so you can see the van live on screen, ask every question and take your time — whether you\'re in Melbourne or Cairns. Book a time via the button on this page.' },
  { q: 'What is included at handover?', a: 'Handover includes a full walkthrough of the water system, electrical and off grid setup, all operating manuals, a plumber checked inspection sign off, and all standard accessories. The handover typically takes 2 to 3 hours. A full handover checklist is available on request before you sign.' },
  { q: 'Can I customise the layout or fit out?', a: 'Yes. Deluxe builds each caravan to order, so there is flexibility on layout, fit out, appliances and upgrades. The best way to discuss customisation options is on a video call with the team, where we can walk through what\'s possible for your specific model.' },
];

export default function OffRoadCaravansForSale() {
  const [openFaq, setOpenFaq] = useState(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    if (window.fbq) window.fbq('track', 'ViewContent', { content_name: 'Off Road Caravans For Sale', content_category: 'Landing Page' });
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
        <title>Off Road Caravans for Sale: Australian Made | Deluxe Caravans</title>
        <meta name="description" content="Browse Deluxe Caravans' off road range, Australian made in Campbellfield VIC. Composite frame, airbag suspension, full off-grid power. Book a video call today." />
        <link rel="canonical" href="https://deluxecaravans.com.au/off-road-caravans-for-sale" />
      </Helmet>

      {/* HERO */}
      <div className="lp-hero">
        <div className="lp-hero-video">
          <iframe
            ref={heroVideoRef}
            src="https://player.vimeo.com/video/1204696024?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Off Road Caravans for Sale"
            onLoad={() => heroVideoRef.current?.classList.add('lp-video-ready')}
          />
        </div>
        <div className="lp-hero-overlay" />
        <div className="lp-hero-inner">
          <p className="lp-hero-eyebrow">
            <span className="lp-eyebrow-line" />
            Australian Made · Campbellfield, VIC
          </p>
          <h1 className="lp-hero-title">Off Road Caravans for Sale: Australian Made in Campbellfield</h1>
          <p className="lp-hero-intro">
            Deluxe Caravans builds off road caravans designed for Australian conditions: <strong>composite frame, Tuff Ride airbag suspension, and full off-grid power as standard.</strong> Family-owned and built in our Campbellfield factory for 15 years. Browse the range below or book a video call to talk through which model suits your trip.
          </p>
          <div className="lp-cta-row">
            <a href="/appointment" className="lp-btn-primary" onClick={handleCTAClick}>Book a Video Call</a>
            <a href="/contact" className="lp-btn-ghost">Request a Build Quote</a>
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
        <p className="lp-reviews-intro lp-reveal">Don't take our word for it. Here's what Deluxe owners are saying.</p>
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

      {/* WHAT MAKES A REAL OFF ROAD CARAVAN */}
      <div className="lp-section">
        <div className="lp-two-col">
          <div className="lp-reveal">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />What to look for</p>
            <h2 className="lp-section-title">What to look for in a genuine off road caravan</h2>
            <p className="lp-section-body">Not all off road caravans are built equally — and in Australia, the difference matters.</p>
            <br />
            <p className="lp-section-body"><strong style={{ color: '#f4f4f4' }}>Frame material.</strong> Composite or aluminium frame, not timber. Timber absorbs moisture and deteriorates from the inside, often invisibly, until the repair cost is significant. A composite aluminium frame is lighter, moisture-proof, and warrantied against structural deterioration.</p>
            <br />
            <p className="lp-section-body"><strong style={{ color: '#f4f4f4' }}>Suspension.</strong> Tuff Ride airbag suspension versus standard independent suspension is not a marginal difference. On corrugated outback roads, airbag suspension absorbs impact that independent suspension passes directly into the van — and into everything you've packed.</p>
            <br />
            <p className="lp-section-body"><strong style={{ color: '#f4f4f4' }}>Water capacity.</strong> Remote travel means days between facilities. On-board water capacity — for both fresh and grey water — determines how long you can stay off-grid comfortably. Check the actual litres, not just that a tank exists.</p>
            <br />
            <p className="lp-section-body"><strong style={{ color: '#f4f4f4' }}>Dust reduction.</strong> Outback dust is fine enough to penetrate any gap. A proper dust reduction system is the difference between unpacking clean gear at a campsite and unpacking grit-covered gear. It's not a luxury — it's a practical feature that families notice immediately.</p>
          </div>
          <div className="lp-reveal lp-reveal-d2">
            <div className="lp-img-placeholder">
              <img src={scenicImage06} alt="Composite frame construction" />
            </div>
          </div>
        </div>
      </div>

      {/* MODEL CARDS */}
      <div className="lp-section lp-section--panel">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Browse the range</p>
          <h2 className="lp-section-title">The Deluxe Off Road Range</h2>
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

      {/* FEATURE CALLOUT */}
      <div className="lp-section">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />What's standard</p>
          <h2 className="lp-section-title">Built for real Australian conditions</h2>
        </div>
        <div className="lp-features-grid">
          {features.map((f, i) => (
            <div key={i} className={`lp-feature-item lp-reveal lp-reveal-d${(i % 3) + 1}`}>
              <div className="lp-feature-title">{f.title}</div>
              <p className="lp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY AUSTRALIAN MADE */}
      <div className="lp-section lp-section--panel">
        <div className="lp-two-col">
          <div className="lp-reveal">
            <div className="lp-img-placeholder">
              <img src={scenicImage07} alt="Campbellfield factory floor" />
            </div>
          </div>
          <div className="lp-reveal lp-reveal-d2">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />15 years, same factory</p>
            <h2 className="lp-section-title">Built in Campbellfield. Warrantied across Australia.</h2>
            <p className="lp-section-body">Deluxe Caravans has been building off road caravans in our Campbellfield, Victoria factory for 15 years. Same team, same address, same standard.</p>
            <br />
            <p className="lp-section-body">Every Deluxe van undergoes a plumber-certified handover. Water systems, electrical, gas — checked by a licensed tradesperson before the keys go to you. Not every manufacturer does this. We do.</p>
            <br />
            <p className="lp-section-body">Our 3-year structural warranty is backed by a national authorised repairer network. Whether you're in Darwin or Hobart, warranty claims don't require a trip back to Melbourne.</p>
            <br />
            <div className="lp-cta-row" style={{ marginTop: '32px' }}>
              <a href="/appointment" className="lp-btn-primary" onClick={handleCTAClick}>Book a Video Call</a>
              <a href="/contact" className="lp-btn-ghost">Request a Build Quote</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="lp-section">
        <div className="lp-two-col lp-two-col--start">
          <div className="lp-reveal">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Common questions</p>
            <h2 className="lp-section-title">Common questions about Deluxe off road caravans</h2>
            <p className="lp-section-body" style={{ marginTop: '16px' }}>
              If your question isn't here, call us directly on <strong style={{ color: '#f4f4f4' }}>+61 483 939 904</strong> or book a video call.
            </p>
            <div style={{ marginTop: '32px' }}>
              <p className="lp-section-body">Also see:</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link to="/off-grid-caravans-australia" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Off Grid Caravans Australia</Link></li>
                <li><Link to="/family-caravans-australia" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Family Caravans Australia</Link></li>
                <li><Link to="/blog/best-family-caravans-australia-2026" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Best Family Caravans Australia 2026</Link></li>
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
        <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><span className="lp-eyebrow-line" />Let's talk</p>
        <h2 className="lp-section-title">Ready to find your off road van?</h2>
        <p className="lp-section-body">Talk to the Deluxe team over Zoom, no pressure, no obligation. We'll walk you through the range and answer every question.</p>
        <div className="lp-cta-row">
          <a href="/appointment" className="lp-btn-primary" onClick={handleCTAClick}>Book a Video Call</a>
          <a href="/contact" className="lp-btn-ghost">Request a Build Quote</a>
        </div>
      </div>
    </div>
  );
}
