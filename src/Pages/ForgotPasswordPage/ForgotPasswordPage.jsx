import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleSubmit = async (e) => { /* Your submit logic */ };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Forgot Password</h2>
                <p>Enter your email and we'll send a reset link.</p>
                {message && <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>}
                <div className="input-group">
                    <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="btn-primary" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send Reset Link'}</button>
            </form>
        </div>
    );
};
export default ForgotPasswordPage;