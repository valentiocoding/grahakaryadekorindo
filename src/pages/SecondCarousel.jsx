import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SecondCarousel = ({ images, location, judul }) => {
  const totalImages = images.length;
  return (
    <div className="relative h-screen flex flex-col items-center justify-center w-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-repeat bg-[url('/src/assets/img/LOGO.webp')] bg-[length:2%] opacity-[0.08]"></div>
      {/* BackgroundEnd */}
      <div className="font-raleway font-bold text-black">
        <div className="flex justify-between w-full">
          <h1 className="shadow-lg">{location}</h1>
          <h1 className="shadow-xl">{judul}</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={5}
            slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 5 },
          }}
          className={`h-[350px]  ${
            totalImages === 1 ? "max-w-[700px]" : "max-w-[1850px]"
          } `}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover max-w-full max-h-full"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SecondCarousel;
