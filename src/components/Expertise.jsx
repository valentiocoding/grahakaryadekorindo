import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <div className=" mt-10 flex flex-col justify-center items-center mx-5">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-raleway font-bold text-xl mb-5"
      >
        Our Expertise
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col mb-5"
      >
        <div className="design flex items-center justify-center flex-col">
          <div className="h-64 w-full bg-red-300 overflow-hidden rounded-xl">
            <img
              src="img/design.jpg"
              alt="Building & Interior Construction"
              className="w-full -mt-52"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4  font-bold font-raleway"
          >
            Design & Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            With a team of over{" "}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-semibold"
            >
              12 years of experience
            </motion.span>
            , we are okeased to offer the best advice and insights to enhance
            your ideas and concepts.
          </motion.p>
        </div>
      </motion.div>
      <div className="flex flex-col mb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="design flex items-center justify-center flex-col"
        >
          <div className="h-64 w-full bg-red-300 overflow-hidden rounded-xl">
            <img
              src="img/building.png"
              alt="Building & Interior Construction"
              className="w-full -mt-16"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4  font-bold font-raleway"
          >
            Building & Interior Construction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            Executing each task with{" "}
            <span className="font-semibold">precision and accuracy</span> while
            following building policies and standards, we ensure a{" "}
            <span className="font-semibold">safe work environment</span> for
            you.
          </motion.p>
        </motion.div>
      </div>
      <div className="flex flex-col mb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="design flex items-center justify-center flex-col"
        >
          <div className="h-64 w-full bg-red-300 overflow-hidden rounded-xl">
            <img
              src="img/mep.png"
              alt="Building & Interior Construction"
              className="w-auto -mt-20"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4  font-bold font-raleway"
          >
            MEP Installation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            Securing your mechanical, electrical, and plumbing with precise work
            for <span className="font-semibold">long-term benefits.</span>
          </motion.p>
        </motion.div>
      </div>
      <div className="flex flex-col mb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="design flex items-center justify-center flex-col"
        >
          <div className="h-64 w-full bg-red-300 overflow-hidden rounded-xl">
            <img
              src="img/furniture.png"
              alt="Building & Interior Construction"
              className="w-full -mt-44"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4  font-bold font-raleway"
          >
            Furniture Making
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            Partnering with many credible{" "}
            <span className="font-semibold">large furniture manufacturers</span>{" "}
            across Indonesia and{" "}
            <span className="font-semibold">local craftsmen.</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;
