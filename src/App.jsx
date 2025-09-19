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
import ApplyJob from "./Components/Employee/EmployeeComponents/Applyjob/Applyjob";
import JobDesc from "./Components/Employee/EmployeePages/Jobportal/JobDetail/JobDesc";
import DashboardPage from "./Components/Employee/EmployeePages/dashboard/DashboardPage";
import AppliedJobsPage from "./Components/Employee/EmployeePages/Pages/AppliedJobsPage";
import JobAlertsPage from "./Components/Employee/EmployeeComponents/jobAlerts/JobAlertsPage";
import FavoriteJobsPage from "./Components/Employee/EmployeeComponents/favoriteJobs/FavoriteJobsPage";
import SettingsPage from "./Components/Employee/EmployeePages/Pages/SettingsPage";
import Faq from "./Components/Employee/EmployeePages/Faq/Faq";
import SupportTicketSystem from "./Components/Employee/EmployeePages/SupportTicketSystem/SupportTicketSystem";
import NotificationsPage from "./Components/Employee/EmployeeComponents/NotificationPage";
import ProfilePage from "./Components/Employee/EmployeePages/dashboard/Profile";

// Admin imports
import AdminLayout from "./Components/Admin/AdminComponents/AdminLayout";
import AdminLoginPage from "./Components/Admin/AdminPages/AdminLoginPage";
import AdminDashboardPage from "./Components/Admin/AdminPages/AdminDashboardPage";
import ManageUsersPage from "./Components/Admin/AdminPages/ManageUsersPage";
import ManageJobsPage from "./Components/Admin/AdminPages/ManageJobsPage";
import ReportsPage from "./Components/Admin/AdminPages/ReportsPage";
import AdminSettingsPage from "./Components/Admin/AdminPages/SettingsPage";
import SupportPage from "./Components/Admin/AdminPages/SupportPage";

import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
import JobForm from "./Components/JobPosting/JobForm";
import JobPosting from "./Components/JobPosting/JobPosting";

import Home from "./pages/Home";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruiterLoginPage from "./Pages/RecruiterLoginPage/RecruiterLoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage";
import Findcandidate from "./component/Findcandidate";
import Reqnotification from "./component/Reqnotification";
import Shortlist from "./component/Shortlist";

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

        <Route path="/password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Applystatus" element={<ApplyStatus />} />
        <Route path="/Findcandidate" element={<Findcandidate />} />
        <Route path="/Reqnotificaton" element={<Reqnotification />} />
        <Route path="/Shortlist" element={<Shortlist />} />

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
          <Route path="jobs/:jobId/apply-job" element={<ApplyJob />} />
          <Route path="support" element={<SupportTicketSystem />} />
          <Route path="faq" element={<Faq />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profilepage" element={<ProfilePage />} />
          =======
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
