import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <div className="mt-5 mx-5 flex flex-col items-center mb-10">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-raleway font-bold text-xl mb-5"
      >
        Our Expertise
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {[ // Array of expertise items
          {
            title: "Design & Plan",
            imgSrc: "img/design.jpg",
            description:
              "With a team of over 12 years of experience, we are pleased to offer the best advice and insights to enhance your ideas and concepts.",
          },
          {
            title: "Building & Interior Construction",
            imgSrc: "img/building.png",
            description:
              "Executing each task with precision and accuracy while following building policies and standards, we ensure a safe work environment for you.",
          },
          {
            title: "MEP Installation",
            imgSrc: "img/mep.png",
            description:
              "Securing your mechanical, electrical, and plumbing with precise work for long-term benefits.",
          },
          {
            title: "Furniture Making",
            imgSrc: "img/custom.png",
            description:
              "Partnering with many credible large furniture manufacturers across Indonesia and local craftsmen.",
          },
        ].map((expertise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="h-64 w-full bg-red-300 overflow-hidden rounded-xl">
              <img
                src={expertise.imgSrc}
                alt={expertise.title}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 font-bold font-raleway text-center"
            >
              {expertise.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-2 text-center font-raleway text-sm"
            >
              {expertise.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
