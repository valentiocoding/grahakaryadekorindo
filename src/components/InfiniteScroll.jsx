import React, { useState, useEffect } from "react";
import CarouselLogo from "../pages/CarouselLogo";
import logo1 from "../assets/logo/1.webp";
import logo2 from "../assets/logo/2.webp";
import logo3 from "../assets/logo/3.webp";
import logo4 from "../assets/logo/4.webp";
import logo5 from "../assets/logo/5.webp";
import logo6 from "../assets/logo/6.webp";
import logo7 from "../assets/logo/7.webp";
import logo8 from "../assets/logo/8.webp";

const InfiniteScroll = () => {
  const [logos, setLogos] = useState([]);
  const [isLogoRendered, setIsLogoRendered] = useState(false);

  useEffect(() => {
    setLogos([logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]);
    setIsLogoRendered(true);
  }, []);

  return (
    <div className="w-[70%] flex items-center justify-center my-5">
      {isLogoRendered ? (
        <CarouselLogo images={logos} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default InfiniteScroll;
