import React, { useState } from 'react';
import '../../style/tutorsStyle/registerForm.css';

const RegisterTutor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    qualification: '',
    contactNo: '',
    fee: '',
    location: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Register as a Tutor</h1>
      <p>Become a Tutor and provide education to our students</p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-Mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="qualification"
        placeholder="Qualification"
        value={formData.qualification}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contactNo"
        placeholder="Contact No"
        value={formData.contactNo}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="fee"
        placeholder="Per Subject Fee"
        value={formData.fee}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="picture"
        onChange={handleFileChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterTutor;
