import React from "react";
import { Link } from "react-router-dom";
import Gorilla from "../../resources/images/gerrila.gif";
import "./FinalOrder.css";
const FinalOrder = () => {
  return (
    <div className="gorilla mt-5 p-5">
      <div>
        <img src={Gorilla} alt="" />
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary mt-2">Back TO Home</button>
        </Link>
      </div>
    </div>
  );
};

export default FinalOrder;
