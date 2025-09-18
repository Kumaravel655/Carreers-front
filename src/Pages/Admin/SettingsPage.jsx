import React, { useState } from 'react';
import './SettingsPage.css'; // Import the new CSS

const SettingsPage = () => {
    // State for the Change Password form
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    // State for the Application Settings form
    const [appSettings, setAppSettings] = useState({
        siteTitle: 'Carreers-front',
        maintenanceMode: false,
    });

    const handlePasswordFormChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({ ...prev, [name]: value }));
    };

    const handleAppSettingsChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAppSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
        console.log('Updating password:', passwordData);
        // TODO: Add API call to update the password in the database.
        alert('Password change request sent!');
    };

    const handleAppSettingsSubmit = (e) => {
        e.preventDefault();
        console.log('Saving application settings:', appSettings);
        // TODO: Add API call to save these settings to the database.
        alert('Application settings saved!');
    };

    return (
        <div className="settings-page">
            <h1>Admin Settings</h1>

            <div className="settings-grid">
                {/* Card 1: Change Password */}
                <div className="settings-card">
                    <h2>Change Password</h2>
                    <form onSubmit={handlePasswordSubmit}>
                        <div className="form-group">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input type="password" id="currentPassword" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordFormChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">New Password</label>
                            <input type="password" id="newPassword" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordFormChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordFormChange} required />
                        </div>
                        <button type="submit" className="submit-button">Update Password</button>
                    </form>
                </div>

                {/* Card 2: Application Settings */}
                <div className="settings-card">
                    <h2>Application Settings</h2>
                    <form onSubmit={handleAppSettingsSubmit}>
                        <div className="form-group">
                            <label htmlFor="siteTitle">Site Title</label>
                            <input type="text" id="siteTitle" name="siteTitle" value={appSettings.siteTitle} onChange={handleAppSettingsChange} />
                        </div>
                        <div className="form-group toggle-group">
                            <label htmlFor="maintenanceMode">Maintenance Mode</label>
                            <input type="checkbox" id="maintenanceMode" name="maintenanceMode" checked={appSettings.maintenanceMode} onChange={handleAppSettingsChange} />
                            <span>(Puts the site offline for visitors)</span>
                        </div>
                        <button type="submit" className="submit-button">Save Settings</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;