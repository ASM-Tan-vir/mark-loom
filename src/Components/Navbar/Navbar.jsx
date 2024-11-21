import React from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 ">
      <div className="flex items-center text-[#171717] text-[30px] font-[600]">
        <img src={logo} alt="" />
        <p>shopper</p>
      </div>
      <div className="flex items-center">
        <ul className=" flex items-center gap-4 text-[20px] font-[500] text-[#626262]">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
