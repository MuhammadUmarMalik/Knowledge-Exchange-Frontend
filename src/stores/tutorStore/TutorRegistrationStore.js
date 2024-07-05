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
      const formData = new FormData();
      for (const key in this.formData) {
        formData.append(key, this.formData[key]);
      }

      console.log("FormData to be submitted:", Array.from(formData.entries())); // Log formData to check contents

      const response = await SC.postCall("/apply-tutor", formData);

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
