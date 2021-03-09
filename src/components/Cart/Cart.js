import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  let cart = props.cartData;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = Number((total + cart[i].price).toFixed(3));
  }

  let shipping = 0;
  if (total > 35) {
    shipping = 50;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  let vat = 0.1;
  let totalVat = Number((total * vat).toFixed(3));

  let grandTotal = Math.floor(Number((total + vat + shipping).toFixed(3)));

  return (
    <div className="text-center">
      <h1 className="fs-3">Order's Summary</h1>
      <h4 className="fw-3">Items ordered {cart.length}</h4>

      <h6>Total price ${total}</h6>
      <p>Shipping cost ${shipping}</p>
      <p className="border-bottom">Vat: ${totalVat}</p>
      <h6>Total: ${grandTotal}</h6>
      <Link to="/order">
        <button className="btn btn-primary">Order-Review</button>
      </Link>
    </div>
  );
};

export default Cart;
