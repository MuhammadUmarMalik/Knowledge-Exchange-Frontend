import React from 'react'
import '../../style/contactUsStyle/contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
    <div className="contact-info">
      <h2>Contact</h2>
      <p>Please fill out the form below to send us an email.</p>
      <p>
        Destination for all your educational needs. Whether you're a student looking for affordable textbooks or someone with textbooks our platform is best choice.
      </p>
      <p><strong>Email:</strong> KNOWLEDGEEXCHANGE@GMAIL.COM</p>
      <p><strong>Phone:</strong> +923021234567</p>
      <p><strong>Address:</strong> UCP LAHORE, NEAR SHOKAT KHANAM, JOHAR TOWN</p>
    </div>
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">SUBJECT</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div className='button-container'>
        <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
  )
}
export default Contact