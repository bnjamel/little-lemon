import React from "react";
import Card from "./Card";
import Bruchetta from "../assets/imgs/bruchetta.svg";
import GreekSalad from "../assets/imgs/greek salad.jpg";
import LemonDessert from "../assets/imgs/lemon dessert.jpg";

import MarioAndAdrianA from "../assets/imgs/Mario and Adrian A.jpg";
import MarioAndAdrianB from "../assets/imgs/Mario and Adrian b.jpg";
import Testimony from "./Testimony";
import Person1 from "../assets/imgs/person1.jpg";
import Person2 from "../assets/imgs/person2.jpg";
import Person3 from "../assets/imgs/person3.jpg";

function Main() {
  return (
    <main>
      {/* Specials */}
      <section className="specials mt-[3rem] sm:mt-[6rem] container m-auto">
        <div className="specials__header flex justify-between mx-5 my-5">
          <h1 className="text-[21px] sm:text-[28px] md:text-[38px] font-bold">
            Specials
          </h1>
          <button className="bg-[#F4CE14] px-[1.5rem] py-[.5rem] rounded-lg transition ease-in-out hover:scale-105">
            <a href="#">Online Menu</a>
          </button>
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

      {/* Testimonials */}
      <section className="testimonials bg-[#495E57] my-10 py-16">
        <div className="container m-auto">
          <div className="testimonials__title">
            <h1 className="text-white text-center text-[42px] mb-8">
              Testimonials
            </h1>
          </div>
          <div className="testimonials__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Testimony
              rating={5}
              name={"John"}
              img={Person3}
              review={"Lorem ipsum dolor sit."}
            />
            <Testimony
              rating={5}
              name={"John"}
              img={Person1}
              review={"Lorem ipsum dolor sit."}
            />
            <Testimony
              rating={4}
              name={"John"}
              img={Person2}
              review={"Lorem ipsum dolor sit."}
            />
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="lastSection py-8">
        <div className="container m-auto flex flex-col md:flex-row">
          <div className="lastSection__left flex-1 flex flex-col justify-center p-9 sm:p-4">
            <h1 className="text-[43px] text-[#]">Little Lemon</h1>
            <h3 className="text-[28px] mb-8">Chicago</h3>
            <p className="text-[18px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.{" "}
            </p>
          </div>

          <div className="lastSection__right flex-1 flex justify-center translate-y-8 md:translate-y-0 ">
            <div className="translate-y-20 translate-x-[2rem] w-[250px] h-[400px] sm:h-[230px] md:h-[400px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={MarioAndAdrianA}
                className="w-full object-cover h-full"
                alt=""
              />
            </div>
            <div className="translate-x-[-4rem] w-[250px] h-[400px] sm:h-[230px] md:h-[400px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={MarioAndAdrianB}
                className="w-full object-cover h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
