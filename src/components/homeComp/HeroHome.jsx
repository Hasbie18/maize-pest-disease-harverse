import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import ProductCard from "../ProductCard";

const HeroHome = () => {
  const endpoint = "https://fakestoreapi.com/products";
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(["all", ...data])) // Add "all" category for showing all products
      .catch((error) => console.error("Unable to fetch categories:", error));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Product Listing */}
      <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.title} // Correct property for product name
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroHome;
