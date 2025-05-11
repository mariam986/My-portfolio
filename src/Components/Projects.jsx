import React from "react";
import Ecommerce from "../assets/images/Ecommerce.png";
import movibes from "../assets/images/movibes.png";
import elibrary from "../assets/images/elibrary.png";
import cryptocurrency from "../assets/images/cryptocurrency.png";
import Thumbnail from "../assets/images/Thumbnail.png";
import work from "../assets/images/work.png";
import { motion } from "framer-motion";
import { GrShare } from "react-icons/gr";
import { img } from "framer-motion/client";

const Projects = () => {
  const works = [
    {
      img: movibes,
      name: "Movies Website",
      url: "http://movibes-gamma.vercel.app",
    },
    {
      img: Ecommerce,
      name: "E commerce Website",
      url: "http://e-commerce-swart-eight-47.vercel.app",
    },
    {
      img: elibrary,
      name: "E library website",
      url: "http://my-project-feub.vercel.app",
    },
    {
      img: cryptocurrency,
      name: "Cryptocurrency Website",
      url: "http://cryptocurrency-omega.vercel.app",
    },
    {
      img: Thumbnail,
      name: "Blog Website",
      url: "https://blog-tsx7.vercel.app/",
    },
    {
      img: work,
      name: "Consultation Website",
      url: "https://work-cwwx.vercel.app/",
    },
  ];
  return (
    <section
      id="projects"
      className="bg-[#d3d3d3] pt-20 px-0 md:px-[10rem] flex items-center justify-center flex-col "
    >
      <h1 className="text-[35px] font-semibold   text-center ">
        Latest <span className="text-red-800">project</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className=" grid-cols-1 lg:grid-cols-2 grid lg:w-[100%] w-[80%]  gap-[2rem] mt-10 lg:gap-[7rem]  "
      >
        {works.map((work, index) => (
          <div className="relative group hover:scale-110 duration-300 ">
            <img
              key={index}
              src={work.img}
              className="w-full h-[200px] lg:h-full  box-border rounded-3xl  "
            />
            <div className=" absolute bg-gradient-to-b from-transparent to-red-800 bg-opacity-100 flex items-center inset-0 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex-col">
              <h1 className="font-semibold text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px]  text-white  ">
                {work.name}
              </h1>
              <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]  font-normal">
                To view project details ,click on the image
              </p>

              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 lg:p-6 rounded-full mt-5"
              >
                <GrShare className="size-4 lg:size-6 " />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
