import React, { useState } from 'react';
import './RecruiterLoginPage.css';

// Icons for the form (FaFacebook has been removed)
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsBriefcase, BsBuilding } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

// Google Login Component
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

const RecruiterLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        // Your email login logic here
    };

    const handleGoogleLoginSuccess = (credentialResponse) => {
        console.log('Google Login Success:', credentialResponse);
        // Your Google login logic here
    };

    const handleGoogleLoginError = () => {
        console.error('Google Login Failed');
        setError('Google login failed. Please try again.');
    };

    return (
        <div className="login-container">
            <div className="form-section">
                <div className="form-wrapper">
                    <div className="logo">
                        <a href="#">Jobpilot</a>
                    </div>
                    <h2>Sign in</h2>
                    <p>Don't have an account? <a href="#">Create Account</a></p>

                    <form onSubmit={handleEmailLogin}>
                        {error && <p className="error-message">{error}</p>}
                        <div className="input-group">
                            <MdOutlineEmail className="input-icon" /><p></p>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <RiLockPasswordLine className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="options">
                            <label className="remember-me">
                                <input type="checkbox" /> Remember Me
                            </label>
                            <Link to="/forgot-password" className="forgot-password">Forget password?</Link>
                        </div>
                        <button type="submit" className="btn-primary" disabled={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In →'}
                        </button>
                    </form>

                    <div className="separator">or</div>

                    <div className="social-login">
                        {/* The Facebook button has been removed */}
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={handleGoogleLoginError}
                            text="signin_with"
                        />
                    </div>
                </div>
            </div>
            
            <div className="info-section">
                <div className="info-content">
                    <h1>Over 1,75,324 candidates waiting for good employees.</h1>
                    <div className="stats">
                        <div className="stat-item">
                            <BsBriefcase />
                            <p>1,75,324</p>
                            <span>Live Job</span>
                        </div>
                        <div className="stat-item">
                            <BsBuilding />
                            <p>89,354</p>
                            <span>Companies</span>
                        </div>
                        <div className="stat-item">
                            <IoNewspaperOutline />
                            <p>7,532</p>
                            <span>New Jobs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruiterLoginPage;