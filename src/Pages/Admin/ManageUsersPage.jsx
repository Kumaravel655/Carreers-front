import React, { useState } from 'react';
import './ManageUsersPage.css';
import EditUserModal from '../../Components/Admin/EditUserModal'; // NEW: Import the modal

const ManageUsersPage = () => {
    const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john.d@example.com', role: 'Job Seeker', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane.s@example.com', role: 'Recruiter', status: 'Active' },
        { id: 3, name: 'Sam Wilson', email: 'sam.w@example.com', role: 'Job Seeker', status: 'Banned' },
    ];
    const [users, setUsers] = useState(initialUsers);

    // NEW: State to manage the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const handleDeleteUser = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(currentUsers => currentUsers.filter(user => user.id !== userId));
        }
    };

    // NEW: Updated function to open the modal
    const handleEditUser = (userId) => {
        const userToEdit = users.find(user => user.id === userId);
        setEditingUser(userToEdit);
        setIsModalOpen(true);
    };

    // NEW: Function to handle saving changes from the modal
    const handleSaveChanges = (updatedUser) => {
        console.log('Saving changes for user:', updatedUser);
        // TODO: Add your API call here to save the user to the database.

        setUsers(currentUsers =>
            currentUsers.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
        setIsModalOpen(false); // Close the modal
        setEditingUser(null);
    };

    // NEW: Function to close the modal without saving
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    return (
        <div className="manage-users-page">
            <h1>Manage Users</h1>
            <div className="table-container">
                <table className="users-table">
                   {/* Table head remains the same */}
                   <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <span className={`status-badge ${user.status === 'Active' ? 'active' : 'banned'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <button onClick={() => handleEditUser(user.id)} className="action-button edit">Edit</button>
                                    <button onClick={() => handleDeleteUser(user.id)} className="action-button delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* NEW: Render the modal conditionally */}
            {isModalOpen && (
                <EditUserModal
                    user={editingUser}
                    onClose={handleCloseModal}
                    onSave={handleSaveChanges}
                />
            )}
        </div>
    );
};

export default ManageUsersPage;