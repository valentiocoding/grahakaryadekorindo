"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";

const office1Images = [
  '/office/1/1.jpg',
  '/office/1/2.jpg',
  '/office/1/3.jpg',
  '/office/1/4.jpg',
  '/office/1/5.jpg',
];

const office2Images = [
  '/office/2/1.jpg',
  '/office/2/2.jpg',
  '/office/2/3.jpg',
  '/office/2/4.jpg',
  '/office/2/5.jpg',
];

const office3Images = [
  '/office/3/1.jpg',
  '/office/3/2.jpg',
  '/office/3/3.jpg',
  '/office/3/2.jpg',
];

const Office = () => {
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
                <Carousel images={office1Images}/>
              </div>
            </div>
            <div className="section bg-[url('/office/2/4.jpg')] bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={office2Images}/>
              </div>
            </div>
            <div className="section bg-[url('/office/2/4.jpg')] bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={office3Images}/>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Office;
