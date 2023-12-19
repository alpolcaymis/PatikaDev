import { useCartContext } from "../context/cart-context";

import toast from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";

const Product = ({ item, filterArray }) => {
  const { openModal, findInArray } = useCartContext();

  return (
    <>
      {item && (
        <li className="w-[300px] h-[450px] mt-2 rounded-sm  bg-white ">
          <section
            className="photoArea w-[300px] h-[400px]  opacity-90 hover:opacity-100 cursor-pointer p-[0.2rem] border-b-0 border-[0.25px] transition duration-1000  hover:ease-out"
            onClick={() => {
              openModal(), findInArray(item.id);
            }}
          >
            <img
              src={item.image}
              alt=""
              className="w-[300px] h-[400px] object-contain transition duration-1000 hover:scale-105"
            />
          </section>
          <section className="details mt-2 w-[300px] h-[100px] flex">
            <div className="texts mr-auto overflow-hidden">
              <div className="title text-xs  mb-1 tracking-wide">
                <p className="truncate ...">{item.title}</p>
              </div>
              <div className="prices flex items-center">
                <div className="price text-xs font-bold line-through mr-2">
                  <b>{parseInt(item.price, 10) * 3} €</b>
                </div>
                <div className="price text-lg font-light  text-red-500 ">
                  <b>{item.price} €</b>
                </div>
              </div>
            </div>
            <div className="delete_button">
              <button
                className="py-2 pt-0 pb-2  "
                onClick={() => (
                  filterArray(item.id), toast.success("Successfully Deleted")
                )}
              >
                <CiCircleRemove
                  size={26}
                  className="hover:bg-black hover:text-white rounded-full"
                />
              </button>
            </div>
          </section>
        </li>
      )}
    </>
  );
};

export default Product;
