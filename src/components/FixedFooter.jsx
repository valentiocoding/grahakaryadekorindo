import React from "react";

const FixedBG = ({ img }) => {
  return (
    <div className="relative w-full">
      {/* Background Fixed */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "bottom",
          backgroundSize: "100%",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-600 bg-opacity-35 flex items-center justify-center text-center">
        <p className="text-white font-raleway text-lg md:text-2xl lg:text-3xl font-light">
          Do business with the <span className="font-semibold">best.</span> Do
          business with <span className="font-semibold">trust.</span> Do
          business with <span className="font-semibold">us.</span>
        </p>
      </div>

      {/* Height Adjustment */}
      <div className="h-40 md:h-80 lg:h-96"></div>
    </div>
  );
};

export default FixedBG;
