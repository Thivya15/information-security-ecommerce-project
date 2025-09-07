import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

const districts = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
  "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
  "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
  "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
  "Moneragala", "Ratnapura", "Kegalle"
];
const products = ["Headphones with Mic", "Camera with 18-55mm Lens", "Drone With Camera 1080P", "LC-dolida Sleep Headphones", "Retractable Car Charger", "TMY Mini Projector,"];

function Purchase() {
  const { user, isAuthenticated } = useAuth0();
  const username = user?.nickname || "";

  const [purchaseDate, setPurchaseDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("10 AM");
  const [deliveryLocation, setDeliveryLocation] = useState(districts[0]);
  const [productName, setProductName] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!purchaseDate) {
      alert("Please select a date.");
      return;
    }
    if (new Date(purchaseDate).getDay() === 0) {
      alert("Sundays are not allowed for purchase.");
      return;
    }

    const newPurchase = {
      username,
      purchaseDate,
      deliveryTime,
      deliveryLocation,
      productName,
      quantity,
      message,
    };

    try {
      const response = await fetch("http://localhost:8080/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPurchase),
      });

      if (response.ok) {
        alert("Purchase saved!");
        setMessage("");
        setQuantity(1);
        setPurchaseDate("");
      } else {
        alert("Failed to save purchase.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getMinDate = () => new Date().toISOString().split("T")[0];

  if (!isAuthenticated) return <div>Please login to make a purchase.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Product Purchase</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            value={username}
            disabled
            className="w-full border p-2 rounded-md bg-gray-200"
          />
        </div>
        <div>
          <label className="block font-medium">Date of Purchase</label>
          <input
            type="date"
            min={getMinDate()}
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Preferred Delivery Time</label>
          <select
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option>10 AM</option>
            <option>11 AM</option>
            <option>12 PM</option>
            <option>3 PM</option>
            <option>5 PM</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Delivery Location</label>
          <select
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Product Name</label>
          <select
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            {products.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Purchase;
