import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Booking from "./Pages/Booking";

function App() {
  return (
    <>
      <div className="min-w-[300px]" id="smooth-scrollbar">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
