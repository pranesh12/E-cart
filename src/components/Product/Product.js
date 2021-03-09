import React, { useContext } from "react";
import { DataProvider } from "../Home/Home";
import ShowProduct from "../ShoProduct/ShowProduct";

const Product = () => {
  const { data, handleCart } = useContext(DataProvider);
  console.log(data);

  return (
    <div>
      <div className="row">
        <div className="">
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
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
    </div>
  );
};

export default Product;
