import React, { useMemo } from "react";
import { motion } from "framer-motion";

const FixedBG = ({ img }) => {
  // Simpan style dalam useMemo agar tidak dihitung ulang setiap render
  const bgStyle = useMemo(
    () => ({
      backgroundImage: `url(${img})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }),
    [img]
  );

  return (
    <>
      {/* Mobile Version (tanpa background fixed) */}
      <div className="w-full lg:hidden h-64 md:h-44">
        <img
          src={img || "/default-image.webp"} // Fallback jika img undefined
          alt="Fixed background section"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Desktop Version (dengan background fixed) */}
      <div
        className="w-full hidden lg:block h-40 md:h-40 lg:h-64 bg-cover bg-center"
        style={bgStyle}
      />
    </>
  );
};

export default FixedBG;
