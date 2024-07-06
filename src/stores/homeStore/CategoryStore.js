import { makeAutoObservable, runInAction, toJS } from "mobx";
import { SC } from '../../Services/serverCall'; // Import your API service
import courseBooksImage from '../../assets/jhjh.jpg';
import novelsImage from '../../assets/hjhjjhd.jpg';
import poetryImage from '../../assets/poe.jpg';
import fantasyImage from '../../assets/rtrtrt.jpg';

class CategoryStore {
  categories = [
    {
      id: 1,
      name: "Course Books",
      image: courseBooksImage,
    },
    {
      id: 2,
      name: "Novels",
      image: novelsImage,
    },
    {
      id: 3,
      name: "Poetry",
      image: poetryImage,
    },
    {
      id: 4,
      name: "Fantasy",
      image: fantasyImage,
    }
  ];

  books = [];
  filteredBooks = [];
  selectedCategory = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectCategory = (category) => {
    this.selectedCategory = category;
    this.filterBooksByCategory();
  };

  fetchBooks = async () => {
    try {
      const response = await SC.getCall('/books'); // Update the endpoint as needed
      runInAction(() => {
        this.books = response.data.data; // Adjust based on your API response structure
        console.log('Fetched Books:', toJS(this.books)); // Add this line
        if (this.selectedCategory) {
          this.filterBooksByCategory();
        }
      });
    } catch (error) {
      console.error('Failed to fetch books', error);
    }
  };

  filterBooksByCategory = () => {
    if (this.selectedCategory) {
      this.filteredBooks = this.books.filter(book => book.categoryName === this.selectedCategory.name);
      console.log(toJS(this.filteredBooks), "Filtered Books");
    }
  };
}

const categoryStore = new CategoryStore();
export default categoryStore;
