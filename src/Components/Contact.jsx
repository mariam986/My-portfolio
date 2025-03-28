import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwpjwee");
  const [message, setMessage] = useState();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);

    if (state.succeeded) {
      event.target.reset();
      setMessage("Form Submitted Successfully");
    } else {
      console.log("Error", state);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#d3d3d3] pt-20 px-5 md:px-[10rem] flex  flex-col gap-40 justify-center items-center  "
    >
      <div className="">
        <h1 className="text-center text-[35px] font-semibold">Contact me</h1>
        <div className="block md:flex justify-between items-center mt-10 ">
          <div className="w-[100%] md:w-[40%]">
            <h2 className="text-[30px] font-medium text-red-800">
              Let's work together
            </h2>
            <p className="text-[20px] font-normal mt-5">
              I'm currently available to take on new projects , so feel free to
              send me a message about anything that you want me to work on,you
              can call me anytime.
            </p>
            <div className="flex gap-3 items-center mt-7">
              <FaEnvelope />
              <p>usmanomolara05@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center mt-5">
              <FaPhone />
              <p>070-6956-0776</p>
            </div>
            <div className="flex gap-3 items-center mt-5">
              <FaMapMarkerAlt />
              <p>Nigeria</p>
            </div>
          </div>
          <form
            className="w-[100%] md:w-[40%] flex flex-col justify-center items-start mt-5 md:mt-0 "
            onSubmit={handleFormSubmit}
            action="https://formspree.io/f/mpwpjwee"
            method="POST"
          >
            <label htmlFor="" className="text-[20px] font-normal">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full h-10 bg-transparent border-b-2 border-l-2 py-6 pl-5 rounded-md mt-5 "
            />
            <label htmlFor="" className="text-[20px] font-normal mt-5">
              Your Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              className="w-full h-10 bg-transparent border-b-2 border-l-2 py-6 pl-5 rounded-md mt-5 "
            />
            <label htmlFor="" className="text-[20px] font-normal mt-5">
              Write your message here
            </label>
            <textarea
              className="w-full h-40 bg-transparent border-b-2 border-l-2 py-6 pl-5 rounded-md mt-5 "
              name="message"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
            <button
              className="rounded-full bg-red-800 py-4 px-14 mt-5 hover:scale-110 duration-300"
              type="submit"
            >
              Submit
            </button>
            <p className="mt-5 text-[20px] font-medium">{message}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
