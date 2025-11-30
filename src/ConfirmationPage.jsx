// src/ConfirmationPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function ConfirmationPage() {
  return (
    <div className="page" style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Thank you for submitting your details!</h2>
      <p>
        Our team will review your requirements and get back to you with
        personalized recommendations soon.
      </p>

      <Link to="/" style={{ marginTop: 20, display: "inline-block" }}>
        <button className="submit-btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default ConfirmationPage;
