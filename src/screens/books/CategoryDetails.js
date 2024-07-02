import React from "react";
import { observer } from "mobx-react-lite";
import { useParams, useNavigate } from "react-router-dom";
import categoryStore from "../../stores/homeStore/CategoryStore";
import "../../style/homeStyle/categoryDetails.css";

const CategoryDetails = observer(() => {
  const { categoryId } = useParams();
  const category = categoryStore.categories.find(cat => cat.id === Number(categoryId));
  const navigate = useNavigate();

  if (!category) {
    return <div>Category not found</div>;
  }

  const handleBookClick = (subcategoryId) => {
    navigate(`/header/book/${subcategoryId}`);
  };

  return (
    <div className="home-category-details-container">
      <h1>Category</h1>
      <div className="home-category-details-right-section">
        <h2>{category.name}</h2>
        <div className="search-container">
          <input className="input-searchbar" type="text" placeholder="Search..." />
        </div>
      </div>
      <hr className="home-category-details-line" />
      <div className="home-category-details-list">
        {category.subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="home-category-details"
            onClick={() => handleBookClick(subcategory.id)}
          >
            <img src={subcategory.image} alt={subcategory.name} />
            <span>{subcategory.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CategoryDetails;
