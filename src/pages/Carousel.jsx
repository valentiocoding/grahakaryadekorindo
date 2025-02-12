import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperStyles.css';

const Carousel = ({ images }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-16 md:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 4 },
          640: { slidesPerView: 2, spaceBetween: 5 },
          1024: { slidesPerView: 3, spaceBetween: 5 },
        }}
        className="overflow-hidden rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full object-cover h-40 sm:h-48 md:h-56 lg:h-96 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              loading="lazy" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
