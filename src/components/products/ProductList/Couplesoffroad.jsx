import React from "react";
import { Link } from "react-router-dom";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";

const products = [
  {
    id: 1,
    name: "ECLIPSE - 21`6FT",
    price: "$92,900",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse21couplesoffroad",
  },
  {
    id: 2,
    name: "ECLIPSE - 22FT",
    price: "$98,900",
    image: "",
    link: "/eclipse22couplesoffroad",
  },
];

const Couplesoffroad = React.memo(() => {
  return (
    <div className="productgrid-container">
      <div className="productgrid-component">
        <h1 className="product-grid-heading">COUPLES OFF-ROAD</h1>
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
export default Couplesoffroad;
