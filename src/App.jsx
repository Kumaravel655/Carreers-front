import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Login signup -> common
import Login from "./Components/Shared/LoginandSingup/Login";
import Signup from "./Components/Shared/LoginandSingup/Signup";

// job seekers
import Home from "./Components/Employee/EmployeeComponents/Home";
import FindJob from "./Components/Employee/EmployeePages/Jobportal/FindJob/FindJob";
import JobDesc from "./Components/Employee/EmployeePages/Jobportal/JobDetail/JobDesc";
import DashboardPage from "./Components/Employee/EmployeePages/dashboard/DashboardPage";
import AppliedJobsPage from "./Components/Employee/EmployeePages/Pages/AppliedJobsPage";
import JobAlertsPage from "./Components/Employee/EmployeeComponents/jobAlerts/JobAlertsPage";
import FavoriteJobsPage from "./Components/Employee/EmployeeComponents/favoriteJobs/FavoriteJobsPage";
import SettingsPage from "./Components/Employee/EmployeePages/Pages/SettingsPage";
import Faq from "./Components/Employee/EmployeePages/Faq/Faq";
import SupportTicketSystem from "./Components/Employee/EmployeePages/SupportTicketSystem/SupportTicketSystem";

// Admin imports
import AdminLayout from "./Components/Admin/AdminComponents/AdminLayout";
import AdminLoginPage from "./Components/Admin/AdminPages/AdminLoginPage";
import AdminDashboardPage from "./Components/Admin/AdminPages/AdminDashboardPage";
import ManageUsersPage from "./Components/Admin/AdminPages/ManageUsersPage";
import ManageJobsPage from "./Components/Admin/AdminPages/ManageJobsPage";
import ReportsPage from "./Components/Admin/AdminPages/ReportsPage";
import AdminSettingsPage from "./Components/Admin/AdminPages/SettingsPage";
import SupportPage from "./Components/Admin/AdminPages/SupportPage";

// Recruiter imports
import RecuriterHome from "./Components/Recuriter/RecuriterHome";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        {/* Login and Sign-up */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Job Seeker */}
        <Route path="/job-seeker">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="applied-jobs" element={<AppliedJobsPage />} />
          <Route path="job-alerts" element={<JobAlertsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="favorite-jobs" element={<FavoriteJobsPage />} />
          <Route path="findjob" element={<FindJob />} />
          <Route path="jobs/:jobId" element={<JobDesc />} />
          <Route path="support" element={<SupportTicketSystem />} />
          <Route path="faq" element={<Faq />} />
          {/* <Route path=""/> */}
        </Route>

        {/* Recruiter */}
        <Route path="/recruit" element={<RecuriterHome />} />

        {/* Admin */}

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
