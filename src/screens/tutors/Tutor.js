import React, { useState } from 'react';
import '../../style/tutorsStyle/tutor.css';
import { tutors } from '../../helpers/tutorList';
import tutorStore from '../../stores/tutorStore/tutorStore';
import { NavLink } from 'react-router-dom';

const Tutor = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleViewProfile = (id) => {
    const tutor = tutors.find(t => t.id === id);
    setSelectedTutor(tutor);
    setShowPopup(true);
    tutorStore.selectTutor(id);
  };

  return (
    <div className='container'>
      <div className='top-section'>
        <div className='left-section'>
          <h2>Tutors</h2>
          <p>Become a Tutor and provide education to our students</p>
        </div>
        <div className='right-section'>
          <NavLink to="/header/register-tutor" className="navlink"> {/* Updated NavLink to /header/register-tutor */}
            <button className="profile-button">Register</button>
          </NavLink>

          <div className="search-container">
            <input className='input-searchbar' type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className='bottom-section'>
        {tutors.map((item, index) => (
          <div className="tutor-item" key={index}>
            <img className="tutor-image" src={item.image} alt={item.name} />
            <span className="tutor-name">{item.name}</span>
            <span className="tutor-subject">{item.subject}</span>
            <button className="tutor-profile-button" onClick={(e) => { e.stopPropagation(); handleViewProfile(item.id) }}>
              VIEW Tutor PROFILE
            </button>
          </div>
        ))}
      </div>
      {showPopup && (
        <Popup Tutor={selectedTutor} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

const Popup = ({ Tutor, onClose }) => (
  <div className="popup">
    <div className="popup-inner">
      <button className="close-btn" onClick={onClose}>Close</button>
      <h2>Tutor Details</h2>
      {Tutor ? (
        <>
          <img className="tutor-image" src={Tutor.image} alt={Tutor.name} />
          <p>ID: {Tutor.id}</p>
          <p>Name: {Tutor.name}</p>
          <p>Subject: {Tutor.subject}</p>
        </>
      ) : (
        <p>No tutor selected</p>
      )}
    </div>
  </div>
);

export default Tutor;
