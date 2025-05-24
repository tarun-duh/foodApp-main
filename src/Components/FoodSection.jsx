import React from 'react';

const FoodSection = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full px-7 py-20 md:px-16 lg:px-28 bg-white  via-w">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">

        {/* Decorative Vertical Line */}
        <div className="hidden md:block absolute left-0 top-12 h-3/4 w-1 bg-orange-500 rounded-full" />

        {/* Left: Content */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start relative z-10 bg-orange-100/20 p-6 rounded-xl shadow-md">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600 font-playfair leading-tight">
            {title}
            <span className="block w-20 h-1 mt-2 bg-orange-400 rounded"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-md font-merri">
            {description}
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <img
            src={imageUrl}
            alt={title}
            className="w-full max-w-md max-h-[75vh] rounded-3xl shadow-xl border-4 border-orange-200 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-orange-200"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
