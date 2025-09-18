import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminSidebar.css'; // Import the CSS

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login/admin');
    };

    return (
        <aside className="admin-sidebar">
            <div className="sidebar-header">
                <h1>Admin Panel</h1>
            </div>
            <nav className="sidebar-nav">
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
                <NavLink to="/admin/manage-users">Manage Users</NavLink>
                <NavLink to="/admin/manage-jobs">Manage Jobs</NavLink>
                <NavLink to="/admin/reports">Reports</NavLink>
                <NavLink to="/admin/settings">Settings</NavLink>
                <NavLink to="/admin/support">Support</NavLink>
            </nav>
            <div className="sidebar-footer">
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;