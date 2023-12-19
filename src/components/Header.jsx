import React from "react";
import logo from "../assets/buble.gif";
import logo2 from "../assets/yonca.gif";
import logo4 from "../assets/hearts.gif";

const Header = () => {
  return (
    <header className="basis-1/12 py-4 border-slate-100 flex justify-center items-center text-lg ">
      {/* <img src={logo4} className="ml-9" /> */}

      <h1 className="font-bold text-3xl ml-9 ">ALP</h1>
      <img src={logo} />
      <h1 className="font-bold text-3xl">STORE</h1>
      {/* <img src={logo4} /> */}
    </header>
  );
};

export default Header;
