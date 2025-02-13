import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";
import about1 from "../assets/img/about.jpeg";

const About = () => {
  return (
    <>
      <div className="sm:mx-10 md:hidden">
        <div className="flex flex-col justify-center items-center mx-5">
          <h3
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="font-raleway items-center text-center mt-10"
          >
            About Us
          </h3>
          <h1
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="font-raleway items-center text-center font-semibold text-2xl"
          >
            Founded 1994
          </h1>
          <p
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="font-raleway my-3 text-justify text-sm"
          >
            Started as PP (Partisia Pramita). We emerged as the precise solution
            in the interior design and contractor expert industries. After more
            than 16 years and successfully completing over{" "}
            <span className="font-semibold">100,000 sqm</span> of projects. We
            decided to embark on a larger purpose in 2010.
          </p>
          <div className="h-48 w-full overflow-hidden flex justify-center items-center rounded-xl">
            <img
              // initial={{ opacity: 0, y: 50 }}
              // transition={{ duration: 1 }}
              // whileInView={{ opacity: 1, y: 0 }}
              src={about1}
              alt=""
              viewport={{ once: true }}
              className="h-auto w-full rounded-xl"
              loading="lazy"
            />
          </div>
          <h1
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="font-raleway mt-5 items-center text-center font-semibold text-2xl"
          >
            Rebranding 2010
          </h1>
          <p
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="font-raleway my-3 text-justify text-sm"
          >
            We decided to rebrand the company as <span>GKD</span> (Graha Karya
            Dekorindo) following a change in ownership. To this day, our company
            continues to grow strong, serving numerous valuable clients from
            various industries.
          </p>
          <div
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="bg-[#184E25] px-5 py-2 rounded-xl text-white"
          >
            <h1 className="font-bold font-raleway text-center my-3">Vision</h1>
            <h1 className="font-raleway text-justify text-sm mb-3">
              Positioned as a leading company specializing in personalized
              interior and exterior construction transforming clients functional
              and inspirational dreams into reality with joy and dedication.
            </h1>
          </div>
          <div
            // initial={{ opacity: 0, y: 50 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="bg-[#184E25] px-5 py-2 rounded-xl text-white mt-5"
          >
            <h1 className="my-3 font-bold font-raleway text-center">Mission</h1>
            <ul className="space-y-3 font-raleway text-justify text-sm">
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
            </ul>
          </div>
        </div>
      </div>

      {/* Mode MD */}

      <div className="hidden md:block px-10 lg:px-40 overflow-hidden">
        <div
          // initial={{ opacity: 0, y: 50 }}
          // transition={{ duration: 1 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="md:grid grid-cols-3 gap-10 p-5"
        >
          {/* foto */}
          <div className="col-1">
            <div className="h-64 lg:h-72 w-full overflow-hidden rounded-xl">
              <img
                src={about1}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-2 col-span-2 content-center">
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
          </div>
        </div>
        {/* Visi Misi */}
        <div
          // initial={{ opacity: 0, y: 50 }}
          // transition={{ duration: 1 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="grid grid-cols-2 items-start justify-center gap-10 mt-5"
        >
          <div className="">
            <div className="w-full bg-[#184E25] h-[2px] my-5"></div>
            <p className="text-center lg:text-2xl font-raleway mb-3 font-semibold">
              Vision
            </p>
            <p className="font-raleway text-justify lg:text-md">
              Positioned as a leading company specializing in personalized
              interior and exterior construction transforming clients functional
              and inspirational dreams into reality with joy and dedication.
            </p>
          </div>
          <div className="">
            <div className="w-full bg-[#184E25] h-[2px] my-5"></div>
            <p className="lg:text-2xl text-center font-raleway mb-3 font-semibold">
              Mission
            </p>
            <ul className="lg:text-md space-y-3 font-raleway text-justify text-sm">
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
