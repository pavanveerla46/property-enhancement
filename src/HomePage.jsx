import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <div className="page">
      <header className="header">
        <a className="admin-button" href="/admin">Admin Login</a>
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
          <input type="text" placeholder="Full Name" required />

          <label>Email *</label>
          <input type="email" placeholder="Enter email address" required />

          <label>Mobile Number *</label>
          <input type="tel" placeholder="10-digit mobile number" required />

          <label>State / City *</label>
          <input type="text" placeholder="e.g. Bengaluru, Maharashtra" required />

          <label>Type of Property *</label>
          <select required>
            <option value="">Select</option>
            <option value="apartment">Apartment / Flat</option>
            <option value="independent-house">Independent House</option>
            <option value="villa">Villa</option>
            <option value="row-house">Row House</option>
          </select>

          <label>Bedrooms</label>
          <select>
            <option value="">Select</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4plus">4+ BHK</option>
          </select>

          <label>Improvement Budget (₹ INR) *</label>
          <input type="number" placeholder="e.g. 200000" required />

          <label>Describe Your Needs (optional)</label>
          <textarea placeholder="Kitchen makeover, storage, paint, etc." rows="4"></textarea>

          <button type="submit" className="submit-btn">Submit</button>
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
