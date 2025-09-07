import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";

function ViewCart() {
  const { user, isAuthenticated } = useAuth0();
  const username = user?.nickname || "";
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    if (username) fetchPurchases();
  }, [username]);

  const fetchPurchases = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/purchases?username=${username}`
      );
      const data = await response.json();
      setPurchases(data);
    } catch (err) {
      console.error("Error fetching purchases:", err);
    }
  };

  if (!isAuthenticated) return <div>Please login to view your cart.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Purchases</h1>
      <div className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
        {purchases.length === 0 ? (
          <p className="text-center">No purchases yet.</p>
        ) : (
          <table className="w-full table-auto border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Date</th>
                <th className="border px-2 py-1">Time</th>
                <th className="border px-2 py-1">Location</th>
                <th className="border px-2 py-1">Product</th>
                <th className="border px-2 py-1">Qty</th>
                <th className="border px-2 py-1">Message</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((p) => (
                <tr key={p.id} className="text-center">
                  <td className="border px-2 py-1">{p.purchaseDate}</td>
                  <td className="border px-2 py-1">{p.deliveryTime}</td>
                  <td className="border px-2 py-1">{p.deliveryLocation}</td>
                  <td className="border px-2 py-1">{p.productName}</td>
                  <td className="border px-2 py-1">{p.quantity}</td>
                  <td className="border px-2 py-1">{p.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewCart;
