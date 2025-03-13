"use client";
import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import ContainCarousel from "./ContainCarousel";
import Furniture1 from "../assets/furniture/Furniture-34/1.webp";
import Furniture2 from "../assets/furniture/Furniture-34/2.webp";
import Furniture3 from "../assets/furniture/Furniture-34/3.webp";
import Furniture4 from "../assets/furniture/Furniture-34/4.webp";
import Furniture5 from "../assets/furniture/Furniture-34/5.webp";
import Furniture6 from "../assets/furniture/Furniture-34/6.webp";
import Furniture7 from "../assets/furniture/Furniture-34/7.webp";
import Furniture8 from "../assets/furniture/Furniture-34/8.webp";
import Furniture9 from "../assets/furniture/Furniture-34/9.webp";
import Furniture10 from "../assets/furniture/Furniture-34/10.webp";
import Furniture11 from "../assets/furniture/Furniture-34/11.webp";
import Furniture12 from "../assets/furniture/Furniture-34/12.webp";
import Furniture13 from "../assets/furniture/Furniture-34/13.webp";
import Furniture14 from "../assets/furniture/Furniture-34/14.webp";
import Furniture15 from "../assets/furniture/Furniture-34/15.webp";
import Furniture16 from "../assets/furniture/Furniture-34/16.webp";
import Furniture17 from "../assets/furniture/Furniture-34/17.webp";
import Furniture18 from "../assets/furniture/Furniture-34/18.webp";
import Furniture19 from "../assets/furniture/Furniture-34/19.webp";
import Furniture20 from "../assets/furniture/Furniture-34/20.webp";
import Furniture21 from "../assets/furniture/Furniture-34/21.webp";
import Furniture22 from "../assets/furniture/Furniture-34/22.webp";
import Furniture23 from "../assets/furniture/Furniture-34/23.webp";
import Furniture24 from "../assets/furniture/Furniture-34/24.webp";
import Furniture25 from "../assets/furniture/Furniture-34/25.webp";
import Furniture26 from "../assets/furniture/Furniture-34/26.webp";
import Furniture27 from "../assets/furniture/Furniture-34/27.webp";
import Furniture28 from "../assets/furniture/Furniture-34/28.webp";
import Furniture29 from "../assets/furniture/Furniture-34/29.webp";
import Furniture30 from "../assets/furniture/Furniture-34/30.webp";
import Furniture31 from "../assets/furniture/Furniture-34/31.webp";
import Furniture32 from "../assets/furniture/Furniture-34/32.webp";
import Furniture33 from "../assets/furniture/Furniture-34/33.webp";
import Furniture34 from "../assets/furniture/Furniture-34/34.webp";

const furnitures = [
  Furniture1,
  Furniture2,
  Furniture3,
  Furniture4,
  Furniture5,
  Furniture6,
  Furniture7,
  Furniture8,
  Furniture9,
  Furniture10,
  Furniture11,
  Furniture12,
  Furniture13,
  Furniture14,
  Furniture15,
  Furniture16,
  Furniture17,
  Furniture18,
  Furniture19,
  Furniture20,
  Furniture21,
  Furniture22,
  Furniture23,
  Furniture24,
  Furniture25,
  Furniture26,
  Furniture27,
  Furniture28,
  Furniture29,
  Furniture30,
  Furniture31,
  Furniture32,
  Furniture33,
  Furniture34,
];



const Furniture = () => {
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
                <ContainCarousel
                  images={furnitures}
                  location={"GKD"}
                  judul={"Furnitures"}
                />
              </div>
            </div>
            

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Furniture;
