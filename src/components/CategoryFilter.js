import React from "react";

function CategoryFilter({ categories, setSelectedCategory }) {

  function handleCategorySelect(category, event) {
    setSelectedCategory(category);
    event.target.className = 'selected'
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={(event) => handleCategorySelect(category, event)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;