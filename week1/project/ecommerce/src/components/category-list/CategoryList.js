import React from 'react';
import './categoryList.css';

function CategoryList({ categories, activeCategory, onCategoryClick }) {
  return (
    <div>
      <div className="category__list">
        {categories.map((category) => (
          <button
            className="active"
            key={category}
            category={category}
            active={activeCategory === category}
            onClick={() => onCategoryClick(category)}
          >
            {category.replace('FAKE: ', '')}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
