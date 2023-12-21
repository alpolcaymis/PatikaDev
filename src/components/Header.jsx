import React from "react";
import logo from "../assets/genie.gif";

const Header = (props) => {
  return (
    <header
      className={`${props.v2} basis-1/12 pb-8 flex justify-center items-center text-lg`}
    >
      <h1 className="font-bold text-3xl">GENIE</h1>

      <img className="slide p-5 pr-[1.3rem]" src={logo} />

      <h1 className="font-bold text-3xl">STORE</h1>
    </header>
  );
};

export default Header;
