import React from "react";
import Logo from "../assets/icons/Logo.svg";
import Burger from "../assets/icons/🦆 icon _hamburger menu.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="py-4 fixed w-full bg-white min-w-[300px] z-10 shadow-lg">
      <div className="container m-auto px-4 sm:px-0 flex sm:flex-col md:flex-row justify-between sm:items-center">
        <div className="logo">
          <img src={Logo} className="min-w-[120px]" alt="little lemon logo" />
        </div>
        <ul className="hidden sm:flex text-[14px] md:text-[16px]">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <a href="#">About</a>
          </li>
          <li className="mx-4">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="mx-4">
            <a href="#">Reservations</a>
          </li>
          <li className="mx-4">
            <a href="#">Order Online</a>
          </li>
          <li className="mx-4">
            <a href="#">Login</a>
          </li>
        </ul>
        <button className="sm:hidden">
          <img src={Burger} className="max-w-[25px] " alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
