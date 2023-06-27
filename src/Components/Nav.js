import React from "react";
import Logo from "../assets/icons/Logo.svg";
import Burger from "../assets/icons/🦆 icon _hamburger menu.svg";
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

function Nav() {
  return (
    <nav className="py-4 fixed w-full bg-white min-w-[300px] z-10 shadow-lg">
      <div className="container m-auto px-4 sm:px-0 flex sm:flex-col md:flex-row justify-center sm:justify-between sm:items-center">
        <div className="logo">
          <img src={Logo} className="min-w-[120px]" alt="little lemon logo" />
        </div>
        <ul className="hidden sm:flex text-[14px] md:text-[16px]">
          <li className="mx-4">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold border-b text-[#495E57]"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <a href="#">About</a>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold border-b text-[#495E57]"
                  : ""
              }
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold border-b text-[#495E57]"
                  : ""
              }
              to="/booking"
            >
              Reservations
            </NavLink>
          </li>
          <li className="mx-4">
            <a href="#">Order Online</a>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold border-b text-[#495E57]"
                  : ""
              }
              to="/login"
            >
              login
            </NavLink>
          </li>
        </ul>
      </div>
      <section className="sm:hidden">
        <ul className="fixed left-0 bottom-0 z-50 flex bg-slate-50 w-full justify-between py-2 px-2 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]">
          <li className="mx-4 p-1 rounded-md transition ease-in-out hover:bg-slate-200 text-[14px] flex-nowrap">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending flex justify-center items-center flex-col"
                  : isActive
                  ? "font-semibold border-b p-1 text-[#495E57] rounded-md transition ease-in-out bg-slate-200 flex justify-center items-center flex-col"
                  : "flex justify-center p-1 items-center flex-col"
              }
              to="/"
            >
              <HomeOutlinedIcon className="text-[#495E57]" />
              Home
            </NavLink>
          </li>
          <li className="mx-4 p-1 rounded-md transition ease-in-out hover:bg-slate-200 text-[14px] flex-nowrap">
            <a href="#" className="flex justify-center items-center flex-col">
              <InfoOutlinedIcon className="text-[#495E57]" />
              About
            </a>
          </li>
          <li className="mx-4 p-1 rounded-md transition ease-in-out hover:bg-slate-200 text-[14px] flex-nowrap">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending flex justify-center items-center flex-col"
                  : isActive
                  ? "font-semibold border-b p-1 text-[#495E57] rounded-md transition ease-in-out bg-slate-200 flex justify-center items-center flex-col"
                  : "flex justify-center p-1 items-center flex-col"
              }
              to="/menu"
            >
              <RestaurantMenuOutlinedIcon className="text-[#495E57]" />
              Menu
            </NavLink>
          </li>
          <li className="mx-4 p-1 rounded-md transition ease-in-out hover:bg-slate-200 text-[14px] flex-nowrap">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending flex justify-center items-center flex-col"
                  : isActive
                  ? "font-semibold border-b p-1 text-[#495E57] rounded-md transition ease-in-out bg-slate-200 flex justify-center items-center flex-col"
                  : "flex justify-center p-1 items-center flex-col"
              }
              to="/booking"
            >
              <EventSeatOutlinedIcon className="text-[#495E57]" />
              Reservations
            </NavLink>
          </li>
          <li className="mx-4 p-1 rounded-md transition ease-in-out hover:bg-slate-200 text-[14px] flex-nowrap">
            <a href="#" className="flex justify-center items-center flex-col">
              <ShoppingBasketOutlinedIcon className="text-[#495E57]" />
              Order
            </a>
          </li>
          <li className="mx-4 p-1 rounded-md transition ease-in-out hover:bg-slate-200 text-[14px] flex-nowrap">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending flex justify-center items-center flex-col"
                  : isActive
                  ? "font-semibold border-b p-1 text-[#495E57] rounded-md transition ease-in-out bg-slate-200 flex justify-center items-center flex-col"
                  : "flex justify-center p-1 items-center flex-col"
              }
              to="/login"
            >
              <AccountBoxOutlinedIcon className="text-[#495E57]" />
              Login
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
