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
