import React, { useMemo } from "react";
import { motion } from "framer-motion";

const FixedFooter = ({ img }) => {
  // Simpan style dalam useMemo agar lebih efisien
  const bgStyle = useMemo(
    () => ({
      backgroundImage: `url(${img || "/default-image.webp"})`, // Fallback jika img undefined
      backgroundPosition: "center",
      backgroundSize: "cover",
    }),
    [img]
  );

  return (
    <div
      className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center"
      style={bgStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-600 bg-opacity-35 flex items-center justify-center">
        <p className="text-white font-raleway text-lg md:text-2xl lg:text-3xl font-light">
          Do business with the <span className="font-semibold">best.</span> Do
          business with <span className="font-semibold">trust.</span> Do
          business with <span className="font-semibold">us.</span>
        </p>
      </div>
    </div>
  );
};

export default FixedFooter;
