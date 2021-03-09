import React from "react";

const ShowReview = (props) => {
  const { name, img, quantity, price, star, key } = props.cart;
  const handleDelete = props.handleDelete;
  return (
    <div>
      <div className="col-8">
        <div className="row border mt-2 mb-2  pb-2">
          <p className="f-1 bold"> {name} </p>
          <img src={img} alt={name} style={{ width: "18rem" }} />
          <p>Quantity {quantity}</p>
          <p>Price : ${price}</p>
          <button onClick={() => handleDelete(key)} className="btn btn-danger">
            Remove Item
          </button>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default ShowReview;
