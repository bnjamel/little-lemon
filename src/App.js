import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Booking from "./Pages/Booking";
import { AnimatePresence } from "framer-motion";
// import {} from "framer-motion/dist/framer-motion"

function App() {
  const location = useLocation();

  return (
    <>
      <div className="min-w-[300px]" id="smooth-scrollbar">
        <Nav />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;
