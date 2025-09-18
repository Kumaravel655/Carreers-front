import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/emp-prof/Dashboard";
import RecruiterLoginPage from "./pages/RecruiterLoginPage/RecruiterLoginPage";
import DashboardPage from "./pages/DashboardPage";
import AppliedJobsPage from "./pages/AppliedJobsPage";
import JobAlertsPage from "./pages/JobAlertsPage";
import FavoriteJobsPage from "./pages/FavoriteJobsPage";
import SettingsPage from "./pages/SettingsPage";
function App ()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employee-prof" element = {<Dashboard/>}/>
        <Route path = "/Recruiter-login" element= {<RecruiterLoginPage/>}/>
         <Route path="/dashboard" element ={<DashboardPage/>}/>
         <Route path="/applied-jobs" element ={<AppliedJobsPage/>}/>
         <Route path="/job-alerts" element ={<JobAlertsPage/>}/>
         <Route path="/favorite-jobs" element ={<FavoriteJobsPage/>}/>
         <Route path="/settings" element ={<SettingsPage/>}/>


        
      </Routes>
    </Router>
  );
}

export default App;