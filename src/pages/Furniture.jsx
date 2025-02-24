"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";
import FurnitureA1 from "../assets/furniture/Furniture1-8/1.webp";
import FurnitureA2 from "../assets/furniture/Furniture1-8/2.webp";
import FurnitureA3 from "../assets/furniture/Furniture1-8/3.webp";
import FurnitureA4 from "../assets/furniture/Furniture1-8/4.webp";
import FurnitureA5 from "../assets/furniture/Furniture1-8/5.webp";
import FurnitureA6 from "../assets/furniture/Furniture1-8/6.webp";
import FurnitureA7 from "../assets/furniture/Furniture1-8/7.webp";
import FurnitureA8 from "../assets/furniture/Furniture1-8/8.webp";


import FurnitureB1 from "../assets/furniture/Furniture2-8/1.webp";
import FurnitureB2 from "../assets/furniture/Furniture2-8/2.webp";
import FurnitureB3 from "../assets/furniture/Furniture2-8/3.webp";
import FurnitureB4 from "../assets/furniture/Furniture2-8/4.webp";
import FurnitureB5 from "../assets/furniture/Furniture2-8/5.webp";
import FurnitureB6 from "../assets/furniture/Furniture2-8/6.webp";
import FurnitureB7 from "../assets/furniture/Furniture2-8/7.webp";
import FurnitureB8 from "../assets/furniture/Furniture2-8/8.webp";


import FurnitureC1 from "../assets/furniture/Furniture3-8/1.webp";
import FurnitureC2 from "../assets/furniture/Furniture3-8/2.webp";
import FurnitureC3 from "../assets/furniture/Furniture3-8/3.webp";
import FurnitureC4 from "../assets/furniture/Furniture3-8/4.webp";
import FurnitureC5 from "../assets/furniture/Furniture3-8/5.webp";
import FurnitureC6 from "../assets/furniture/Furniture3-8/6.webp";
import FurnitureC7 from "../assets/furniture/Furniture3-8/7.webp";
import FurnitureC8 from "../assets/furniture/Furniture3-8/8.webp";

import FurnitureD1 from "../assets/furniture/Furniture4-9/1.webp";
import FurnitureD2 from "../assets/furniture/Furniture4-9/2.webp";
import FurnitureD3 from "../assets/furniture/Furniture4-9/3.webp";
import FurnitureD4 from "../assets/furniture/Furniture4-9/4.webp";
import FurnitureD5 from "../assets/furniture/Furniture4-9/5.webp";
import FurnitureD6 from "../assets/furniture/Furniture4-9/6.webp";
import FurnitureD7 from "../assets/furniture/Furniture4-9/7.webp";
import FurnitureD8 from "../assets/furniture/Furniture4-9/8.webp";
import FurnitureD9 from "../assets/furniture/Furniture4-9/9.webp";

const FurnitureA = [
  FurnitureA1,
  FurnitureA2,
  FurnitureA3,
  FurnitureA4,
  FurnitureA5,
  FurnitureA6,
  FurnitureA7,
  FurnitureA8,
];

const FurnitureB = [
  FurnitureB1,
  FurnitureB2,
  FurnitureB3,
  FurnitureB4,
  FurnitureB5,
  FurnitureB6,
  FurnitureB7,
  FurnitureB8,
];

const FurnitureC = [
  FurnitureC1,
  FurnitureC2,
  FurnitureC3,
  FurnitureC4,
  FurnitureC5,
  FurnitureC6,
  FurnitureC7,
  FurnitureC8, 
];

const FurnitureD = [
  FurnitureD1,
  FurnitureD2,
  FurnitureD3,
  FurnitureD4,
  FurnitureD5,
  FurnitureD6,
  FurnitureD7,
  FurnitureD8,
  FurnitureD9,
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
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${FurnitureA1})` }}>
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={FurnitureA}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${FurnitureB1})` }}>
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={FurnitureB}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${FurnitureC1})` }}>
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={FurnitureC}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${FurnitureD1})` }}>
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={FurnitureD}/>
              </div>
            </div>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Furniture;
