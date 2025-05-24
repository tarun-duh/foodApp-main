import React from "react";
import Hero from "../Components/Hero";
import butterChickenImg from "../assets/Photos/butterChicken.jpg";
import GalleryGrid from "../Components/GalleryGrid";
import Cta from "../Components/Cta";
import ctaImg from "../assets/Photos/cta.jpg";

const Gallery = () => {
  return (
    <div>
      <Hero
        backgroundImage={butterChickenImg}
        title="Cafe Himalayan"
        heading="Signature Dishes"
        subheading="Our most-loved meals, chosen by thousands of happy foodies"
        btnLink={"/order"}
        btnContent="Order now"
        btnCustom={
          "border-white text-white bg-transparent z-10 hover:bg-[#f76e2a] hover:border-none hover:text-white px-4 py-2 rounded transition duration-200 ease-in-out text-sm sm:text-base md:text-lg"
        }
        btnOnclick={() => console.log("Order now clicked")}
      />
      <GalleryGrid />
      <Cta
        backgroundImage={ctaImg}
        message="Order Fresh, Fast & Delicious Food!"
        subMessage="Experience the best taste from our kitchen delivered right to your doorstep."
        buttonText="Order Now"
        buttonLink="/order"
      />
    </div>
  );
};

export default Gallery;
