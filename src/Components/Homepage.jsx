import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import pookie from "../assets/images/pookie.jpeg";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className=" bg-[#d3d3d3]  md:bg-custom   md:h-screen  md:pt-20 w-[100%]     "
    >
      <div className="block md:flex ">
        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{ duration: 3, ease: "easeIn" }}
          className="pt-[15rem] pl-[1rem] md:pl-[10rem] w-[100%] md:w-[60%]"
        >
          <div>
            <h2 className="text-[28px] font-normal">Hello, my name is </h2>
            <h1 className="text-[40px] font-bold mt-4">USMAN MARIAM</h1>
            <h2 className="text-[28px] font-normal mt-4">
              I'm a{" "}
              <span className="text-[40px] font-bold text-red-800 ">
                {text}
              </span>
              <span className="text-red-800">
                <Cursor />
              </span>
            </h2>
          </div>
          <div className="flex  gap-5 mt-16 md:mt-28">
            <a
              href="https://github.com/mariam986"
              className="w-10 h-10 hover:text-red-800   "
            >
              <FaGithubSquare className="w-full h-full hover:scale-150 duration-300 " />
            </a>
            <a
              href="https://www.linkedin.com/in/usman-mariam-a35b63345/"
              className="w-10 h-10 hover:text-red-800"
            >
              <FaLinkedin className="w-full h-full hover:scale-150 duration-300 " />
            </a>
            <a
              href="https://x.com/UsmanMa18170196"
              className="w-10 h-10 hover:text-red-800"
            >
              <FaTwitterSquare className="w-full h-full hover:scale-150 duration-300 " />
            </a>
            <div className="w-10 h-10 hover:text-red-800">
              <FaEnvelopeSquare className="w-full h-full hover:scale-150 duration-300 " />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeIn" }}
          className="pt-[3rem] md:pt-[15rem] ml-5 md:ml-0 "
        >
          <img
            src={pookie}
            className="w-80 h-80 md:w-96 md:h-96 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
