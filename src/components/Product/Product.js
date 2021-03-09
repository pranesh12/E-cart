import React, { useContext } from "react";
import { DataProvider } from "../Home/Home";
import ShowProduct from "../ShoProduct/ShowProduct";
import image from "../../resources/images/raphael-lovaski-HVmQdrB-iFw-unsplash.jpg";
import "./Product.css";
const Product = () => {
  const { data, handleCart } = useContext(DataProvider);

  return (
    <div>
      <div className="row">
        <img className="img-fluid image" src={image} alt="" />
      </div>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {data.map((pd) => (
            <ShowProduct
              handleCart={handleCart}
              key={pd.key}
              data={pd}
            ></ShowProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
