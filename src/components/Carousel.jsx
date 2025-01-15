import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  "/logo/1.png",
  "/logo/2.png",
  "/logo/3.png",
  "/logo/4.png",
  "/logo/5.png",
  "/logo/6.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayInterval = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (logos.length - 2));
    }, 1000); // Ganti setiap 2 detik

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, []);

  const displayedLogos = logos.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative w-full overflow-hidden z-[-1]">
      <div className="flex justify-center items-center space-x-9">
        {displayedLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Logo ${currentIndex + index + 1}`}
            className="h-12 w-auto object-contain md:h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
