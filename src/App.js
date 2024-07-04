import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./screens/authScreen/LoginForm";
import SignupForm from "./screens/authScreen/SignUpForm";
import Home from './screens/home/Home';
import Header from "./components/Header";
import About from './screens/about/About';
import Books from './screens/books/Books';
import Contact from './screens/contactUs/Contact';
import Tutor from './screens/tutors/Tutor';
import CategoryDetails from "./screens/books/CategoryDetails";
import Category from "./screens/books/MainCategory";
import BookDetails from "./screens/books/BookDetails";
import OfferBookPrice from "./screens/books/OfferBookPrice";
import CustomerProfile from "./screens/authScreen/CustomerProfile";
import OrderHistory from "./screens/books/OrderHistory";
import ViewListedBooks from './screens/books/ViewListedBook';
import BecomeSeller from "./screens/SellerScreens/BecomeSeller";
import SellerProfile from "./screens/SellerScreens/SellerProfile";
import ListABook from "./screens/SellerScreens/ListABook";
import OrderList from "./screens/SellerScreens/OrderList";
import AdminPage from "./screens/admin/Admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="header" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="tutor" element={<Tutor />} />
          <Route path="/header/category" element={<Category />} />
          <Route path="category/:categoryId" element={<CategoryDetails />} />
          <Route path="book/:subcategoryId" element={<BookDetails />} />
          <Route
            path="/header/offer/:subcategoryId"
            element={<OfferBookPrice />}
          />
          <Route
            path="/header/offer/:subcategoryId"
            element={<OfferBookPrice />}
          />
          <Route
            path="/header/customer-profile"
            element={<CustomerProfile />}
          />
          <Route path="/header/order-history" element={<OrderHistory />} />
          <Route path="/header/listed-books" element={<ViewListedBooks />} />
          <Route path="/header/become-seller" element={<BecomeSeller />} />
          <Route path="/header/seller-profile" element={<SellerProfile />} />
          <Route path="/header/list-a-book" element={<ListABook />} />
          <Route path="/header/order-list" element={<OrderList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
