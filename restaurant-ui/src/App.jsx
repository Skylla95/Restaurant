import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Restaurants from "./components/restaurant/Restaurants";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./components/login/SignIn";
import Signup from "./components/login/Signup";
import ForgotPassword from "./components/login/ForgotPassword";
function App() {
  return (
    <ShoppingCartProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/restaurants" element={<Restaurants />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/signin" element={<SignIn />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
        </Routes>
      </AuthProvider>
    </ShoppingCartProvider>
  );
}

export default App;
