import { makeAutoObservable, runInAction } from "mobx";
import { SC } from '../../Services/serverCall'; // Import your API service

class SellerProfileStore {
  seller = {
    firstName: '',
    email: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchSellerData() {
    try {
      const response = await SC.getCall('/seller'); // Update the endpoint as needed
      runInAction(() => {
        this.seller = response.data.data.user; // Adjust based on your API response structure
      });
    } catch (error) {
      console.error('Failed to fetch seller data', error);
    }
  }
}

const sellerProfileStore = new SellerProfileStore();
export default sellerProfileStore;
