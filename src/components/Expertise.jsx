import React from "react";
import { motion } from "framer-motion";
import designnplan from "../assets/img/design.jpg"
import building from "../assets/img/building.png"
import mep from "../assets/img/mep.png"
import custom from "../assets/img/custom.png"

const Expertise = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="mt-5 mx-5 flex flex-col items-center mb-10">
      <h1

        className="font-raleway font-bold text-xl mb-5"
      >
        Our Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {[
          {
            title: "Design & Plan",
            imgSrc: designnplan,
            description:
              "With a team of over 12 years of experience, we are pleased to offer the best advice and insights to enhance your ideas and concepts.",
          },
          {
            title: "Building & Interior Construction",
            imgSrc: building,
            description:
              "Executing each task with precision and accuracy while following building policies and standards, we ensure a safe work environment for you.",
          },
          {
            title: "MEP Installation",
            imgSrc:mep,
            description:
              "Securing your mechanical, electrical, and plumbing with precise work for long-term benefits.",
          },
          {
            title: "Furniture Making",
            imgSrc: custom,
            description:
              "Partnering with many credible large furniture manufacturers across Indonesia and local craftsmen.",
          },
        ].map((expertise, index) => (
          <div
            key={index}
            className="flex flex-col items-stretch justify-between" // Menggunakan 'justify-between' untuk mendistribusikan ruang antar elemen
          >
            <div className="h-64 w-full bg-red-300 overflow-hidden rounded-xl">
              <img
                src={expertise.imgSrc}
                alt={expertise.title}
                className="w-full h-full object-cover"
                loading="lazy" // Memastikan gambar menutupi seluruh kontainer
              />
            </div>
            <h2
              className="mt-4 font-bold font-raleway text-center"
            >
              {expertise.title}
            </h2>
            <p
              className="mt-2 text-center font-raleway text-sm flex-grow"
            >
              {expertise.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Expertise;
