import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Standard User Pages
import Login from "./component/LoginandSingup/Login";
import Signup from "./component/LoginandSingup/Signup";
import ForgetPassword from "./component/LoginandSingup/Password";

// Other Pages
import Home from "./pages/Home";
import JobPosting from "./Components/JobPosting/JobPosting";

// Recruiter Pages (assuming these are separate)
import RecruiterLoginPage from './Pages/RecruiterLoginPage/RecruiterLoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';

import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-posting" element={<JobPosting />} />

        {/* Standard User Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password" element={<ForgetPassword />} />

        {/* Recruiter Routes (assuming a separate path) */}
        <Route path="/recruiter/login" element={<RecruiterLoginPage />} />
        <Route path="/recruiter/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/recruiter/reset-password" element={<ResetPasswordPage />} />

      </Routes>
    </Router>
  );
}

export default App;