"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";

const furniture1Images = [
  '/furniture/1/1.jpg',
  '/furniture/1/2.jpg',
  '/furniture/1/3.jpg',
  '/furniture/1/4.jpg',
  '/furniture/1/5.jpg',
  '/furniture/1/6.jpg',
  '/furniture/1/7.jpg',
];


const Furniture = () => {
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
            <div className="section bg-[url('/booth/1/3.jpg')] bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={furniture1Images}/>
              </div>
            </div>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Furniture;
