import React, { useState } from 'react';
import { menuitem } from '../navigations/Navigation';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../style/headerStyle/header.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="main-container">
      <div className='header-container'>
        <div className='header'>
          <h5>KNOWLEDGE EXCHANGE</h5>
          <ul>
            {menuitem.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>
                  <span className="icon">{item.name}</span>
                </NavLink>
              </li>
            ))}
            <li className="user-icon-container">
              <FontAwesomeIcon icon={faUser} onClick={toggleDropdown} className="user-icon" />
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/header/customer-profile" className="dropdown-item">Customer Profile</NavLink>
                  <NavLink to="/header/seller-profile" className="dropdown-item">User Profile</NavLink>
                  <NavLink to="/header/tutor" className="dropdown-item">Tutor Profile</NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <main className="rightside-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
