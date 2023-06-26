import React from "react";
import Card from "../Components/Card";

import Bruchetta from "../assets/imgs/bruchetta.svg";
import GreekSalad from "../assets/imgs/greek salad.jpg";
import LemonDessert from "../assets/imgs/lemon dessert.jpg";
import { Link } from "react-router-dom";
import MenuElements from "../Components/MenuElements";
import { motion } from "framer-motion";

function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="menu pt-[72px]"
    >
      <div className="bg-[#495E57]">
        <div className="container m-auto flex flex-col items-center text-center py-[2rem] sm:py-[3rem] md:py-[4rem] sm:flex-row sm:text-start sm:justify-between">
          <div className="text-center flex-1">
            <h1 className="text-[#F4CE14]  text-[28px] sm:text-[32px] md:text-[42px]">
              Welcome to Little Lemon Restaurant
            </h1>
            <h3 className="text-[#F2F2F2] text-[18px] sm:text-[26px] mb-3 sm:mb-6">
              Checkout Our Menu
            </h3>
          </div>
        </div>
      </div>

      <MenuElements />

      <div className="container m-auto">
        {/* Starters */}
        <section
          id="starters"
          className="specials mt-[1rem] sm:mt-[1rem] container m-auto"
        >
          <div className="specials__header flex justify-between mx-5 my-5">
            <h1 className="text-[21px] sm:text-[28px] md:text-[38px] font-bold">
              Starters
            </h1>
          </div>
          <div className="specials__cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Card
              img={GreekSalad}
              title={"Greek salad"}
              price={"$12.99"}
              description={
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
              }
            />
            <Card
              img={Bruchetta}
              title={"Bruchetta"}
              price={"$ 5.99"}
              description={
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              }
            />
            <Card
              img={LemonDessert}
              title={"Lemon Dessert"}
              price={"$ 5.00"}
              description={
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              }
            />
          </div>
        </section>

        {/* Soups and Salads */}
        <section
          id="soups"
          className="specials mt-[3rem] sm:mt-[6rem] container m-auto"
        >
          <div className="specials__header flex justify-between mx-5 my-5">
            <h1 className="text-[21px] sm:text-[28px] md:text-[38px] font-bold">
              Soups and Salads
            </h1>
          </div>
          <div className="specials__cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Card
              img={GreekSalad}
              title={"Greek salad"}
              price={"$12.99"}
              description={
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
              }
            />
            <Card
              img={Bruchetta}
              title={"Bruchetta"}
              price={"$ 5.99"}
              description={
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              }
            />
            <Card
              img={LemonDessert}
              title={"Lemon Dessert"}
              price={"$ 5.00"}
              description={
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              }
            />
          </div>
        </section>

        {/* Pasta */}
        <section
          id="pasta"
          className="specials mt-[3rem] sm:mt-[6rem] container m-auto"
        >
          <div className="specials__header flex justify-between mx-5 my-5">
            <h1 className="text-[21px] sm:text-[28px] md:text-[38px] font-bold">
              Pasta
            </h1>
          </div>
          <div className="specials__cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Card
              img={GreekSalad}
              title={"Greek salad"}
              price={"$12.99"}
              description={
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
              }
            />
            <Card
              img={Bruchetta}
              title={"Bruchetta"}
              price={"$ 5.99"}
              description={
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              }
            />
            <Card
              img={LemonDessert}
              title={"Lemon Dessert"}
              price={"$ 5.00"}
              description={
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              }
            />
          </div>
        </section>

        {/* Main Courses */}
        <section
          id="mainCourses"
          className="specials mt-[3rem] sm:mt-[6rem] container m-auto"
        >
          <div className="specials__header flex justify-between mx-5 my-5">
            <h1 className="text-[21px] sm:text-[28px] md:text-[38px] font-bold">
              Main Courses
            </h1>
          </div>
          <div className="specials__cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Card
              img={GreekSalad}
              title={"Greek salad"}
              price={"$12.99"}
              description={
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
              }
            />
            <Card
              img={Bruchetta}
              title={"Bruchetta"}
              price={"$ 5.99"}
              description={
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              }
            />
            <Card
              img={LemonDessert}
              title={"Lemon Dessert"}
              price={"$ 5.00"}
              description={
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              }
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Menu;
