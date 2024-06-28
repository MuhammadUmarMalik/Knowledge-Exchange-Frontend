import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";
import LoginStore from "../../stores/authStore/LoginStore";
import '../../style/loginForm.css';

const LoginForm = observer(() => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    LoginStore.validateForm();

    if (LoginStore.isFormValid()) {
      try {
        await axios.post("/api/Login", LoginStore.formFields);
        alert("Login successful");
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
