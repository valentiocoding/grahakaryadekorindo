import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";
import Carousel from "./Carousel";
import booth1 from "../assets/booth/1/1.jpg"
import booth2 from "../assets/booth/1/2.jpg"
import booth3 from "../assets/booth/1/3.jpg"
import booth4 from "../assets/booth/1/4.jpg"
import booth5 from "../assets/booth/1/5.jpg"
import booth6 from "../assets/booth/1/6.jpg"
import booth7 from "../assets/booth/1/7.jpg"
import booth8 from "../assets/booth/1/8.jpg"
import booth9 from "../assets/booth/1/9.jpg"

const booth1Images = [
  booth1,
  booth2,
  booth3,
  booth4,
  booth5,
  booth6,
  booth7,
  booth8,
  booth9
];


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
            <div className="section bg-[url('booth/1/3.jpg')] bg-cover bg-center h-full w-screen">
              <div className="flex backdrop-blur-md w-screen h-screen items-center">
                <Carousel images={booth1Images}/>
              </div>
            </div>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Booth;
