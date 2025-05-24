import React, { useEffect, useState } from "react";
import { db } from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const toggleExpand = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  return (
    <div className="p-6 mt-9 max-w-3xl mx-auto bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">🧾 Your Orders</h1>

      {loading ? (
        <ul className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <li
              key={i}
              className="bg-gray-800 p-4 rounded shadow animate-pulse"
            >
              <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </li>
          ))}
        </ul>
      ) : orders.length === 0 ? (
        <p className="text-gray-400 ">No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="bg-gray-800 p-4 rounded shadow cursor-pointer transition duration-300 hover:bg-gray-700"
              onClick={() => toggleExpand(order.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <strong>Total:</strong> ₹{order.total} <br />
                  <strong>Status:</strong> {order.status}
                </div>
                <div>{expandedOrderId === order.id ? "▲" : "▼"}</div>
              </div>

              {expandedOrderId === order.id && (
                <div className="mt-4 border-t border-gray-700 pt-4 text-sm text-gray-300">
                  <div>
                    <strong>Order ID:</strong> {order.id}
                  </div>
                  <div className="mt-2">
                    <strong>Items:</strong>
                    <ul className="list-disc ml-6 mt-1">
                      {order.items?.map((item, idx) => (
                        <li key={idx}>
                          <span
                            className={
                              item.isVeg ? "text-green-400" : "text-red-400"
                            }
                          >
                            ●
                          </span>{" "}
                          {item.name} × {item.quantity}{" "}
                          <span className="text-gray-400">
                            ({item.isVeg ? "Veg" : "Non-Veg"})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {order.createdAt?.seconds && (
                    <div className="mt-2">
                      <strong>Created At:</strong>{" "}
                      {new Date(
                        order.createdAt.seconds * 1000
                      ).toLocaleString()}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
