"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";
import furniture1 from "../assets/furniture/1/1.jpg"
import furniture2 from "../assets/furniture/1/2.jpg"
import furniture3 from "../assets/furniture/1/3.jpg"
import furniture4 from "../assets/furniture/1/4.jpg"
import furniture5 from "../assets/furniture/1/5.jpg"
import furniture6 from "../assets/furniture/1/6.jpg"
import furniture7 from "../assets/furniture/1/7.jpg"
import booth from "../assets/booth/1/3.jpg"

const furniture1Images = [
  furniture1,
  furniture2,
  furniture3,
  furniture4,
  furniture5,
  furniture6,
  furniture7

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
            <div className="section bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url(${booth})` }}>
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
