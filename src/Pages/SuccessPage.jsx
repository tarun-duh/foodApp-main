import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-green-400 mb-4">✅ Payment Successful!</h1>
      <p className="text-gray-300 mb-6">Thank you for your order. We’ll start preparing it right away.</p>
      <Link
        to="/orders"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors duration-200"
      >
        View My Orders
      </Link>
    </div>
  );
};

export default SuccessPage;
