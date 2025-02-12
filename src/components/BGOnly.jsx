import { div } from "framer-motion/m";
import React from "react";

const FixedBG = ({ img }) => {
  return (
    <>
      <div className="w-full lg:h-64 h-32 md:h-44">
        <img src={img} alt="" className="object-cover w-full h-full" loading="lazy" />
      </div>
      <div className="w-full">
        {/* Bagian dengan background fixed */}

        {/* Konten lebih lanjut */}
        <div className="p-4 space-y-4">{/* Konten tambahan lainnya */}</div>
      </div>
    </>
  );
};

export default FixedBG;
