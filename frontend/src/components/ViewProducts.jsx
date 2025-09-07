import React from "react";

const products = [
  {
    name: "Retractable Car Charger",
    price: "$15",
    description: "Fast charging retractable car charger for phones.",
    image: "charger.webp",
  },
  {
    name: "Drone With Camera 1080P",
    price: "$150",
    description: " RC Quadcopter with Altitude Hold, Mini Drone With One Key Start",
    image: "drone.webp",
  },
  {
    name: "LC-dolida Sleep Headphones",
    price: "$30",
    description: "Comfortable sleep headphones for relaxing nights.",
    image: "sleepheadphone.webp",
  },
  {
    name: "TMY Mini Projector",
    price: "$120",
    description: "Portable mini projector for home and travel.",
    image: "projecter.webp",
  },
  {
    name: "Camera with 18-55mm Lens",
    price: "$450",
    description: "DSLR camera with versatile 18-55mm lens.",
    image: "camera.webp",
  },
  {
    name: "Headphones with Mic",
    price: "$25",
    description: "High-quality headphones with built-in microphone.",
    image: "headphone.webp",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center w-60">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded" />
      <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="font-bold text-indigo-600">{product.price}</p>
    </div>
  );
};

const ViewProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 justify-items-center">
      {products.map((prod, index) => (
        <ProductCard key={index} product={prod} />
      ))}
    </div>
  );
};

export default ViewProducts;
