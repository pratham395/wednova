import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Login() {
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/dashboard");
};
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="brand-icon">
          💍
        </div>

        <h1>Welcome Back</h1>

        <p>Login to continue planning your dream wedding</p>

        <form
  onSubmit={(e) => {
    e.preventDefault();
    navigate("/dashboard");
  }}
>

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
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="switch-text">
          Don't have an account?{" "}
          <a href="/register">Create Account</a>
        </p>

      </div>

    </div>
  );
}

export default Login;