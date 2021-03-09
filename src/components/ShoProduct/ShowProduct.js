import React from "react";
import { Link } from "react-router-dom";
import "./ShowProduct.css";
const ShowProduct = (props) => {
  const { img, key, name, price, star, seller, shipping, stock } = props.data;

  return (
    <div>
      <div className="card lh-1 shadow border-0  ">
        <img
          src={img}
          className="card-img-top center ps-2 pe-2"
          alt={name}
          style={{ width: "13rem" }}
        />
        <div className="card-body">
          <Link className="link" to={`/product/${key}`}>
            <h5 className="card-title  ">{name}</h5>
          </Link>
          <p>${price}</p>
          <p>Shipping cost ${shipping}</p>
          <p>{seller} </p>
          <p>⭐ </p>
          <button
            onClick={() => props.handleCart(props.data)}
            className="btn click"
          >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
