import { makeAutoObservable } from "mobx";
import { SC } from '../../Services/serverCall';

class BecomeSellerStore {
  formData = {
    name: '',
    phoneNumber: '',
  };

  errors = {
    name: '',
    phoneNumber: ''
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
      case 'phoneNumber':
        const phoneRegex = /^\+92\d{10}$/;
        this.errors.phoneNumber = phoneRegex.test(value) ? '' : 'Enter a valid phone number in the format +92XXXXXXXXXX';
        break;
      default:
        break;
    }
  }

  validateForm() {
    this.validateField('name', this.formData.name);
    this.validateField('phoneNumber', this.formData.phoneNumber);

    return !this.errors.name && !this.errors.phoneNumber;
  }

  async submitForm(callbackProgressUpload) {
    if (!this.validateForm()) {
      console.error('Form validation failed');
      return;
    }

    try {
      const response = await SC.postCall('/apply-seller', this.formData);

      console.log('Form submitted successfully', response.data);
      
      // Reset form fields and errors
      this.formData.name = '';
      this.formData.phoneNumber = '';

    } catch (error) {
      console.error('Error submitting form', error);
    }
  }
}

export default BecomeSellerStore;
