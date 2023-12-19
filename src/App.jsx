import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/cart-context";
import Modal from "./components/Modal";
import { ProductDetails } from "./components/ProductDetails";
import { ToastBar, Toaster } from "react-hot-toast";

function App() {
  return (
    <CartContextProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

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
