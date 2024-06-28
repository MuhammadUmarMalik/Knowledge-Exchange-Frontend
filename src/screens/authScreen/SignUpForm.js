import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import SignUpStore from "../../stores/authStore/SignUpStore";
import '../../style/SignUpForm.css';
import { SC } from '../../Services/serverCall';

const SignUpForm = observer(() => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    SignUpStore.validateForm();

    if (SignUpStore.isFormValid()) {
      try {
        // Construct form data with required fields only
        const formData = {
          email: SignUpStore.formFields.email,
          password: SignUpStore.formFields.password,
          name: `${SignUpStore.formFields.firstName} ${SignUpStore.formFields.lastName}`,
          gender: SignUpStore.formFields.gender
        };

        await SC.postCall("/register", formData);
        alert("Sign up successful");
        SignUpStore.resetForm();
        
        // Navigate to header (or any other route)
        navigate('/header');
      } catch (error) {
        console.error("Error signing up:", error);
        alert("Failed to sign up");
      }
    } else {
      alert("Please correct the errors in the form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update SignUpStore field
    SignUpStore.setField(name, value);
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={SignUpStore.formFields.email}
          onChange={handleChange}
        />
        {/* Error handling for email */}
        <span className="error-container">
          {SignUpStore.errors.email && <span className="error">{SignUpStore.errors.email}</span>}
        </span>
        
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={SignUpStore.formFields.firstName}
          onChange={handleChange}
        />
        {/* Error handling for first name */}
        <span className="error-container">
          {SignUpStore.errors.firstName && <span className="error">{SignUpStore.errors.firstName}</span>}
        </span>
        
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={SignUpStore.formFields.lastName}
          onChange={handleChange}
        />
        {/* Error handling for last name */}
        <span className="error-container">
          {SignUpStore.errors.lastName && <span className="error">{SignUpStore.errors.lastName}</span>}
        </span>
        
        <select
          name="gender"
          value={SignUpStore.formFields.gender}
          onChange={handleChange}
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* Error handling for gender */}
        <span className="error-container">
          {SignUpStore.errors.gender && <span className="error">{SignUpStore.errors.gender}</span>}
        </span>
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={SignUpStore.formFields.password}
          onChange={handleChange}
        />
        {/* Error handling for password */}
        <span className="error-container">
          {SignUpStore.errors.password && <span className="error">{SignUpStore.errors.password}</span>}
        </span>
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
});

export default SignUpForm;
