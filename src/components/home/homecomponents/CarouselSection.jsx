import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarouselSection.css';

const CarouselSection = () => {
  const [activeType, setActiveType] = useState('offroad');
  const [currentSlide, setCurrentSlide] = useState(0);

  const caravanData = {
    offroad: [
      {
        name: 'Stormbreaker 18\'6',
        price: '$89,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/186.webp',
        link: '/stormbreaker18familyoffroad'
      },
      {
        name: 'Stormbreaker 19\'6',
        price: '$92,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/stormbreaker19familyoffroad'
      },
      {
        name: 'Stormbreaker 21\'6',
        price: '$94,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/216.webp',
        link: '/stormbreaker21familyoffroad'
      },
      {
        name: 'Stormbreaker 23\'11',
        price: '$96,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/2311.webp',
        link: '/stormbreaker23familyoffroad'
      },
      {
        name: 'Riptide 20',
        price: '$96,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
        link: '/riptide20familyoffroad'
      },
      {
        name: 'Riptide 22',
        price: '$98,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
        link: '/riptide22familyoffroad'
      },
      {
        name: 'Eclipse 21 Couples',
        price: '$89,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/eclipse21couplesoffroad'
      },
      {
        name: 'Eclipse 22 Couples',
        price: '$92,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/eclipse22couplesoffroad'
      }
    ],
    xptech: [
      {
        name: 'Stormbreaker 18\'6 XP Tech',
        // price: '$129,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/186.webp',
        link: '/stormbreaker18familyxptech'
      },
      {
        name: 'Stormbreaker 19\'6 XP Tech',
        // price: '$132,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/stormbreaker19familyxptech'
      },
      {
        name: 'Stormbreaker 21\'6 XP Tech',
        // price: '$134,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/216.webp',
        link: '/stormbreaker21familyxptech'
      },
      {
        name: 'Stormbreaker 23\'11 XP Tech',
        // price: '$136,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/2311.webp',
        link: '/stormbreaker23familyxptech'
      },
      {
        name: 'Riptide 22 XP Tech',
        // price: '$138,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp',
        link: '/riptide22familyxptech'
      },
      {
        name: 'Eclipse 21 Couples XP Tech',
        // price: '$89,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/186.webp',
        link: '/eclipse21couplesxptech'
      },
      {
        name: 'Eclipse 22 Couples XP Tech',
        // price: '$92,900',
        image: 'https://deluxcaravan.b-cdn.net/assets/header/196.webp',
        link: '/eclipse22couplesxptech'
      }
    ]
  };

  const xptecCaravans = [
    {
      id: "stormbreaker23-familyxptech",
      name: "Stormbreaker 23 Family XP Tec",
      image: "https://deluxcaravan.b-cdn.net/assets/stormbreaker23-familyxptech/Stormbreaker23-Familyxptech-1.jpg",
      // price: "$89,990",
      link: "/products/stormbreaker23-familyxptech",
    },
    {
      id: "stormbreaker21-familyxptech",
      name: "Stormbreaker 21 Family XP Tec",
      image: "https://deluxcaravan.b-cdn.net/assets/stormbreaker21-familyxptech/Stormbreaker21-Familyxptech-1.jpg",
      // price: "$79,990",
      link: "/products/stormbreaker21-familyxptech",
    },
    {
      id: "stormbreaker19-familyxptech",
      name: "Stormbreaker 19 Family XP Tec",
      image: "https://deluxcaravan.b-cdn.net/assets/stormbreaker19-familyxptech/Stormbreaker19-Familyxptech-1.jpg",
      // price: "$69,990",
      link: "/products/stormbreaker19-familyxptech",
    },
    {
      id: "stormbreaker18-familyxptech",
      name: "Stormbreaker 18 Family XP Tec",
      image: "https://deluxcaravan.b-cdn.net/assets/stormbreaker18-familyxptech/Stormbreaker18-Familyxptech-1.jpg",
      price: "$64,990",
      link: "/products/stormbreaker18-familyxptech",
    },
    {
      id: "eclipse22-couplesxptech",
      name: "Eclipse 22 Couples XP Tec",
      image: "https://deluxcaravan.b-cdn.net/assets/eclipse22-couplesxptech/Eclipse22-Couplesxptech-1.jpg",
      // price: "$59,990",
      link: "/products/eclipse22-couplesxptech",
    },
    {
      id: "eclipse21-couplesxptech",
      name: "Eclipse 21 Couples XP Tec",
      image: "https://deluxcaravan.b-cdn.net/assets/eclipse21-couplesxptech/Eclipse21-Couplesxptech-1.jpg",
      // price: "$54,990",
      link: "/products/eclipse21-couplesxptech",
    },
  ];

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
          XP TECH
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
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection; 