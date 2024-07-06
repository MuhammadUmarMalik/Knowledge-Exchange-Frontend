import { makeAutoObservable, runInAction } from 'mobx';
import { SC } from '../../Services/serverCall';

class ListABookStore {
  bookName = '';
  author = '';
  price = '';
  condition = '';
  quantity = ''; // New observable for quantity
  bookImage = null;
  imagePreview = '';
  categories = [];
  selectedCategory = '';
  sellerId = '';

  constructor() {
    makeAutoObservable(this);
    this.fetchCategories();
    this.fetchSellerId();
  }

  setBookName(value) {
    this.bookName = value;
  }

  setAuthor(value) {
    this.author = value;
  }

  setPrice(value) {
    this.price = value;
  }

  setCondition(value) {
    this.condition = value;
  }

  setQuantity(value) {
    this.quantity = value; // New setter for quantity
  }

  setBookImage(value) {
    this.bookImage = value;
  }

  setImagePreview(value) {
    this.imagePreview = value;
  }

  setCategories(categories) {
    this.categories = categories;
  }

  setSelectedCategory(value) {
    this.selectedCategory = value;
  }

  setSellerId(value) {
    this.sellerId = value;
  }

  async fetchCategories() {
    try {
      const response = await SC.getCall('/seller/categories');
      runInAction(() => {
        this.setCategories(response.data.data);
      });
    } catch (error) {
      console.error('Failed to fetch categories', error);
    }
  }

  async fetchSellerId() {
    try {
      const response = await SC.getCall('/seller');
      const { id } = response.data.data.user;
      console.log(id, "hello")
      runInAction(() => {
        this.setSellerId(id);
      });
    } catch (error) {
      console.error('Failed to fetch seller ID', error);
    }
  }

  resetForm() {
    this.bookName = '';
    this.author = '';
    this.price = '';
    this.condition = '';
    this.quantity = ''; // Reset quantity
    this.bookImage = null;
    this.selectedCategory = '';
    this.imagePreview = '';
  }
}

const listABookStore = new ListABookStore();
export default listABookStore;
