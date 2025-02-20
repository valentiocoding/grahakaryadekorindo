"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";

import fhouse1 from "../assets/residential/FHouse-6/1.webp";
import fhouse2 from "../assets/residential/FHouse-6/2.webp";
import fhouse3 from "../assets/residential/FHouse-6/3.webp";
import fhouse4 from "../assets/residential/FHouse-6/4.webp";
import fhouse5 from "../assets/residential/FHouse-6/5.webp";
import fhouse6 from "../assets/residential/FHouse-6/6.webp";

import gplex1 from "../assets/residential/GPlex-6/1.webp";
import gplex2 from "../assets/residential/GPlex-6/2.webp";
import gplex3 from "../assets/residential/GPlex-6/3.webp";
import gplex4 from "../assets/residential/GPlex-6/4.webp";
import gplex5 from "../assets/residential/GPlex-6/5.webp";
import gplex6 from "../assets/residential/GPlex-6/6.webp";

import kitchen1 from "../assets/residential/Kitchen-11/1.webp";
import kitchen2 from "../assets/residential/Kitchen-11/2.webp";
import kitchen3 from "../assets/residential/Kitchen-11/3.webp";
import kitchen4 from "../assets/residential/Kitchen-11/4.webp";
import kitchen5 from "../assets/residential/Kitchen-11/5.webp";
import kitchen6 from "../assets/residential/Kitchen-11/6.webp";
import kitchen7 from "../assets/residential/Kitchen-11/7.webp";
import kitchen8 from "../assets/residential/Kitchen-11/8.webp";
import kitchen9 from "../assets/residential/Kitchen-11/9.webp";
import kitchen10 from "../assets/residential/Kitchen-11/10.webp";
import kitchen11 from "../assets/residential/Kitchen-11/11.webp";

import wardrobe1 from "../assets/residential/Wardrobe-9/1.webp";
import wardrobe2 from "../assets/residential/Wardrobe-9/2.webp";
import wardrobe3 from "../assets/residential/Wardrobe-9/3.webp";
import wardrobe4 from "../assets/residential/Wardrobe-9/4.webp";
import wardrobe5 from "../assets/residential/Wardrobe-9/5.webp";
import wardrobe6 from "../assets/residential/Wardrobe-9/6.webp";
import wardrobe7 from "../assets/residential/Wardrobe-9/7.webp";
import wardrobe8 from "../assets/residential/Wardrobe-9/8.webp";
import wardrobe9 from "../assets/residential/Wardrobe-9/9.webp";

import whhouse1 from "../assets/residential/WhHouse-7/1.webp";
import whhouse2 from "../assets/residential/WhHouse-7/2.webp";
import whhouse3 from "../assets/residential/WhHouse-7/3.webp";
import whhouse4 from "../assets/residential/WhHouse-7/4.webp";
import whhouse5 from "../assets/residential/WhHouse-7/5.webp";
import whhouse6 from "../assets/residential/WhHouse-7/6.webp";
import whhouse7 from "../assets/residential/WhHouse-7/7.webp";

const fhouse = [fhouse1, fhouse2, fhouse3, fhouse4, fhouse5, fhouse6];

const gplex = [gplex1, gplex2, gplex3, gplex4, gplex5, gplex6];

const kitchen = [
  kitchen1,
  kitchen2,
  kitchen3,
  kitchen4,
  kitchen5,
  kitchen6,
  kitchen7,
  kitchen8,
  kitchen9,
  kitchen10,
  kitchen11,
];

const wardrobe = [
  wardrobe1,
  wardrobe2,
  wardrobe3,
  wardrobe4,
  wardrobe5,
  wardrobe6,
  wardrobe7,
  wardrobe8,
  wardrobe9,
];

const whhouse = [
  whhouse1,
  whhouse2,
  whhouse3,
  whhouse4,
  whhouse5,
  whhouse6,
  whhouse7,
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
            {/* Fhouse */}
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${fhouse1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={fhouse} />
              </div>
            </div>
            {/* kitchen */}
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${kitchen1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={kitchen} />
              </div>
            </div>
            {/* wardrobe */}
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${wardrobe1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={wardrobe} />
              </div>
            </div>
            {/* whhouse */}
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${whhouse1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={whhouse} />
              </div>
            </div>

            {/* gplex */}
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${gplex1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={gplex} />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Residential;
