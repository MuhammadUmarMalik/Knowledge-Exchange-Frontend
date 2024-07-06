import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoryStore from "../../stores/homeStore/CategoryStore";
import "../../style/homeStyle/bookDetails.css";
import { toJS } from "mobx";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (categoryStore.books.length === 0) {
        await categoryStore.fetchBooks();
      }
      console.log('Books Array:', toJS(categoryStore.books)); // Debug line
      console.log('id', bookId)
      const foundBook = categoryStore.books.find(book => book.id === Number(bookId));
      console.log("Found Book:", foundBook); // Debug line
      if (foundBook) {
        setBook(foundBook);
      } else {
        console.error(`Book with id ${bookId} not found.`);
      }
    };

    fetchData();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleOrderClick = () => {
    navigate(`/header/offer/${bookId}`);
  };

  return (
    <div className="book-details-container">
      <h1 className="book-details-title">{book.categoryName}</h1>
      <hr className="book-details-line" />
      <div className="book-details-content">
        <div className="book-details-left">
          <h2 className="book-details-heading">Book Detail</h2>
          <p><strong>Seller Name:</strong> {book.author}</p>
          <p><strong>Book Name:</strong> {book.name}</p>
          <p><strong>Condition:</strong> {book.condition}</p>
          <p><strong>Price:</strong> ${book.price}</p>
        </div>
        <div className="book-details-right">
          <img src={`http://localhost:3333/${book.images[0]}`} alt={book.name} />
          <button className="order-button" onClick={handleOrderClick}>ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
