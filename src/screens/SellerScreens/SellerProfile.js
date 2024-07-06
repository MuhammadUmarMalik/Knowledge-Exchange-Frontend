import React, { useEffect } from 'react';
import '../../style/sellerStyle/sellerProfile.css';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import sellerProfileStore from '../../stores/sellerStore/SellerProfileStore'; // Import the sellerProfileStore

const SellerProfile = observer(() => {
  useEffect(() => {
    sellerProfileStore.fetchSellerData(); // Fetch seller data when the component mounts
  }, []);

  const { name , email } = sellerProfileStore.seller;

  return (
    <div className="seller-profile-container">
      <div className="seller-profile-content">
        <div className="profile-card">
          <h1 className="profile-title">PROFILE</h1>
          <p><strong>First Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <button className="edit-profile-btn">EDIT PROFILE</button>
        </div>
      </div>
      <div className="seller-profile-actions">
        <NavLink to='/header/list-a-book' className='navlink'>
          <button className='seller-action-btn'>LIST A BOOK</button>
        </NavLink>
        <NavLink to='/header/listed-books' className='navlink'>
          <button className='seller-action-btn'>VIEW LISTED BOOKS</button>
        </NavLink>
        <NavLink to='/header/order-list' className='navlink'>
          <button className='seller-action-btn'>VIEW ORDER LIST</button>
        </NavLink>
      </div>
    </div>
  );
});

export default SellerProfile;
