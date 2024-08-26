import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-md mb-4"/>
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-600">{price} BYN</p>
    </div>
  );
};

export default ProductCard;
