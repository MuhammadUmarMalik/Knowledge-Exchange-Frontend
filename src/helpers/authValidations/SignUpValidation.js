// src/utils/validation.js

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email format";
  };
  
  const validateRequiredField = (fieldValue, fieldName) => {
    return fieldValue.trim() === "" ? `${fieldName} is required` : "";
  };
  
  const validateForm = (formFields) => {
    let errors = {};
  
    errors.email = validateEmail(formFields.email);
    errors.firstName = validateRequiredField(formFields.firstName, "First Name");
    errors.lastName = validateRequiredField(formFields.lastName, "Last Name");
    errors.gender = validateRequiredField(formFields.gender, "Gender");
    errors.password = validateRequiredField(formFields.password, "Password");
  
    return errors;
  };
  
  const isFormValid = (errors) => {
    return !Object.values(errors).some((error) => error !== "");
  };
  
  export { validateForm, isFormValid };
  