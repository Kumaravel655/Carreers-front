<<<<<<< HEAD
=======

import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/LoginandSingup/Login";
import Signup from "./component/LoginandSingup/Signup";
import ForgetPassword from "./component/LoginandSingup/Password";

>>>>>>> 3fe09f65143d59e8d19aa86926b381afe29bff37

import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
import JobForm from "./Components/JobPosting/JobForm";
import JobPosting from "./Components/JobPosting/JobPosting";

<<<<<<< HEAD
function App() {
  return <>
    {/* <JobPosting/> */}
    {/* <CompanyProfile /> */}
    <JobForm />
  </>
=======


import Home from "./pages/Home";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruiterLoginPage from './Pages/RecruiterLoginPage/RecruiterLoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';

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


      </Routes>
    </Router>
  );
>>>>>>> 3fe09f65143d59e8d19aa86926b381afe29bff37
}

export default App;
