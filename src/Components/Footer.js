import React from "react";
import FooterLogo from "../assets/icons/footer-logo.svg"

function Footer() {
  return <footer>
    <div className="footer__logo">
      <img src={FooterLogo} alt="little lemon logo" />
    </div>
    <div>
      <p>Navigate</p>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
    <div>
      <p>Contact</p>
      <ul>
        <li>Address</li> 
        <li>Phone Number</li>
        <li>E-mail</li>
      </ul>
    </div>
    <div>
      <p>Social Media</p>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </footer>;
}

export default Footer;
