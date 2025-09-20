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
import LandingPage from "./Components/LandingPage/LandingPage";

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

// import "./styles/global.css";



// Admin imports
import AdminLayout from "./Components/Admin/AdminComponents/AdminLayout";
import AdminDashboardPage from "./Components/Admin/AdminPages/AdminDashboardPage";
import ManageUsersPage from "./Components/Admin/AdminPages/ManageUsersPage";
import ManageJobsPage from "./Components/Admin/AdminPages/ManageJobsPage";
import ReportsPage from "./Components/Admin/AdminPages/ReportsPage";
import AdminSettingsPage from "./Components/Admin/AdminPages/SettingsPage";
import SupportPage from "./Components/Admin/AdminPages/SupportPage";

// import RecruiterLoginPage from "./Pages/RecruiterLoginPage/RecruiterLoginPage";
// import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
// import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage";
// import Findcandidate from "./component/Findcandidate";
// import Reqnotification from "./component/Reqnotification";
// import Shortlist from "./component/Shortlist";

// Recruiter imports

import RecruiterLayout from "./Components/Recruiter/layout/RecruiterLayout";
import RecruiterDashboard from "./Components/Recruiter/layout/Dashboard";
import CompanyProfilePage from "./Components/Recruiter/layout/CompanyProfilePage";
import AccountSetup from "./Components/Recruiter/CompanyProfile/AccountSetup";
import PostJobPage from "./Components/Recruiter/layout/PostJobPage";
import MyJobsPage from "./Components/Recruiter/layout/MyJobsPage";
import ViewApplicantsPage from "./Components/Recruiter/layout/ViewApplicantsPage";
import CandidateSearchPage from "./Components/Recruiter/layout/CandidateSearchPage";
import CandidateProfilePage from "./Components/Recruiter/layout/CandidateProfilePage";
// import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
// import JobForm from "./Components/JobPosting/JobForm";
// import JobPosting from "./Components/JobPosting/JobPosting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/password" element={<ForgetPassword />} /> */}
        {/* <Route path="/Applystatus" element={<ApplyStatus />} />
        <Route path="/Findcandidate" element={<Findcandidate />} />
        <Route path="/Reqnotificaton" element={<Reqnotification />} />
        <Route path="/Shortlist" element={<Shortlist />} /> */}

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
          <Route path="notifications" element={<NotificationsPage />} />
        </Route>

        {/* Recruiter */}
        <Route path="/recruit" element={<RecruiterLayout />}>
          <Route index element={<Navigate to="/recruit/dashboard" replace />} />
          <Route path="dashboard" element={<RecruiterDashboard />} />
          <Route path="company-profile" element={<CompanyProfilePage />} />
          <Route path="account-setup" element={<AccountSetup />} />
          <Route path="post-job" element={<PostJobPage />} />
          <Route path="my-jobs" element={<MyJobsPage />} />
          <Route path="applicants" element={<ViewApplicantsPage />} />
          <Route path="candidate-search" element={<CandidateSearchPage />} />
          <Route
            path="candidate/:candidateId"
            element={<CandidateProfilePage />}
          />
          <Route path="profile" element={<div>Employer Profile Page</div>} />
          <Route path="billing" element={<div>Billing Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>

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
