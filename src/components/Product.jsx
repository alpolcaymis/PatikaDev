import React from "react";
import { useCartContext } from "../context/cart-context";
import toast from "react-hot-toast";
import "../index.css";
import { CiBookmarkRemove, CiCircleRemove } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
const Product = ({ item, filterArray }) => {
  const { setModalIsOpen, openModal, findInArray } = useCartContext();
  return (
    <>
      {item && (
        <li
          className=" 
        w-[300px] h-[450px] mt-2 rounded-sm  bg-white"
        >
          <div
            className="photoArea w-[300px] h-[400px]  opacity-80 hover:opacity-100 cursor-pointer p-[0.2rem] 
          "
            onClick={() => {
              openModal(), findInArray(item.id);
            }}
          >
            <img
              src={item.image}
              alt=""
              className="w-[300px] h-[400px] object-contain "
            />
          </div>
          <div className="details mt-2 w-[300px] h-[100px] flex ">
            <div className="texts mr-auto overflow-hidden">
              <div className="title text-xs mb-1 ">
                <p className="truncate ...">{item.title}</p>
              </div>
              <div className="prices flex  items-center">
                <div className="price text-xs font-bold line-through mr-2">
                  <b>{parseInt(item.price, 10) * 3} €</b>
                </div>
                <div className="price text-lg font-light  text-red-500 ">
                  <b>{item.price} €</b>
                </div>
              </div>
            </div>
            <div className="buttons">
              {/* <div className="edit_button"></div> IMG'a taşındı */}
              <div className="delete_button">
                <button
                  className="px-1 py-2  "
                  onClick={() => (
                    filterArray(item.id), toast.success("Successfully Deleted")
                  )}
                >
                  <CiCircleRemove size={25} />
                </button>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default Product;
