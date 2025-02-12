import React from "react";
import { motion } from "framer-motion";
import home from "../assets/img/home.png";

const Home = () => {
  return (
    <>
      {/* Background Image */}
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${home})` }} id="home">
        {/* Overlay BG */}
        <div className="bg-black/50 h-full flex items-center justify-center absolute inset-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-white font-light text-3xl sm:text-5xl lg:text-6xl font-poppins text-center"
          >
            <p className="mb-2">
              BUILDING <span className="font-bold">DREAMS</span>
            </p>
            <p>
              CREATING <span className="font-bold">LEGACY</span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
