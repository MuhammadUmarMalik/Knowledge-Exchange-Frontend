import { makeAutoObservable, runInAction } from "mobx";
import { SC } from '../../Services/serverCall'; // Import your API service

class ViewListedBooks {
  books = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchBooks();
  }

  async fetchBooks() {
    try {
      const response = await SC.getCall('/books'); // Update the endpoint as needed
      runInAction(() => {
        this.books = response.data.data; // Adjust based on your API response structure
      });
    } catch (error) {
      console.error('Failed to fetch books', error);
    }
  }
}

const viewListedBook = new ViewListedBooks();
export default viewListedBook;
