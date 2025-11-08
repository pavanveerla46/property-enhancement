// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AdminLogin from "./AdminLogin";
import ConfirmationPage from "./ConfirmationPage";
import ThankYouPage from "./ThankYouPage"; // <-- import added
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} /> {/* <-- route added */}
      </Routes>
    </Router>
  );
}

export default App;
