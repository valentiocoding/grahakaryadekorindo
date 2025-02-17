import React, { useState, useEffect, useMemo } from "react";

const FixedBG = ({ img }) => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    if (!img) return;

    const image = new Image();
    image.src = img;
    image.onload = () => setBgLoaded(true);
  }, [img]);

  // Simpan style dalam useMemo agar tidak dihitung ulang setiap render
  const bgStyle = useMemo(
    () =>
      bgLoaded
        ? {
            backgroundImage: `url(${img})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }
        : {},
    [bgLoaded, img]
  );

  return (
    <>
      {/* Mobile Version (tanpa background fixed) */}
      <div className="w-full lg:hidden h-64 md:h-44">
        <img
          src={img || "/default-image.webp"} // Fallback jika img undefined
          alt="Fixed background section"
          className="object-cover w-full h-full transition-opacity duration-500"
          loading="lazy"
        />
      </div>

      {/* Desktop Version (dengan background fixed & efek fade-in) */}
      <div
        className={`w-full hidden lg:block h-40 md:h-40 lg:h-64 bg-cover bg-center transition-opacity duration-500 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={bgStyle}
      />
    </>
  );
};

export default FixedBG;
