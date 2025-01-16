import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="m-5 flex flex-col items-center justify-center gap-3">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-raleway font-bold text-center"
      >
        OUR CORE VALUE WILL BE DELIVERED IN A FORM OF
      </motion.h1>
      <div className="stress h-52 overflow-hidden flex items-center justify-center">
        {/* Overlay */}
        <div class="relative">
          <img src="img/pantai.jpg" alt="Gambar" class="w-full h-auto" />
          <div class="  flex-col absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
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
                your responsibility in controlling and overseeing your project.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="flexible h-52 overflow-hidden flex items-center justify-center">
        {/* Overlay */}
        <div class="relative">
          <img src="img/salam.jpg" alt="Gambar" class="w-full h-auto" />
          <div class="  flex-col absolute inset-0 bg-gray-500 bg-opacity-30 text-white flex justify-center items-center ">
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
                Utilize our services from the beginning or in areas that are not
                covered by previous contractors.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="guarantee h-52 overflow-hidden flex items-center justify-center">
        {/* Overlay */}
        <div class="relative">
          <img src="img/guarantee.jpg" alt="Gambar" class="w-full h-auto" />
          <div class="  flex-col absolute inset-0 bg-gray-500 bg-opacity-50 text-white flex justify-center items-center">
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
                We guarantee that our work is precisely done according to aour
                agreement with you, backed by retention.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
