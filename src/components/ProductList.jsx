import React from "react";
import Product from "./Product";
import { useCartContext } from "../context/cart-context";

const ProductList = () => {
  const { productsArray, filterArray } = useCartContext();

  console.log("ProductList.jsx -> productsArray", productsArray);

  return (
    <div className="basis-10/12 border-4 border-red-900 ">
      <h1 className="text-center">ProductList</h1>
      <ul className=" flex flex-wrap gap-4 p-8 justify-center md:justify-start ">
        {productsArray.map((item) => {
          return (
            <Product key={item.id} item={item} filterArray={filterArray} />
          );
        })}
        <Product />
      </ul>
    </div>
  );
};

export default ProductList;
