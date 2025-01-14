import React from "react";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-raleway text-center py-2">Expert Contractor For</h1>
      <Carousel />
      <h3 className="font-raleway items-center text-center mt-10">About Us</h3>
      <h1 className="font-raleway items-center text-center font-semibold text-2xl">Founded 1994</h1>
      <p className="font-raleway m-5 text-justify">Started as PP (Partisia Pramita). We emerged as the precise solution in the interior design and contractor expert industries. After more than 16 years and successfully completing over <span className="font-semibold">100,000 sqm</span> of projects. We decided to embark on a larger purpose in 2010.</p>
      <img src="/home.png" alt="" className="h-48 w-full mx-5 rounded-xl" />
      <h1 className="font-raleway mt-5 items-center text-center font-semibold text-2xl">Rebranding 2010</h1>
      <p className="font-raleway m-5 text-justify">We decided to rebrand the company as <span>GKD</span> (Graha Karya Dekorindo) following a change in ownership. To this day, our company continues to grow strong, serving numerous valuable clients from various industries.</p>
      <div className="grid grid-cols-2">
        <div className="col1">
          <h1 className="font-bold font-raleway text-center">Vision</h1>
          <h1 className="font-raleway text-sm text-justify">Positioned as a leading company specializing in personalized interior and exterior construction transforming clients functional and inspirational dreams into reality with joy and dedication.</h1>
        </div>
        <div className="col2">
          <h1 className=" font-raleway font-bold">Mission</h1>
        </div>

      </div>
    </div>
  );
};

export default About;
