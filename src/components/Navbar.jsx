import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center px-5 space-x-4 h-14 w-full bg-white backdrop-blur-md ${
          isOpen ? "fixed top-0 left-0 right-0 z-50" : "absolute shadow-2xl"
        }`}
      >
        <div>
          <img src="/logo.png" alt="Logo" className="w-12" />
        </div>

        <div className="text-xs sm:text-base text-center font-poppins text-[#174E26]">
          Interior Designer & Contractor | Furniture Manufacturer
        </div>

        {/* Hamburger Menu */}
        <div className={`space-y-2 lg:hidden`} onClick={toggleMenu}>
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-5 text-[#174E26] font-poppins">
          <a href="https://grahakaryadekorindo.com">Home</a>
          <a href="https://grahakaryadekorindo.com">About</a>
          <a href="https://grahakaryadekorindo.com">Services</a>
          <a href="https://grahakaryadekorindo.com">Contact</a>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          className="h-screen w-full bg-black bg-opacity-70 fixed top-0 left-0 z-40" // Ensure it covers full screen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <ul className="flex flex-col items-center justify-start h-full space-y-5 mt-32">
            <motion.li
              className="text-white text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <a href="https://grahakaryadekorindo.com">Home</a>
            </motion.li>
            <motion.li
              className="text-white text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              About
            </motion.li>
            <motion.li
              className="text-white text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Services
            </motion.li>
            <motion.li
              className="text-white text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              Contact
            </motion.li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
