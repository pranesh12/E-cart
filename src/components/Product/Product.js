import React, { useContext, useState } from "react";
import fakeData from "../../resources/fakeData";
import { addToDatabaseCart } from "../../resources/utilities/databaseManager";
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
    const findCard = newCart.filter((pd) => pd.key === product.key);
    const count = findCard.length;
    addToDatabaseCart(product.key, count);
    setCart(newCart);
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
