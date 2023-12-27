import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [foundArray, setFoundArray] = useState([]); //It actually an object, not array. Rename it.

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [productsArray, setProductsArray] = useState([]);
  // let url = `https://fakestoreapi.com/products`;

  // useEffect(() => {
  //   axios(url).then(({ data }) => {
  //     setProductsArray(data);
  //     console.log("fetch fn worked!");
  //   });
  // }, [url]);

  const tickets = [
    {
      id: "123",
      createdAt: "12/12/2023",
      product: "Apple",
      status: "new",
    },
    {
      id: "567",
      createdAt: "24/24/2023",
      product: "Samsung",
      status: "open",
    },
    {
      id: "789",
      createdAt: "27/12/2023",
      product: "OnePlus",
      status: "closed",
    },
  ];
  const ticket = {
    id: "123",
    createdAt: "12/12/2023",
    product: "Apple",
    status: "new",
    note: "selam note yazacaksın aşko",
  };

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
        filterArray,
        findInArray,
        foundArray,
        setIsLoggedIn,
        isLoggedIn,
        tickets,
        ticket,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
