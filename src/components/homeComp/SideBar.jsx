import React, { useState } from "react";

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:sticky lg:top-20 h-fit mr-7">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Categories</h2>
        <button
          className="p-2 rounded bg-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`lg:block ${isOpen ? "block" : "hidden"} lg:space-y-2`}
      >
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer capitalize p-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-gray-200 text-gray-800"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
