import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`h-14 w-full flex justify-between items-center px-5 space-x-4 ${
          isOpen ? "fixed z-50" : ""
        }`}
      >
        <img src="/logo.png" alt="" className="w-12" />
        <div className="text-xs sm:text-base text-center font-poppins text-[#174E26]">
          Interior Designer & Contractor | Furniture Manufacturer
        </div>
        <div className="hidden lg:flex space-x-5 text-[#174E26] font-poppins">
          <a href="Home">Home</a>
          <a href="Home">About</a>
          <a href="Home">Services</a>
          <a href="Home">Contact</a>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden space-y-2" onClick={toggleMenu}>
          <div className={`w-8 bg-[#174E26] h-1 rounded-xl ${isOpen ? "rotate-45 translate-y-[2px]" : ""}`}></div>
          <div className={`w-8 bg-[#174E26] h-1 rounded-xl ${isOpen ? "-rotate-45 -translate-y-[10px]" : ""}`}></div>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bg-black bg-opacity-45 h-full w-full backdrop-blur-sm z-[1]"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
