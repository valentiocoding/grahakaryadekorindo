"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";
import SecondCarousel from "./SecondCarousel";

import BinusA1 from "../assets/office/BinusA-18/1.webp";
import BinusA2 from "../assets/office/BinusA-18/2.webp";
import BinusA3 from "../assets/office/BinusA-18/3.webp";
import BinusA4 from "../assets/office/BinusA-18/4.webp";
import BinusA5 from "../assets/office/BinusA-18/5.webp";
import BinusA6 from "../assets/office/BinusA-18/6.webp";
import BinusA7 from "../assets/office/BinusA-18/7.webp";
import BinusA8 from "../assets/office/BinusA-18/8.webp";
import BinusA9 from "../assets/office/BinusA-18/9.webp";
import BinusA10 from "../assets/office/BinusA-18/10.webp";
import BinusA11 from "../assets/office/BinusA-18/11.webp";
import BinusA12 from "../assets/office/BinusA-18/12.webp";
import BinusA13 from "../assets/office/BinusA-18/13.webp";
import BinusA14 from "../assets/office/BinusA-18/14.webp";
import BinusA15 from "../assets/office/BinusA-18/15.webp";
import BinusA16 from "../assets/office/BinusA-18/16.webp";
import BinusA17 from "../assets/office/BinusA-18/17.webp";
import BinusA18 from "../assets/office/BinusA-18/18.webp";

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

const BinusA = [
  BinusA1,
  BinusA2,
  BinusA3,
  BinusA4,
  BinusA5,
  BinusA6,
  BinusA7,
  BinusA8,
  BinusA9,
  BinusA10,
  BinusA11,
  BinusA12,
  BinusA13,
  BinusA14,
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
    scrollingSpeed: 500,
    licenseKey: "gplv3-license",
    easingcss3: "ease-in-out",
    credits: { enabled: false },
    // navigation: true, // Enable navigation dots if needed
  };

  return (
    <div className="wrapper  flex items-center justify-center">
      <Sidebar />
      <ReactFullpage
        {...fullpageOptions}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section h-full w-screen bg-cover bg-center">
              <div className="flex justify-center items-center">
                <SecondCarousel
                  images={BinusA}
                  location={"SEMARANG"}
                  judul={"BINUS International University & School"}
                />
              </div>
            </div>
            <div className="section bg-cover bg-center h-full w-screen">
              <div className=" flex justify-center backdrop-blur-sm w-screen h-screen items-center p-14">
                <div className="grid grid-cols-2 items-center justify-center">
                  <div className=" ">
                    <Carousel
                      images={BinusA}
                      judul={"BINUS International University & School"}
                      location={"SEMARANG"}
                    />
                  </div>
                  <div
                    className=" items-center justify-center flex flex-col backdrop-blur-lg h-screen"
                    style={{
                      backgroundImage: `url(${BinusA[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="h-full flex flex-col justify-center backdrop-blur-sm">
                      <div className="mb-10">
                        <h1 className="text-center font-raleway font-bold">
                          BINUS International University & School
                        </h1>
                        <p className=" text-center font-raleway">SEMARANG</p>
                      </div>
                      <p className="font-poppins text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae, quibusdam ipsam. Omnis, libero beatae? Inventore
                        ex aliquid iure ratione corrupti!Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Beatae, quibusdam
                        ipsam. Omnis, libero beatae? Inventore ex aliquid iure
                        ratione corrupti!Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Beatae, quibusdam ipsam. Omnis, libero
                        beatae? Inventore ex aliquid iure ratione corrupti!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusB1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusB}
                  location={"BEKASI"}
                  judul={"BINUS University"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusC1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusC}
                  location={"JAKARTA"}
                  judul={"BINUS University (JWC Campus)"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusD1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusD}
                  location={"BANDUNG"}
                  judul={"BINUS University"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusE1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusE}
                  location={"JAKARTA"}
                  judul={"BINUS University FX Sudirman"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusF1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusF}
                  location={"TANGERANG"}
                  judul={"BINUS University Mall Alam Sutera"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusG1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusG}
                  location={"MEDAN"}
                  judul={"BINUS University"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${BinusH1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel
                  images={BinusH}
                  location={"JAKARTA"}
                  judul={"BINUS University RTTO Office"}
                />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${CnF1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={CnF} />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${Dikai1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={Dikai} />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${VTOffice1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={VTOffice} />
              </div>
            </div>
            <div
              className="section bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${Xander1})` }}
            >
              <div className="flex backdrop-blur-sm w-screen h-screen items-center">
                <Carousel images={Xander} />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Office;
