import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// --- Imports from your Existing Application ---
import Home from "./pages/Home";
import FindJob from "./Components/Jobportal/FindJob/FindJob";
import JobDesc from "./Components/Jobportal/JobDetail/JobDesc";
import Dashboard from "./components/emp-prof/Dashboard";
import RecruiterLoginPage from "./pages/RecruiterLoginPage/RecruiterLoginPage";
import DashboardPage from "./pages/DashboardPage";
import AppliedJobsPage from "./pages/AppliedJobsPage";
import JobAlertsPage from "./pages/JobAlertsPage";
import FavoriteJobsPage from "./pages/FavoriteJobsPage";
import SettingsPage from "./pages/SettingsPage";

// --- Imports for the new Admin Module ---
import AdminLayout from './Components/Admin/AdminLayout';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage';
import ManageUsersPage from './Pages/Admin/ManageUsersPage';
import ManageJobsPage from './Pages/Admin/ManageJobsPage';
import ReportsPage from './Pages/Admin/ReportsPage';
import AdminSettingsPage from './Pages/Admin/SettingsPage'; // Renamed to avoid conflict
import SupportPage from './Pages/Admin/SupportPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* === Your Existing Application Routes === */}
        <Route path="/" element={<Home />} />
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/jobs/:jobId" element={<JobDesc />} />
        <Route path="/employee-prof" element={<Dashboard />} />
        <Route path="/Recruiter-login" element={<RecruiterLoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/applied-jobs" element={<AppliedJobsPage />} />
        <Route path="/job-alerts" element={<JobAlertsPage />} />
        <Route path="/favorite-jobs" element={<FavoriteJobsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* === New Admin Module Routes === */}
        <Route path="/login/admin" element={<AdminLoginPage />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} /> 
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="manage-users" element={<ManageUsersPage />} />
          <Route path="manage-jobs" element={<ManageJobsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;