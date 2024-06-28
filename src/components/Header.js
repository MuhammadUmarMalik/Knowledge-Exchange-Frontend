import React from 'react'
import { menuitem } from '../navigations/Navigation'
import { NavLink , Outlet} from 'react-router-dom';
import '../style/headerStyle/header.css'
const Header = () => {
  return (
    <div className="main-container">
      <div className='header-container'>
        <div className='header'>
      <h5>KNOWLEDGE EXCHANGE</h5>
      <ul>
        {menuitem.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} >
           
              <span className="icon">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      </div>
      </div>
     <main className="rightside-container">
      
        <Outlet/> 
    
     </main>
     
    </div>
  )
}

export default Header