import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-[72px]"
    >
      <Header />
      <Main />
    </motion.div>
  );
}

export default Home;
