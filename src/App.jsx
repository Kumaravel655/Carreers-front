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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruiterLoginPage from './Pages/RecruiterLoginPage/RecruiterLoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage/ResetPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<RecruiterLoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        
        {/* Default route now goes to the login page */}
        <Route path="/" element={<RecruiterLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> b5f77bdca531da4a285670d254520d7933de13f1
