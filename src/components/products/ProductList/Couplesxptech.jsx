import React from "react";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "ECLIPSE 21' 6\"",
    // price: "$92,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse21couplesxptech",
  },
  {
    id: 2,
    name: "ECLIPSE 22'",
    // price: "$98,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse22couplesxptech",
  },
];

const Couplesxptech = React.memo(() => {
  return (
    <div className="productgrid-container">
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
