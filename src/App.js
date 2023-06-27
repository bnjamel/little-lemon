import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Booking from "./Pages/Booking";
import { AnimatePresence } from "framer-motion";
import Login from "./Pages/Login";


function App() {
  const location = useLocation();

  return (
    <>
      <div className="min-w-[300px]">
        <Nav />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;
