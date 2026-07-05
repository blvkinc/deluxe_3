import React from "react";
import { Helmet } from "react-helmet";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "ECLIPSE E18",
    price: "$129,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse18couplesxptech",
  },
  {
    id: 2,
    name: "ECLIPSE E216",
    price: "$136,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse21couplesxptech",
  },
  {
    id: 3,
    name: "ECLIPSE E22",
    price: "$138,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse22couplesxptech",
  },
];

const Couplesxptech = React.memo(() => {
  return (
    <div className="productgrid-container">
      <Helmet>
        <title>Couples XP-Tech Caravans | Eclipse Range | Deluxe Caravans</title>
        <meta name="description" content="Off grid doesn't mean roughing it. Eclipse XP-TECH — 400Ah lithium, 6 solar panels, Dometic fridge &amp; IBIS 4 aircon. Luxury couples caravans, built in Australia." />
        <link rel="canonical" href="https://deluxecaravans.com.au/couplesxptech" />
      </Helmet>
      <div className="productgrid-component">
        <h1 className="product-grid-heading">Couples XP-TECH</h1>
        <h2 className="product-grid-subheading">Eclipse</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Link to={product.link} key={product.id}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <p>
                  {product.name} | {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Couplesxptech;
