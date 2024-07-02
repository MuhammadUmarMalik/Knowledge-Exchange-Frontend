import React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import categoryStore from "../../stores/homeStore/CategoryStore";
import offerStore from "../../stores/homeStore/OfferStore";
import "../../style/homeStyle/offerBookPrice.css";

const OfferBookPrice = observer(() => {
  const { subcategoryId } = useParams();

  const subcategory = categoryStore.categories
    .flatMap(category => category.subcategories)
    .find(subcat => subcat.id === Number(subcategoryId));

  if (!subcategory) {
    return <div>Book not found</div>;
  }

  const handlePriceChange = (event) => {
    offerStore.setPrice(event.target.value);
  };

  const handleOfferSubmit = () => {
    offerStore.submitOffer(subcategoryId);
  };

  const categoryName = categoryStore.categories.find(category =>
    category.subcategories.includes(subcategory)
  )?.name || "Category";

  return (
    <div className="offer-book-price-container">
      <h1 className="offer-book-price-title">{categoryName}</h1>
      <div className="offer-book-price-content">
        <div className="offer-book-price-left">
          <h3>Offer Book Price</h3>
          <p>Offer Price to Seller:</p>
          <p><strong>Enter Price:</strong></p>
          <input
            type="text"
            value={offerStore.price}
            onChange={handlePriceChange}
            className="price-input"
          />
          <br></br>
          <button onClick={handleOfferSubmit} className="offer-button">OFFER</button>
        </div>
        <div className="offer-book-price-right">
          <img src={subcategory.image} alt={subcategory.name} />
          <p><strong>Seller Name:</strong><br />Ahmad Shan</p>
          <p><strong>Book Name:</strong><br />{subcategory.name}</p>
        </div>
      </div>
    </div>
  );
});

export default OfferBookPrice;
