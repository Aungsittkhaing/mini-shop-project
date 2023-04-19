import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ pj }) => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          {pj.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
