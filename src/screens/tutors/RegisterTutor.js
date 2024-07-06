import React from "react";
import { observer } from "mobx-react-lite";
import tutorRegistrationStore from "../../stores/tutorStore/TutorRegistrationStore";
import "../../style/tutorsStyle/registerForm.css";
import { useNavigate } from "react-router-dom";

const RegisterTutor = observer(() => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    tutorRegistrationStore.setField(name, value);
  };

  const handleFileChange = (e) => {
    tutorRegistrationStore.formData.profilePicture = e.target.files[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await tutorRegistrationStore.submitForm();
    navigate('tutor')
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Register as a Tutor</h1>
      <p>Become a Tutor and provide education to our students</p>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={tutorRegistrationStore.formData.subject}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="qualification"
        placeholder="Qualification"
        value={tutorRegistrationStore.formData.qualification}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="fee"
        placeholder="Per Subject Fee"
        value={tutorRegistrationStore.formData.fee}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={tutorRegistrationStore.formData.location}
        onChange={handleChange}
        required
      />
      <input type="file" name="profilePicture" onChange={handleFileChange} required />
      <button type="submit">Register</button>
    </form>
  );
});

export default RegisterTutor;
