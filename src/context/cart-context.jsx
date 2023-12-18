import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onCloseModal() {
    setModalIsOpen(false);
  }
  function openModal() {
    setModalIsOpen(true);
    console.log("open modal çalıştı");
    console.log(modalIsOpen);
  }

  const [productsArray, setProductsArray] = useState([]);
  let url = `https://fakestoreapi.com/products`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      setProductsArray(data);
      console.log("Fetch Çalıştı");
    });
  }, [url]);

  const filterArray = (productID) => {
    const filteredArray = productsArray.filter((item) => item.id !== productID);
    console.log("productID", productID);
    setProductsArray(filteredArray);
    console.log("filteredArray", filteredArray);
  };

  return (
    <CartContext.Provider
      value={{
        productsArray,
        setProductsArray,
        filterArray,
        modalIsOpen,
        setModalIsOpen,
        openModal,
        onCloseModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
