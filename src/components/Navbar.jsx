import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`h-14 bg-white w-full flex justify-between items-center px-5 space-x-4 ${
          isOpen ? "fixed z-50" : ""
        }`}
      >
        <img src={logo} alt="" className="w-12" />
        <div className="text-xs sm:text-base text-center md:pl-56 font-poppins text-[#174E26]">
          Interior Designer & Contractor | Furniture Manufacturer
        </div>
        <div className="hidden lg:flex space-x-5 text-[#174E26] font-poppins">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#project">Project</a>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden space-y-2" onClick={toggleMenu}>
          <div
            className={`w-8 bg-[#174E26] h-1 rounded-xl ${
              isOpen ? "rotate-45 translate-y-[2px]" : ""
            }`}
          ></div>
          <div
            className={`w-8 bg-[#174E26] h-1 rounded-xl ${
              isOpen ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
          ></div>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bg-[#174E26] text-white bg-opacity-45 h-full w-full backdrop-blur-sm z-[1]"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <a
              href="#home"
              className="bg-white rounded-full text-[#174E26] w-20 text-center"
            >
              Home
            </a>
            <a
              href="#about"
              className="bg-white rounded-full text-[#174E26] w-20 text-center"
            >
              About
            </a>
            <a
              href="#services"
              className="bg-white rounded-full text-[#174E26] w-20 text-center"
            >
              Services
            </a>
            <a
              href="#project"
              className="bg-white rounded-full text-[#174E26] w-20 text-center"
            >
              Project
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
