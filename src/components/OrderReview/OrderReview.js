import React, { useEffect, useState } from "react";
import fakeData from "../../resources/fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../resources/utilities/databaseManager";
import ShowReview from "../ShowReview/ShowReview";

const OrderReview = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const handleDelete = (productKey) => {
    console.log(productKey + "clciked");
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  return (
    <div>
      {cart.map((pd) => (
        <ShowReview handleDelete={handleDelete} cart={pd}></ShowReview>
      ))}
    </div>
  );
};

export default OrderReview;
