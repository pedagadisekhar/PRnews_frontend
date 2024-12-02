import React from "react";

const categories = ["Politics", "Sports", "Technology", "Entertainment"];

const CategoryNav = ({ onSelect }) => {
  return (
    <div className="bg-gray-100 p-4 flex overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 bg-blue-500 text-white rounded mx-2"
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
