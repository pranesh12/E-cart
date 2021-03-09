import React from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Product from "../Product/Product";
import OrderReview from "../OrderReview/OrderReview";
import ProductDetails from "../ProductDetails/ProductDetails";

const Home = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Home;
