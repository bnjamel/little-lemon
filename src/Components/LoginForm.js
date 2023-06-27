import React from "react";
import Logo from "../assets/icons/Logo.svg";
import littleLemon from "../assets/imgs/little-lemon.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/google.png"
import Facebook from "../assets/icons/facebook.png"

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validation = Yup.object().shape({
    email: Yup.string()
      .email("Incorrect E-mail")
      .required("E-mail is required"),
    password: Yup.string().required("enter a correct password"),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className=" flex justify-center items-center flex-col">
        <div className="container m-auto max-w-[500px] bg-[#495E57] rounded-lg px-5 pt-4 pb-12 drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
        <div className="logo border-b border-[#F4CE14] pb-4 flex justify-center flex-col items-center uppercase">
          <img src={littleLemon} className="min-w-[30px] w-[30px]" alt="little lemon logo" />
          <p className="text-[#F4CE14] text-[20px]">Little Lemon</p>
        </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={onSubmit}
            >
                <Form className="py-8">
                <div className="flex flex-col justify-start sm:mx-2">
                    <label
                    className="text-[18px] pb-1 pt-3 text-[#F4CE14] font-bold "
                    htmlFor="res-email"
                    >
                    E-mail
                    </label>
                    <Field
                    name="email"
                    className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                    placeholder="email"
                    type="email"
                    id="res-email"
                    />
                    <ErrorMessage
                    className="text-red-500"
                    name="email"
                    component={"span"}
                    />
                </div>
                <div className="flex flex-col justify-start sm:mx-2">
                    <label
                    className="text-[18px] pb-1 pt-3 text-[#F4CE14] font-bold "
                    htmlFor="res-password"
                    >
                    Password
                    </label>
                    <Field
                    name="password"
                    className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                    placeholder="password"
                    type="password"
                    id="res-password"
                    />
                    <ErrorMessage
                    className="text-red-500"
                    name="password"
                    component={"span"}
                    />
                </div>
                <Link to="#" className="underline text-blue-300">Forget Password?</Link>
                <div className="flex flex-col justify-start ">
                    <button
                    type="submit"
                    className="bg-[#F4CE14] transition ease-in-out mt-6 text-[#495E57] text-[16px] rounded-md py-2 px-4 cursor-pointer hover:scale-[1.01]"
                    >
                    Login
                    </button>
                </div>
                </Form>
            </Formik>
            <div className="text-slate-400 py-8 flex justify-center items-center">
                <div className="line flex-[.4] h-[1px] bg-slate-400"></div>
                <p className="flex-[.2] flex justify-center items-center">OR</p>
                <div className="line flex-[.4] h-[1px] bg-slate-400"></div>
            </div>
            <div>
                <Link to="#" className="flex justify-center items-center rounded-lg py-2 bg-white hover:bg-slate-100">
                    <img src={GoogleIcon} className="min-w-[30px] w-[30px] mr-5" alt="" />
                    <p>Login With Google</p>
                </Link>
                <Link to="#" className="flex justify-center items-center rounded-lg py-2 mt-3 bg-white hover:bg-slate-100">
                    <img src={Facebook} className="min-w-[30px] w-[30px] mr-5" alt="" />
                    <p>Login With Google</p>
                </Link>
            </div>
        </div>
    </section>
  );
}

export default LoginForm;
