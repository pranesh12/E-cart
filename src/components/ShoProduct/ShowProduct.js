import React from "react";
import { Link } from "react-router-dom";
const ShowProduct = (props) => {
  const { img, key, name, price, star, seller, shipping, stock } = props.data;

  return (
    <div>
      <div className="card lh-1 p-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <Link to={`/product/${key}`}>
            <h6 className="card-title lh-1">{name}</h6>
          </Link>
          <p>${price}</p>
          <p>Shipping cost ${shipping}</p>
          <p>{seller} </p>
          <p>⭐ </p>

          <p>Only {stock} left in the Stock</p>
          <button
            onClick={() => props.handleCart(props.data)}
            className="btn btn-warning text-white"
          >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
