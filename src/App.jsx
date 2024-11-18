import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Recommendation from "./pages/Recommendation";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import React, { useState, useEffect } from 'react';
import SignUp from "./pages/SignUp";

export default function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on initial load (if any)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <Router>
     
        {/* Navbar with user information */}
        <Navbar user={user} setUser={setUser} />

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signUp" element={<SignUp setUser={setUser} />} />
          </Routes>
       

        {/* Footer */}
        <Footer />
    </Router>
  );
}
