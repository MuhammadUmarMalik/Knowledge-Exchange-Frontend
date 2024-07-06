import { makeAutoObservable, runInAction } from "mobx";
import { SC } from '../../Services/serverCall'; // Import your API service

class OfferStore {
  price = "";
  address = "";
  phone = "";
  quantity = 1;
  name = "";
  email = "";
  selectedBook = null; // To store the selected book details
  customerId = null; // To store the customer ID

  constructor() {
    makeAutoObservable(this);
  }

  setPrice(price) {
    this.price = price;
  }

  setAddress(address) {
    this.address = address;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  setSelectedBook(book) {
    this.selectedBook = book;
  }

  setCustomerId(id) {
    this.customerId = id;
  }

  async fetchCustomerData() {
    try {
      const response = await SC.getCall('/customer');
      runInAction(() => {
        this.setCustomerId(response.data.data.user.id); // Assuming the response has an `id` field
      });
    } catch (error) {
      console.error("Failed to fetch customer data:", error);
    }
  }

  async submitOffer(bookId) {
    if (!this.selectedBook) {
      console.error("No book selected for offer.");
      return;
    }

    if (!this.customerId) {
      console.error("No customer ID found.");
      return;
    }

    const offerData = {
      bookId,
      customerId: this.customerId,
      offer: this.price,
      address: this.address,
      phone: this.phone,
      buyingQuantity: this.quantity,
      name: this.name,
      email: this.email
    };

    try {
      const response = await SC.postCall('/orders', offerData);
      runInAction(() => {
        console.log("Offer submitted successfully:", response.data);
        alert("Offer submitted successfully!");
        // Optionally, you can reset form fields or perform other actions upon successful submission
      });
    } catch (error) {
      console.error("Failed to submit offer:", error);
      alert("Failed to submit offer. Please try again.");
    }
  }
}

const offerStore = new OfferStore();
export default offerStore;
