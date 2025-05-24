import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ backgroundImage, message, subMessage, buttonText, buttonLink }) => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center px-6 md:px-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage}')`,
        backgroundAttachment: 'fixed',   // Parallax effect
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex justify-between items-center w-full">
        <div className="text-white max-w-lg">
          <h2 className="text-3xl md:text-3xl font-bold leading-tight">{message}</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            {subMessage}
          </p>
        </div>
        <div>
          <Link
            to={buttonLink}
            className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
