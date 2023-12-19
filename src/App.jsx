import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/cart-context";
import Modal from "./components/Modal";
import { ProductDetails } from "./components/ProductDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartContextProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000, //
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Modal>
        <ProductDetails />
      </Modal>
      <main className="app-container flex flex-col min-h-screen justify-between ">
        <Header />
        <ProductList />
        <Footer />
      </main>
    </CartContextProvider>
  );
}

export default App;
