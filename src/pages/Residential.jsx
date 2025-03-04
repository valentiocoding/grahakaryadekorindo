"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import SecondCarousel from "./SecondCarousel";

import ahouse1 from "../assets/residential/AHouse-2/1.webp";
import ahouse2 from "../assets/residential/AHouse-2/2.webp";

import bihouse1 from "../assets/residential/BIHouse-3/1.webp";
import bihouse2 from "../assets/residential/BIHouse-3/2.webp";
import bihouse3 from "../assets/residential/BIHouse-3/3.webp";

import fdhouse1 from "../assets/residential/FDHouse-3/1.webp";
import fdhouse2 from "../assets/residential/FDHouse-3/2.webp";
import fdhouse3 from "../assets/residential/FDHouse-3/3.webp";

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

import jhouse1 from "../assets/residential/JHouse-3/1.webp";
import jhouse2 from "../assets/residential/JHouse-3/2.webp";
import jhouse3 from "../assets/residential/JHouse-3/3.webp";

import jshouse1 from "../assets/residential/JSHouse-3/1.webp";
import jshouse2 from "../assets/residential/JSHouse-3/2.webp";
import jshouse3 from "../assets/residential/JSHouse-3/3.webp";

import lhouse1 from "../assets/residential/LHouse-3/1.webp";
import lhouse2 from "../assets/residential/LHouse-3/2.webp";
import lhouse3 from "../assets/residential/LHouse-3/3.webp";

import lmhouse1 from "../assets/residential/LMHouse-3/1.webp";
import lmhouse2 from "../assets/residential/LMHouse-3/2.webp";
import lmhouse3 from "../assets/residential/LMHouse-3/3.webp";

import mhhouse1 from "../assets/residential/MHHouse-2/1.webp";
import mhhouse2 from "../assets/residential/MHHouse-2/2.webp";

import rwhouse1 from "../assets/residential/RWHouse-3/1.webp";
import rwhouse2 from "../assets/residential/RWHouse-3/2.webp";
import rwhouse3 from "../assets/residential/RWHouse-3/3.webp";

import whhouse1 from "../assets/residential/WhHouse-7/1.webp";
import whhouse2 from "../assets/residential/WhHouse-7/2.webp";
import whhouse3 from "../assets/residential/WhHouse-7/3.webp";
import whhouse4 from "../assets/residential/WhHouse-7/4.webp";
import whhouse5 from "../assets/residential/WhHouse-7/5.webp";
import whhouse6 from "../assets/residential/WhHouse-7/6.webp";
import whhouse7 from "../assets/residential/WhHouse-7/7.webp";

import zjhouse1 from "../assets/residential/ZJHouse-3/1.webp";
import zjhouse2 from "../assets/residential/ZJHouse-3/2.webp";
import zjhouse3 from "../assets/residential/ZJHouse-3/3.webp";

const ahouse = [ahouse1, ahouse2];

const bihouse = [bihouse1, bihouse2, bihouse3];

const fdhouse = [fdhouse1, fdhouse2, fdhouse3];

const fhouse = [
  fhouse1,
  fhouse2,
  fhouse3,
  fhouse4,
  fhouse5,
  fhouse6,
  fhouse7,
  fhouse8,
  fhouse9,
  fhouse10,
  fhouse11,
  fhouse12,
  fhouse13,
  fhouse14,
  fhouse15,
];

const jhouse = [jhouse1, jhouse2, jhouse3];

const jshouse = [jshouse1, jshouse2, jshouse3];

const lhouse = [lhouse1, lhouse2, lhouse3];

const lmhouse = [lmhouse1, lmhouse2, lmhouse3];

const mhhouse = [mhhouse1, mhhouse2];
const rwhouse = [rwhouse1, rwhouse2, rwhouse3];

const whhouse = [
  whhouse1,
  whhouse2,
  whhouse3,
  whhouse4,
  whhouse5,
  whhouse6,
  whhouse7,
];

const zjhouse = [zjhouse1, zjhouse2, zjhouse3];

const Residential = () => {
  const fullpageOptions = {
    scrollingSpeed: 800,
    licenseKey: "gplv3-license",
    easingcss3: "ease-in-out",
    credits: { enabled: false },
    responsiveWidth: 768,
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
                  images={ahouse}
                  location={"A House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={bihouse}
                  location={"BI House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={fdhouse}
                  location={"FD House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={fhouse}
                  location={"F HOUSE"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={jhouse}
                  location={"J HOUSE"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={jshouse}
                  location={"JS House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={lhouse}
                  location={"L House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={lmhouse}
                  location={"LM House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={mhhouse}
                  location={"MH House"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={rwhouse}
                  location={"RW House"}
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
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={zjhouse}
                  location={"ZJ HOUSE"}
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
