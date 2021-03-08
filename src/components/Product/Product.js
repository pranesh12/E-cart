import React, { useEffect, useState } from "react";
import fakeData from "../../resources/fakeData";
import Cart from "../Cart/Cart";
import ShowProduct from "../ShoProduct/ShowProduct";

const Product = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const sliceData = fakeData.slice(0, 40);
    setData(sliceData);
  }, []);

  //Handle Cart
  const handleCart = (productKey) => {
    console.log("clicked", productKey);
  };

  return (
    <div>
      <div className="row ">
        <div className="col-10 border-end border-2">
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            {data.map((pd) => (
              <ShowProduct
                handleCart={handleCart}
                key={pd.key}
                data={pd}
              ></ShowProduct>
            ))}
          </div>
        </div>
        <div className="col-2">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Product;
