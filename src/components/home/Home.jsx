import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";
import HomeDesc from "./homecomponents/HomeDescription";
import CarouselSection from "./homecomponents/CarouselSection";
import Promovid from "./homecomponents/Promovid";


const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Deluxe Caravans',
  url: 'https://deluxecaravans.com.au',
  logo: 'https://deluxcaravan.b-cdn.net/assets/Logo.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+61-483-939-904',
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/deluxecaravansaustralia/',
    'https://www.facebook.com/deluxecaravansaustralia',
    'https://twitter.com/CaravansDeluxe',
    'https://www.tiktok.com/@deluxecaravansaustralia',
    'https://www.youtube.com/@deluxecaravans8373',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Deluxe Caravans',
  image: 'https://deluxcaravan.b-cdn.net/assets/Logo.webp',
  url: 'https://deluxecaravans.com.au',
  telephone: '+61-483-939-904',
  email: 'hello@infiniterv.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '32 Scammel Street',
    addressLocality: 'Campbellfield',
    addressRegion: 'VIC',
    postalCode: '3061',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.6662,
    longitude: 144.9637,
  },
  priceRange: '$$',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Deluxe Caravans',
  url: 'https://deluxecaravans.com.au',
};

function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Deluxe Caravans, Australian Made Off Road, Family and Off Grid Caravans</title>
        <meta name="description" content="Family owned, Australian made caravans built in Campbellfield. Off road, family, and off grid ranges, structural warranty, nationwide repairers. Book a factory visit today." />
        <link rel="canonical" href="https://deluxecaravans.com.au/" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <div className="videocomponent">
        <Video />
      </div>
      <div className="videocomponent">
        <Promovid />
      </div>
      <div className="component component-fit">
        <Reviews />
      </div>
      <div className="component component-fit">
        <CarouselSection />
      </div>
      <div className="component home-desc-section">
        <HomeDesc />
      </div>
      <div className="component">
        <Gallery />
      </div>
      <div className="partnercomponent">
        <Partners />
      </div>
   
    </div>
  );
}

export default Home;
