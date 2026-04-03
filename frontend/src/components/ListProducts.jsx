import React from "react";

import Product from "./Product";

const ListProducts = ({products, page}) => {
  
//   console.log(products);
  return (
    <div className="d-flex justify-content-around gap-5 mt-5 flex-wrap">
      {products.map((prod) => (
        <Product key={prod._id} prod={prod} page={page} />
      ))}
    </div>
  );
};

export default ListProducts;
