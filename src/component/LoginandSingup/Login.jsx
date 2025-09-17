// src/components/Login.jsx
import React, { useState } from "react";
import users from "..//..//user.json"; // local data
import "./Login.css"; // external css
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle login
  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setMessage(`✅ Welcome back, ${username}!`);
    } else {
      setMessage("❌ Invalid username or password.");
    }
  };

 

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <p>
        <Link to="/password">Forget Password?</Link>
      </p>
      <p className="login-message">{message}</p>
    </div>
  );
};

export default Login;
