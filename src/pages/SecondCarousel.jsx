import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperStyles.css";

const SecondCarousel = ({ images, location, judul }) => {
  const totalImages = images.length;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-repeat bg-[url('/src/assets/img/LOGO.webp')] bg-[length:2%] opacity-[0.08]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen p-10  rounded-lg ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mb-4 gap-2 sm:gap-4 text-center md:text-left">
        <h1 className="text-lg font-bold">{location}</h1>
        <h1 className="text-lg font-bold">{judul}</h1>
         </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={5}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 5 },
          }}
          className="{` ${totalImages === 1 ? 'max-w-[700px]' : ''}   w-full max-w-screen` }"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto aspect-video object-cover shadow-lg"
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
