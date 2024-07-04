// src/components/ListedBooks.js
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
    // navigate to the list book page or handle listing logic
    navigate("/list-book");
  };

  return (
    <div className="listed-books">
      <div className="header-buttons">
        <button className="back-button" onClick={goBack}>BACK TO PROFILE</button>
        <button className="list-book-button" onClick={listBook}>LIST A BOOK</button>
      </div>
      <h2>LISTED BOOKS</h2>
      <div className="books">
        {ViewListedBook.books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ViewListedBooks;
