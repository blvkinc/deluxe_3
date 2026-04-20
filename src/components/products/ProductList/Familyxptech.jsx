import React from "react";
import { Link } from "react-router-dom";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";

const productstormbreaker = [
  {
    id: 1,
    name: "S186",
    price: "FULL OFF-ROAD: $129,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-header%5B2%5Dnewer.webp",
    link: "/stormbreaker18familyxptech",
  },
  {
    id: 2,
    name: "S196",
    price: "FULL OFF-ROAD: $132,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-header%5B2%5Dnewer.webp",
    link: "/stormbreaker19familyxptech",
  },
  {
    id: 3,
    name: "S216",
    price: "FULL OFF-ROAD: $134,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/stormbreaker21familyxptech",
  },
  {
    id: 4,
    name: "S2311",
    price: "FULL OFF-ROAD: $136,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/stormbreaker23familyxptech",
  },
];

const productriptide = [
  {
    id: 1,
    name: "R20'",
    price: "FULL OFF-ROAD: $136,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/riptide20familyxptech",
  },
  {
    id: 2,
    name: "R20'6\"",
    price: "FULL OFF-ROAD: $138,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/riptide206familyxptech",
  },
  {
    id: 3,
    name: "R22'",
    price: "FULL OFF-ROAD: $138,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/riptide22familyxptech",
  },
];

const Familyxptech = React.memo(() => {
  return (
    <div className="productgrid-container">
      <div className="productgrid-component">
        <h1 className="product-grid-heading">FAMILY XP-TECH</h1>
        <h2 className="product-grid-subheading">STORMBREAKER</h2>
        <div className="product-grid">
          {productstormbreaker.map((productstormbreaker) => (
            <Link to={productstormbreaker.link} key={productstormbreaker.id}>
              <div className="product-card">
                <img
                  src={productstormbreaker.image}
                  alt={productstormbreaker.name}
                />
                <p>
                  {productstormbreaker.name} | {productstormbreaker.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="productgrid-component">
        <h2 className="product-grid-subheading">RIPTIDE</h2>
        <div className="product-grid">
          {productriptide.map((productriptide) => (
            <Link to={productriptide.link} key={productriptide.id}>
              <div className="product-card">
                <img src={productriptide.image} alt={productriptide.name} />
                <p>
                  {productriptide.name} | {productriptide.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Familyxptech;