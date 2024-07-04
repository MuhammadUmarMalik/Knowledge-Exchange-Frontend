// src/components/OrderHistory.js
import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import orderStore from "../../stores/homeStore/OrderStoreHistory";
import "../../style/homeStyle/orderHistory.css";

const OrderHistory = observer(() => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="order-history">
      <div className="order-history-back-container">
      <h2>ORDER HISTORY</h2>
      <button className="back-button" onClick={goBack}>BACK TO PROFILE</button>
      </div>
      {orderStore.orders.map((order) => (
        <div key={order.id} className="order">
          <div className="order-details">
            <p><strong>Seller Name:</strong> {order.sellerName}</p>
            <p><strong>Offered Price:</strong> {order.offeredPrice}</p>
            <p><strong>Seller Price:</strong> {order.sellerPrice}</p>
          </div>
          <div className="order-book">
            <img src={order.image} alt={order.bookTitle} />
            <p>{order.bookTitle}</p>
          </div>
          <div className={`order-status ${order.status.toLowerCase()}`}>{order.status}</div>
        </div>
      ))}
    </div>
  );
});

export default OrderHistory;
