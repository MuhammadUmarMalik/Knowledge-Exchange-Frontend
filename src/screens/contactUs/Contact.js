// Contact.js (or Contact.jsx)
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import contactFormStore from '../../stores/authStore/ContactFormStore'; // Adjust the path as necessary
import '../../style/contactUsStyle/contact.css';

const Contact = observer(() => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await contactFormStore.submitForm();
    // Handle any navigation or UI changes after form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        contactFormStore.setName(value);
        break;
      case 'email':
        contactFormStore.setEmail(value);
        break;
      case 'subject':
        contactFormStore.setSubject(value);
        break;
      case 'message':
        contactFormStore.setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>Please fill out the form below to send us an email.</p>
        <p>Destination for all your educational needs. Whether you're a student looking for affordable textbooks or someone with textbooks our platform is the best choice.</p>
        <p><strong>Email:</strong> KNOWLEDGEEXCHANGE@GMAIL.COM</p>
        <p><strong>Phone:</strong> +923021234567</p>
        <p><strong>Address:</strong> UCP LAHORE, NEAR SHOKAT KHANAM, JOHAR TOWN</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" name="name" value={contactFormStore.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-MAIL</label>
            <input type="email" id="email" name="email" value={contactFormStore.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input type="text" id="subject" name="subject" value={contactFormStore.subject} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name="message" value={contactFormStore.message} onChange={handleChange}></textarea>
          </div>
          <div className='button-container'>
            <button type="submit" disabled={contactFormStore.submitting}>
              {contactFormStore.submitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Contact;
