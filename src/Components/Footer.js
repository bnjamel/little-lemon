import React from "react";
import FooterLogo from "../assets/icons/footer-logo.svg";

function Footer() {
  return (
    <footer className="mt-[10rem] md:mt-[8rem] bg-[#495E57] pb-20 pt-12">
      <div className="container m-auto p-10 md:flex flex-wrap justify-between">
      <div className="footer__logo flex justify-center">
        <a href="/">
          <img src={FooterLogo} alt="little lemon logo" />
        </a>
      </div>
      <div>
        <p className="font-bold mb-1 mt-4 text-[#F4CE14] text-[20px]">Navigate</p>
        <ul className="text-white text-[18px]">
          <li className="my-1">
            <a href="#">Home</a>
          </li>
          <li className="my-1">
            <a href="#">About</a>
          </li>
          <li className="my-1">
            <a href="#">Menu</a>
          </li>
          <li className="my-1">
            <a href="#">Reservations</a>
          </li>
          <li className="my-1">
            <a href="#">Order online</a>
          </li>
          <li className="my-1">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-1 mt-4 text-[#F4CE14] text-[20px]" >Contact</p>
        <ul className="text-white text-[18px]">
          <li className="my-1">Address</li>
          <li className="my-1">Phone Number</li>
          <li className="my-1">E-mail</li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-1 mt-4 text-[#F4CE14] text-[20px]">Social Media</p>
        <ul className="text-white text-[18px]">
          <li className="my-1">
            <a href="#">Facebook</a>
          </li>
          <li className="my-1">
            <a href="#">Instagram</a>
          </li>
          <li className="my-1">
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
