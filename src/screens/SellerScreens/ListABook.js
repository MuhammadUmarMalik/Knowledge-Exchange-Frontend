import React, { useState } from 'react';
import '../../style/sellerStyle/listAbook.css'
import { NavLink ,useNavigate} from 'react-router-dom';
const ListABook = () => {
    const navigate = useNavigate();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [bookImage, setBookImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
 const  goback=()=>{
    navigate(-1);

 };

  const handleImageUpload = (e) => {
    setBookImage(e.target.files[0]);
  };

  return (
    <div className="listabbok-form-container">
        <div className=' seller-right-container'>
      <h2 className='listabook-heading'>List Book</h2>
      <p>Become a Seller and sell Books that are in good condition to our students</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Book Name" 
          value={bookName} 
          onChange={(e) => setBookName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Condition" 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)} 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
        <button  className="listabutton"type="submit">List</button>
      </form>
      </div>
      <div className="listabbok-profile-actions">
            <NavLink to='/listabook' className='navlink'>
            <button className='listabutton' onClick={goback}
              >BACK TO Profile</button>
          </NavLink>
            </div>
    </div>
  );
};

export default  ListABook;
