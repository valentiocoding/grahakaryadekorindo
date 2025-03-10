import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperStyles.css";

const Carousel = ({ images, location, judul }) => {
  const totalImages = images.length;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div
      className={`${
        totalImages === 1 ? "max-w-[700px]" : "max-w-[1400px]"
      } mx-auto px-4 md:px-6 lg:px-8 font-raleway font-bold text-black`}
    >
      <div className="flex justify-between">
        <h1 className="shadow-lg">{location}</h1>
        <h1 className="shadow-xl">{judul}</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={5}
        slidesPerView={totalImages < 2 ? 1 : 1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        breakpoints={
          totalImages >= 2
            ? {
                640: {
                  slidesPerView: Math.min(1, totalImages),
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: Math.min(2, totalImages),
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: Math.min(3, totalImages),
                  spaceBetween: 5,
                },
              }
            : {}
        }
        className="rounded-xl max-w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto aspect-video object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
              loading="lazy"
              onClick={(e) => {
                e.stopPropagation(); // Mencegah event bubbling
                setFullscreenImage(src);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()} // Mencegah event bubbling agar tidak menutup saat klik gambar
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
