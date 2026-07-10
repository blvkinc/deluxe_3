import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";

const products = [
  {
    id: 1,
    name: "ECLIPSE 18'6\"",
    price: "$89,000",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse18couplesoffroad",
  },
  {
    id: 2,
    name: "ECLIPSE 21'6\"",
    price: "$96,900",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse21couplesoffroad",
  },
  {
    id: 3,
    name: "ECLIPSE 22'",
    price: "$98,900",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse22couplesoffroad",
  },
];

const Couplesoffroad = React.memo(() => {
  return (
    <div className="productgrid-container">
      <Helmet>
        <title>Couples Expedition Caravans | Eclipse Range | Deluxe Caravans</title>
        <meta name="description" content="Luxury off road caravans for couples — Eclipse range. Australian-made, composite frame, queen island bed, airbag suspension. 17 years family owned. Get a quote today." />
        <link rel="canonical" href="https://deluxecaravans.com.au/couplesoffroad" />
      </Helmet>
      <div className="productgrid-component">
        <h1 className="product-grid-heading">COUPLES EXPEDITION</h1>
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
