import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import {motion} from "framer-motion"


function Login() {


  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.2 } }}
    exit={{ opacity: 0, transition: { duration: 0.2 } }}
    className="pt-[140px]">
    <LoginForm />
  </motion.div>);
}

export default Login;
