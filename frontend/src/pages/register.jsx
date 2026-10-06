import React from "react";
import "./auth.css";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="brand-icon">
          💍
        </div>

        <h1>Create Account</h1>

        <p>
          Start planning your dream wedding with WedNova
        </p>

        <form>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;