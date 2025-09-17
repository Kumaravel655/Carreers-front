<<<<<<< HEAD
import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/LoginandSingup/Login";
import Signup from "./component/LoginandSingup/Signup";
import ForgetPassword from "./component/LoginandSingup/Password";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* Common Navbar can go here if you want */}
          <Routes>
            <Route path="/password" element={<ForgetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import JobPosting from "./Components/JobPosting/JobPosting";


function App() {
  return <>
    <JobPosting />;



  </>
}

export default App;
=======
import React from 'react';
=======

import Home from "./pages/Home";
import "./styles/global.css";
>>>>>>> 3adc63802463da2db21724a2461d7a61849246c9
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruiterLoginPage from './Pages/RecruiterLoginPage/RecruiterLoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element =  {<Home/>}/>
        <Route path="/login" element={<RecruiterLoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
<<<<<<< HEAD
>>>>>>> b5f77bdca531da4a285670d254520d7933de13f1
=======
>>>>>>> 3adc63802463da2db21724a2461d7a61849246c9
>>>>>>> 86f8b0c4c200fcea726a0eee7181440a08933e81
