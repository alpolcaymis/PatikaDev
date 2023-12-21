import React from "react";
import Header from "./Header";

const Footer = () => {
  return (
    <footer className="basis-2/12 flex justify-center mt-60 items-center text-xs font-light py-1 bg-black text-white border-t-2 border-stone-600 relative">
      &copy; Copyright 2023 Alp Olcay Mis
      <Header v2="header-v2" />
    </footer>
  );
};

export default Footer;
