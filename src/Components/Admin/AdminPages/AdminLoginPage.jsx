import React from 'react';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
    return (
        <div className="login-page-container">
            <div className="login-form-card">
                <h2>Admin Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;