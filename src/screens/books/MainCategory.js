// Category.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import categoryStore from '../../stores/homeStore/CategoryStore';
import '../../style/homeStyle/category.css';

const Category = observer(() => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    categoryStore.selectCategory(category);
    navigate(`/header/category/${category.id}`);
  };

  return (
    <div className="home-categories">
      <header className="categories-become-seller-button">
        <button className="become-seller-button">Become a Seller</button>
      </header>
      <h2>CATEGORIES</h2>
      <p>
        Knowledge exchange is a comprehensive educational platform designed to meet the diverse needs of students and educators. This one-stop destination offers a range of services, including a textbook marketplace, textbook resale, access to diverse content, stationery and resource materials, and a unique opportunity for aspiring tutors to find teaching jobs. With a user-friendly platform, we simplify the educational experience for all users.
      </p>
      <div className="home-category-list">
        {categoryStore.categories.map((category) => (
          <div key={category.id} className="home-category" onClick={() => handleCategoryClick(category)}>
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Category;
