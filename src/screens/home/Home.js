import React from "react";
import '../../style/homeStyle/home.css'; // Ensure you create this CSS file
import bannerImgae from '../../assets/ioio.jpg'
import { useNavigate } from "react-router-dom";
import book1 from '../../assets/b1.jpg'
import book2 from '../../assets/hkj.jpg'
import book3 from '../../assets/jhj.jpg'

const Home = () => {

  const navigate = useNavigate();

  const customerProfile = () => {
    navigate('/header/customer-profile');
  };



  return (
    <div className="home-container">
      <header className="home-profile-button">
        <button className="profile-button" onClick={customerProfile}>PROFILE</button>
      </header>
      <section className="main-content">
        <div className="book-shelf">
          <img src={bannerImgae} alt="Bookshelf" className="book-shelf-image" />
        </div>
        <div className="home-shop-container">
        <div className="home-shop-section">
          <h2>For All the Books you need</h2>
          <p>Destination for all your educational needs. Whether you're a student looking for affordable textbooks or someone with textbooks our platform is best choice.</p>
          <button className="home-shop-button">SHOP NOW</button>
        </div>
        <div className="home-book-images">
          <img src={book1} alt="Books" className="home-book-image" />
          <img src={book2} alt="Books" className="home-book-image" />
          <img src={book3} alt="Books" className="home-book-image" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
