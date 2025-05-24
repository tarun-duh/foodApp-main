import React from 'react';
import { useCart } from '../ContextApi/CartContext';

const DishCard = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const quantity = cartItems.find(i => i.id === item.id)?.quantity || 0;

  return (
    <div className="bg-white w-full sm:w-[80%] md:w-[60%] mx-auto my-4 p-4 rounded-lg shadow-md flex justify-between items-center flex-col sm:flex-row">
      <div>
        <h3 className="font-bold text-xl">{item.name}</h3>
        <p className="text-gray-500">{item.description}</p>
        <p className="font-semibold mt-2">₹{item.price}</p>
        {quantity > 0 ? (
          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 rounded">−</button>
            <span>{quantity}</span>
            <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-2 rounded">+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(item)} className="bg-green-600 text-white mt-2 px-4 py-1 rounded">
            Add
          </button>
        )}
      </div>
      <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
    </div>
  );
};

export default DishCard;
