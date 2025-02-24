"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";

import BinusA1 from "../assets/office/BinusA-9/1.webp";
import BinusA2 from "../assets/office/BinusA-9/2.webp";
import BinusA3 from "../assets/office/BinusA-9/3.webp";
import BinusA4 from "../assets/office/BinusA-9/4.webp";
import BinusA5 from "../assets/office/BinusA-9/5.webp";
import BinusA6 from "../assets/office/BinusA-9/6.webp";
import BinusA7 from "../assets/office/BinusA-9/7.webp";
import BinusA8 from "../assets/office/BinusA-9/8.webp";
import BinusA9 from "../assets/office/BinusA-9/9.webp";

import BinusB1 from "../assets//office/BinusB-6/1.webp"
import BinusB2 from "../assets//office/BinusB-6/2.webp"
import BinusB3 from "../assets//office/BinusB-6/3.webp"
import BinusB4 from "../assets//office/BinusB-6/4.webp"
import BinusB5 from "../assets//office/BinusB-6/5.webp"
import BinusB6 from "../assets//office/BinusB-6/6.webp"

import BinusC1 from "../assets//office/BinusC-7/1.webp"
import BinusC2 from "../assets//office/BinusC-7/2.webp"
import BinusC3 from "../assets//office/BinusC-7/3.webp"
import BinusC4 from "../assets//office/BinusC-7/4.webp"
import BinusC5 from "../assets//office/BinusC-7/5.webp"
import BinusC6 from "../assets//office/BinusC-7/6.webp"
import BinusC7 from "../assets//office/BinusC-7/7.webp"

import BinusD1 from "../assets//office/BinusD-6/1.webp"
import BinusD2 from "../assets//office/BinusD-6/2.webp"
import BinusD3 from "../assets//office/BinusD-6/3.webp"
import BinusD4 from "../assets//office/BinusD-6/4.webp"
import BinusD5 from "../assets//office/BinusD-6/5.webp"
import BinusD6 from "../assets//office/BinusD-6/6.webp"

import CnF1 from "../assets//office/CnF-5/1.webp"
import CnF2 from "../assets//office/CnF-5/2.webp"
import CnF3 from "../assets//office/CnF-5/3.webp"
import CnF4 from "../assets//office/CnF-5/4.webp"
import CnF5 from "../assets//office/CnF-5/5.webp"

import Dikai1 from "../assets//office/Dikai-7/1.webp"
import Dikai2 from "../assets//office/Dikai-7/2.webp"
import Dikai3 from "../assets//office/Dikai-7/3.webp"
import Dikai4 from "../assets//office/Dikai-7/4.webp"
import Dikai5 from "../assets//office/Dikai-7/5.webp"
import Dikai6 from "../assets//office/Dikai-7/6.webp"
import Dikai7 from "../assets//office/Dikai-7/7.webp"

import VTOffice1 from "../assets//office/VTOffice-6/1.webp"
import VTOffice2 from "../assets//office/VTOffice-6/2.webp"
import VTOffice3 from "../assets//office/VTOffice-6/3.webp"
import VTOffice4 from "../assets//office/VTOffice-6/4.webp"
import VTOffice5 from "../assets//office/VTOffice-6/5.webp"
import VTOffice6 from "../assets//office/VTOffice-6/6.webp"

import Xander1 from "../assets//office/Xander-12/1.webp"
import Xander2 from "../assets//office/Xander-12/2.webp"
import Xander3 from "../assets//office/Xander-12/3.webp"
import Xander4 from "../assets//office/Xander-12/4.webp"
import Xander5 from "../assets//office/Xander-12/5.webp"
import Xander6 from "../assets//office/Xander-12/6.webp"
import Xander7 from "../assets//office/Xander-12/7.webp"
import Xander8 from "../assets//office/Xander-12/8.webp"
import Xander9 from "../assets//office/Xander-12/9.webp"
import Xander10 from "../assets//office/Xander-12/10.webp"
import Xander11 from "../assets//office/Xander-12/11.webp"
import Xander12 from "../assets//office/Xander-12/12.webp"

const BinusA = [
  BinusA1,
  BinusA2,
  BinusA3,
  BinusA4,
  BinusA5,
  BinusA6,
  BinusA7,
  BinusA8,
  BinusA9
];

const BinusB = [
  BinusB1,
  BinusB2,
  BinusB3,
  BinusB4,
  BinusB5,
  BinusB6
];

const BinusC = [
  BinusC1,
  BinusC2,
  BinusC3,
  BinusC4,
  BinusC5,
  BinusC6,
  BinusC7
];

const BinusD = [
  BinusD1,
  BinusD2,
  BinusD3,
  BinusD4,
  BinusD5,
  BinusD6
];

const CnF = [
  CnF1,
  CnF2,
  CnF3,
  CnF4,
  CnF5
];


const Dikai = [
  Dikai1,
  Dikai2,
  Dikai3,
  Dikai4,
  Dikai5,
  Dikai6,
  Dikai7
];

const VTOffice = [
  VTOffice1,
  VTOffice2,
  VTOffice3,
  VTOffice4,
  VTOffice5,
  VTOffice6
];

const Xander = [
  Xander1,
  Xander2,
  Xander3,
  Xander4,
  Xander5,
  Xander6,
  Xander7,
  Xander8,
  Xander9,
  Xander10,
  Xander11,
  Xander12 
]

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
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${BinusA1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={BinusA}/>
              </div>
            </div>
            <div className="section  bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${BinusB1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={BinusB}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${BinusC1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={BinusC}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${BinusD1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={BinusD}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${CnF1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={CnF}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${Dikai1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={Dikai}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${VTOffice1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={VTOffice}/>
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${Xander1})` }}>
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={Xander}/>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Office;
