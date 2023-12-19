import { useCartContext } from "../context/cart-context";
import { useRef } from "react";
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
    <div className="w-80 h-fit px-4 py-8 relative  bg-slate-300  rounded-sm overflow-hidden">
      <div className="id text-xs text-center pb-4 bg">
        <b>id : {foundArray.id}</b>
      </div>

      <div className="category flex ">
        <label className="text-sm" htmlFor="category">
          category :{" "}
        </label>
        <input
          autofocus="false"
          ref={inputRef}
          id="category"
          defaultValue={foundArray.category}
          className="text-right focus:bg-slate-300"
        />
      </div>

      <div className="Description">
        <label className="text-sm" htmlFor="story">
          Description:{" "}
        </label>
        <div className="text-right py-2">
          <textarea
            defaultValue={foundArray.description}
            className="text-left  border-l-4 border-l-slate-400 overflow-hidden mr-2 text-xs"
            ref={textAreaRef}
            id="story"
            rows="7"
            cols="33"
          />
        </div>
      </div>

      <button
        className="p-2 px-6 mr-2 border-2 border-slate-400 rounded-md bg-yellow-300 hover:bg-stone-700 hover:text-white "
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
