import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import pantai from "../assets/img/pantai.webp";
import salam from "../assets/img/salam.webp";
import guarantee from "../assets/img/guarantee.webp";

const Service = memo(() => {
  // Data Service
  const services = useMemo(
    () => [
      {
        title: "STRESS-FREE",
        imgSrc: pantai,
        description:
          "Our services include project managers in every aspect to ease your responsibility in controlling and overseeing your project.",
      },
      {
        title: "FLEXIBILITY",
        imgSrc: salam,
        description:
          "Utilize our services from the beginning or in areas that are not covered by previous contractors.",
      },
      {
        title: "GUARANTEE",
        imgSrc: guarantee,
        description:
          "We guarantee that our work is precisely done according to our agreement with you, backed by retention.",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col items-center justify-center px-5 md:px-10 lg:px-40 my-20">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        className="font-raleway font-bold text-center my-5"
        id="services"
      >
        OUR CORE VALUE WILL BE DELIVERED IN A FORM OF
      </motion.h1>

      {/* Grid Service */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="lg:w-[400px] w-80 md:w-full h-96 lg:h-[450px] overflow-hidden flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-5">
                <p className="font-raleway font-bold mb-5 text-xl text-center">
                  {service.title}
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2, // Animasi bertahap
                  }}
                  viewport={{ once: true, amount: 1 }}
                  className="flex px-5 gap-4 items-center"
                >
                  <div className="h-full w-1 bg-white"></div>
                  <p className="font-raleway text-sm w-64 text-justify">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Service;
