"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import SecondCarousel from "./SecondCarousel";

import bedroom1 from "../assets/residential/Bedroom-8/1.webp";
import bedroom2 from "../assets/residential/Bedroom-8/2.webp";
import bedroom3 from "../assets/residential/Bedroom-8/3.webp";
import bedroom4 from "../assets/residential/Bedroom-8/4.webp";
import bedroom5 from "../assets/residential/Bedroom-8/5.webp";
import bedroom6 from "../assets/residential/Bedroom-8/6.webp";
import bedroom7 from "../assets/residential/Bedroom-8/7.webp";
import bedroom8 from "../assets/residential/Bedroom-8/8.webp";

import fhouse1 from "../assets/residential/FHouse-15/1.webp";
import fhouse2 from "../assets/residential/FHouse-15/2.webp";
import fhouse3 from "../assets/residential/FHouse-15/3.webp";
import fhouse4 from "../assets/residential/FHouse-15/4.webp";
import fhouse5 from "../assets/residential/FHouse-15/5.webp";
import fhouse6 from "../assets/residential/FHouse-15/6.webp";
import fhouse7 from "../assets/residential/FHouse-15/7.webp";
import fhouse8 from "../assets/residential/FHouse-15/8.webp";
import fhouse9 from "../assets/residential/FHouse-15/9.webp";
import fhouse10 from "../assets/residential/FHouse-15/10.webp";
import fhouse11 from "../assets/residential/FHouse-15/11.webp";
import fhouse12 from "../assets/residential/FHouse-15/12.webp";
import fhouse13 from "../assets/residential/FHouse-15/13.webp";
import fhouse14 from "../assets/residential/FHouse-15/14.webp";
import fhouse15 from "../assets/residential/FHouse-15/15.webp";



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

const bedroom = [bedroom1, bedroom2, bedroom3, bedroom4, bedroom5, bedroom6, bedroom7, bedroom8];

const fhouse = [fhouse1, fhouse2, fhouse3, fhouse4, fhouse5, fhouse6, fhouse7, fhouse8, fhouse9, fhouse10, fhouse11, fhouse12, fhouse13, fhouse14, fhouse15];





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
    scrollingSpeed: 800,
    licenseKey: "gplv3-license",
    easingcss3: "ease-in-out",
    credits: { enabled: false },
    responsiveWidth: 768
    // navigation: true, // Enable navigation dots if needed
  };

  return (
    <div className="wrapper  flex items-center justify-center">
      <Sidebar />
      <ReactFullpage
        {...fullpageOptions}
        render={() => (
          <ReactFullpage.Wrapper>
           <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={bedroom}
                  location={"BEDROOM"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
           <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={fhouse}
                  location={"FH HOUSE"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
           
           <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={kitchen}
                  location={"KITCHEN"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
           <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={wardrobe}
                  location={"WARDROBE"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
           <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={whhouse}
                  location={"WH HOUSE"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Residential;
