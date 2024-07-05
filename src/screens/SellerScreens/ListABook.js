import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import '../../style/sellerStyle/listAbook.css'
import listABookStore from '../../stores/sellerStore/ListABookStore';
import { SC } from '../../Services/serverCall';
const ListABook = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('bookName', listABookStore.bookName);
    formData.append('author', listABookStore.author);
    formData.append('price', listABookStore.price);
    formData.append('condition', listABookStore.condition);
    formData.append('path', listABookStore.bookImage);
    formData.append('category_id', listABookStore.selectedCategory); // Use category_id
    formData.append('sellerId', listABookStore.sellerId);

    try {
      // Replace with your API endpoint
      const response = await SC.postCall('/books', formData);

      // Handle response as needed
      console.log('Response:', response.data);

      // Reset form after successful submission
      listABookStore.resetForm();

      // Navigate or show success message
      navigate('/listabook');
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenario
    }
  };

  const handleImageUpload = (e) => {
    listABookStore.setBookImage(e.target.files[0]);
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
            value={listABookStore.bookName} 
            onChange={(e) => listABookStore.setBookName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Author" 
            value={listABookStore.author} 
            onChange={(e) => listABookStore.setAuthor(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Price" 
            value={listABookStore.price} 
            onChange={(e) => listABookStore.setPrice(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Condition" 
            value={listABookStore.condition} 
            onChange={(e) => listABookStore.setCondition(e.target.value)} 
          />
          <select
            value={listABookStore.selectedCategory}
            onChange={(e) => listABookStore.setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>Select Category</option>
            {listABookStore.categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
          />
          <button className="listabutton" type="submit">List</button>
        </form>
      </div>
      <div className="listabbok-profile-actions">
        <button className='listabutton' onClick={() => navigate('/listabook')}>
          BACK TO Profile
        </button>
      </div>
    </div>
  );
};

export default observer(ListABook);
