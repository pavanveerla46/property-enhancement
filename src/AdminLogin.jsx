// src/AdminLogin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const user = fd.get("admin-user");
    const pass = fd.get("admin-pass");

    // Simple placeholder check (replace with real auth later)
    if (!user || !pass) {
      alert("Please enter username and password");
      return;
    }

    // simulate success then navigate back to home
    alert("Admin login successful (demo)");
    navigate("/");
  };

  return (
    <div className="container" style={{ maxWidth: 560 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="admin-user">Username <span className="highlight">*</span></label>
        <input id="admin-user" name="admin-user" type="text" required />

        <label htmlFor="admin-pass">Password <span className="highlight">*</span></label>
        <input id="admin-pass" name="admin-pass" type="password" required />

        <button type="submit">Login</button>
      </form>
      <small style={{ display: "block", marginTop: 12 }}>
        Admins: Curate and update suggestions and manage submissions.
      </small>
    </div>
  );
}

export default AdminLogin;
