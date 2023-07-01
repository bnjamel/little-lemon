import React, { useEffect, useState } from "react";
import BookdingForm from "../Components/BookdingForm";
import { motion } from "framer-motion";

function Booking() {
  const [availableTime, setAvailableTime] = useState([
    "select time",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <BookdingForm
        availableTime={availableTime}
        setAvailableTime={setAvailableTime}
      />
    </motion.div>
  );
}

export default Booking;
