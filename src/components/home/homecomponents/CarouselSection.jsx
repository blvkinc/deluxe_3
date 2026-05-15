import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarouselSection.css';

const CarouselSection = () => {
  const [activeType, setActiveType] = useState('offroad');
  const [currentSlide, setCurrentSlide] = useState(0);

  const caravanData = {
    offroad: [
      {
        name: "STORMBREAKER 18'6\"",
        price: '$89,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/186.webp',
        link: '/stormbreaker18familyoffroad'
      },
      {
        name: "STORMBREAKER 19'6\"",
        price: '$92,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/stormbreaker19familyoffroad'
      },
      {
        name: "STORMBREAKER 21'6\"",
        price: '$94,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/216.webp',
        link: '/stormbreaker21familyoffroad'
      },
      {
        name: "STORMBREAKER 23'11\"",
        price: '$96,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/2311.webp',
        link: '/stormbreaker23familyoffroad'
      },
      {
        name: "RIPTIDE 20'",
        price: '$96,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
        link: '/riptide20familyoffroad'
      },
      {
        name: 'RIPTIDE 20\'6"',
        price: '$98,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
        link: '/riptide206familyoffroad'
      },
      {
        name: "RIPTIDE 22'",
        price: '$98,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
        link: '/riptide22familyoffroad'
      },
      {
        name: 'ECLIPSE 18\'6"',
        price: '$89,000',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/eclipse18couplesoffroad'
      },
      {
        name: 'ECLIPSE 21\'6"',
        price: '$96,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/eclipse21couplesoffroad'
      },
      {
        name: "ECLIPSE 22'",
        price: '$98,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/eclipse22couplesoffroad'
      }
    ],
    xptech: [
      {
        name: 'STORMBREAKER S186',
        price: '$129,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-header%5B2%5Dnewer.webp',
        link: '/stormbreaker18familyxptech'
      },
      {
        name: 'STORMBREAKER S196',
        price: '$132,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-header%5B2%5Dnewer.webp',
        link: '/stormbreaker19familyxptech'
      },
      {
        name: 'STORMBREAKER S216',
        price: '$134,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/stormbreaker21familyxptech'
      },
      {
        name: 'STORMBREAKER S2311',
        price: '$136,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/stormbreaker23familyxptech'
      },
      {
        name: 'RIPTIDE R22',
        price: '$138,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/riptide22familyxptech'
      },
      {
        name: 'RIPTIDE R20',
        price: '$136,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-header%5B2%5Dnewer.webp',
        link: '/riptide20familyxptech'
      },
      {
        name: 'RIPTIDE R206',
        price: '$138,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/riptide206familyxptech'
      },
      {
        name: 'ECLIPSE E18',
        price: '$129,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/eclipse18couplesxptech'
      },
      {
        name: 'ECLIPSE E216',
        price: '$136,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/eclipse21couplesxptech'
      },
      {
        name: 'ECLIPSE E22',
        price: '$138,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp',
        link: '/eclipse22couplesxptech'
      }
    ]
  };

 

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === caravanData[activeType].length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? caravanData[activeType].length - 1 : prev - 1
    );
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
    setCurrentSlide(0);
  };

  return (
    <div className="carousel-section">
      <div className="carousel-toggle">
        <button 
          className={`toggle-button ${activeType === 'offroad' ? 'active' : ''}`}
          onClick={() => handleTypeChange('offroad')}
        >
          OFF-ROAD
        </button>
        <button 
          className={`toggle-button ${activeType === 'xptech' ? 'active' : ''}`}
          onClick={() => handleTypeChange('xptech')}
        >
          XP-TECH
        </button>
      </div>

      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-content">
          {caravanData[activeType].map((caravan, index) => (
            <Link
              to={caravan.link}
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
            >
              <img src={caravan.image} alt={caravan.name} />
              <div className="carousel-info">
                <h3>{caravan.name}</h3>
                <p> {caravan.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="carousel-dots">
        {caravanData[activeType].map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection; 