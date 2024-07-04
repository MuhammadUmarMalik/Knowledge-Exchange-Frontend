import React from "react";
import { useParams , useNavigate } from "react-router-dom";
import categoryStore from "../../stores/homeStore/CategoryStore";
import "../../style/homeStyle/bookDetails.css";


const BookDetails = () => {
  const { subcategoryId } = useParams();
  const navigate = useNavigate();
  const subcategory = categoryStore.categories
    .flatMap(category => category.subcategories)
    .find(subcat => subcat.id === Number(subcategoryId));

  if (!subcategory) {
    return <div>Book not found</div>;
  }

  const categoryName = categoryStore.categories.find(category =>
    category.subcategories.includes(subcategory)
  )?.name || "Category";

  if (!subcategory) {
    return <div>Book not found</div>;
  }

  const handleOrderClick = () => {
    navigate(`/header/offer/${subcategoryId}`);
  };

  return (
    <div className="book-details-container">
      <h1 className="book-details-title">{categoryName}</h1>
      <hr className="book-details-line" />
      <div className="book-details-content">
        <div className="book-details-left">
          <h2 className="book-details-heading">Book Detail</h2>
          <p><strong>Seller Name:</strong> Ahmad Shan</p>
          <p><strong>Book Name:</strong> {subcategory.name}</p>
          <p><strong>Condition:</strong> 9/10</p>
          <p><strong>Price:</strong> 1000/-</p>
          <p><strong>Seller contact No:</strong> 0300-1234567</p>
        </div>
        <div className="book-details-right">
          <img src={subcategory.image} alt={subcategory.name} className="book-details-image" />
          <button className="order-button" onClick={handleOrderClick}>ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
