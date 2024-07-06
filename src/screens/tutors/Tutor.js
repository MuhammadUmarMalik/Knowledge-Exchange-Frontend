import React, { useEffect, useState } from 'react';
import '../../style/tutorsStyle/tutor.css';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import tutorStore from '../../stores/tutorStore/AllTutorStore';

const Tutor = observer(() => {
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    tutorStore.fetchTutors(); // Fetch tutor data when the component mounts
  }, []);

  // Handle click on VIEW TUTOR PROFILE button
  const handleViewProfile = (tutor) => {
    setSelectedTutor(tutor);
  };

  // Check if tutors data is loaded
  if (tutorStore.tutors.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='top-section'>
        <div className='left-section'>
          <h2 className="heading">Tutors</h2>
          <p className="description">Become a Tutor and provide education to our students</p>
        </div>

        <div className='right-section'>
          <NavLink to="/header/register-tutor" className="navlink">
            <button className="profile-button"> Register</button>
          </NavLink>

          <div className="search-container">
            <input className='input-searchbar' type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className='bottom-section'>
        {tutorStore.tutors.map((item, index) => (
          <div className="tutor-item" key={index}>
            <img src={`http://localhost:3333/${item.profile_picture}`} alt={item.name} className='tutor-image'/>
            <span className="tutor-name">{item.name}</span>
            <span className="tutor-subject">{item.subject}</span>
            <button className="tutor-profile-button" onClick={() => handleViewProfile(item)}>
              VIEW TUTOR PROFILE
            </button>
          </div>
        ))}
      </div>
      {/* Detailed Profile Modal */}
      {selectedTutor && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => setSelectedTutor(null)}>Close</button>
            <h2>Tutor Details</h2>
            <img src={`http://localhost:3333/${selectedTutor.profile_picture}`} alt={selectedTutor.name} className='tutor-image'/>
            <p>Name: {selectedTutor.name}</p>
            <p>Subject: {selectedTutor.subject}</p>
            <p>Qualifications: {selectedTutor.qualifications || 'Not specified'}</p>
            <p>Fee: {selectedTutor.fee}</p>
            <p>Location: {selectedTutor.location}</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default Tutor;
