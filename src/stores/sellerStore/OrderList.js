
import { makeAutoObservable } from "mobx";
import oderimg from '../../assets/bot.jpg'

class OrderStore {
  orders = [
    {
      id: 1,
      bookTitle: "Business",
      customerName: "Ahmad Shan",
      offeredPrice: 800,
      image: oderimg,
      status: "pending",
    },
    {
      id: 2,
      bookTitle: "Business",
      customerName: "Ahmad Shan",
      offeredPrice: 900,
      image: oderimg,
      status: "pending",
    },
    {
      id: 3,
      bookTitle: "Botany",
      customerName: "Haris Ali",
      offeredPrice: 500,
      image: oderimg,
      status: "pending",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  acceptOrder(id) {
    this.orders = this.orders.map((order) =>
      order.id === id ? { ...order, status: "accepted" } : order
    );
  }

  rejectOrder(id) {
    this.orders = this.orders.map((order) =>
      order.id === id ? { ...order, status: "rejected" } : order
    );
  }
}

const orderStore = new OrderStore();
export default orderStore;