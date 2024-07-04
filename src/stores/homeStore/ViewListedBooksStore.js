// src/stores/homeStore/BookStore.js
import { makeAutoObservable } from "mobx";
import bui from '../../assets/bui.jpg'

class ViewListedBooks {
  books = [
    {
      id: 1,
      title: "Business",
      image: bui,
    },
    {
      id: 2,
      title: "Calculus",
      image: bui,
    },
    {
      id: 3,
      title: "Botany",
      image: bui,
    },
    {
      id: 4,
      title: "English",
      image: bui,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const ViewListedBook = new ViewListedBooks();
export default ViewListedBook;
