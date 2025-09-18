import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// Login signup -> common
import Login from "./component/LoginandSingup/Login";
import Signup from "./component/LoginandSingup/Signup";

// job seekers
import Home from "./pages/Home";
import FindJob from "./Components/Jobportal/FindJob/FindJob";
import JobDesc from "./Components/Jobportal/JobDetail/JobDesc";
import DashboardPage from "./pages/DashboardPage";
import AppliedJobsPage from './pages/AppliedJobsPage';
import JobAlertsPage from "./pages/JobAlertsPage";
import FavoriteJobsPage from "./pages/FavoriteJobsPage";
import SettingsPage from "./pages/SettingsPage";

import Faq from "./Components/Faq/Faq";
import SupportTicketSystem from "./Components/SupportTicketSystem/SupportTicketSystem";


import RecruiterLoginPage from "./pages/RecruiterLoginPage/RecruiterLoginPage";

// Admin imports
import AdminLayout from './Components/Admin/AdminLayout';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage';
import ManageUsersPage from './Pages/Admin/ManageUsersPage';
import ManageJobsPage from './Pages/Admin/ManageJobsPage';
import ReportsPage from './Pages/Admin/ReportsPage';
import AdminSettingsPage from './Pages/Admin/SettingsPage'; 
import SupportPage from './Pages/Admin/SupportPage';
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
          <Route path="favorite-jobs" element={<FavoriteJobsPage/>}/>
          <Route path="findjob" element={<FindJob />} />
          <Route path="jobs/:jobId" element={<JobDesc />} />
          <Route path="support" element={<SupportTicketSystem/>} />
          <Route path="faq" element={<Faq />} />
          {/* <Route path=""/> */}
        </Route>

        {/* Recruiter */}
        <Route path="/recruiter-login" element={<RecruiterLoginPage />} />


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