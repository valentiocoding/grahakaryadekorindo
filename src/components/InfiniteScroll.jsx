import React from "react";
import CarouselLogo from "../pages/CarouselLogo";
import logo1 from "../assets/logo/1.webp";
import logo2 from "../assets/logo/2.webp";
import logo3 from "../assets/logo/3.webp";
import logo4 from "../assets/logo/4.webp";
import logo5 from "../assets/logo/5.webp";
import logo6 from "../assets/logo/6.webp";
import logo7 from "../assets/logo/7.webp";
import logo8 from "../assets/logo/8.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const InfiniteScroll = () => {
  return (
    <div className=" w-[70%] flex item justify-center my-5">
      <CarouselLogo images={logos} />
    </div>
  );
};

export default InfiniteScroll;
