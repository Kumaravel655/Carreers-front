import ApplyStatus from "./component/Applystatus/Applystatus";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
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
             <Route path="/Applystatus" element={<ApplyStatus />} />
             



      </Routes>
    </Router>
  );

}

export default App;
