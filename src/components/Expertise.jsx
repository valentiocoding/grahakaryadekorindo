import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import designnplan from "../assets/img/design.webp";
import building from "../assets/img/building.webp";
import mep from "../assets/img/mep.webp";
import custom from "../assets/img/custom.webp";

const Expertise = memo(() => {
  const expertiseList = useMemo(
    () => [
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
        imgSrc: mep,
        description:
          "Securing your mechanical, electrical, and plumbing with precise work for long-term benefits.",
      },
      {
        title: "Furniture Making",
        imgSrc: custom,
        description:
          "Partnering with many credible large furniture manufacturers across Indonesia and local craftsmen.",
      },
    ],
    []
  );

  return (
    <div className="mt-5 mx-5 flex flex-col items-center mb-20 justify-center">
      <h1 className="font-raleway font-bold text-xl mb-5">Our Expertise</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {expertiseList.map((expertise, index) => (
          <div
            key={index}
            className="flex flex-col items-stretch justify-between"
          >
            <div className="h-64 w-full overflow-hidden rounded-xl">
              <img
                src={expertise.imgSrc}
                alt={expertise.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1, // Beri delay agar animasi bertahap
              }}
              viewport={{ once: true, amount: 1 }}
              className="mt-4 font-bold font-raleway text-center"
            >
              {expertise.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1, // Beri delay agar animasi bertahap
              }}
              viewport={{ once: true, amount: 1 }}
              className="mt-2 text-center font-raleway text-sm flex-grow"
            >
              {expertise.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Expertise;
