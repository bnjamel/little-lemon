import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

const Home = lazy(() => import("./Pages/Home"));
const Menu = lazy(() => import("./Pages/Menu"));
const Login = lazy(() => import("./Pages/Login"));
const Booking = lazy(() => import("./Pages/Booking"));
const Footer = lazy(() => import("./Components/Footer"));
const Nav = lazy(() => import("./Components/Nav"));

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="min-w-[300px]">
          <Suspense fallback={<div>Loading...</div>}>
            <Nav />
          </Suspense>
          <AnimatePresence>
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/menu"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Menu />
                  </Suspense>
                }
              />
              <Route
                path="/booking"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Booking />
                  </Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
