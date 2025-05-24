import React, { useEffect } from "react";
import { useCart } from "../ContextApi/CartContext";
import { db } from "../Config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";

const CartPage = ({ isVisible, onClose }) => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCheckout = async () => {
    try {
      const order = {
        items: cartItems,
        total,
        status: "paid",
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "orders"), order);
      clearCart();
      onClose();
      window.location.href = "/success";
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-2xl rounded-t-3xl transition-transform duration-500 ease-in-out z-50 font-poppins
        ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
      style={{ minHeight: "65vh" }}
    >
      <div className="p-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-extrabold text-gray-800">
            🛒 Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 text-2xl font-bold"
          >
            <FiX />
          </button>
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start p-4 bg-gray-50 shadow rounded-lg"
                >
                  {/* Left Content */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.description || "Delicious and freshly prepared"}
                    </p>
                    <p className="text-sm mt-1">
                      {item.isVeg ? (
                        <span className="text-green-600">🌱 Vegetarian</span>
                      ) : (
                        <span className="text-red-600">🍗 Non-Veg</span>
                      )}
                    </p>
                    <p className="text-gray-700 mt-2">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 ml-6">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      −
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      +
                    </button>
                    <span className="ml-4 font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
              >
                ✅ Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-3 w-full border border-red-600 text-red-600 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 transition"
              >
                🗑️ Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
