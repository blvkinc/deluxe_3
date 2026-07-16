import React, { useEffect, useState, useCallback } from "react";
import "./HomeComponent.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const PREVIEW_CHAR_LIMIT = 260;

const getDisplayText = (quote, isExpanded) => {
  const paragraphs = quote
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length > 1) {
    return {
      text: isExpanded ? paragraphs.join('\n') : paragraphs[0],
      truncated: true,
    };
  }

  const single = paragraphs[0] || quote.trim();
  if (single.length <= PREVIEW_CHAR_LIMIT) {
    return { text: single, truncated: false };
  }

  if (isExpanded) {
    return { text: single, truncated: true };
  }

  const cut = single.slice(0, PREVIEW_CHAR_LIMIT);
  const lastSpace = cut.lastIndexOf(' ');
  const preview = `${cut.slice(0, lastSpace > 0 ? lastSpace : PREVIEW_CHAR_LIMIT)}…`;
  return { text: preview, truncated: true };
};

const Testimonials = () => {
  const [expanded, setExpanded] = useState({});

  const setSplideHeight = useCallback(() => {
    const splideTrack = document.querySelector('.splide__track');
    if (splideTrack) {
      const currentSlide = splideTrack.querySelector('.splide__slide.is-active');
      if (currentSlide) {
        const slideHeight = currentSlide.clientHeight;
        const splide = document.querySelector('.splide');
        if (splide) {
          splide.style.height = `${slideHeight}px`;
        }
      }
    }
  }, []);

  useEffect(() => {
    setSplideHeight();
    window.addEventListener('resize', setSplideHeight);
    return () => window.removeEventListener('resize', setSplideHeight);
  }, [setSplideHeight]);

  useEffect(() => {
    const raf = requestAnimationFrame(setSplideHeight);
    return () => cancelAnimationFrame(raf);
  }, [expanded, setSplideHeight]);

  const toggleExpanded = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const testimonialsData = [
    {
      rating: "★★★★★",
      quote: "We have had our deluxe XP-tech for a few months and it has been great! Quality and craftsmanship is by far the best I have seen. We looked at all the “big” brands but settled on deluxe. I’m based in QLD and was worried about aftersales and warranty, but after a recent minor teething issue I had, I shouldn’t have worried. Lakshan and the team were amazing in getting a repair organised and without hassle. Thanks Lakshan and the deluxe team! Danny",
      author: "Danny Nightingale",
      glink: "https://share.google/u94Dp14jKSPN6UeMC"
    },
    {
      rating: "★★★★★",
      quote: "We recently picked up our 20’6 Riptide Deluxe Caravan and honestly… we are obsessed. It’s been a long time coming. From our first conversations with Lakshan at the start of the year to finally pulling the trigger and seeing our dream van go into production — the whole journey has felt surreal.\n\nWe did a lot of research mapping out a layout that would suit our family, looking for a high-quality build with the ability to customise. Colour choices are always nerve-wracking, but seeing it all come together… the palette is stunning, and the finish is absolutely flawless.\n\nWe also love the extras we added, pulling inspiration from all our previous setups to make this build truly tick every box — from outdoor storage and the pull-out kitchen to the creature comforts like a washing machine and a BMS that can run the aircon.\n\nShe tows beautifully and is a dream to manoeuvre into sites. Deluxe have given us every luxury we wanted in a high-quality, family-friendly van. We can’t wait to take her out more and really put her through her paces.\n\nWould definitely recommend Deluxe Caravans. Welcome to follow along our part time adventures with our Riptide at @schryver_boys_and_me",
      author: "Julianne Schryver",
      glink: "https://share.google/mXAsD8t8aYJOC6L8V"
    },
    {
      rating: "★★★★★",
      quote: "We have been travelling in our 20ft Xp Tech Deluxe Caravan for 2 months now and are absolutely in love with it!! Can't express my thanks enough to the team and Lakshan for making our dream van come to life!! We have our walk - through available on youtube if you'd like to watch on Tailsdownunder:",
      author: "Jessica Ellis",
      glink: "https://share.google/tQjS9hQQaPbcuh3Ie"
    },
    {
      rating: "★★★★★",
      quote: "We absolutely love our Deluxe Caravan! We ordered our van blind as we live in QLD and couldn’t make the trip to VIC, Lakshan FaceTimed us and did a walk through and answered any questions we had before ordering. We enjoyed regular updates and progress photos via email weekly of our van build. We made the trip to VIC to pick up our van and the quality has absolutely exceeded our expectations! As we are about to travel Australia indefinitely we wanted a good quality off road caravan that was custom to our needs, we viewed many brands at multiple expos and decided on Deluxe Caravans who has outdone themselves. Their customer support is second to none! We are so excited to have our new van and can’t wait for the adventures we will have in it.\n\nWe would recommend Deluxe Caravans to anyone! If you would like to check out our caravan, our travel page it is Rippin Around Oz.",
      author: "Darci Dixon",
      glink: "https://share.google/TjTRTN6avw1XwuoJ3"
    },
    {
      rating: "★★★★★",
      quote: "We went with the StormBreaker 19’6 Double Bunk. We worked with the team at Deluxe to build our van and we are so glad we found them! The whole process was effortless. Nothing is too hard for the team at Deluxe Caravans and the service they offer is second to none. From build progress photos all the way throughout the build, endless options for additional upgrades and the quality is exemplary! When the time comes for our next caravan build there will be only one stop for us straight to Deluxe!\n\nDeluxe service! Deluxe Quality! Deluxe People! Thanks Lachlan any the team for our amazing caravan. Rhys, Tori, Lincoln and Florence aka @_thesydneyswans_ (Insta)",
      author: "Rhys Swan",
      glink: "https://share.google/F44cKXUy4ow4TcIar"
    },
    {
      rating: "★★★★★",
      quote: "Lakshan at deluxe caravans was bloody unreal. It was a very smooth and easy buy for our family. The communication was second to none and finished product of their vans are amazing. We changed our colour scheme and could have times but nothing was ever a drama.",
      author: "Matthew Ellison",
      glink: "https://share.google/47arbC26PmgZwmMOs"
    },
    {
      rating: "★★★★★",
      quote: "We got to tow a Deluxe Stormbreaker for a month and it was awesome! Can not fault it. We had no issues and we pushed it pretty hard. The van performed really well and so did their team. Their team is friendly and easy to communicate with. The van rode really well through all conditions and the interior is second to none. Super comfortable and with the big inverter we were able to run the aircon wherever, whenever. Thankyou for the opportunity guys.",
      author: "Jordan Hansen",
      glink: "https://share.google/d7c8AoQOeamYzmWO9"
    },
    {
      rating: "★★★★★",
      quote: "From the first contact Lachlan and Deluxe had perfect customer service. They were really knowledgeable about their product, the caravan industry and what would be the best fit for us. Since we have received handover for our 19’6 storm breaker it has travelled amazingly with us as we travel full time and we have had great support for any questions we had! Highly recommend!",
      author: "Nikki Vagg",
      glink: "https://share.google/iHGdYiTQ2tzmSc5ZQ"
    },
    {
      rating: "★★★★★",
      quote: "We love our new Deluxe Caravan. Well built and the finish to the van is spot on. Lakshan is great to deal with and is happy to make changes and upgrades to the van without any drama. value for money and quality without paying for the name. A++++++",
      author: "Brett Miller",
      glink: "https://share.google/H5v58ZT34jay2tpB3"
    },
    {
      rating: "★★★★★",
      quote: "After owning a Deluxe Caravan for 2.5 years that never skipped a beat we decided to upgrade to their Stormbreaker Double Bunk design halfway into our lap of Australia. We made multiple custom requests and nothing was too much for the team! We created a 23’ version of the Stormbreaker which is completely gasless ‘Off-Grid’ & FULL 'Off-Road', with an aluminium frame, honeycomb floor & flat floor chassis to name only a few of the features. Lakshan & Ayali were in regular contact during the build with updates and photos! The van is 5 star in quality, workmanship and finishes whilst being amazing value for money. We are more than excited to give our Teko Tuff Ride Airbag Suspension & Victron Solar System a workout as we continue our lap. We cannot thank the team at Deluxe enough for making it a stress free experience and delivering our van on time. Definitely recommend, please do not hesitate to ask us any questions.\n\nMany Thanks for our beautiful home on wheels :) Owen, Jacqui, Tynan & Mahli @avan_aram_noplan",
      author: "Jacqui Plum",
      glink: "https://share.google/v9wmxKiTEMCRrsuoD"
    },
    {
      rating: "★★★★★",
      quote: "We placed our order early sept and received it early dec. In that time we changed our build in excess of 6-8 times! Nothing was ever a problem with our last changes being done as framing was starting. It’s a testament to the team that with all of these changes they didn’t get a single thing wrong in the entire build. They accommodated our every request whether it was run of the mill or something a bit different. The build quality is second to none. Lachlan allowed us our own time to go right over the build when we arrived and supplied in progress photos as the build was happening. There wasn’t a thing out of place. After having the van and taking it out we couldn’t be happier with our choice to use Deluxe to build our van.\n\nThe only change we would possibly make if we were to go again is to upgrade the chassis to 4t rated. With quality comes weight. While we aren’t overweight and have a couple hundred kilos wriggle room if you were planning to live in or do a lot of big trips it would give you extra piece of mind. But 10/10 recommend. These guys aren’t on the “top rated” by a lot of people but it’s purely because they are still getting exposure. The van is just as good or better than some of the topped priced vans in the country. I must mention too the best change we made was upgrading to a king bed! It’s not something you see offered often and it makes the van amazingly comfortable and just like being at home!",
      author: "Karney Chester",
      glink: "https://share.google/EebJdzvo5Ava8ZwuR"
    },
  ];

  return (
    <div >
      <div className='reviewhead'>
      <h2>
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#EA4335' }}>o</span>
        <span style={{ color: '#FBBC05' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#34A853' }}>l</span>
        <span style={{ color: '#EA4335' }}>e</span>
        &nbsp;Rating
      </h2>
      <p style={{ color: '#ffffff' }}>5.0 <span className='revstar' role="img" aria-label="star">★★★★★</span></p>
    </div>
      <div className="reviewdesc">
        <Splide
          options={{
            type: 'slide',
            rewind: true,
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 5000,
            width:'100vw',
            height:'auto',
            pagination:false,
            lazyLoad:true,
            arrows:false,
          }}
        >
          {testimonialsData.map((testimonial, index) => {
            const isExpanded = !!expanded[index];
            const { text, truncated } = getDisplayText(testimonial.quote, isExpanded);
            return (
              <SplideSlide key={index}>
                <div className="slide__item">
                  <p className="slide__heading">{testimonial.rating}</p>
                  <blockquote className="slide__quote">
                    <a href={testimonial.glink} target="_blank" rel="noopener noreferrer">
                      {text.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </a>
                  </blockquote>
                  {truncated && (
                    <button
                      type="button"
                      className="slide__readmore"
                      aria-expanded={isExpanded}
                      onClick={(e) => toggleExpanded(index, e)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <cite className="slide__cite">- {testimonial.author}</cite>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default React.memo(Testimonials);
