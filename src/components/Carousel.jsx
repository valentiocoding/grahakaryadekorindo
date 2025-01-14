import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Carousel = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        spaceBetween={20} // Mengurangi jarak antar slide
        // centeredSlides={true} // Menjaga slide tetap di tengah
        loop={true} // Membuat carousel berulang
        autoplay={{
          delay: 3000, // Delay lebih panjang
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={1} // Defaultnya satu slide pada mobile
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide pada layar kecil (mobile)
          },
          640: {
            slidesPerView: 2, // 2 slide pada layar medium (tablet)
          },
          1024: {
            slidesPerView: 3, // 3 slide pada layar besar (desktop)
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg shadow-lg max-w-7xl w-full items-center flex justify-center"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex items-center justify-center content-center h-60 w-60 bg-white rounded-xl shadow-xl overflow-hidden">
              <img
                src={`logo/${index}.png`} // Ganti dengan path logo yang sesuai
                alt={`Logo ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
