import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signup } from "../../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    role: "Job Seeker",
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }

    const user = await signup(form);
    localStorage.setItem("user", JSON.stringify(user));

    if (form.role === "Admin") navigate("/admin-dashboard");
    else if (form.role === "Recruiter") navigate("/recruiter-dashboard");
    else navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "450px" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">Create an Account</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter a strong password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label">Register as</label>
            <select
              name="role"
              className="form-select"
              value={form.role}
              onChange={handleChange}
            >
              <option>Job Seeker</option>
              <option>Recruiter</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Signup Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <a href="/login" className="text-decoration-none">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
