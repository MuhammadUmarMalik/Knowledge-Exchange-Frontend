// src/components/OrderList.js
import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import orderStore from "../../stores/sellerStore/OrderList";
import '../../style/sellerStyle/orderList.css'

const OrderList = observer(() => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="orderlist-container">
      
      {/* <h2>ORDER LIST</h2> */}
      <div className="orderlist">
        {orderStore.orders.map((order) => (
          <div key={order.id} className="orderlist-order">
            <div className="orderlist-book">
              <img src={order.image} alt={order.bookTitle} />
              <p>{order.bookTitle}</p>
            </div>
            <div className="orderlist-details">
              <p><strong>Customer Name:</strong> {order.customerName}</p>
              <p><strong>Offered Price:</strong> {order.offeredPrice}</p>
            </div>
            <div className="orderlist-actions">
              <button 
                className=" orderlist-accept-button"
                onClick={() => orderStore.acceptOrder(order.id)}
                disabled={order.status !== "pending"}
              >
                ACCEPT
              </button>
              <button 
                className="orderlist-reject-button"
                onClick={() => orderStore.rejectOrder(order.id)}
                disabled={order.status !== "pending"}
              >
                REJECT
              </button>
            </div>
          </div>
        ))}
      </div>
      <div><button className="back-button" onClick={goBack}>BACK TO PROFILE</button></div>
    </div>
  );
});

export default OrderList;