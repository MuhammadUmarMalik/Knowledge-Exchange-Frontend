import React, { useState, useEffect } from "react";
import { observer } from "mobx-react"; // Import observer
import "../../style/tutorsStyle/tutor.css";
import tutorStore from "../../stores/tutorStore/tutorStore";
import { NavLink } from "react-router-dom";

const Tutor = observer(() => {
  // Wrap component with observer
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    tutorStore.fetchTutors();
  }, []);

  const handleViewProfile = (id) => {
    tutorStore.selectTutor(id);
    setShowPopup(true);
  };

  if (tutorStore.loading) {
    return <div>Loading...</div>;
  }

  if (tutorStore.error) {
    return <div>Error: {tutorStore.error}</div>;
  }

  return (
    <div className="container">
      <div className="top-section">
        <div className="left-section">
          <h2 className="heading">Tutors</h2>
          <p className="description">
            Become a Tutor and provide education to our students
          </p>
        </div>

        <div className="right-section">
          <NavLink to="/header/register-tutor" className="navlink">
            <button className="profile-button"> Register</button>
          </NavLink>

          <div className="search-container">
            <input
              className="input-searchbar"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        {tutorStore.tutors.map((item, index) => (
          <div className="tutor-item" key={index}>
            <img className="tutor-image" src={item.image} alt={item.name} />
            <span className="tutor-name">{item.name}</span>
            <span className="tutor-subject">{item.subject}</span>
            <button
              className="tutor-profile-button"
              onClick={() => handleViewProfile(item.id)}
            >
              VIEW Tutor PROFILE
            </button>
          </div>
        ))}
      </div>
      {showPopup && (
        <Popup
          Tutor={tutorStore.selectedTutor}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
});

const Popup = ({ Tutor, onClose }) => (
  <div className="popup">
    <div className="popup-inner">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2>Tutor Details</h2>
      {Tutor ? (
        <>
          <img className="tutor-image" src={Tutor.image} alt={Tutor.name} />
          <p>ID: {Tutor.id}</p>
          <p>Name: {Tutor.name}</p>
          <p>Subject: {Tutor.subject}</p>
          <p>Qualifications: {Tutor.qualifications}</p>
          <p>Fee: {Tutor.fee}</p>
          <p>Location: {Tutor.location}</p>
        </>
      ) : (
        <p>No tutor selected</p>
      )}
    </div>
  </div>
);

export default Tutor;
