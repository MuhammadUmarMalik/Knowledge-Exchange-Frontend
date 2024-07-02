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
import RegisterTutor from './screens/tutors/RegisterTutor';
import CategoryDetails from "./screens/books/CategoryDetails";
import Category from "./screens/books/MainCategory";
import BookDetails from "./screens/books/BookDetails";
import OfferBookPrice from "./screens/books/OfferBookPrice";

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
          <Route path="category" element={<Category/>}/>
          <Route path="category/:categoryId" element={<CategoryDetails />} />
          <Route path="book/:subcategoryId" element={<BookDetails />} />
          <Route path="/header/offer/:subcategoryId" element={<OfferBookPrice/>} />
          <Route path="register" element={<RegisterTutor />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
