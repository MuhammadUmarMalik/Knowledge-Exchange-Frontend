import { makeAutoObservable, runInAction } from 'mobx';
import { SC } from '../../Services/serverCall';

class ListABookStore {
  bookName = '';
  author = '';
  price = '';
  condition = '';
  bookImage = null;
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

  setBookImage(value) {
    this.bookImage = value;
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
      const { sellerId } = response.data.data.user;
      console.log(sellerId,"hello")
      runInAction(() => {
        this.setSellerId(sellerId);
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
    this.bookImage = null;
    this.selectedCategory = '';
  }
}

const listABookStore = new ListABookStore();
export default listABookStore;
