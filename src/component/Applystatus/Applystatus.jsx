import React, { useState } from 'react';
import './ApplyStatus.css';

const ApplyStatus = () => {
    const [status, setStatus] = useState('Pending');
    const [applicant, setApplicant] = useState({
        name: "",
        email: "",
        position: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplicant({
            ...applicant,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (applicant.name && applicant.email && applicant.position) {
            setStatus('Submitted');
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="status-container">
            <h1>Application Status</h1>
            <form className="application-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={applicant.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={applicant.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Enter the position"
                    value={applicant.position}
                    onChange={handleChange}
                />
                <button type="submit">Submit Application</button>
            </form>

            <div className="status-card">
                <p><strong>Name:</strong> {applicant.name || "-"}</p>
                <p><strong>Email:</strong> {applicant.email || "-"}</p>
                <p><strong>Position:</strong> {applicant.position || "-"}</p>
                <p><strong>Status:</strong> <span className={`status ${status.toLowerCase()}`}>{status}</span></p>
            </div>
        </div>
    );
};

export default ApplyStatus;
