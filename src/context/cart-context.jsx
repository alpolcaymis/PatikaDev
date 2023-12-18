import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [city, setCity] = useState("istanbul");
  const [list, setList] = useState([]);

  let DATA_ARRAY_FROM_API = [];

  let url = `https://fakestoreapi.com/products`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      console.log(data);
      DATA_ARRAY_FROM_API = data;
    });
  }, [url]);

  const ctxValue = {
    city,
    setCity,
    list,
    setList,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};
