import { makeAutoObservable } from "mobx";
import { SC } from '../../Services/serverCall';

class BecomeSellerStore {
  formData = {
    name: '',
    phone_number: '',
  };

  errors = {
    name: '',
    phone_number: ''
  };

  constructor() {
    makeAutoObservable(this);
  }

  setField(name, value) {
    this.formData[name] = value;
    this.validateField(name, value);
  }

  validateField(name, value) {
    switch (name) {
      case 'name':
        this.errors[name] = value ? '' : 'Name is required';
        break;
      case 'phone_number':
        const phoneRegex = /^\+92\d{10}$/;
        this.errors.phone_number = phoneRegex.test(value) ? '' : 'Enter a valid phone number in the format +92XXXXXXXXXX';
        break;
      default:
        break;
    }
  }

  validateForm() {
    this.validateField('name', this.formData.name);
    this.validateField('phone_number', this.formData.phone_number);

    return !this.errors.name && !this.errors.phone_number;
  }

  async submitForm(callbackProgressUpload) {
    if (!this.validateForm()) {
      console.error('Form validation failed');
      return;
    }

    try {
      const response = await SC.postCall('/apply-seller', this.formData);

      console.log('Form submitted successfully', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  }
}

export default BecomeSellerStore;
