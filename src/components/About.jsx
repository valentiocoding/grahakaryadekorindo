import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5">
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="font-raleway text-center py-2"
      >
        Expert Contractor For
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Carousel />
      </motion.div>

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
        Started as PP (Partisia Pramita). We emerged as the precise solution in
        the interior design and contractor expert industries. After more than 16
        years and successfully completing over{" "}
        <span className="font-semibold">100,000 sqm</span> of projects. We
        decided to embark on a larger purpose in 2010.
      </motion.p>
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src="/home.png"
        alt=""
        className="h-48 w-full rounded-xl"
      />
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
        continues to grow strong, serving numerous valuable clients from various
        industries.
      </motion.p>
      <motion.h1 className="font-bold font-raleway text-center my-3">
        Vision
      </motion.h1>
      <motion.h1 className="font-raleway text-justify text-sm mb-3">
        Positioned as a leading company specializing in personalized interior
        and exterior construction transforming clients functional and
        inspirational dreams into reality with joy and dedication.
      </motion.h1>
      <motion.h1 className="my-3 font-bold font-raleway text-center">
        Mission
      </motion.h1>
      <motion.ul className="space-y-3 font-raleway text-justify text-sm">
        <li className="flex items-center gap-2">
          <span>•</span>
          <p>
            Provide personalized interior and exterior construction solutions
            that bring client's functional and inspirational visions to life.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <span>•</span>
          <p>
            Deliver exceptional craftsmanship and innovative design with a focus
            on quality and precision.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <span>•</span>
          <p>
            Ensure a joyful and dedicated experience for clients through every
            phase of the project.
          </p>
        </li>
      </motion.ul>
    </div>
  );
};

export default About;
