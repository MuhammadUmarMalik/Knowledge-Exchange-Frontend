import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import LoginStore from "../../stores/authStore/LoginStore";
import { useNavigate } from 'react-router-dom';
import '../../style/loginForm.css';
import { SC } from '../../Services/serverCall';

const LoginForm = observer(() => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    LoginStore.validateForm();

    if (LoginStore.isFormValid()) {
      try {
        const response = await SC.postCall("/login", LoginStore.formFields);
        alert("Login successful");

        // Ensure the response contains the expected properties
        if (response.data && response.data.token) {
          const { token, expires_at } = response.data.token;
          console.log(token)
          const roles = response.data.roles || []; // Default to an empty array if roles are not present

          // Save token, expiration date, and roles to localStorage
          localStorage.setItem('authToken', token);
          localStorage.setItem('tokenExpiration', expires_at);
          localStorage.setItem('roles', JSON.stringify(roles)); // Convert roles array to a JSON string

          // Check token expiration
          const expirationDate = new Date(expires_at);
          const currentDate = new Date();
          if (expirationDate < currentDate) {
            alert("Your session has expired. Please log in again.");
            localStorage.removeItem('authToken');
            localStorage.removeItem('tokenExpiration');
            localStorage.removeItem('roles');
            navigate('/login'); // Navigate back to login page if token expired
          } else {
            navigate('/header');
          }
        } else {
          throw new Error("Invalid response format");
        }

        LoginStore.resetForm();
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Failed to login");
      }
    } else {
      alert("Please correct the errors in the form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    LoginStore.setField(name, value);
  };

  return (
    <div className="Login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={LoginStore.formFields.email}
          onChange={handleChange}
        />
        <span className="error-container">
          {LoginStore.errors.email && <span className="error">{LoginStore.errors.email}</span>}
        </span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={LoginStore.formFields.password}
          onChange={handleChange}
        />
        <span className="error-container">
          {LoginStore.errors.password && <span className="error">{LoginStore.errors.password}</span>}
        </span>
        <span className="signup-link">
          <span>Don't have an account? <Link to="/signup">Sign Up now</Link></span>
        </span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
});

export default LoginForm;
