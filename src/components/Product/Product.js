import React, { useState } from "react";
import fakeData from "../../resources/fakeData";
import Cart from "../Cart/Cart";
import ShowProduct from "../ShoProduct/ShowProduct";

const Product = () => {
  const sliceData = fakeData.slice(0, 40);
  const [data, setData] = useState(sliceData);
  const [cart, setCart] = useState([]);

  //Handle Cart
  const handleCart = (product) => {
    // const addedProduct = data.filter((pd) => pd.key === productKey);
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };

  return (
    <div>
      <div className="row ">
        <div className="col-10 border-end border-2">
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
        <div className="col-2">
          <Cart cartData={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Product;
