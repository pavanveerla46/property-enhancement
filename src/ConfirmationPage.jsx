// src/ConfirmationPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state?.data || null;

  const handleSave = () => {
    // (optional) save to localStorage here...
    navigate("/thankyou");
  };

  return (
    <div className="container center">
      <div className="confirmation-box">
        <h2>Confirm Your Submission</h2>
        <p>Are you sure you want to save your details?</p>
        <button onClick={handleSave} className="submit-btn">Save</button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
