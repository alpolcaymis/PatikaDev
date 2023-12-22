import { useRef } from "react";
import { useCartContext } from "../context/cart-context";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";

export const ProductDetails = () => {
  const { onCloseModal, foundArray } = useCartContext();

  const textAreaRef = useRef();
  const inputRef = useRef();

  const edit = () => {
    foundArray.description = textAreaRef.current.value;
    foundArray.category = inputRef.current.value;
  };

  return (
    <div className="w-80 h-fit px-4 py-4 relative  bg-slate-200  rounded-sm overflow-hidden">
      <div className="id text-xs text-center pb-4 bg">
        <b>id : {foundArray.id}</b>
      </div>

      <div className="category flex ">
        <label className="text-sm" htmlFor="category">
          category :
        </label>
        <input
          ref={inputRef}
          id="category"
          defaultValue={foundArray.category}
          className="text-right bg-slate-200 focus:bg-white flex-1 font-semibold tracking-widest"
        />
      </div>

      <div className="Description">
        <label className="text-sm" htmlFor="description">
          Description:{" "}
        </label>
        <div className="text-right py-2">
          <textarea
            defaultValue={foundArray.description.split(".").join("\n")}
            className="text-left border-l-4 border-l-slate-400  mr-2 text-sm"
            ref={textAreaRef}
            id="description"
            rows="13"
            cols="33"
          />
        </div>
      </div>

      <button
        className="py-2 px-6 mr-2 mt-4 border-black border-[1px] rounded-md bg-[#0099cc] hover:bg-black hover:text-[#0099cc] active:text-black active:bg-gray-200 "
        onClick={() => {
          onCloseModal(), edit(), toast.success("Saved!");
        }}
      >
        Save
      </button>

      <button
        className="p-2 px-6 hover:bg-white hover:font-bold"
        onClick={() => {
          onCloseModal(), toast.error("Not Saved!");
        }}
      >
        Close
      </button>
      <IoCloseOutline
        size={40}
        className="absolute right-0 top-0 cursor-pointer hover:text-red-500"
        onClick={() => {
          onCloseModal(), toast.error("Not Saved!");
        }}
      />
    </div>
  );
};
