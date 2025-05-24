import React from 'react';
import { useCart } from '../ContextApi/CartContext';

const CartBar = ({ onViewCart }) => {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white flex justify-between items-center px-6 py-3 z-50">
      <span>{totalItems} item(s) in cart</span>
      <button onClick={onViewCart} className="font-bold">
        VIEW CART 🛒
      </button>
    </div>
  );
};

export default CartBar;
