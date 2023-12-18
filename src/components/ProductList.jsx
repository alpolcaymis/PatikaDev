import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <div className="basis-10/12 border-4 border-red-900 ">
      <h1 className="text-center">ProductList</h1>
      <ul className=" flex flex-wrap gap-4 p-8 justify-center md:justify-start ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </div>
  );
};

export default ProductList;
