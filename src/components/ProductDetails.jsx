import { useCartContext } from "../context/cart-context";
import { useRef } from "react";

export const ProductDetails = () => {
  const { onCloseModal, foundArray } = useCartContext();
  const textAreaRef = useRef();
  const inputRef = useRef();

  const edit = () => {
    foundArray.description = textAreaRef.current.value;
    foundArray.category = inputRef.current.value;
  };

  return (
    <div className="w-80 h-fit p-4 border-2 border-teal-500 rounded-md ">
      <div>
        <b>id : {foundArray.id}</b>
      </div>
      <div className="flex">
        <label className="mr-auto" htmlFor="category">
          category :{" "}
        </label>
        <input
          ref={inputRef}
          id="category"
          defaultValue={foundArray.category}
          className=" font-semibold"
        />
      </div>
      <div>
        <label htmlFor="story">Description: </label>
      </div>
      <div className="text-right">
        <textarea
          defaultValue={foundArray.description}
          className="text-left w-auto h-48 border-l-4 border-l-teal-200"
          ref={textAreaRef}
          id="story"
          rows="5"
          cols="33"
        />
      </div>
      <button
        className="p-2 px-6 border-2 border-teal-500 rounded-md bg-yellow-300 hover:bg-black hover:text-white "
        onClick={() => {
          onCloseModal(), edit();
        }}
      >
        Save
      </button>
    </div>
  );
};
