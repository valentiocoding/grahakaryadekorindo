import { div } from "framer-motion/m";
import React from "react";

const FixedBG = ({ img }) => {
  return (
    <>
      <div className="w-full lg:hidden h-64 md:h-44">
        <img src={img} alt="" className="object-cover w-full h-full" loading="lazy" />
      </div>
      <div className="w-full">
        {/* Bagian dengan background fixed */}
        <div
          className=" hidden lg:block h-40 md:h-40 lg:h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Konten lebih lanjut */}
        <div className="p-4 space-y-4">{/* Konten tambahan lainnya */}</div>
      </div>
    </>
  );
};

export default FixedBG;
