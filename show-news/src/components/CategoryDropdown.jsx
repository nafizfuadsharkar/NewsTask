import React from "react";

const CategoryDropdown = ({ category, setCategory, categories }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
