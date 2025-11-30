// src/UserRegister.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const fd = new FormData(e.target);
    const name = fd.get("name").trim();
    const email = fd.get("email").trim().toLowerCase();
    const password = fd.get("password").trim();
    const mobile = fd.get("mobile").trim();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Duplicate email check
    const alreadyExists = users.some((u) => u.email === email);

    if (alreadyExists) {
      setError("This email is already registered!");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      mobile,
      hasPaid: true, // Automatically paid ✔ (no checkbox)
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("currentUser", JSON.stringify(newUser)); // auto-login after register

    navigate("/user-dashboard");
  };

  return (
    <div className="page" style={{ padding: "40px 20px" }}>
      <h2>User Register</h2>

      <form
        onSubmit={handleRegister}
        className="form"
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <label>Full Name *</label>
        <input name="name" type="text" required />

        <label>Email *</label>
        <input name="email" type="email" required />

        <label>Password *</label>
        <input name="password" type="password" required />

        <label>Mobile Number *</label>
        <input name="mobile" type="tel" required />

        {error && (
          <p style={{ color: "red", marginTop: 8 }}>{error}</p>
        )}

        <button type="submit" className="submit-btn" style={{ marginTop: 16 }}>
          Register
        </button>

        <p style={{ marginTop: 16 }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default UserRegister;
