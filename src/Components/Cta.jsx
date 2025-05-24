import React from "react";
import { Link } from "react-router-dom";

const Cta = ({
  backgroundImage,
  message,
  subMessage,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="relative w-full h-[300px] lg:h-[400px] bg-cover bg-center flex items-center px-6 md:px-16 lg:px-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage}')`,
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left w-full gap-6">
        <div className="text-white max-w-lg">
          <h2 className="text-3xl font-bold leading-tight">{message}</h2>
          <p className="mt-4 text-lg text-gray-200">{subMessage}</p>
        </div>
        <div>
          <Link
            to={buttonLink}
            className="mt-4 lg:mt-0 inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
