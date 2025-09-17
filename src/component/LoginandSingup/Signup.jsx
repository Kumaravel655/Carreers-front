
import React, { useState } from "react";
import "./Signup.css";
import users from "..//..//user.json"; 

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    if (
      !form.fullName ||
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setMessage("⚠️ All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    if (!form.agree) {
      setMessage("⚠️ You must agree to the Terms of Services.");
      return;
    }

    
    const exists = users.find((u) => u.username === form.username);
    if (exists) {
      setMessage("⚠️ Username already taken.");
      return;
    }

    // Normally here we would send data to API
    setMessage(`✅ Account created for ${form.username}!`);
  };

  return (
    <div className="signup-container">
      <h2>Create account.</h2>
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <div className="checkbox-container">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        <label>
          I’ve read and agree with your <a href="#">Terms of Services</a>
        </label>
      </div>

      <button onClick={handleSubmit}>Create Account</button>

      <p className="signup-message">{message}</p>
    </div>
  );
};

export default Signup;
