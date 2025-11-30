// src/AdminLogin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  // 👉 Put all your team usernames here (lowercase is easier)
  const allowedAdmins = ["pavan", "himesh", "vinay"];

  const handleLogin = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const username = fd.get("username").trim().toLowerCase();
    const password = fd.get("password");

    const isAllowedUser = allowedAdmins.includes(username);
    const isCorrectPassword = password === "123456"; // same for everyone

    if (isAllowedUser && isCorrectPassword) {
      alert("Login Successful!");

      // (optional) remember who logged in
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("adminName", username);

      // go to admin dashboard page
      navigate("/admin-dashboard");
    } else {
      alert("Wrong username or password!");
    }
  };

  return (
    <div className="page" style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Admin Login</h2>
      <form
        onSubmit={handleLogin}
        style={{
          maxWidth: 400,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label>Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
