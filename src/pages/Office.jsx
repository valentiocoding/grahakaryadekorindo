"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";

import office1 from "../assets/office/1/1.jpg"
import office2 from "../assets/office/1/2.jpg"
import office3 from "../assets/office/1/3.jpg"
import office4 from "../assets/office/1/4.jpg"
import office5 from "../assets/office/1/5.jpg"
import office12 from "../assets/office/2/1.jpg"
import office22 from "../assets/office/2/2.jpg"
import office32 from "../assets/office/2/3.jpg"
import office42 from "../assets/office/2/4.jpg"
import office52 from "../assets/office/2/5.jpg"
import office13 from "../assets/office/3/1.jpg"
import office23 from "../assets/office/3/2.jpg"
import office33 from "../assets/office/3/3.jpg"
import about from "../assets/img/about.webp"


const office1Images = [
  office1,
  office2,
  office3,
  office4,
  office5
];

const office2Images = [
  office12,
  office22,
  office32,
  office42,
  office52
];

const office3Images = [
  office13,
  office23,
  office33,
  office23
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
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${about})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={office1Images}/>
              </div>
            </div>
            <div className="section  bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${office42})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={office2Images}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${office23})` }}>
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
