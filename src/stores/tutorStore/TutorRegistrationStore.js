// TutorRegistrationStore.js
import { makeObservable, observable, action } from "mobx";
import { SC } from "../../Services/serverCall";

class TutorRegistrationStore {
  formData = {
    subject: "",
    qualification: "",
    fee: "",
    location: "",
    profilePicture: null,
  };

  constructor() {
    makeObservable(this, {
      formData: observable,
      setField: action,
      submitForm: action,
      resetForm: action,
    });
  }

  setField(name, value) {
    this.formData[name] = value;
  }

  submitForm = async () => {
    try {
      const dataToSend = {
        subject: this.formData.subject,
        qualification: this.formData.qualification,
        fee: this.formData.fee,
        location: this.formData.location,
        profilePicture: this.formData.profilePicture ? this.formData.profilePicture.name : "", // Send only the file name
      };

      const response = await SC.postCall("/apply-tutor", dataToSend);

      console.log("Tutor registration form submit response:", response);

      // Reset form after successful submission
      this.resetForm();
    } catch (error) {
      console.error("Error submitting tutor registration form:", error);
    }
  };

  resetForm = () => {
    this.formData = {
      subject: "",
      qualification: "",
      fee: "",
      location: "",
      profilePicture: null,
    };
  };
}

const tutorRegistrationStore = new TutorRegistrationStore();
export default tutorRegistrationStore;
