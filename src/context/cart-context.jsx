import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [foundArray, setFoundArray] = useState([]); //It actually an object, not array. Rename it.

  const [foundTicketObj, setFoundTicketObj] = useState({
    id: "123",
    createdAt: "12/12/2023",
    name: "Apple",
    status: "new",
    note: "selam note yazacaksın aşko",
  });

  const [productsArray, setProductsArray] = useState([]);

  const [tickets, setTickets] = useState([
    {
      id: "123",
      createdAt: "12/12/2023",
      name: "Apple",
      status: "new",
    },
    {
      id: "567",
      createdAt: "24/24/2023",
      name: "Samsung",
      status: "open",
    },
    {
      id: "789",
      createdAt: "27/12/2023",
      name: "OnePlus",
      status: "closed",
    },
  ]);

  const filterArray = (productID) => {
    const filteredArray = productsArray.filter((item) => item.id !== productID);
    setProductsArray(filteredArray);
  };

  const findInArray = (productID) => {
    setFoundArray(productsArray.find((item) => item.id === productID));
  };
  const findInTickets = (ticketID) => {
    setFoundTicketObj(tickets.find((item) => item.id === ticketID));
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
        findInTickets,
        setFoundTicketObj,
        foundTicketObj,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// let url = `https://fakestoreapi.com/products`;

// useEffect(() => {
//   axios(url).then(({ data }) => {
//     setProductsArray(data);
//     console.log("fetch fn worked!");
//   });
// }, [url]);

// const ticket = ;
