import { makeAutoObservable } from "mobx";
import { validateForm, isFormValid } from "../../helpers/authValidations/LoginValidation";

class LoginStore {
  formFields = {
    email: "",
    password: ""
  };

  errors = {};

  constructor() {
    makeAutoObservable(this);
  }

  setField(field, value) {
    this.formFields[field] = value;
    this.validateField(field, value);
  }

  validateField(field, value) {
    const formFields = { ...this.formFields, [field]: value };
    this.errors = validateForm(formFields);
  }

  validateForm() {
    this.errors = validateForm(this.formFields);
  }

  resetForm() {
    this.formFields = {
      email: "",
      password: ""
    };
    this.errors = {};
  }

  isFormValid() {
    return isFormValid(this.errors);
  }
}

export default new LoginStore();
