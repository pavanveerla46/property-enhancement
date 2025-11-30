import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (!stored) {
      navigate("/login"); // not logged in → go to login page
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="page" style={{ padding: "40px 20px" }}>
      <h2>User Dashboard</h2>
      <p>Welcome, {user.name} 👋</p>
      <p>Email: {user.email}</p>
      <p>Amount Paid: ₹{user.amountPaid}</p>

      <button
        onClick={handleLogout}
        className="submit-btn"
        style={{ marginTop: 20 }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;
