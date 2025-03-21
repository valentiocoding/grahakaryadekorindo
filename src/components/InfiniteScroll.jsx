import React, { useState, useEffect } from "react";
import CarouselLogo from "../pages/CarouselLogo";
import logo1 from "../assets/logo/01.webp";
import logo2 from "../assets/logo/02.webp";
import logo3 from "../assets/logo/03.webp";
import logo4 from "../assets/logo/04.webp";
import logo5 from "../assets/logo/05.webp";
import logo6 from "../assets/logo/06.webp";
import logo7 from "../assets/logo/07.webp";
import logo8 from "../assets/logo/08.webp";
import logo9 from "../assets/logo/09.webp";
import logo10 from "../assets/logo/10.webp";
import logo11 from "../assets/logo/11.webp";
import logo12 from "../assets/logo/12.webp";
import logo13 from "../assets/logo/13.webp";
import logo14 from "../assets/logo/14.webp";
import logo15 from "../assets/logo/15.webp";
import logo16 from "../assets/logo/16.webp";
import logo17 from "../assets/logo/17.webp";
import logo18 from "../assets/logo/18.webp";
import logo19 from "../assets/logo/19.webp";
import logo20 from "../assets/logo/20.webp";
import logo21 from "../assets/logo/21.webp";
import logo22 from "../assets/logo/22.webp";
import logo23 from "../assets/logo/23.webp";
import logo24 from "../assets/logo/24.webp";
import logo25 from "../assets/logo/25.webp";
import logo26 from "../assets/logo/26.webp";
import logo27 from "../assets/logo/27.webp";
import logo28 from "../assets/logo/28.webp";
import logo29 from "../assets/logo/29.webp";
import logo30 from "../assets/logo/30.webp";
import logo31 from "../assets/logo/31.webp";
import logo32 from "../assets/logo/32.webp";
import logo33 from "../assets/logo/33.webp";

const InfiniteScroll = () => {
  const [logos, setLogos] = useState([]);
  const [isLogoRendered, setIsLogoRendered] = useState(false);

  useEffect(() => {
    setLogos([
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo11,
      logo12,
      logo13,
      logo14,
      logo15,
      logo16,
      logo17,
      logo18,
      logo19,
      logo20,
      logo21,
      logo22,
      logo23,
      logo24,
      logo25,
      logo26,
      logo27,
      logo28,
      logo29,
      logo30,
      logo31,
      logo32,
      logo33,
    ]);
    setIsLogoRendered(true);
  }, []);

  return (
    <div className="w-[70%] flex items-center justify-center my-5">
      {isLogoRendered ? <CarouselLogo images={logos} /> : <></>}
    </div>
  );
};

export default InfiniteScroll;
