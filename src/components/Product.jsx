import React from "react";
import { useCartContext } from "../context/cart-context";
import toast from "react-hot-toast";

const Product = ({ item, filterArray }) => {
  const { setModalIsOpen, openModal, findInArray } = useCartContext();
  return (
    <>
      {item && (
        <li
          className="border-2 border-yellow-300 
      w-[200px] min-h-fit  overflow-hidden p-2 "
        >
          <img src={item.image} alt="" className="mx-auto w-full" />
          <h2>{item.title}</h2>
          <div>
            price : <b>{item.price} €</b>
          </div>

          <div className="mt-2 relative">
            <button
              className="px-4 py-1 bg-slate-50 text-slate-900 border-slate-900 border-2 "
              onClick={() => {
                openModal(), findInArray(item.id);
              }}
            >
              Edit
            </button>
            <button
              className="border-2 px-2 py-1 bg-slate-800 text-slate-50 absolute right-0"
              onClick={() => (
                filterArray(item.id), toast.success("Successfully Deleted")
              )}
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default Product;
