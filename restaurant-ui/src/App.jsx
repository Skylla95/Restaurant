import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Restaurants from "./components/Restaurants";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  return (
    <ShoppingCartProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
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
