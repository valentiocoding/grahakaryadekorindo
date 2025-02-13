import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperStyles.css';
// import { div } from 'framer-motion/m';

const CarouselLogo = ({ images }) => {
  return (


    <div className="w-full max-w-7xl mx-auto px-6 md:px-4 lg:px-8 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000 }}
        breakpoints={{
          480: { slidesPerView: 4, spaceBetween: 8 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
        }}
        className="overflow-hidden p-5"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center shrink-0">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="h-auto w-64 object-contain md:max-w-[70%]"
              loading="eager" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselLogo;
