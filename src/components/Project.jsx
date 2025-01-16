import { motion } from "framer-motion";
import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 mt-5">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=" font-raleway font-bold text-xl mb-5"
      >
        Our Project
      </motion.h1>
      <div className="flex flex-col mb-5">
        <div className="office flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h-64 w-full bg-red-300 overflow-hidden rounded-xl"
          >
            <img src="img/office.jpg" alt="" className="w-full -mt-36" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 font-bold font-raleway"
          >
            Office & Fit-Out
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            Equipped to elevate our clients' needs by delivering precise,
            high-quality results that ensure{" "}
            <span className="font-semibold">long-term benefits</span>
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <div className="office flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h-64 w-full overflow-hidden rounded-xl"
          >
            <img
              src="img/residential.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 font-bold font-raleway"
          >
            Residential
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            Home is where our heart is, which is why we are fully dedicated to
            making your living space{" "}
            <span className="font-semibold">comfortable</span>, offering extra
            insights and advice every step of the way
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <div className="office flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h-64 w-full bg-red-300 overflow-hidden rounded-xl"
          >
            <img
              src="img/booth.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 font-bold font-raleway"
          >
            Outlet & Booth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            <span className="font-semibold">Trusted</span> by various industries
            in the retail sector, we are dedicated to delivering client
            satisfaction by meeting deadlines
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <div className="office flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h-64 w-full bg-red-300 overflow-hidden rounded-xl"
          >
            <img src="img/furniture.jpg" alt="" className="w-full h-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 font-bold font-raleway"
          >
            Furniture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-center font-raleway text-sm"
          >
            Blends <span className="font-semibold">local craftsmanship </span>{" "}
            with modern{" "}
            <span className="semibold">fabrication techniques.</span> ensuring
            each piece is precisely crafted to match the design with great
            attention to detail
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Project;
