import React, { useState } from 'react';
import './ManageJobsPage.css';

const ManageJobsPage = () => {
    const initialJobs = [
        { id: 101, title: 'Senior React Developer', company: 'Tech Solutions Inc.', datePosted: '2025-09-15', status: 'Pending Approval' },
        { id: 102, title: 'UX/UI Designer', company: 'Creative Minds LLC', datePosted: '2025-09-14', status: 'Live' },
        { id: 103, title: 'Node.js Backend Engineer', company: 'Server Systems', datePosted: '2025-09-12', status: 'Pending Approval' },
        { id: 104, title: 'Junior QA Tester', company: 'Bug Busters', datePosted: '2025-09-11', status: 'Rejected' },
    ];

    const [jobs, setJobs] = useState(initialJobs);

    const handleUpdateStatus = (jobId, newStatus) => {
        setJobs(currentJobs =>
            currentJobs.map(job =>
                job.id === jobId ? { ...job, status: newStatus } : job
            )
        );
    };
    
    const handleDeleteJob = (jobId) => {
        if (window.confirm('Are you sure you want to permanently delete this job?')) {
            setJobs(currentJobs => currentJobs.filter(job => job.id !== jobId));
        }
    };

    return (
        <div className="manage-jobs-page">
            <h1>Manage Jobs</h1>
            <div className="job-table-container">
                <table className="jobs-table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Date Posted</th>
                            <th>Status</th>
                            <th style={{textAlign: 'center'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id}>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{job.datePosted}</td>
                                <td>
                                    <span className={`job-status-badge ${job.status.toLowerCase().replace(' ', '-')}`}>
                                        {job.status}
                                    </span>
                                </td>
                                {/* === NEW DROPDOWN ACTIONS MENU === */}
                                <td className="actions-cell">
                                    <button className="actions-menu-button">⋮</button>
                                    <div className="actions-dropdown">
                                        <button onClick={() => handleUpdateStatus(job.id, 'Live')} className="approve">
                                            Approve
                                        </button>
                                        <button onClick={() => handleUpdateStatus(job.id, 'Rejected')} className="reject">
                                            Reject
                                        </button>
                                        <button onClick={() => handleDeleteJob(job.id)} className="delete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageJobsPage;