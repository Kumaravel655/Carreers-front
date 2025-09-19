import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Job Seeker");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password, role);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      if (role === "Admin") navigate("/admin-dashboard");
      else if (role === "Recruiter") navigate("/recruiter-dashboard");
      else navigate("job-seeker/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label">Login as</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Job Seeker</option>
              <option>Recruiter</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-3">
            <a href="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="px-2 text-muted">or</span>
          <hr className="flex-grow-1" />
        </div>

        {/* Social Login */}
        <button className="btn btn-outline-dark w-100 mb-2">
          <i className="bi bi-google me-2"></i> Continue with Google
        </button>
        <button className="btn btn-outline-dark w-100">
          <i className="bi bi-github me-2"></i> Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
