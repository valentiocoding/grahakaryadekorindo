"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";

const residential1Images = [
  '/residential/1/1.jpg',
  '/residential/1/2.jpg',
  '/residential/1/3.jpg',
  '/residential/1/4.jpg',
  '/residential/1/5.jpg',
  '/residential/1/6.jpg',
  '/residential/1/7.jpg',
];

const residential2Images = [
  '/residential/2/1.jpg',
  '/residential/2/2.jpg',
  '/residential/2/3.jpg',
  '/residential/2/4.jpg',
  '/residential/2/5.jpg',
  '/residential/2/6.jpg',
];

const residential3Images = [
  '/residential/3/1.jpg',
  '/residential/3/2.jpg',
  '/residential/3/3.jpg',
  '/residential/3/4.jpg',
  '/residential/3/5.jpg',
  '/residential/3/6.jpg',
  '/residential/3/7.jpg',
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
            <div className="section bg-[url('/img/about.jpeg')] bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={residential1Images}/>
              </div>
            </div>
            <div className="section bg-[url('/office/2/4.jpg')] bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={residential2Images}/>
              </div>
            </div>
            <div className="section bg-[url('/office/2/4.jpg')] bg-cover bg-center h-full w-screen">
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
