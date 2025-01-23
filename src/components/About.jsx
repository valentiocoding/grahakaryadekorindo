import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";

const About = () => {
  return (
    <>
      <div className="sm:mx-10 md:hidden">
        <div className="flex flex-col justify-center items-center mx-5">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-raleway items-center text-center mt-10"
          >
            About Us
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-raleway items-center text-center font-semibold text-2xl"
          >
            Founded 1994
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-raleway my-3 text-justify text-sm"
          >
            Started as PP (Partisia Pramita). We emerged as the precise solution
            in the interior design and contractor expert industries. After more
            than 16 years and successfully completing over{" "}
            <span className="font-semibold">100,000 sqm</span> of projects. We
            decided to embark on a larger purpose in 2010.
          </motion.p>
          <div className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              src="img/about.jpeg"
              alt=""
              className="h-auto w-full rounded-xl"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-raleway mt-5 items-center text-center font-semibold text-2xl"
          >
            Rebranding 2010
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-raleway my-3 text-justify text-sm"
          >
            We decided to rebrand the company as <span>GKD</span> (Graha Karya
            Dekorindo) following a change in ownership. To this day, our company
            continues to grow strong, serving numerous valuable clients from
            various industries.
          </motion.p>
          <div className="bg-[#184E25] px-5 py-2 rounded-xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-bold font-raleway text-center my-3"
            >
              Vision
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-raleway text-justify text-sm mb-3"
            >
              Positioned as a leading company specializing in personalized
              interior and exterior construction transforming clients functional
              and inspirational dreams into reality with joy and dedication.
            </motion.h1>
          </div>
          <div className="bg-[#184E25] px-5 py-2 rounded-xl text-white mt-5">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="my-3 font-bold font-raleway text-center"
            >
              Mission
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-3 font-raleway text-justify text-sm"
            >
              <li className="flex items-center gap-2">
                <span>•</span>
                <p>
                  Provide personalized interior and exterior construction
                  solutions that bring client's functional and inspirational
                  visions to life.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <p>
                  Deliver exceptional craftsmanship and innovative design with a
                  focus on quality and precision.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <p>
                  Ensure a joyful and dedicated experience for clients through
                  every phase of the project.
                </p>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>

      {/* Mode MD */}

      <div className="hidden md:block px-10 lg:px-40 overflow-hidden">
        <div className="p-5"></div>
        <div className="md:grid grid-cols-3 gap-10">
          {/* foto */}
          <div className="col-1">
            <div className="h-64 lg:h-72 w-full overflow-hidden rounded-xl">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                src="img/about.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-2 col-span-2 content-center"
          >
            <h1 className="font-raleway lg:text-xl">About Us</h1>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-1">
                <h1 className="font-raleway text-2xl lg:text-3xl font-semibold mb-3">
                  Founded 1994
                </h1>
                <p className="font-raleway text-sm lg:text-md">
                  Started as PP (Partisia Pramita). We emerged as the precise
                  solution in the interior design and contractor expert
                  industries. After more than 16 years and successfully
                  completing over{" "}
                  <span className="font-semibold">100,000 sqm</span> of
                  projects. We decided to embark on a larger purpose in 2010.
                </p>
              </div>
              <div className="col-1">
                <h1 className="font-raleway text-2xl lg:text-3xl font-semibold mb-3">
                  Rebrand 2010
                </h1>
                <p className="font-raleway text-sm lg:text-md">
                  We decided to rebrand the company as{" "}
                  <span className="font-semibold">GKD</span> (Graha Karya
                  Dekorindo) following a change in ownership. To this day, our
                  company continues to grow strong, serving numerous valuable
                  clients from various industries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Visi Misi */}
        <div className="grid grid-cols-2 items-start justify-center gap-10 mt-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=""
          >
            <div className="w-full bg-[#184E25] h-[2px] my-5"></div>
            <p className="text-center lg:text-2xl font-raleway mb-3 font-semibold">
              Vision
            </p>
            <p className="font-raleway text-justify lg:text-md">
              Positioned as a leading company specializing in personalized
              interior and exterior construction transforming clients functional
              and inspirational dreams into reality with joy and dedication.
            </p>
          </motion.div>
          <motion.div
            inital={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=""
          >
            <div className="w-full bg-[#184E25] h-[2px] my-5"></div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:text-2xl text-center font-raleway mb-3 font-semibold"
            >
              Mission
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:text-md space-y-3 font-raleway text-justify text-sm"
            >
              <li className="flex items-center gap-2">
                <span>•</span>
                <p>
                  Provide personalized interior and exterior construction
                  solutions that bring client's functional and inspirational
                  visions to life.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <p>
                  Deliver exceptional craftsmanship and innovative design with a
                  focus on quality and precision.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <p>
                  Ensure a joyful and dedicated experience for clients through
                  every phase of the project.
                </p>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
