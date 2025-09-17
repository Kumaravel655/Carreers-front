import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

// Other Pages from your branches
import ApplyStatus from "./component/Applystatus/Applystatus";

import "./styles/global.css";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Main Task Pages */}
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/applied-jobs" element={<AppliedJobsPage />} />
        <Route path="/favorite-jobs" element={<FavoriteJobsPage />} />
        <Route path="/job-alerts" element={<JobAlertsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Other Application Pages */}
        <Route path="/job-posting" element={<JobPosting />} />
        <Route path="/job-form" element={<JobForm />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/applystatus" element={<ApplyStatus />} />

        {/* Standard User Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password" element={<ForgetPassword />} />

        {/* Recruiter Routes */}
        <Route path="/recruiter/login" element={<RecruiterLoginPage />} />
        <Route path="/recruiter/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/recruiter/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;