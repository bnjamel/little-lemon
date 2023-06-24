import React from "react";

function Card({ img, title, price, description }) {
  return (
    <>
      <div className="specials__card mx-6 my-4 sm:mx-2 rounded-xl bg-[#fffdf8] shadow-md overflow-hidden hover:scale-105 transition ease-in-out">
        <div className="card__img h-[300px] sm:h-[230px] overflow-hidden">
          <img src={img} className="w-full object-cover h-full" alt="" />
        </div>
        <div className="card_title_price flex justify-between px-6 py-4">
          <h3 className="font-bold text-[19px]">{title}</h3>
          <h3 className="font-bold text-[#F4CE14]">{price}</h3>
        </div>
        <div className="card__description px-6 py-4">
          <p>{description}</p>
        </div>
        <div className="card__order px-6 py-6 mb-2">
          <button>
            <a href="#" className="underline font-bold">
              Order a delivery
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
