import { makeAutoObservable } from "mobx";

class OfferStore {
  price = "";

  constructor() {
    makeAutoObservable(this);
  }

  setPrice(price) {
    this.price = price;
  }

  submitOffer(subcategoryId) {
    console.log(`Offer submitted for subcategory ${subcategoryId}: ${this.price}`);
    // Add logic for submitting the offer
  }
}

const offerStore = new OfferStore();
export default offerStore;
