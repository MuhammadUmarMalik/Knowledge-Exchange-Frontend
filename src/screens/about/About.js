import React from 'react'
import '../../style/aboutStyle/about.css'
import aboutImg from '../../assets/hjhjjhd.jpg'
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const  goShopPage=()=>{
    navigate('/header/category');

 };
  return (
    <div className="about-us">
    <div className="image-container">
      <img src={aboutImg} alt="Books" />
    </div>
    <div className="text-container">
      <h2>KNOWLEDGE EXCHANGE</h2>
      <h1>About US</h1>
      <p>
        Knowledge exchange is a comprehensive educational platform designed to meet the diverse needs of students and educators. 
        This one-stop destination offers a range of services, including a textbook marketplace, textbook resale, access to diverse content, 
        stationery and resource materials, and a unique opportunity for aspiring tutors to find teaching jobs. 
        With a user-friendly our platform simplifies the educational experience for all users.
      </p>
      <button  onClick={goShopPage}>BUY NOW</button>
    </div>
  </div>
  )
}

export default About