
import ApplyStatus from "./component/Applystatus/Applystatus";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";


import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/LoginandSingup/Login";
import Signup from "./component/LoginandSingup/Signup";
import ForgetPassword from "./component/LoginandSingup/Password";



import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
import JobForm from "./Components/JobPosting/JobForm";
import JobPosting from "./Components/JobPosting/JobPosting";






import Home from "./pages/Home";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruiterLoginPage from './Pages/RecruiterLoginPage/RecruiterLoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';
import Findcandidate from "./component/Findcandidate";
import Reqnotification from "./component/Reqnotification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element =  {<Home/>}/>
        <Route path="/job-posting" element =  {<Home/>}/>

        <Route path="/login" element={<RecruiterLoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/password" element={<ForgetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
             <Route path="/Applystatus" element={<ApplyStatus />} />
             <Route path="/Findcandidate" element={<Findcandidate />} />
             <Route path="/signup" element={<Reqnotification />} />
             



      </Routes>
    </Router>
  );

}

export default App;
