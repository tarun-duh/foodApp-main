import Hero from "../Components/Hero";
import FoodSection from "../Components/FoodSection";
import React, { useState } from "react";
import DishList from "../Components/DishList";
import CartPage from "./CartPage";
import { useCart } from "../ContextApi/CartContext"; // adjust path if needed
import CartBar from "../Components/CartBar";
import burgerIMg from "../assets/Photos/burgers.jpg";
import Cta from "../Components/Cta";
import ctaImg from "../assets/photos/cta.jpg";
import burger from "../assets/Photos/burger.jpg";

const Order = () => {
  const [viewCart, setViewCart] = useState(false);
  const { addToCart } = useCart(); // use global cart context

  const handleAdd = (dish) => {
    addToCart(dish); // update using context
  };

  return (
    <div>
      <Hero
        backgroundImage={burgerIMg}
        title="Cafe Himalayan"
        heading="Order your favorite food now!"
        subheading="Delicious food is waiting for you"
      />

      <FoodSection
        title="Delicious Burger"
        description="Savor our handcrafted burgers, grilled to juicy perfection and stacked with farm-fresh ingredients and bold, smoky flavors. A true bite of comfort and indulgence!"
        imageUrl={burger}
      />

      {/* Slide-Up Cart */}
      <CartPage isVisible={viewCart} onClose={() => setViewCart(false)} />

      {/* Dish List + Cart Bar */}
      <DishList onAdd={handleAdd} />
      <CartBar onViewCart={() => setViewCart(true)} />

      <Cta
        backgroundImage={ctaImg}
        message="Track Your Delicious Journey!"
        subMessage="View your past orders, reorder your favorites, and stay updated with your delivery status."
        buttonText="View My Orders"
        buttonLink="/orders"
      />
    </div>
  );
};

export default Order;
