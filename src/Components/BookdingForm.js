import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function BookdingForm({ availableTime }) {
  let navigator = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const initialValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  };

  const validation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Incorrect E-mail")
      .required("E-mail is required"),
    date: Yup.string().required("Reservation Date is Required"),
    time: Yup.string().required("Reservation Time is Required"),
    guests: Yup.number().min(1).max(10).required("Minimum guests are 1 to 10"),
    occasion: Yup.string().required("Please Select an Occasion"),
  });

  const onSubmit = (data) => {
    const notificationMessage = `Reservation successful! We are excited to have you dine with us on ${data.date} [${data.time}]`;
    toast.success(notificationMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator("/");
  };

  return (
    <section>
      <div className="bg-[#495E57]">
        <div className="container m-auto flex flex-col pt-[6rem] sm:pt-[7rem] md:pt-[8rem] sm:flex-row sm:text-start sm:justify-between">
          <div className="flex-1 px-5">
            <h1 className="text-[#F4CE14] text-[38px] sm:text-[48px] md:text-[52px]">
              Reservations
            </h1>
            <h3 className="text-[#F2F2F2] text-[14px] sm:text-[18px] mb-6 sm:mb-8">
              We are delighted that you would like to make a reservation at
              Little Lemon.
            </h3>
          </div>
        </div>
      </div>

      <section className="container m-auto py-12">
        <h1 className="mt-[3rem] mx-4 text-[1.3rem]">
          To ensure a memorable dining experience, please provide us with the
          following information:
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="grid grid-cols-1  sm:grid-cols-2 m-4">
              <div className="flex flex-col justify-start sm:mx-2">
                <label
                  className="text-[18px] pb-1 pt-3 text-gray-600 font-bold "
                  htmlFor="res-name"
                >
                  Name
                </label>
                <Field
                  name="name"
                  className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                  placeholder="name"
                  type="text"
                  id="res-name"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="name"
                  component={"span"}
                />
              </div>
              <div className="flex flex-col justify-start sm:mx-2">
                <label
                  className="text-[18px] pb-1 pt-3 text-gray-600 font-bold "
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
                  className="text-[18px] pb-1 pt-3 text-gray-600 font-bold "
                  htmlFor="res-date"
                >
                  Date
                </label>
                <Field
                  name="date"
                  className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                  type="date"
                  id="res-date"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="date"
                  component={"span"}
                />
              </div>

              <div className="flex flex-col justify-start sm:mx-2">
                <label
                  className="text-[18px] pb-1 pt-3 text-gray-600 font-bold "
                  htmlFor="res-time"
                >
                  Time
                </label>
                <Field
                  as="select"
                  name="time"
                  required
                  className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                  id="res-time"
                >
                  {availableTime.map((time) => (
                    <option value={time}>{time}</option>
                  ))}
                </Field>
                <ErrorMessage
                  className="text-red-500"
                  name="time"
                  component={"span"}
                />
              </div>
              <div className="flex flex-col justify-start sm:mx-2">
                <label
                  className="text-[18px] pb-1 pt-3 text-gray-600 font-bold "
                  htmlFor="guests"
                >
                  Number of guests
                </label>
                <Field
                  name="guests"
                  className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                  type="number"
                  id="guests"
                  placeholder="1"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="guests"
                  component={"span"}
                />
              </div>
              <div className="flex flex-col justify-start sm:mx-2">
                <label
                  className="text-[18px] pb-1 pt-3 text-gray-600 font-bold "
                  htmlFor="occasion"
                >
                  Occasion
                </label>
                <Field
                  as="select"
                  name="occasion"
                  className="py-2 px-4 rounded-md bg-slate-50 shadow-sm border outline-none transition ease-in-out focus:border-black focus:shadow-md focus:shadow-[#bad5cc5a]"
                  id="occasion"
                >
                  <option value="" className="">
                    occasion
                  </option>
                  <option value="Birthday" className="">
                    Birthday
                  </option>
                  <option value="Aniversary" className="">
                    Aniversary
                  </option>
                </Field>
                <ErrorMessage
                  className="text-red-500"
                  name="occasion"
                  component={"span"}
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <button
                  disabled={!isValid || isSubmitting}
                  type="submit"
                  className={`bg-[#495E57] mt-6 text-[#F4CE14] text-[16px] rounded-md py-2 px-4 cursor-pointer hover:scale-[1.04] ${
                    !isValid
                      ? "bg-slate-300 text-black cursor-not-allowed"
                      : "bg-[#495E57] mt-6 text-[#F4CE14]"
                  }`}
                >
                  Make Your Reservation
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
}

export default BookdingForm;
