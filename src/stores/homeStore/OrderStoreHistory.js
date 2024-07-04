// src/store.js
import { makeAutoObservable } from "mobx";
import bui from '../../assets/bui.jpg';
import cul from '../../assets/cal.jpg';

class OrderStore {
  orders = [
    {
      id: 1,
      image: bui,
      sellerName: "Nouman Maqsood",
      offeredPrice: 800,
      sellerPrice: 1000,
      bookTitle: "Business",
      status: "REJECTED",
    },
    {
      id: 2,
      image: cul,
      sellerName: "Babar Azam",
      offeredPrice: 600,
      sellerPrice: 800,
      bookTitle: "Calculus",
      status: "ACCEPTED",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const orderStore = new OrderStore();
export default orderStore;
