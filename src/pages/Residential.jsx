"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";
import residential1 from "../assets/residential/1/1.jpg"
import residential2 from "../assets/residential/1/2.jpg"
import residential3 from "../assets/residential/1/3.jpg"
import residential4 from "../assets/residential/1/4.jpg"
import residential5 from "../assets/residential/1/5.jpg"
import residential6 from "../assets/residential/1/6.jpg"
import residential7 from "../assets/residential/1/7.jpg"
import residential21 from "../assets/residential/2/1.jpg"
import residential22 from "../assets/residential/2/2.jpg"
import residential23 from "../assets/residential/2/3.jpg"
import residential24 from "../assets/residential/2/4.jpg"
import residential25 from "../assets/residential/2/5.jpg"
import residential26 from "../assets/residential/2/6.jpg"
import residential31 from "../assets/residential/3/1.jpg"
import residential32 from "../assets/residential/3/2.jpg"
import residential33 from "../assets/residential/3/3.jpg"
import residential34 from "../assets/residential/3/4.jpg"
import residential35 from "../assets/residential/3/5.jpg"
import residential36 from "../assets/residential/3/6.jpg"
import residential37 from "../assets/residential/3/7.jpg"


const residential1Images = [
  residential1,
  residential2,
  residential3,
  residential4,
  residential5,
  residential6,
  residential7,
];

const residential2Images = [
  residential21,
  residential22,
  residential23,
  residential24,
  residential25,
  residential26
];

const residential3Images = [
  residential31,
  residential32,
  residential33,
  residential34,
  residential35,
  residential36,
  residential37
];

const Residential = () => {
  const fullpageOptions = {
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    easingcss3: "ease-in-out",
    credits: { enabled: false },
    navigation: true, // Enable navigation dots if needed
  };

  return (
    <div className="wrapper  flex items-center justify-center">
      <Sidebar />
      <ReactFullpage
        {...fullpageOptions}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section  bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${residential1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={residential1Images}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${residential2})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={residential2Images}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={residential3Images}/>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Residential;
