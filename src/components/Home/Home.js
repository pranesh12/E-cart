import React, { createContext, useState } from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Product from "../Product/Product";
import OrderReview from "../OrderReview/OrderReview";
import ProductDetails from "../ProductDetails/ProductDetails";
import fakeData from "../../resources/fakeData";
import {
  addToDatabaseCart,
  processOrder,
} from "../../resources/utilities/databaseManager";
import FinalOrder from "../FinalOrder/FinalOrder";
export const DataProvider = createContext();

const Home = () => {
  const sliceData = fakeData.slice(0, 40);
  const [data, setData] = useState(sliceData);
  const [cart, setCart] = useState([]);

  //Handle Cart
  const handleCart = (product) => {
    const newCart = [...cart, product];
    const findCard = newCart.filter((pd) => pd.key === product.key);
    const count = findCard.length;
    addToDatabaseCart(product.key, count);
    setCart(newCart);
  };
  const removeCart = (cart) => {
    processOrder(cart);
  };
  return (
    <div>
      <DataProvider.Provider
        value={{ data, cart, setCart, setData, handleCart, removeCart }}
      >
        <Router>
          <Nav className="sticky-top"></Nav>
          <Switch>
            <Route exact path="/">
              <Product></Product>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/order">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/finalOrder">
              <FinalOrder></FinalOrder>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </DataProvider.Provider>
    </div>
  );
};

export default Home;
