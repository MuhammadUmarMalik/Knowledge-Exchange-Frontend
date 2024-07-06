
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams, useNavigate } from "react-router-dom";
import categoryStore from "../../stores/homeStore/CategoryStore";
import "../../style/homeStyle/categoryDetails.css";

const CategoryDetails = observer(() => {
  const { categoryId } = useParams();
  const category = categoryStore.categories.find(cat => cat.id === Number(categoryId));
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      categoryStore.selectCategory(category);
      if (categoryStore.books.length === 0) {
        categoryStore.fetchBooks();
      } else {
        categoryStore.filterBooksByCategory();
      }
    }
  }, [categoryId, category]);

  if (!category) {
    return <div>Category not found</div>;
  }

  const handleBookClick = (bookId) => {
    navigate(`/header/book/${bookId}`);
  };

  return (
    <div className="home-category-details-container">
      <h1>{category.name}</h1>
      <div className="home-category-details-right-section">
        <h2>Books in {category.name}</h2>
        <div className="home-category-search-container">
          <input className="home-category-input-searchbar" type="text" placeholder="Search..." />
        </div>
      </div>
      <hr className="home-category-details-line" />
      <div className="home-category-details-list">
        {categoryStore.filteredBooks.map((book) => (
          <div
            key={book.id}
            className="home-category-details"
            onClick={() => handleBookClick(book.id)}
          >
            <img src={`http://localhost:3333/${book.images[0]}`} alt={book.name} />
            <span>{book.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CategoryDetails;



