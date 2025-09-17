
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
        <Route path="/login" element={<RecruiterLoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
