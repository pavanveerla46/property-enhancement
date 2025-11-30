import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // If someone is already logged in, we can read their profile
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const fd = new FormData(e.target);
    const email = fd.get("email").trim().toLowerCase();
    const password = fd.get("password");

    // All registered users are stored in localStorage under "users"
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Find a user whose email & password match and hasPaid is true
    const user = users.find(
      (u) => u.email === email && u.password === password && u.hasPaid
    );

    if (!user) {
      setError("Invalid email or password OR payment not completed.");
      return;
    }

    // Save this logged-in user as the current user (profile)
    localStorage.setItem("currentUser", JSON.stringify(user));

    // ⬇️ Go to MAIN PAGE (home) after login
    navigate("/");
  };

  return (
    <div className="page" style={{ padding: "40px 20px" }}>
      {/* 👤 Profile chip at top-left if user is already logged in */}
      {currentUser && (
        <p
          style={{
            position: "fixed",
            top: 10,
            left: 10,
            fontSize: "16px",
            fontWeight: "600",
            background: "white",
            padding: "6px 10px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          👤 {currentUser.name}
        </p>
      )}

      <h2>User Login</h2>

      <form
        className="form"
        onSubmit={handleLogin}
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />

        {error && (
          <p style={{ color: "red", marginTop: 8, marginBottom: 0 }}>{error}</p>
        )}

        <button type="submit" className="submit-btn" style={{ marginTop: 16 }}>
          Login
        </button>

        <p style={{ marginTop: 16 }}>
          New user? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;
