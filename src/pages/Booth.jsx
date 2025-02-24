import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";
import Buzz1 from "../assets/booth/Buzz-2/1.webp";
import Buzz2 from "../assets/booth/Buzz-2/2.webp";

import Carrow1 from "../assets/booth/Carrow-14/1.webp";
import Carrow2 from "../assets/booth/Carrow-14/2.webp";
import Carrow3 from "../assets/booth/Carrow-14/3.webp";
import Carrow4 from "../assets/booth/Carrow-14/4.webp";
import Carrow5 from "../assets/booth/Carrow-14/5.webp";
import Carrow6 from "../assets/booth/Carrow-14/6.webp";
import Carrow7 from "../assets/booth/Carrow-14/7.webp";
import Carrow8 from "../assets/booth/Carrow-14/8.webp";
import Carrow9 from "../assets/booth/Carrow-14/9.webp";
import Carrow10 from "../assets/booth/Carrow-14/10.webp";
import Carrow11 from "../assets/booth/Carrow-14/11.webp";
import Carrow12 from "../assets/booth/Carrow-14/12.webp";
import Carrow13 from "../assets/booth/Carrow-14/13.webp";
import Carrow14 from "../assets/booth/Carrow-14/14.webp";

import CnF1 from "../assets/booth/CnF-3/1.webp";
import CnF2 from "../assets/booth/CnF-3/2.webp";
import CnF3 from "../assets/booth/CnF-3/3.webp";

import Oregon1 from "../assets/booth/Oregon-3/1.webp";
import Oregon2 from "../assets/booth/Oregon-3/2.webp";
import Oregon3 from "../assets/booth/Oregon-3/3.webp";

import Yasuka1 from "../assets/booth/Yasuka-1/1.webp";

const Buzz = [
  Buzz1, Buzz2,Buzz1, Buzz2
];

const Carrow = [
  Carrow1, Carrow2, Carrow3, Carrow4, Carrow5, Carrow6, Carrow7, Carrow8, Carrow9, Carrow10, Carrow11, Carrow12, Carrow13, Carrow14
]

const CnF = [
  CnF1, CnF2, CnF3, CnF1
]

const Oregon = [
  Oregon1, Oregon2, Oregon3, Oregon1
]

const Yasuka = [
  Yasuka1, Yasuka1, Yasuka1, Yasuka1
]

const Booth = () => {
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
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${Carrow1})` }}
            >
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={Carrow} />
              </div>
            </div>
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${Oregon1})` }}
            >
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={Oregon} />
              </div>
            </div>
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${Buzz1})` }}
            >
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={Buzz} />
              </div>
            </div>
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${CnF1})` }}
            >
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={CnF} />
              </div>
            </div>
            <div
              className="section  bg-cover bg-center h-full w-screen"
              style={{ backgroundImage: `url(${Yasuka1})` }}
            >
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={Yasuka} />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Booth;
