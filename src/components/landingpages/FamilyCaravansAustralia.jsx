import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './LandingPages.css';
import familyHeroBanner from '../../assets/subpages/family-caravans-australia.jpg';
import scenicImage01 from '../../assets/scenicimages/scenic-image-01.jpg';
import scenicImage02 from '../../assets/scenicimages/scenic-image-02.jpg';
import scenicImage03 from '../../assets/scenicimages/scenic-image-03.jpg';
import scenicImage04 from '../../assets/scenicimages/scenic-image-04.jpg';
import scenicImage05 from '../../assets/scenicimages/scenic-image-05.jpg';

const reviews = [
  {
    stars: '★★★★★',
    text: '"We ordered our van blind as we live in QLD and couldn\'t make the trip to VIC. Lakshan FaceTimed us and did a walk through and answered any questions we had before ordering. The quality has absolutely exceeded our expectations!"',
    author: 'Darci Dixon',
    detail: 'Stormbreaker 19\'6 · QLD',
  },
  {
    stars: '★★★★★',
    text: '"Nothing is too hard for the team at Deluxe Caravans. From build progress photos all the way throughout the build, endless options for additional upgrades and the quality is exemplary! Deluxe service! Deluxe Quality! Deluxe People!"',
    author: 'Rhys, Tori, Lincoln & Florence',
    detail: 'Stormbreaker 19\'6 · @_thesydneyswans_',
  },
  {
    stars: '★★★★★',
    text: '"Since we have received handover for our 19\'6 storm breaker it has travelled amazingly with us as we travel full time and we have had great support for any questions we had! Highly recommend!"',
    author: 'Nikki Vagg',
    detail: 'Stormbreaker 19\'6 · Full-time Travel',
  },
];

const trustItems = [
  'Triple Bunk Layouts Available',
  'Off Road Ready · All Models',
  'Australian Made · Campbellfield',
  'Nationwide Warranty',
];

const models = [
  {
    name: "STORMBREAKER 18'6\"",
    price: 'From $89,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/186.webp',
    link: '/stormbreaker18familyoffroad',
    specs: ['Double bunk layout', 'Families of 3–4', 'Composite aluminium frame', 'Tuff Ride airbag suspension'],
    badge: 'Best for: Families of 3–4',
  },
  {
    name: "STORMBREAKER 19'6\"",
    price: 'From $92,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
    link: '/stormbreaker19familyoffroad',
    specs: ['Double bunk layout', 'Families of 4', 'Composite aluminium frame', 'Off-grid power options'],
    badge: 'Best for: Families of 4',
  },
  {
    name: "STORMBREAKER 21'6\"",
    price: 'From $94,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/header/216.webp',
    link: '/stormbreaker21familyoffroad',
    specs: ['Triple bunk layout', 'Families of 4–5', 'Composite aluminium frame', 'XP-TECH power available'],
    badge: '⭐ Most Popular Family Model',
  },
  {
    name: "RIPTIDE 20'",
    price: 'From $96,900',
    image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
    link: '/riptide20familyoffroad',
    specs: ['Heavy off-road spec', 'Serious remote travel', 'Full XP-TECH power standard', 'Adventure families'],
    badge: 'Best for: Serious off road',
  },
];

const faqs = [
  { q: 'How does a Deluxe compare to Jayco for families?', a: 'The key differences are frame construction, off road capability and build customisation. Deluxe uses a composite aluminium frame (Jayco uses timber in most models), Tuff Ride airbag suspension for unsealed roads, and builds each van to order rather than from stock. Deluxe is an Australian family owned manufacturer, not a volume producer, so the product and the buying experience are different.' },
  { q: 'What is the build time and lead time?', a: 'Current build times are approximately 3 to 5 months from deposit to handover. We\'ll confirm your specific timeline before you sign anything.' },
  { q: 'Can I customise bunk configurations?', a: 'Yes. Bunk configuration is one of the most common customisations Deluxe families request. We build to order, so discuss what you need on a video call and we\'ll tell you what\'s possible for your chosen model.' },
  { q: 'Is there an awning included?', a: 'Yes, all Deluxe family caravans include an awning as standard.' },
  { q: 'What\'s included at handover?', a: 'Handover includes a full walkthrough of all systems, a plumber checked inspection, all manuals and a full accessories pack. It takes 2 to 3 hours. A complete handover checklist is available on request.' },
  { q: 'How does the nationwide warranty work if we\'re in Queensland?', a: 'Deluxe\'s structural warranty is backed by a national repairer network, so warranty claims can be handled wherever you are in Australia. You don\'t need to return to Campbellfield. Contact the Deluxe team and we\'ll coordinate the nearest authorised repairer.' },
  { q: 'Are Deluxe caravans suitable for first time caravan buyers?', a: 'Yes. A significant number of Deluxe buyers are first time caravan owners. We offer video calls specifically to help first time buyers understand what to look for, what questions to ask, and which model suits their situation — with no pressure to buy.' },
  { q: 'Can I do a video call to see the van before committing?', a: 'Absolutely. We offer Zoom walkthroughs of the van, the factory and the specific features relevant to your model. Many of our interstate buyers have purchased entirely via video call. Book a time via the button on this page.' },
];

export default function FamilyCaravansAustralia() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (window.fbq) window.fbq('track', 'ViewContent', { content_name: 'Family Caravans Australia', content_category: 'Landing Page' });
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
        <title>Family Caravans Australia: Bunk Beds, Off Road and Built to Last | Deluxe Caravans</title>
        <meta name="description" content="Family caravans built for the Big Lap and beyond. Triple bunk layouts, off road ready, Australian made. Browse the Deluxe family range or book a video call with our team." />
        <link rel="canonical" href="https://deluxecaravans.com.au/family-caravans-australia" />
      </Helmet>

      {/* HERO */}
      <div className="lp-hero">
        <img src={familyHeroBanner} className="lp-hero-img" alt="Family caravans Australia - Deluxe Caravans" />
        <div className="lp-hero-overlay" />
        <div className="lp-hero-inner">
          <p className="lp-hero-eyebrow">
            <span className="lp-eyebrow-line" />
            Australian Made · Family Off Road Range
          </p>
          <h1 className="lp-hero-title">Family Caravans Australia: Built for the Big Lap and Beyond</h1>
          <p className="lp-hero-intro">
            The Big Lap. The school holidays trip. The one where the kids finally stop asking "are we there yet?" because they're already home. <strong>Deluxe builds family caravans with triple bunk layouts, off road capability, and a structural warranty that follows you anywhere in Australia.</strong>
          </p>
          <div className="lp-cta-row">
            <a href="#family-models" className="lp-btn-primary" onClick={handleCTAClick}>See the Family Range</a>
            <a href="/appointment" className="lp-btn-ghost" onClick={handleCTAClick}>Book a Video Call</a>
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
        <p className="lp-reviews-intro lp-reveal">Word of mouth is how most Deluxe buyers find us. Here's what families are saying.</p>
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

      {/* INTRO COPY */}
      <div className="lp-section">
        <div className="lp-reveal">
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Why families choose Deluxe</p>
          <h2 className="lp-section-title">Built by a family business that understands the brief</h2>
        </div>
        <div className="lp-two-col" style={{ marginTop: '48px' }}>
          <p className="lp-section-body lp-reveal">
            The cost of living has changed the maths around family holidays. A return overseas trip for four people can easily run past $15,000. A caravan, amortised across five or ten years of school holiday trips, starts to look different when you run those numbers honestly. Domestic caravan travel in 2026 is a genuinely smart choice — and the infrastructure has caught up. Apps like Wikicamps have made it easier to find good free camping. More national parks have been upgraded. Remote roads that required a 4WD setup a decade ago are accessible to well-built caravans now.
          </p>
          <p className="lp-section-body lp-reveal lp-reveal-d2">
            Deluxe is a family business. We understand the brief: enough room for everyone, a layout that survives three weeks on the road with kids, and a van that holds up when the corrugations start. We build every van to order. You choose the layout, the upgrades, the configuration that suits your family — not what's on the showroom floor. And we're in Campbellfield, VIC, with Zoom calls available for families who can't make the trip south.
          </p>
        </div>
      </div>

      {/* MODEL CARDS */}
      <div className="lp-section lp-section--panel" id="family-models">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Browse the family range</p>
          <h2 className="lp-section-title">The Deluxe Family Range</h2>
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

      {/* LAYOUT GUIDE */}
      <div className="lp-section">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Choosing the right layout</p>
          <h2 className="lp-section-title">Choosing the right layout for your family</h2>
        </div>
        <div className="lp-two-col" style={{ alignItems: 'stretch' }}>
          <div className="lp-reveal" style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Double Bunk (18\'6" & 19\'6")</p>
            <p className="lp-section-body">A double bunk suits families of three or four where the kids are young enough to share without ongoing territorial disputes. Two bunks stacked is straightforward, and the floor space you save is real. The Stormbreaker 18'6" and 19'6" both run this configuration and hit the balance between size, towing weight and livability well.</p>
            <br />
            <p className="lp-section-body">If you have two kids under ten and a mid-size SUV, this is likely your starting point.</p>
            <div className="lp-img-placeholder" style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <img src={scenicImage01} alt="Stormbreaker 18 or 19 bunk area" />
            </div>
          </div>
          <div className="lp-reveal lp-reveal-d2" style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Triple Bunk (21\'6")</p>
            <p className="lp-section-body">A triple bunk layout becomes necessary — not just convenient — once you've got three kids or two kids who've hit the age where sharing a bunk stops being acceptable. The Stormbreaker 21'6" is purpose-built for families who need to fit everyone comfortably for months at a time, not just weekends.</p>
            <br />
            <p className="lp-section-body">The extra bunk has flow-on effects: longer van, different kitchen positioning, different storage layout throughout. It's not just one more bunk — it's a different product. For families planning the Big Lap with three kids, the 21'6" is the clear recommendation.</p>
            <div className="lp-img-placeholder" style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <img src={scenicImage02} alt="Stormbreaker 21 triple bunk layout" />
            </div>
          </div>
        </div>
      </div>

      {/* SAFETY AND DURABILITY */}
      <div className="lp-section lp-section--panel">
        <div className="lp-two-col">
          <div className="lp-reveal">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Built to last</p>
            <h2 className="lp-section-title">Built to handle what families actually put a caravan through</h2>
          </div>
          <div className="lp-reveal lp-reveal-d2">
            <div className="lp-note">
              <strong>Composite frame:</strong> lighter, moisture-proof, warrantied against structural deterioration. Timber absorbs moisture and can deteriorate invisibly under the walls of a caravan. Our composite aluminium frame doesn't.
            </div>
            <div className="lp-note">
              <strong>Tuff Ride airbag suspension:</strong> absorbs the corrugated road impact that standard independent suspension passes directly into the van. For families doing the Big Lap, this is the difference between arriving intact and arriving shaken.
            </div>
            <div className="lp-note">
              <strong>Dust reduction:</strong> a practical feature families notice immediately. Fine outback dust will find its way through any gap. A proper dust reduction system keeps the van livable on red dirt.
            </div>
          </div>
        </div>
      </div>

      {/* LIFE ON THE ROAD WITH KIDS */}
      <div className="lp-section">
        <div className="lp-reveal" style={{ marginBottom: '48px' }}>
          <p className="lp-eyebrow"><span className="lp-eyebrow-line" />The real picture</p>
          <h2 className="lp-section-title">What life actually looks like in a Deluxe</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { label: 'Off-grid school on the road', desc: 'With Starlink and the right power system, distance education is genuinely manageable from anywhere in Australia. A Deluxe with XP-TECH power runs the connection indefinitely.', img: scenicImage03 },
            { label: 'Enough storage for the whole family', desc: 'Three months of clothing, bikes, wetsuits, fishing gear, school materials and outdoor furniture. The rear garage and thoughtful storage design is what makes it livable rather than manageable.', img: scenicImage04 },
            { label: 'Privacy and space for parents too', desc: 'The awning, the separate sleeping areas, and a queen bed that isn\'t a double. A Deluxe is designed for adults who also need to feel comfortable — not just kids who can sleep anywhere.', img: scenicImage05 },
          ].map((item, i) => (
            <div key={i} className={`lp-reveal lp-reveal-d${i + 1}`} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="lp-img-placeholder"><img src={item.img} alt={item.label} /></div>
              <h3 style={{ fontFamily: 'var(--lp-font-display)', fontSize: '22px', color: 'var(--lp-white)', lineHeight: 1, letterSpacing: '0.02em' }}>{item.label}</h3>
              <p className="lp-feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="lp-section lp-section--panel">
        <div className="lp-two-col lp-two-col--start">
          <div className="lp-reveal">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Common questions</p>
            <h2 className="lp-section-title">Questions families ask before they buy</h2>
            <p className="lp-section-body" style={{ marginTop: '16px' }}>
              Call us on <strong style={{ color: '#f4f4f4' }}>+61 483 939 904</strong> or book a Zoom call — no pressure, no scripts.
            </p>
            <div style={{ marginTop: '32px' }}>
              <p className="lp-section-body">Related reading:</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link to="/off-road-caravans-for-sale" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Off Road Caravans for Sale</Link></li>
                <li><Link to="/off-grid-caravans-australia" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ Off Grid Caravans Australia</Link></li>
                <li><Link to="/blog/big-lap-with-kids-guide" style={{ color: 'var(--lp-accent)', textDecoration: 'none', fontSize: '14px' }}>→ The Big Lap with Kids: A Practical Guide</Link></li>
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

      {/* LOCATION */}
      <div className="lp-section">
        <div className="lp-two-col">
          <div className="lp-reveal">
            <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: '4px' }}>
              <iframe
                title="Deluxe Caravans - Campbellfield showroom location"
                src="https://www.google.com/maps?q=32+Scammel+Street,+Campbellfield,+VIC+3061&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="lp-reveal lp-reveal-d2">
            <p className="lp-eyebrow"><span className="lp-eyebrow-line" />Find us</p>
            <h2 className="lp-section-title">Visit us in Campbellfield, or book a Zoom call</h2>
            <p className="lp-section-body">Our factory and showroom is in Campbellfield VIC, 20 minutes north of Melbourne's CBD. Can't make it in person? We offer Zoom calls so you can talk through the range from wherever you are in Australia.</p>
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '14px', color: 'var(--lp-white)', lineHeight: '1.5' }}>
                <span style={{ verticalAlign: 'middle' }}>Campbellfield, VIC 3061</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--lp-white)', lineHeight: '1.5' }}>
                <a href="tel:+61483939904" style={{ color: 'var(--lp-accent)', textDecoration: 'none', verticalAlign: 'middle' }}>+61 483 939 904</a>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--lp-muted)' }}>Mon–Fri: 9am–5pm · Sat: 9am–1pm</div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="lp-final-cta lp-reveal">
        <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><span className="lp-eyebrow-line" />Let's plan it</p>
        <h2 className="lp-section-title">Ready to plan your family's first Big Lap?</h2>
        <p className="lp-section-body">Book a Zoom call — 30 to 60 minutes, no pressure. We'll walk you through the range, discuss your tow vehicle, and help you find the right van for your family.</p>
        <div className="lp-cta-row">
          <a href="/appointment" className="lp-btn-primary" onClick={handleCTAClick}>Book a Video Call</a>
          <a href="/contact" className="lp-btn-ghost">Request a Family Build Quote</a>
        </div>
      </div>
    </div>
  );
}
