import React from "react";
import { moneybag } from "../assets/index";

const Header = () => {
  return (
    <header>
      <img
        className="w-40 h-40 mx-auto "
        src={moneybag}
        alt="Money Bag Symbol"
      />
      <h1 className="text-3xl font-bold text-white">Investment Calculator</h1>
    </header>
  );
};

export default Header;
