import React, { memo, useMemo, useState, useEffect } from "react";
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
          <ExpertiseCard key={index} expertise={expertise} index={index} />
        ))}
      </div>
    </div>
  );
});

const ExpertiseCard = ({ expertise, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = expertise.imgSrc;
    img.onload = () => setImgLoaded(true);
  }, [expertise.imgSrc]);

  return (
    <div className="flex flex-col items-stretch justify-between">
      {/* Lazy Loaded Background Image */}
      <div
        className={`h-64 w-full overflow-hidden rounded-xl bg-cover bg-center transition-opacity duration-500 ${
          imgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: imgLoaded ? `url(${expertise.imgSrc})` : "none" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.1, // Animasi bertahap
        }}
        viewport={{ once: true, amount: 1 }}
        className="mt-4 font-bold font-raleway text-center"
      >
        {expertise.title}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.1, // Animasi bertahap
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-2 text-center font-raleway text-sm flex-grow"
      >
        {expertise.description}
      </motion.p>
    </div>
  );
};

export default Expertise;
