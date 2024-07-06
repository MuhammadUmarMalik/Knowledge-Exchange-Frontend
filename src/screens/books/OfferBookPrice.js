import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import categoryStore from "../../stores/homeStore/CategoryStore";
import offerStore from "../../stores/homeStore/OfferStore";
import "../../style/homeStyle/offerBookPrice.css";

const OfferBookPrice = observer(() => {
  const { bookId } = useParams();

  useEffect(() => {
    offerStore.fetchCustomerData(); // Fetch customer data when the component mounts
    const book = categoryStore.books.find(book => book.id === Number(bookId));
    if (book) {
      offerStore.setSelectedBook(book);
    }
  }, [bookId]);

  if (!offerStore.selectedBook) {
    return <div>Book not found</div>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        offerStore.setPrice(value);
        break;
      case 'address':
        offerStore.setAddress(value);
        break;
      case 'phone':
        offerStore.setPhone(value);
        break;
      case 'quantity':
        offerStore.setQuantity(Number(value));
        break;
      case 'name':
        offerStore.setName(value);
        break;
      case 'email':
        offerStore.setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleOfferSubmit = () => {
    offerStore.submitOffer(Number(bookId));
  };

  const { selectedBook } = offerStore;

  const categoryName = categoryStore.categories.find(category =>
    category.id === selectedBook.categoryId
  )?.name || "Category";

  return (
    <div className="offer-book-price-container">
      <h1 className="offer-book-price-title">{categoryName}</h1>
      <div className="offer-book-price-content">
        <div className="offer-book-price-left">
          <h3>Offer Book Price</h3>
          <p><strong>Enter Price:</strong></p>
          <input
            type="text"
            name="price"
            value={offerStore.price}
            onChange={handleInputChange}
            className="price-input"
          />
          <p><strong>Enter Address:</strong></p>
          <input
            type="text"
            name="address"
            value={offerStore.address}
            onChange={handleInputChange}
            className="address-input"
          />
          <p><strong>Enter Phone:</strong></p>
          <input
            type="text"
            name="phone"
            value={offerStore.phone}
            onChange={handleInputChange}
            className="phone-input"
          />
          <p><strong>Enter Quantity:</strong></p>
          <input
            type="number"
            name="quantity"
            value={offerStore.quantity}
            onChange={handleInputChange}
            className="quantity-input"
          />
          <p><strong>Enter Your Name:</strong></p>
          <input
            type="text"
            name="name"
            value={offerStore.name}
            onChange={handleInputChange}
            className="name-input"
          />
          <p><strong>Enter Your Email:</strong></p>
          <input
            type="email"
            name="email"
            value={offerStore.email}
            onChange={handleInputChange}
            className="email-input"
          />
          <br />
          <button onClick={handleOfferSubmit} className="offer-button">OFFER</button>
        </div>
        <div className="offer-book-price-right">
          <img src={`http://localhost:3333/${selectedBook.images[0]}`} alt={selectedBook.name} />
          <p><strong>Seller Name:</strong><br />Ahmad Shan</p>
          <p><strong>Book Name:</strong><br />{selectedBook.name}</p>
        </div>
      </div>
    </div>
  );
});

export default OfferBookPrice;
