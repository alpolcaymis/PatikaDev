import React from "react";
import Product from "./Product";
import { useCartContext } from "../context/cart-context";
import demoLogo from "../assets/p_IMG.jpg";
import logo6 from "../assets/yonca.gif";

const ProductList = () => {
  const { productsArray, filterArray } = useCartContext();

  console.log("ProductList.jsx -> productsArray", productsArray);

  return (
    <div className="basis-10/12  ">
      <h1 className="text-center">WishList</h1>
      {productsArray.length === 0 && <img src={demoLogo} className="mx-auto" />}

      <ul className=" flex flex-wrap gap-4 p-8 justify-center md:justify-center  ">
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
