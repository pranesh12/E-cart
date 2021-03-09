import React, { createContext, useState } from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Product from "../Product/Product";
import OrderReview from "../OrderReview/OrderReview";
import ProductDetails from "../ProductDetails/ProductDetails";
import fakeData from "../../resources/fakeData";
import { addToDatabaseCart } from "../../resources/utilities/databaseManager";
export const DataProvider = createContext();

const Home = () => {
  const sliceData = fakeData.slice(0, 40);
  const [data, setData] = useState(sliceData);
  const [cart, setCart] = useState([]);

  //Handle Cart
  const handleCart = (product) => {
    // const addedProduct = data.filter((pd) => pd.key === productKey);
    const newCart = [...cart, product];

    const findCard = newCart.filter((pd) => pd.key === product.key);
    const count = findCard.length;
    addToDatabaseCart(product.key, count);
    setCart(newCart);
  };
  return (
    <div className="container">
      <DataProvider.Provider
        value={{ data, cart, setCart, setData, handleCart }}
      >
        <Router>
          <Nav></Nav>
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
