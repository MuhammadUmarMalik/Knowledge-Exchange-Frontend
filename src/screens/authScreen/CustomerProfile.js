import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import profileStore from "../../stores/homeStore/ProfileStore";
import "../../style/homeStyle/CustomerProfile.css";

const CustomerProfile = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    profileStore.fetchCustomerData();
  }, []);

  const navigateToOrderHistory = () => {
    navigate("/header/order-history");
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">PROFILE</h1>
      <div className="profile-subtitle">Customer</div>
      <div className="profile-details">
        <div className="profile-field">
          <strong>First Name:</strong> {profileStore.firstName}
        </div>
        <div className="profile-field">
          <strong>Email:</strong> {profileStore.email}
        </div>
        <button className="edit-profile-button">EDIT PROFILE</button>
      </div>
      <button className="view-order-history-button" onClick={navigateToOrderHistory}>VIEW ORDER HISTORY</button>
    </div>
  );
});

export default CustomerProfile;
