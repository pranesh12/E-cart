import React from "react";

const ShowProduct = (props) => {
  const { img, key, name, price, star, seller, shipping, stock } = props.data;
  const handleCart = props.handleCart;

  return (
    <div>
      <div className="card lh-1 p-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>${price}</p>
          <p>Shipping cost ${shipping}</p>
          <p>{seller} </p>
          <p>⭐ </p>

          <p>Only {stock} left in the Stock</p>
          <button
            onClick={() => handleCart(key)}
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
