import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [foundArray, setFoundArray] = useState([]);

  function onCloseModal() {
    setModalIsOpen(false);
  }
  function openModal() {
    setModalIsOpen(true);
  }

  const [productsArray, setProductsArray] = useState([]);
  let url = `https://fakestoreapi.com/products`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      setProductsArray(data);
      console.log("fetch fn worked!");
    });
  }, [url]);

  const filterArray = (productID) => {
    const filteredArray = productsArray.filter((item) => item.id !== productID);
    setProductsArray(filteredArray);
  };

  const findInArray = (productID) => {
    setFoundArray(productsArray.find((item) => item.id === productID));
  };

  return (
    <CartContext.Provider
      value={{
        productsArray,
        setProductsArray,
        filterArray,
        findInArray,
        modalIsOpen,
        openModal,
        onCloseModal,
        foundArray,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
