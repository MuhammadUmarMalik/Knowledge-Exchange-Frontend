import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./screens/authScreen/LoginForm";
import SignupForm from "./screens/authScreen/SignUpForm"; // Ensure you have this component
import Home from './screens/home/Home'
import Header from "./components/Header";
import About from './screens/about/About';
import Books from './screens/books/Books';
import Contact from './screens/contactUs/Contact';
import Tutor from './screens/tutors/Tutor';
import RegisterTutor from './screens/tutors/RegisterTutor';


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<LoginForm />} />
         <Route path="signup" element={<SignupForm />} />
         <Route path='header'  element={<Header/>}>
         <Route index element={<Home/>} />
         <Route path="about" element={<About />} />
         <Route path="books" element={<Books />} />
         <Route path="tutor" element={<Tutor />} />
         <Route path="about" element={<About />} />
         <Route path='register' element={<RegisterTutor/>} />
         <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
