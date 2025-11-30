import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  // read logged-in user (if any)
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);

    const newUser = {
      name: fd.get("name").trim(),
      email: fd.get("email").trim().toLowerCase(),
      mobile: fd.get("mobile").trim(),
      city: fd.get("city"),
      propertyType: fd.get("propertyType"),
      bedrooms: fd.get("bedrooms"),
      budget: fd.get("budget"),
      needs: fd.get("needs"),
      createdAt: new Date().toISOString(),
    };

    // Get existing registrations from localStorage (or empty array)
    const existing = JSON.parse(localStorage.getItem("registrations") || "[]");

    // 🔒 DUPLICATE CHECK:
    // same name + same email + same mobile = not allowed
    const alreadyExists = existing.some(
      (u) =>
        u.name.trim().toLowerCase() === newUser.name.toLowerCase() &&
        (u.email || "").trim().toLowerCase() === newUser.email &&
        (u.mobile || "").trim() === newUser.mobile
    );

    if (alreadyExists) {
      alert(
        "This person has already registered with the same name, email and mobile number."
      );
      return; // stop here, do not save or navigate
    }

    // Add the new one
    existing.push(newUser);

    // Save back to localStorage
    localStorage.setItem("registrations", JSON.stringify(existing));

    // Go to confirmation page
    navigate("/confirmation");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <div className="page">
      {/* 👤 show logged-in user name + logout at top-left */}
      {currentUser && (
        <div
          style={{
            position: "fixed",
            top: 10,
            left: 10,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 1000,
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "600",
              background: "white",
              padding: "6px 12px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            👤 {currentUser.name}
          </span>

          <button
            onClick={handleLogout}
            style={{
              padding: "6px 10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#ff4b4b",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Logout
          </button>
        </div>
      )}

      <header className="header">
        <Link className="admin-button" to="/admin">
          Admin Login
        </Link>

        {/* Only show these when user is NOT logged in */}
        {!currentUser && (
          <>
            <Link className="user-button" to="/register">
              User Register
            </Link>

            <Link className="user-button" to="/login">
              User Login
            </Link>
          </>
        )}

        <h1>Enhance Your Home Value</h1>
        <p>Affordable, impactful solutions for Indian middle-class homes</p>
      </header>

      <section className="hero full-width">
        <h2>Upgrade Your Home’s Look, Comfort, and Value</h2>
        <p>
          We specialize in helping families transform their homes into
          beautiful, functional, and value-boosting spaces — all within a
          reasonable budget. From small upgrades to complete makeovers, our
          recommendations fit your goals perfectly.
        </p>
      </section>

      <section className="form-section full-width">
        <h2>Get Personalized Recommendations</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>Your Name *</label>
          <input name="name" type="text" placeholder="Full Name" required />

          <label>Email *</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            required
          />

          <label>Mobile Number *</label>
          <input
            name="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            required
          />

          <label>State / City *</label>
          <input
            name="city"
            type="text"
            placeholder="e.g. Bengaluru, Maharashtra"
            required
          />

          <label>Type of Property *</label>
          <select name="propertyType" required>
            <option value="">Select</option>
            <option value="apartment">Apartment / Flat</option>
            <option value="independent-house">Independent House</option>
            <option value="villa">Villa</option>
            <option value="row-house">Row House</option>
          </select>

          <label>Bedrooms</label>
          <select name="bedrooms">
            <option value="">Select</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4plus">4+ BHK</option>
          </select>

          <label>Improvement Budget (₹ INR) *</label>
          <input
            name="budget"
            type="number"
            placeholder="e.g. 200000"
            required
          />

          <label>Describe Your Needs (optional)</label>
          <textarea
            name="needs"
            placeholder="Kitchen makeover, storage, paint, etc."
            rows="4"
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>

      <section className="trust-section full-width">
        <h2>Why Thousands of Families Trust Us</h2>
        <p>
          Our expert home improvement advisors have helped over 5,000+ Indian
          households upgrade their living experience with smart, cost-effective
          solutions. We work with verified vendors and provide transparent
          pricing for every service.
        </p>
        <ul>
          <li>✅ 100% Verified Professionals</li>
          <li>✅ Transparent Cost Estimations</li>
          <li>✅ Designs Tailored for Middle-Class Homes</li>
          <li>✅ Free Consultation Calls</li>
        </ul>
      </section>

      <footer className="footer full-width">
        <p>© 2025 Enhance Your Home | Transforming Indian Homes with Trust</p>
      </footer>
    </div>
  );
}

export default HomePage;
