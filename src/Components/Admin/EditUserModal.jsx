import React, { useState, useEffect } from 'react';
import './EditUserModal.css';

const EditUserModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });

    // When the 'user' prop changes, pre-fill the form with that user's data
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                role: user.role,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...user, ...formData }); // Send updated user data back to the parent
    };

    if (!user) {
        return null; // Don't render anything if there's no user to edit
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="Job Seeker">Job Seeker</option>
                            <option value="Recruiter">Recruiter</option>
                        </select>
                    </div>
                    <div className="modal-actions">
                        <button type="submit" className="save-button">Save Changes</button>
                        <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;