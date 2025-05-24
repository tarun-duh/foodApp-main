import React from "react";
import Hero from "../Components/Hero";
import FoodSection from "../Components/FoodSection";
import TopListMenu from "../Components/TopListMenu";
import backgroundImage from "../assets/Photos/pancakes.jpg";
import momoImg from "../assets/Photos/momo.jpg";
import Cta from "../Components/Cta";

import ctaImg from "../assets/Photos/cta.jpg";

const Home = () => {
  return (
    <div className=" w-full bg-cover bg-center">
      <Hero
        backgroundImage={backgroundImage}
        title="Cafe Himalayan"
        heading="Welcome to Cafe Himalayan"
        subheading="Savor the authentic flavors of the Himalayas — right here in the heart of the city"
        btnLink={"/order"}
        btnContent="Order now"
        btnCustom={
          "border-white text-white bg-transparent z-10 hover:bg-[#f76e2a] hover:border-none hover:text-white px-4 py-2 rounded transition duration-200 ease-in-out text-sm sm:text-base md:text-lg"
        }
        btnOnclick={() => console.log("Order now clicked")}
      />
      <FoodSection
        title="Delicious Momo Platter"
        description="Enjoy our handcrafted momos, steamed to perfection and filled with a savory blend of Himalayan spices and fresh herbs. A true taste of the mountains!"
        imageUrl={momoImg}
      />
      <TopListMenu />
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

export default Home;
