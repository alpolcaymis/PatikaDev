import { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastCreatedTicketId, setLastCreatedTicketId] = useState("");

  return (
    <CartContext.Provider
      value={{
        setIsLoggedIn,
        isLoggedIn,
        setLastCreatedTicketId,
        lastCreatedTicketId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
