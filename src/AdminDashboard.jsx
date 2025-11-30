// src/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const adminName = localStorage.getItem("adminName") || "Admin";

  useEffect(() => {
    // 1️⃣ Check if admin is logged in
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (loggedIn !== "true") {
      // not logged in → go back to admin login page
      navigate("/admin");   // your login page is /admin
      return;
    }

    // 2️⃣ Load registrations saved from HomePage
    const saved = JSON.parse(localStorage.getItem("registrations") || "[]");
    setUsers(saved);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminName");
    navigate("/");
  };

  return (
    <div className="page" style={{ padding: "40px 20px" }}>
      <h2>Welcome, {adminName}</h2>

      <h3>Total people registered: {users.length}</h3>

      {users.length === 0 ? (
        <p>No one has registered yet.</p>
      ) : (
        <div style={{ overflowX: "auto", marginTop: 20 }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "600px",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>#</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Name</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Email</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Mobile</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>City</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Property</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Bedrooms</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Budget</th>
                <th style={{ borderBottom: "1px solid " + "#ccc", padding: 8 }}>Needs</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index}>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {index + 1}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.name}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.email}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.mobile}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.city}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.propertyType}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.bedrooms || "-"}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    ₹{u.budget}
                  </td>
                  <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                    {u.needs || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="submit-btn"
        style={{ marginTop: 24 }}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
