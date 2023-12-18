import React from "react";
import Product from "./Product";
import { useCartContext } from "../context/cart-context";

const ProductList = () => {
  const { productsArray } = useCartContext();

  console.log("selam", productsArray);

  return (
    <div className="basis-10/12 border-4 border-red-900 ">
      <h1 className="text-center">ProductList</h1>
      <ul className=" flex flex-wrap gap-4 p-8 justify-center md:justify-start ">
        {productsArray.map((item) => {
          <li>{item.id}</li>;
        })}
        <Product />
      </ul>
    </div>
  );
};

export default ProductList;
