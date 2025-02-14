import React, { useMemo } from "react";

const BGOnly = ({ img }) => {
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
    <div className="w-full h-32 md:h-44 lg:h-64" style={bgStyle}>
      <img
        src={img || "/default-image.webp"} // Gunakan fallback image
        alt="Fixed Background"
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default BGOnly;
