// ContactFormStore.js
import { makeObservable, observable, action } from "mobx";
import { SC } from "../../Services/serverCall";

class ContactFormStore {
  name = "";
  email = "";
  subject = "";
  message = "";
  submitting = false;
  submitted = false;

  constructor() {
    makeObservable(this, {
      name: observable,
      email: observable,
      subject: observable,
      message: observable,
      submitting: observable,
      submitted: observable,
      setName: action,
      setEmail: action,
      setSubject: action,
      setMessage: action,
      submitForm: action,
      resetForm: action,
    });
  }

  setName = (value) => {
    this.name = value;
  };

  setEmail = (value) => {
    this.email = value;
  };

  setSubject = (value) => {
    this.subject = value;
  };

  setMessage = (value) => {
    this.message = value;
  };

  submitForm = async () => {
    try {
      this.submitting = true;
      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      // Assuming postCall in SC handles the API request
      const response = await SC.postCall("/contact", formData);
      console.log("Contact form submit response:", response);

      // Handle success scenario
      this.submitted = true;
      this.submitting = false;

      // Optionally, reset form fields after successful submission
      this.resetForm();

    } catch (error) {
      console.error("Error submitting contact form:", error);
      // Handle error scenario
      this.submitting = false;
      // Optionally, you can handle error state or retry logic here
    }
  };

  resetForm = () => {
    this.name = "";
    this.email = "";
    this.subject = "";
    this.message = "";
    this.submitted = false;
    this.submitting = false;
  };
}

const contactFormStore = new ContactFormStore();
export default contactFormStore;
