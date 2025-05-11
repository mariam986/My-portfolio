import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skill = [
    { name: "HTML", icon: FaHtml5, level: 90 },
    { name: "CSS", icon: FaCss3, level: 80 },
    { name: "Javascript", icon: FaJs, level: 75 },
    { name: "React JS", icon: FaReact, level: 80 },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, level: 85 },
    { name: "Next Js", icon: SiNextdotjs, level: 70 },
    { name: "Typescript", icon: SiTypescript, level: 60 },
  ];
  const percentage = [
    { name: "creativity", level: 90 },
    { name: "communication", level: 80 },
    { name: "problem solving", level: 75 },
    { name: "teamwork", level: 85 },
  ];
  return (
    <section
      id="skills"
      className="bg-[#d3d3d3] pt-20    flex-col lg:flex justify-between lg:flex-row items-center"
    >
      <div className="w-[80%] mx-auto lg:w-[45%]">
        <h1 className="text-[35px] font-semibold  underline text-center underline-offset-8">
          Techical Skills
        </h1>
        {skill.map((type, index) => (
          <div key={index}>
            <div className="mt-5">
              <type.icon className="size-6" />
              <span>{type.name}</span>
            </div>

            <div className="w-[100%] bg-gray-300 rounded-full h-6  ">
              <motion.div
                className="h-full bg-red-800 rounded-full flex items-center justify-end pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: `${type.level}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {type.level}%
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto xl:w-[45%]">
        <h1 className="text-[35px] font-semibold  underline ml-6 mt-10 md:mt-0 md:ml-14 underline-offset-8">
          Professional Skills
        </h1>
        <div className="grid grid-cols-2 gap-y-16 mt-12 ">
          {percentage.map((percent, index) => (
            <motion.div
              key={index}
              className="flex items-center flex-col w-[80%] md:w-[50%]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div>
                <CircularProgressbar
                  value={percent.level}
                  text={`${percent.level}%`}
                  styles={buildStyles({
                    pathColor: "#9b2c2c",
                    trailColor: "",
                    textColor: "#ffffff",
                    pathTransitionDuration: 1.5,
                  })}
                />
              </div>
              <div className="text-[18px] mt-5">
                <h1>{percent.name}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
