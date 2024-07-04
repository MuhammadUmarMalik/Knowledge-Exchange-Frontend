import React from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import LoginStore from "../../stores/authStore/LoginStore";
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
        console.log('Response:', response); // Log the entire response object for debugging

        if (response && response.data) {
          alert("Login successful");

          const { token, expires_at } = response.data.data.token || {};
          const roles = response.data.data.user.roles.map(role => role.name) || []; // Extract roles from data.user.roles

          if (token && expires_at) {
            localStorage.setItem('authToken', token);
            localStorage.setItem('tokenExpiration', expires_at);
            localStorage.setItem('role', JSON.stringify(roles));

            const expirationDate = new Date(expires_at);
            const currentDate = new Date();

            if (expirationDate < currentDate) {
              alert("Your session has expired. Please log in again.");
              localStorage.removeItem('authToken');
              localStorage.removeItem('tokenExpiration');
              localStorage.removeItem('roles');
              navigate('/login');
            } else {
              navigate('/header');
            }
          } else {
            throw new Error("Invalid token format in response");
          }

          LoginStore.resetForm();
        } else {
          throw new Error("Invalid response format");
        }
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
        {LoginStore.errors.email && <span className="error">{LoginStore.errors.email}</span>}
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={LoginStore.formFields.password}
          onChange={handleChange}
        />
        {LoginStore.errors.password && <span className="error">{LoginStore.errors.password}</span>}
        
        <span className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up now</Link>
        </span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
});

export default LoginForm;
