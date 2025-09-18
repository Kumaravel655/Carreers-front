import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Password.css"


const ForgetPassword = () => {
  return (
     <div className="d-flex justify-content-center align-items-center container">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-primary text-center mb-3">Forget Password</h2>

        <div className="text-center mb-3">
          <p className="mb-1">
            Back to login? <Link to="/login">Login</Link>
          </p>
          <p className="mb-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>

        <p className="text-center">Enter your email to reset your password</p>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <button className="btn btn-primary w-100">Send Reset Link</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
