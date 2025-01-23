import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <>
      <h1 className="font-raleway font-bold text-center m-5">
        OUR CORE VALUE WILL BE DELIVERED IN A FORM OF
      </h1>
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mb-10">
        <div className="stress lg:w-[400px] w-80 md:w-full h-96 lg:h-[450px] overflow-hidden flex items-center justify-center">
          {/* Overlay */}
          <div className="relative w-full h-full">
            <img
              src="img/pantai.jpg"
              alt="Stress-Free"
              className="w-full h-full object-cover"
            />
            <div className="flex-col absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-raleway font-bold mb-5 text-xl"
              >
                STRESS-FREE
              </motion.p>
              <div className="flex px-5 gap-4 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="h-full w-1 bg-white"
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-raleway text-sm w-64"
                >
                  Our services include project managers in every aspect to ease
                  your responsibility in controlling and overseeing your
                  project.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="stress lg:w-[400px] w-80 md:w-full h-96 lg:h-[450px] overflow-hidden flex items-center justify-center">
          {/* Overlay */}
          <div className="relative w-full h-full">
            <img
              src="img/salam.jpg"
              alt="Flexibility"
              className="w-full h-full object-cover"
            />
            <div className="flex-col absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-raleway font-bold mb-5 text-xl"
              >
                FLEXIBILITY
              </motion.p>
              <div className="flex px-5 gap-4 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="h-full w-1 bg-white"
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-raleway text-sm w-64"
                >
                  Utilize our services from the beginning or in areas that are
                  not covered by previous contractors.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="stress lg:w-[400px] w-80 h-96 md:w-full lg:h-[450px] overflow-hidden flex items-center justify-center">
          {/* Overlay */}
          <div className="relative w-full h-full">
            <img
              src="img/guarantee.jpg"
              alt="Guarantee"
              className="w-full h-full object-cover"
            />
            <div className="flex-col absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-raleway font-bold mb-5 text-xl"
              >
                GUARANTEE
              </motion.p>
              <div className="flex px-5 gap-4 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="h-full w-1 bg-white"
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-raleway text-sm w-64"
                >
                  We guarantee that our work is precisely done according to our
                  agreement with you, backed by retention.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
