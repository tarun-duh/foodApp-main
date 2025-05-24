import React from "react";
import { Link } from "react-router-dom";
import burgerImg from "../assets/Photos/burger.jpg";
import pizzaImg from "../assets/Photos/pizza.jpg";
import pastaImg from "../assets/Photos/pasta.jpg";
import shawarmaImg from "../assets/Photos/shawarma.jpg";
import tacosImg from "../assets/Photos/tacos.jpg";
import noodlesImg from "../assets/Photos/noodles.jpg";

const dishes = [
  {
    id: 1,
    title: "Chicken Burger",
    description: "White plate with dried shrimps",
    rating: 9.1,
    price: 325,
    image: burgerImg,
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    description: "Noodles spicy boil with seafood and pork in hot pot",
    rating: 9.2,
    price: 455,
    image: pizzaImg,
  },
  {
    id: 3,
    title: "Speghetti",
    description: "Noodles prawn spicy soup",
    rating: 9.0,
    price: 365,
    image: pastaImg, //
  },
  {
    id: 4,
    title: "Chicken Shwarma",
    description: "Noodles prawn spicy soup",
    rating: 8.5,
    price: 255,
    image: shawarmaImg, //
  },
  {
    id: 5,
    title: "Tacos",
    description: "Noodles prawn spicy soup",
    rating: 8.7,
    price: 235,
    image: tacosImg,
  },
  {
    id: 6,
    title: "Noodles",
    description: "Noodles prawn spicy soup",
    rating: 8.5,
    price: 365,
    image: noodlesImg,
  },
];

const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center w-full max-w-[280px]">
      <Link to={`/order`} className="flex flex-col items-center">
        <img
          src={dish.image}
          alt={dish.title}
          className="w-32 h-32 object-cover rounded-full shadow mb-4"
        />
        <div className="text-yellow-500 font-semibold text-lg">
          ★ {dish.rating}
        </div>
        <h3 className="text-xl font-bold mt-1 mb-1">{dish.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{dish.description}</p>
        <div className="text-black font-bold text-lg">₹{dish.price}</div>
      </Link>
    </div>
  );
};

const TopListMenu = () => {
  return (
    <div className="flex flex-col items-center px-8 py-16 bg-gradient-to-b from-gray-100 to-orange-100 min-h-screen">
      <h2 className="text-4xl font-bold text-black mb-1">Top List</h2>
      <p className="text-gray-600 mb-8">Our mainstay menu</p>
      <div className="flex flex-row flex-wrap justify-center gap-6 w-full max-w-7xl">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default TopListMenu;
