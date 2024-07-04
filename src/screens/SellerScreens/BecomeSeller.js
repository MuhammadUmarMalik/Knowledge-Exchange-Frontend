import React, { useState } from 'react';
import '../../style/tutorsStyle/registerForm.css'

const BecomeSeller = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    fee: '',
    password: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(`${name}: ${value}`);

  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Register as a Seller</h1>
      <p>Become a Seller and sell Books that are in good condition to our students</p>
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
        name="contactNo"
        placeholder="Contact No"
        value={formData.contactNo}
        onChange={handleChange}
        required
      />
     
      <input
        type="text"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      
      <button type="submit">Register</button>
    </form>
  );
};

export default BecomeSeller;
