import React from "react";

function Card({img, title, price, description}) {
  return (
    <>
      <div className="specials__card">
        <div className="card__img">
            <img src={img} alt="" width={200} height={200}/>
        </div>
        <div className="card_title_price">
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
        <div className="card__description">
            <p>{description}</p>
        </div>
        <div className="card__order">
            <button><a href="#">Order a delivery</a></button>
        </div>
      </div>
    </>
  );
}

export default Card;
