import React from "react";
import Card from "./Card";
import Bruchetta from "../assets/imgs/bruchetta.svg";
import GreekSalad from "../assets/imgs/greek salad.jpg"
import LemonDessert from "../assets/imgs/lemon dessert.jpg"

import MarioAndAdrianA from "../assets/imgs/Mario and Adrian A.jpg"
import MarioAndAdrianB from "../assets/imgs/Mario and Adrian b.jpg"

function Main() {
  return (
  <main>
    {/* Specials */}
    <section className="specials">
      <div className="specials__header">
        <h1>Specials</h1>
        <button><a href="#">Online Menu</a></button>
      </div>
      <div className="specials__cardsContainer">
        <Card img={GreekSalad} title={"Greek salad"} price={"$12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "} />
        <Card img={Bruchetta} title={"Bruchetta"} price={"$ 5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "} />
        <Card img={LemonDessert} title={"Lemon Dessert"} price={"$ 5.00"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} />
      </div>

    </section>

    {/* Testimonials */}
    <section className="testimonials">
      <div className="testimonials__title">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials__cards">
        <p>Rating</p>
        <img src="#" alt="" />
        <h3>name</h3>
        <p>Review text</p>
      </div>
    </section>

    {/* Last Section */}
    <section className="lastSection">
      <div className="lastSection__left">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
      <div className="lastSection__right">
        <img src={MarioAndAdrianA} width={200} height={200} alt="" />
        <img src={MarioAndAdrianB} width={200} height={200} alt="" />
      </div>
    </section>
  </main>
  );
}

export default Main;
