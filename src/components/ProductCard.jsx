import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <img src={image} alt={name} className="h-40 w-full object-cover mb-4" />
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-700">${price}</p>
    </div>
  );
};

export default ProductCard;
