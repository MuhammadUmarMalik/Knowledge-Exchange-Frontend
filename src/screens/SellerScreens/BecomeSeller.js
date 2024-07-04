import React from 'react';
import { observer } from 'mobx-react-lite';
import BecomeSellerStore from '../../stores/sellerStore/BecomeSellerStore';
import '../../style/tutorsStyle/registerForm.css';

const BecomeSeller = observer(() => {
  const store = React.useState(() => new BecomeSellerStore())[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    store.setField(name, value);
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.submitForm();
  };

  return (
    <div className='seller-form-container'>
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register as a Seller</h1>
        <p>Become a Seller and sell Books that are in good condition to our students</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={store.formData.name}
          onChange={handleChange}
          required
        />
        {store.errors.name && <span className="error">{store.errors.name}</span>}
        <input
          type="text"
          name="phone_number"
          placeholder="Contact No"
          value={store.formData.phone_number}
          onChange={handleChange}
          required
        />
        {store.errors.phone_number && <span className="error">{store.errors.phone_number}</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
});

export default BecomeSeller;
