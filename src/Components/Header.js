import React from "react";
import ResturantFood from "../assets/imgs/restauranfood.jpg";

function Header() {
  return (
    <header>
      <div className="header__left">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>
          <a href="#">Reserve a Table</a>
        </button>
      </div>
      <div className="header__right">
        <div className="header__imgContainer">
          <img src={ResturantFood} alt="" width={200} height={200} />
        </div>
      </div>
    </header>
  );
}

export default Header;
