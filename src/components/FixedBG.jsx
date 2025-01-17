import React from "react";

const FixedBG = ({ img }) => {
  return (
    <div className="w-full h-48 md:h-64 lg:h-80">
      <img src={img} alt="" className="object-cover w-full h-full" />
    </div>
  );
};

export default FixedBG;

//   <div className="w-full">
//     {/* Bagian dengan background fixed */}
//     <div
//       className="h-48 md:h-64 lg:h-80 bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundAttachment: "fixed",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     ></div>

//     {/* Konten lebih lanjut */}
//     <div className="p-4 space-y-4">{/* Konten tambahan lainnya */}</div>
//   </div>
// );
