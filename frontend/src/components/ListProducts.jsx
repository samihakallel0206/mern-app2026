import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ListProducts = () => {
  const products = useSelector((state) => state.productReducer.products);
//   console.log(products);
  return (
    <div className="d-flex justify-content-around gap-5 mt-5 flex-wrap">
      {products.map((prod) => (
        <Product key={prod._id} prod={prod} />
      ))}
    </div>
  );
};

export default ListProducts;
