import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import ViewListedBook from "../../stores/homeStore/ViewListedBooksStore";
import "../../style/homeStyle/viewListedBook.css";


const ViewListedBooks = observer(() => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const listBook = () => {
    navigate("/list-book");
  };

  return (
    <div className="listed-books-container">
      <div className="header-buttons">
        <button className="bback-button" onClick={goBack}>BACK TO PROFILE</button>
        <button className="listt-book-button" onClick={listBook}>LIST A BOOK</button>
      </div>
      <h2 className="listed-books-title">LISTED BOOKS</h2>
      <div className="books-container">
        {ViewListedBook.books.map((book) => (
          <div key={book.id} className="listed-book-box">
            <img src={book.image} alt={book.title} />
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ViewListedBooks;