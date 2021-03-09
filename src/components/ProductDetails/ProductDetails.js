import React, { useState } from "react";
import { useParams } from "react-router";
import fakeData from "../../resources/fakeData";
import ShowProduct from "../ShoProduct/ShowProduct";

const ProductDetails = () => {
  const { productKey } = useParams();
  const data = fakeData.find((pd) => pd.key === productKey);
  return (
    <div>
      <h1>Product Details {productKey}</h1>
      <ShowProduct data={data}></ShowProduct>
    </div>
  );
};

export default ProductDetails;
