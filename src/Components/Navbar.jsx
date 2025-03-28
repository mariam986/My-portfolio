import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full pt-10 bg-current z-10  ">
      <div className="flex gap-36 md:justify-between px-5 md:px-40  ">
        <h1 className="text-[40px] text-red-800 font-bold">
          Port<span className="text-[24px] text-white">folio</span>
        </h1>
        <button
          onClick={() => {
            setOpen(true);
            console.log("Hamburger clicked");
          }}
          className=" text-white focus:outline-none z-50 text-3xl md:hidden block ml-20 "
        >
          ☰
        </button>
        <div className="text-red-800 md:flex space-x-10 text-[24px] list-none hidden  ">
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p
                onClick={() => {
                  console.log("home clicked");
                  setMenu("home");
                }}
                className={`  cursor-pointer hover:scale-110 duration-300 ${
                  menu === "home" ? "text-white" : ""
                }`}
              >
                HOME
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#skills">
              <p
                onClick={() => {
                  console.log("skills clicked");
                  setMenu("skills");
                }}
                className={`  cursor-pointer hover:scale-110 duration-300 ${
                  menu === "skills" ? "text-white" : ""
                }`}
              >
                SKILLS
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#projects">
              <p
                onClick={() => setMenu("projects")}
                className={`  cursor-pointer hover:scale-110 duration-300 ${
                  menu === "projects" ? "text-white" : ""
                }`}
              >
                PROJECTS
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" href="#contact">
              <p
                onClick={() => setMenu("contact")}
                className={`  cursor-pointer hover:scale-110 duration-300 ${
                  menu === "contact" ? "text-white" : ""
                }`}
              >
                CONTACT ME
              </p>
            </AnchorLink>
          </li>
        </div>
        {/* Hamburger nav */}
        <div
          className={`text-red-800 block space-x-10 text-[24px] list-none md:hidden fixed top-0 left-0 w-[50%] z-50 h-full bg-black  transition-transform duration-300 ease-in-out space-y-8 ${
            open ? "-translate-y-0" : "-translate-y-full "
          }   `}
        >
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p
                onClick={() => {
                  console.log("home clicked");
                  setMenu("home");
                }}
                className={`  cursor-pointer mt-10  ${
                  menu === "home" ? "text-white" : ""
                }`}
              >
                HOME
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#skills">
              <p
                onClick={() => {
                  console.log("skills clicked");
                  setMenu("skills");
                }}
                className={`  cursor-pointer  ${
                  menu === "skills" ? "text-white" : ""
                }`}
              >
                SKILLS
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#projects">
              <p
                onClick={() => setMenu("projects")}
                className={`  cursor-pointer  ${
                  menu === "projects" ? "text-white" : ""
                }`}
              >
                PROJECTS
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" href="#contact">
              <p
                onClick={() => setMenu("contact")}
                className={`  cursor-pointer  ${
                  menu === "contact" ? "text-white" : ""
                }`}
              >
                CONTACT ME
              </p>
            </AnchorLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
