import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/cart-context";
import Modal from "./components/Modal";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <CartContextProvider>
      <Modal>
        <ProductDetails />
      </Modal>
      <div className="flex flex-col  bg-slate-600  border border-8   border-slate-900 min-h-screen justify-between ">
        <Header />
        <ProductList />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
