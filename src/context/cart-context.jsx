import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [productsArray, setProductsArray] = useState([]);
  let url = `https://fakestoreapi.com/products`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      console.log(data);
      setProductsArray(data);
      console.log("productsArray", productsArray);
    });
  }, [url]);

  return (
    <CartContext.Provider value={productsArray}>
      {children}
    </CartContext.Provider>
  );
};
