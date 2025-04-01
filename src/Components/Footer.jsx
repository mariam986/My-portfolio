import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#d3d3d3] pt-5  ">
      <div>
        <hr className="border-2 w-[95%] md:w-[100%]  " />
        <div className="flex md:flex-row flex-col justify-between mt-5 text-[20px] font-normal px-5">
          <h1>© 2025 Usman Mariam.All rights reserved.</h1>
          <div className="flex md:flex-row flex-col justify-between gap-2 mt-5 md:mt-0  md:gap-8 ">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
