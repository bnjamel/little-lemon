import React from "react";
import ResturantFood from "../assets/imgs/restauranfood.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#495E57]">
      <div className="container m-auto flex flex-col items-center text-center p-[2rem] sm:flex-row sm:text-start sm:justify-between">
        <div className="header__left flex-1">
          <h1 className="text-[#F4CE14] text-[28px] sm:text-[32px] md:text-[62px]">
            Little Lemon
          </h1>
          <h3 className="text-[#F2F2F2] text-[16px] sm:text-[22px] mb-3 sm:mb-6">
            Chicago
          </h3>
          <p className="text-[#F2F2F2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#F4CE14] px-[1.5rem] py-[.5rem] my-[1rem] rounded-lg transition ease-in-out hover:scale-105">
            <Link to="/booking">Reserve a Table</Link>
          </button>
        </div>
        <div className="header__right flex-1">
          <div className="header__imgContainer sm:flex justify-center">
            <img
              src={ResturantFood}
              className="sm:translate-y-16 rounded-3xl w-[250px] sm:w-[300px] sm:ml-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
