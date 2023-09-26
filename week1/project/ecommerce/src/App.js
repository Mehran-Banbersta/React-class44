import React, { useState } from 'react';
import './App.css';
import CategoryList from '../src/components/category-list/CategoryList';
import ProductList from '../src/components/product-list/ProductList';
import allProductsData from './fake-data/all-products';
import allCategoriesData from './fake-data/all-categories';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(allProductsData);

  function filterProductsByCategory(category) {
    setActiveCategory(category);
    if (category === null) {
      setFilteredProducts(allProductsData);
    } else {
      const filtered = allProductsData.filter(
        (product) =>
          product.category.replace('FAKE: ', '') ===
          category.replace('FAKE: ', '')
      );
      setFilteredProducts(filtered);
    }
  }

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <CategoryList
        categories={allCategoriesData}
        activeCategory={activeCategory}
        onCategoryClick={filterProductsByCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
