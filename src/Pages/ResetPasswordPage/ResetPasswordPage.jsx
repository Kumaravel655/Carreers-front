import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const handleSubmit = async (e) => { /* Your submit logic */ };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Reset Your Password</h2>
                <p>Enter your new password below.</p>
                {message && <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>}
                <div className="input-group">
                    <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn-primary" disabled={isLoading}>{isLoading ? 'Resetting...' : 'Reset Password'}</button>
            </form>
        </div>
    );
};
export default ResetPasswordPage;