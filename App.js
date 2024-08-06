import React, { useState } from 'react';
import Category from './Category';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Category selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
    </div>
  );
}

export default App;
