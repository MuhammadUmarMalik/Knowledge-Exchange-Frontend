// src/utils/validation.js

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email format";
  };
 
  
  const validatePassword = (password) => {
    if (password.trim() === "") {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };
  
  const validateForm = (formFields) => {
    let errors = {};
  
    errors.email = validateEmail(formFields.email);
    errors.password = validatePassword(formFields.password);
  
    return errors;
  };
  
  const isFormValid = (errors) => {
    return !Object.values(errors).some((error) => error !== "");
  };
  
  export { validateForm, isFormValid };
  