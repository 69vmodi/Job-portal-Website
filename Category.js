import React from 'react';
import { FaStethoscope, FaChalkboardTeacher, FaDollarSign, FaShoppingCart, FaHardHat, FaConciergeBell } from 'react-icons/fa';
import './Category.css';

const categories = [
  { name: 'Healthcare', icon: <FaStethoscope /> },
  { name: 'Education', icon: <FaChalkboardTeacher /> },
  { name: 'Finance', icon: <FaDollarSign /> },
  { name: 'Retail', icon: <FaShoppingCart /> },
  { name: 'Construction', icon: <FaHardHat /> },
  { name: 'Hospitality', icon: <FaConciergeBell /> },
];

function Category({ selectedCategory, onCategorySelect }) {
  return (
    <div className="category-container">
      <h2>Select Your Job Category</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${category.name === selectedCategory ? 'selected' : ''}`}
            onClick={() => onCategorySelect(category.name)}
          >
            <div className="icon">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <button className="search-jobs-button">Search Jobs &rarr;</button>
    </div>
  );
}

export default Category;
