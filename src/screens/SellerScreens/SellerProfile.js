import React from 'react';
import '../../style/sellerStyle/sellerProfile.css'
import { NavLink } from 'react-router-dom';

const SellerProfile = () => {
    return (
        <div className=" seller-profile-container">
            <div className="seller-profile-content">
                
                <div className="profile-card">
                <h1 className="profile-title">PROFILE</h1>
                    <p><strong>First Name:</strong> Ahmad</p>
                    <p><strong>Last Name:</strong> Shan</p>
                    <p><strong>Email:</strong> ahmad@gmail.com</p>
                    <p><strong>Contact No:</strong> 0300-1234567</p>
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
}

export default SellerProfile;



