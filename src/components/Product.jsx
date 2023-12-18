import React from "react";
import product_IMG from "../assets/p_IMG.jpg";

const Product = () => {
  return (
    <div
      className="border-2 border-yellow-300 
  w-[200px] min-h-fit  overflow-hidden p-2 "
    >
      <img src={product_IMG} alt="" className="mx-auto w-full" />
      <h2>title</h2>
      <div>
        price :<b>100 €</b>
      </div>
      <div className="mt-2 relative">
        <button className="px-4 py-1 bg-slate-50 text-slate-900 border-slate-900 border-2 ">
          Edit
        </button>
        <button className="border-2 px-2 py-1 bg-slate-800 text-slate-50 absolute right-0">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
