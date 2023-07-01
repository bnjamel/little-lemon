import React from "react";

function Testimony({ review, img, rating, name }) {
  return (
    <div className="bg-[#F2F2F2] flex justify-center text-center m-4 sm:m-2 p-6 md:p-8 rounded-lg min-w-[300px] md:min-w-[250px] overflow-hidden">
      <div className="text-center flex justify-center md:flex-col">
        <div className="img__container h-[100px] sm:self-center min-w-[100px] w-[100px] rounded-full overflow-hidden object-bottom">
          <img src={img} alt="" loading="lazy" />
        </div>
        <div className="flex flex-col text-start sm:text-center ml-4">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span loading="lazy">⭐</span>
              ))}
          </p>
          <h3 className="font-bold mb-2">{name}</h3>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
