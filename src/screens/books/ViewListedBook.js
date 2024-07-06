import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import viewListedBook from "../../stores/homeStore/ViewListedBooksStore"; // Ensure the correct export/import
import "../../style/homeStyle/viewListedBook.css";

const ViewListedBooks = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    viewListedBook.fetchBooks();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const listBook = () => {
    navigate("/header/list-a-book");
  };

  return (
    <div className="listed-books-container">
      <div className="header-buttons">
        <button className="bback-button" onClick={goBack}>BACK TO PROFILE</button>
        <button className="listt-book-button" onClick={listBook}>LIST A BOOK</button>
      </div>
      <h2 className="listed-books-title">LISTED BOOKS</h2>
      <div className="books-container">
        {viewListedBook.books.map((book) => (
          <div key={book.id} className="listed-book-box">
            <img src={`http://localhost:3333/${book.images[0]}`} alt={book.name} />
            <p className="book-title">{book.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ViewListedBooks;
