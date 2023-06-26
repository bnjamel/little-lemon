import React, { useEffect, useState } from "react";
import BookdingForm from "../Components/BookdingForm";

function Booking() {
  const [availableTime, setAvailableTime] = useState(["select time","17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"])

    // useEffect(() => {
    //   fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
    //   .then(res => console.log(res))
    // }, [])

  return (
    <div>
      <BookdingForm availableTime={availableTime} setAvailableTime={setAvailableTime}/>
    </div>
  );
}

export default Booking;
