import React from "react";

const Cart = (props) => {
  let cart = props.cartData;

  console.log(cart);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = Number((total + cart[i].price).toFixed(3));
  }
  Number(total.toFixed(4));
  let shipping = 0;
  if (total > 1 && total <= 20) {
    shipping = 10;
  } else if (total > 20 && total <= 100) {
    shipping = 40;
  } else {
    shipping = 100;
  }

  let vat = 0.1;
  let totalVat = Number((total * vat).toFixed(3));
  let grandTotal = Number((total + vat + shipping).toFixed(3));

  return (
    <div className="text-center">
      <h1 className="fs-3">Order's Summary</h1>
      <h4 className="fw-3">Items ordered {cart.length}</h4>

      <h6>Total price ${total}</h6>
      <p>Shipping cost ${shipping}</p>
      <p className="border-bottom">Vat: ${totalVat}</p>
      <h6>Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
