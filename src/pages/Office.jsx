"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import SecondCarousel from "./SecondCarousel";

import BinusA1 from "../assets/office/BinusA-18/crop/1.webp";
import BinusA2 from "../assets/office/BinusA-18/crop/2.webp";
import BinusA3 from "../assets/office/BinusA-18/crop/3.webp";
import BinusA4 from "../assets/office/BinusA-18/crop/4.webp";
import BinusA5 from "../assets/office/BinusA-18/crop/5.webp";
import BinusA7 from "../assets/office/BinusA-18/crop/7.webp";
import BinusA8 from "../assets/office/BinusA-18/crop/8.webp";
import BinusA9 from "../assets/office/BinusA-18/crop/9.webp";
import BinusA10 from "../assets/office/BinusA-18/crop/10.webp";
import BinusA11 from "../assets/office/BinusA-18/crop/11.webp";
import BinusA12 from "../assets/office/BinusA-18/crop/12.webp";
import BinusA15 from "../assets/office/BinusA-18/crop/15.webp";
import BinusA16 from "../assets/office/BinusA-18/crop/16.webp";
import BinusA17 from "../assets/office/BinusA-18/crop/17.webp";
import BinusA18 from "../assets/office/BinusA-18/crop/18.webp";

import BinusB1 from "../assets//office/BinusB-1/1.webp";

import BinusC1 from "../assets//office/BinusC-13/1.webp";
import BinusC2 from "../assets//office/BinusC-13/2.webp";
import BinusC3 from "../assets//office/BinusC-13/3.webp";
import BinusC4 from "../assets//office/BinusC-13/4.webp";
import BinusC5 from "../assets//office/BinusC-13/5.webp";
import BinusC6 from "../assets//office/BinusC-13/6.webp";
import BinusC7 from "../assets//office/BinusC-13/7.webp";
import BinusC8 from "../assets//office/BinusC-13/8.webp";
import BinusC9 from "../assets//office/BinusC-13/9.webp";
import BinusC10 from "../assets//office/BinusC-13/10.webp";
import BinusC11 from "../assets//office/BinusC-13/11.webp";
import BinusC12 from "../assets//office/BinusC-13/12.webp";
import BinusC13 from "../assets//office/BinusC-13/13.webp";

import BinusD1 from "../assets//office/BinusD-1/1.webp";

import BinusE1 from "../assets//office/BinusE-2/1.webp";
import BinusE2 from "../assets//office/BinusE-2/2.webp";

import BinusF1 from "../assets//office/BinusF-4/1.webp";
import BinusF2 from "../assets//office/BinusF-4/2.webp";
import BinusF3 from "../assets//office/BinusF-4/3.webp";
import BinusF4 from "../assets//office/BinusF-4/4.webp";

import BinusG1 from "../assets//office/BinusG-4/1.webp";
import BinusG2 from "../assets//office/BinusG-4/2.webp";
import BinusG3 from "../assets//office/BinusG-4/3.webp";
import BinusG4 from "../assets//office/BinusG-4/4.webp";

import BinusH1 from "../assets//office/BinusH-5/1.webp";
import BinusH2 from "../assets//office/BinusH-5/2.webp";
import BinusH3 from "../assets//office/BinusH-5/3.webp";
import BinusH4 from "../assets//office/BinusH-5/4.webp";
import BinusH5 from "../assets//office/BinusH-5/5.webp";

import BinusI1 from "../assets//office/BinusI-2/1.webp";
import BinusI2 from "../assets//office/BinusI-2/2.webp";

import BinusJ1 from "../assets//office/BinusJ-2/1.webp";
import BinusJ2 from "../assets//office/BinusJ-2/2.webp";

import CnF1 from "../assets//office/CnF-5/1.webp";
import CnF2 from "../assets//office/CnF-5/2.webp";
import CnF3 from "../assets//office/CnF-5/3.webp";
import CnF4 from "../assets//office/CnF-5/4.webp";
import CnF5 from "../assets//office/CnF-5/5.webp";

import Dikai1 from "../assets//office/Dikai-7/1.webp";
import Dikai2 from "../assets//office/Dikai-7/2.webp";
import Dikai3 from "../assets//office/Dikai-7/3.webp";
import Dikai4 from "../assets//office/Dikai-7/4.webp";
import Dikai5 from "../assets//office/Dikai-7/5.webp";
import Dikai6 from "../assets//office/Dikai-7/6.webp";
import Dikai7 from "../assets//office/Dikai-7/7.webp";

import VTOffice1 from "../assets//office/VTOffice-6/1.webp";
import VTOffice2 from "../assets//office/VTOffice-6/2.webp";
import VTOffice3 from "../assets//office/VTOffice-6/3.webp";
import VTOffice4 from "../assets//office/VTOffice-6/4.webp";
import VTOffice5 from "../assets//office/VTOffice-6/5.webp";
import VTOffice6 from "../assets//office/VTOffice-6/6.webp";

import Xander1 from "../assets//office/Xander-12/1.webp";
import Xander2 from "../assets//office/Xander-12/2.webp";
import Xander3 from "../assets//office/Xander-12/3.webp";
import Xander4 from "../assets//office/Xander-12/4.webp";
import Xander5 from "../assets//office/Xander-12/5.webp";
import Xander6 from "../assets//office/Xander-12/6.webp";
import Xander7 from "../assets//office/Xander-12/7.webp";
import Xander8 from "../assets//office/Xander-12/8.webp";
import Xander9 from "../assets//office/Xander-12/9.webp";
import Xander10 from "../assets//office/Xander-12/10.webp";
import Xander11 from "../assets//office/Xander-12/11.webp";
import Xander12 from "../assets//office/Xander-12/12.webp";

import gplex1 from "../assets/office/GPlex-6/1.webp";
import gplex2 from "../assets/office/GPlex-6/2.webp";
import gplex3 from "../assets/office/GPlex-6/3.webp";
import gplex4 from "../assets/office/GPlex-6/4.webp";
import gplex5 from "../assets/office/GPlex-6/5.webp";
import gplex6 from "../assets/office/GPlex-6/6.webp";

const gplex = [gplex1, gplex2, gplex3, gplex4, gplex5, gplex6];

const BinusA = [
  BinusA1,
  BinusA2,
  BinusA3,
  BinusA4,
  BinusA5,
  BinusA7,
  BinusA8,
  BinusA9,
  BinusA10,
  BinusA11,
  BinusA12,
  BinusA15,
  BinusA16,
  BinusA17,
  BinusA18,
];

const BinusB = [BinusB1];

const BinusC = [
  BinusC1,
  BinusC2,
  BinusC3,
  BinusC4,
  BinusC5,
  BinusC6,
  BinusC7,
  BinusC8,
  BinusC9,
  BinusC10,
  BinusC11,
  BinusC12,
  BinusC13,
];

const BinusD = [BinusD1];

const BinusE = [BinusE1, BinusE2];

const BinusF = [BinusF1, BinusF2, BinusF3, BinusF4];
const BinusG = [BinusG1, BinusG2, BinusG3, BinusG4];
const BinusH = [BinusH1, BinusH2, BinusH3, BinusH4, BinusH5];
const BinusI = [BinusI1, BinusI2];
const BinusJ = [BinusJ1, BinusJ2];

const CnF = [CnF1, CnF2, CnF3, CnF4, CnF5];

const Dikai = [Dikai1, Dikai2, Dikai3, Dikai4, Dikai5, Dikai6, Dikai7];

const VTOffice = [
  VTOffice1,
  VTOffice2,
  VTOffice3,
  VTOffice4,
  VTOffice5,
  VTOffice6,
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
  Xander12,
];

const Office = () => {
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
                  images={BinusA}
                  location={"SEMARANG"}
                  judul={"BINUS International University & School"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusB}
                  location={"BEKASI"}
                  judul={"BINUS University"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={gplex}
                  location={"GPLEX"}
                  judul={"GRAHA KARYA DEKORINDO"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusC}
                  location={"JAKARTA"}
                  judul={"BINUS University (JWC Campus)"}
                />
              </div>
            </div>
            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusD}
                  location={"BANDUNG"}
                  judul={"BINUS University"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusE}
                  location={"JAKARTA"}
                  judul={"BINUS University FX Sudirman"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusF}
                  location={"TANGERANG"}
                  judul={"BINUS University Mall Alam Sutera"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusG}
                  location={"MEDAN"}
                  judul={"BINUS University"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusH}
                  location={"JAKARTA"}
                  judul={"BINUS University RTTO Office"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusI}
                  location={"BEKASI"}
                  judul={"BINUS University Summarecon"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusJ}
                  location={"SURABAYA"}
                  judul={"BINUS University"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={CnF}
                  location={"JAKARTA"}
                  judul={"C&F OFFICE"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={Dikai}
                  location={"JAKARTA"}
                  judul={"Dikai Technology Indonesia Jakarta"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={VTOffice}
                  location={"JAKARTA"}
                  judul={"VT Office (PIK)"}
                />
              </div>
            </div>

            <div className="section h-screen w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={Xander}
                  location={"JAKARTA"}
                  judul={"Xander Creative Agency"}
                />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Office;
