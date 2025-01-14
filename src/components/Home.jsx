import React from "react";

const Home = () => {
  return (
    <>
      {/* Background Image */}
      <div className="bg-[url('/home.png')] h-screen bg-cover bg-center">
        {/* Overlay BG */}
        <div className="bg-black/50 h-full flex items-center justify-center">
          {/* Text Content */}
          <div className="text-white font-light text-3xl sm:text-5xl lg:text-6xl font-poppins text-center">
            <p className="mb-2">
              BUILDING <span className="font-bold">DREAMS</span>
            </p>
            <p>
              CREATING <span className="font-bold">LEGACY</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
