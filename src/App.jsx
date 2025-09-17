import { useState } from "react";
import "./App.css";

// Standard User & General Pages
import Login from "./component/LoginandSingup/Login";
import Signup from "./component/LoginandSingup/Signup";
import ForgetPassword from "./component/LoginandSingup/Password";
import Home from "./pages/Home";

// All Pages from your task
import DashboardPage from "./pages/DashboardPage"; 
import AppliedJobsPage from "./pages/AppliedJobsPage";
import FavoriteJobsPage from "./pages/FavoriteJobsPage";
import JobAlertsPage from "./pages/JobAlertsPage";
import SettingsPage from "./pages/SettingsPage";


// Recruiter Pages
import RecruiterLoginPage from './Pages/RecruiterLoginPage/RecruiterLoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';

// Job Posting and Company-related Pages
import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
import JobForm from "./Components/JobPosting/JobForm";
import JobPosting from "./Components/JobPosting/JobPosting";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* All your main task pages */}
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/applied-jobs" element={<AppliedJobsPage />} />
        <Route path="/favorite-jobs" element={<FavoriteJobsPage />} />
        <Route path="/job-alerts" element={<JobAlertsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Other Routes */}
        <Route path="/job-posting" element={<JobPosting />} />
        <Route path="/job-form" element={<JobForm />} />
        <Route path="/company-profile" element={<CompanyProfile />} />

        {/* Standard User Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password" element={<ForgetPassword />} />

        {/* Recruiter Routes (assuming these are separate) */}
        <Route path="/recruiter/login" element={<RecruiterLoginPage />} />
        <Route path="/recruiter/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/recruiter/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;