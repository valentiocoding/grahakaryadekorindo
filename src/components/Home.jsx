import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import home from "../assets/img/home.webp";

const Home = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = home;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <>
      {/* Background Image */}
      <div
        className={`h-screen bg-cover bg-center relative transition-opacity duration-500 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: bgLoaded ? `url(${home})` : "none" }}
        id="home"
      >
        {/* Overlay BG */}
        <div className="bg-black/50 h-full flex items-center justify-center absolute inset-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true, amount: 0 }}
            className="text-white font-light text-3xl sm:text-5xl lg:text-6xl font-poppins text-center gap-2 flex flex-col"
          >
            <p className="uppercase">
              building <span className="font-bold">dreams</span>
            </p>
            <p className="uppercase">
              creating <span className="font-bold">legacy</span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
