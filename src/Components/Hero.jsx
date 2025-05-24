import React from 'react';
import Button from './Button';

const Hero = ({ backgroundImage, title, heading, subheading,btnLink,btnContent,btnCustom,btnOnclick }) => {
  return (
    <section className="relative w-full h-screen mt-[-100px] overflow-hidden">
      {/* Full-screen Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white h-full px-4 text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-24">
          {title}
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 mb-4 font-semibold">
          {heading}
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-6">
          {subheading}
        </h2>
        {btnContent &&
        <Button
        link={btnLink}
          content={btnContent}
          onclickFn={btnOnclick}
          custom={btnCustom}
        />}

      </div>
    </section>
  );
};

export default Hero;
