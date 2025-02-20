// src/components/About.js
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import about1 from "../assets/img/about.webp";
import AnimatedDiv from "./AnimatedDiv"; // Import komponen animasi
import { div } from "framer-motion/client";

const About = () => {
  const missionList = useMemo(
    () => [
      "Provide personalized interior and exterior construction solutions that bring client's functional and inspirational visions to life.",
      "Deliver exceptional craftsmanship and innovative design with a focus on quality and precision.",
      "Ensure a joyful and dedicated experience for clients through every phase of the project.",
    ],
    []
  );

  return (
    <div>
      {/* Mobile Mode */}
      <AnimatedDiv className="sm:mx-10 md:hidden">
        <div className="flex flex-col justify-center items-center mx-5">
          <h3 className="font-raleway text-center mt-10">About Us</h3>
          <h1 className="font-raleway text-center font-semibold text-2xl">
            Founded 1994
          </h1>
          <p className="font-raleway my-3 text-justify text-sm">
            Started as PP (Partisia Pramita). We emerged as the precise solution
            in the interior design and contractor expert industries. After more
            than 16 years and successfully completing over <b>100,000 sqm</b> of
            projects. We decided to embark on a larger purpose in 2010.
          </p>

          {/* Image */}
          <AnimatedDiv
            delay={0.5}
            className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl"
          >
            <img
              src={about1}
              alt="About"
              className="h-auto w-full rounded-xl"
              loading="lazy"
            />
          </AnimatedDiv>

          <h1 className="font-raleway mt-5 text-center font-semibold text-2xl">
            Rebranding 2010
          </h1>
          <p className="font-raleway my-3 text-justify text-sm">
            We decided to rebrand the company as{" "}
            <span className="font-semibold">GKD</span> (Graha Karya Dekorindo)
            following a change in ownership. To this day, our company continues
            to grow strong, serving numerous valuable clients from various
            industries.
          </p>

          {/* Vision */}
          <AnimatedDiv
            delay={0.6}
            className="bg-[#184E25] px-5 py-2 rounded-xl text-white"
          >
            <h1 className="font-bold font-raleway text-center my-3">Vision</h1>
            <p className="font-raleway text-justify text-sm">
              Positioned as a leading company specializing in personalized
              interior and exterior construction transforming clients functional
              and insiprational dreams into reality with joy and dedication.
            </p>
          </AnimatedDiv>

          {/* Mission */}
          <AnimatedDiv
            delay={0.7}
            className="bg-[#184E25] px-5 py-2 rounded-xl text-white mt-5"
          >
            <h1 className="my-3 font-bold font-raleway text-center">Mission</h1>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3, delayChildren: 0.3 },
                },
              }}
              className="space-y-3 font-raleway text-justify text-sm"
            >
              {missionList.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-center gap-2"
                >
                  <span>•</span>
                  <p>{item}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedDiv>
        </div>
      </AnimatedDiv>

      {/* Desktop Mode */}
      <div className="hidden md:block px-10 lg:px-40 overflow-hidden">
        <div className="md:grid grid-cols-3 gap-10 p-5">
          {/* Image */}
          <div className="h-64 lg:h-72 w-full overflow-hidden rounded-xl">
            <img
              src={about1}
              alt="About"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <AnimatedDiv className="col-span-2 content-center">
            <h1 className="font-raleway lg:text-xl">About Us</h1>
            <div className="grid grid-cols-2 gap-10">
              <div>
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
              <div>
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
          </AnimatedDiv>
        </div>

        {/* Vision & Mission */}
        <AnimatedDiv
          delay={0.4}
          className="grid grid-cols-2 items-start justify-center gap-10 mt-5"
        >
          {["Vision", "Mission"].map((title, index) => (
            <div key={index}>
              <div className="w-full bg-[#184E25] h-[2px] my-5"></div>
              <p className="text-center lg:text-2xl font-raleway mb-3 font-semibold">
                {title}
              </p>
              <p className="font-raleway text-justify lg:text-md">
                {title === "Vision"
                  ? "Positioned as a leading company specializing in personalized interior and exterior construction transforming clients functional and inspirational dreams into reality with joy and dedication."
                  : missionList.map((item, i) => (
                      <ul className=" space-y-3 font-raleway text-justify">
                        <li className="flex items-top gap-2">
                          <span>•</span>
                          <p key={i}>{item}</p>
                        </li>
                      </ul>
                    ))}
              </p>
            </div>
          ))}
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default About;
