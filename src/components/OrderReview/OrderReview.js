import React, { useContext, useEffect } from "react";
import fakeData from "../../resources/fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../resources/utilities/databaseManager";
import { DataProvider } from "../Home/Home";
import ShowReview from "../ShowReview/ShowReview";
import Cart from "../Cart/Cart";

const OrderReview = () => {
  const { cart, setCart } = useContext(DataProvider);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, [cart, setCart]);

  const handleDelete = (productKey) => {
    console.log(productKey + "clciked");
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  return (
    <div className="row">
      <div className="col-8">
        {cart.map((pd) => (
          <ShowReview handleDelete={handleDelete} cart={pd}></ShowReview>
        ))}
      </div>
      <div className="col-4">
        <Cart cartData={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
