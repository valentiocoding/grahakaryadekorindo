import React from "react";
import pantai from "../assets/img/pantai.webp";
import salam from "../assets/img/salam.webp";
import guarantee from "../assets/img/guarantee.webp";

import { motion } from "framer-motion";
const services = [
  {
    image: pantai,
    title: "STRESS-FREE",
    description:
      "Our services include project managers in every aspect to ease your responsibility in controlling and overseeing your project.",
  },
  {
    image: salam,
    title: "FLEXIBILITY",
    description:
      "Utilize our services from the beginning or in areas that are not covered by previous contractors.",
  },
  {
    image: guarantee,
    title: "GUARANTEE",
    description:
      "We guarantee that our work is precisely done according to our agreement with you, backed by retention.",
  },
];

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 md:px-10 lg:px-40">
      {/* Judul */}
      <h1 className="font-raleway font-bold text-center my-5 text-lg ">
        OUR CORE VALUE WILL BE DELIVERED IN A FORM OF
      </h1>

      {/* Grid */}
      <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-5 mb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full h-96 lg:h-[450px] overflow-hidden flex items-center justify-center rounded-lg shadow-lg lg:max-w-[400px] min-w-[400px]"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative w-full h-full bg-black bg-opacity-60 text-white flex flex-col items-center justify-center px-5">
              <p className="font-raleway font-bold mb-5 text-center text-lg md:text-xl">
                {service.title}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                className="flex gap-4 items-center"
              >
                <div className="h-full w-1 bg-white"></div>
                <p className="font-raleway text-md w-64 text-justify">
                  {service.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
