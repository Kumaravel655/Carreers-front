import React, { useState } from 'react';
import './ApplyJob.css';

const ApplyJob = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
    });

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [resumePreviewUrl, setResumePreviewUrl] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume" && files[0]) {
            setFormData({
                ...formData,
                [name]: files[0]
            });
            setResumePreviewUrl(URL.createObjectURL(files[0]));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        // You can add form validation here before moving to the confirmation step
        setIsConfirmed(true);
    };

    const handleBack = () => {
        setIsConfirmed(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the final form submission, e.g., send to API
        console.log('Final application submitted:', formData);
        alert('Application submitted successfully!');

        // Reset the form and states after final submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            resume: null,
            coverLetter: ''
        });
        setIsConfirmed(false);
        if (resumePreviewUrl) {
            URL.revokeObjectURL(resumePreviewUrl); // Clean up the object URL
            setResumePreviewUrl(null);
        }
    };

    return (
        <div className="apply-job-container">
            <h2>Apply for Job</h2>
            {!isConfirmed ? (
                // Step 1: Application Form
                <form onSubmit={handleConfirm} className="apply-job-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Upload Resume:
                        <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Cover Letter:
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Write your cover letter here..."
                        ></textarea>
                    </label>
                    <button type="submit">Proceed to Confirmation</button>
                </form>
            ) : (
                // Step 2: Confirmation Page
                <div className="confirmation-page">
                    <h3>Review Your Application</h3>
                    <div className="confirmation-details">
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <p><strong>Resume:</strong> {formData.resume ? formData.resume.name : 'No file uploaded'}</p>
                        {resumePreviewUrl && (
                            <a href={resumePreviewUrl} target="_blank" rel="noopener noreferrer">View Resume</a>
                        )}
                        <p><strong>Cover Letter:</strong></p>
                        <p>{formData.coverLetter || 'No cover letter provided.'}</p>
                    </div>
                    <div className="confirmation-buttons">
                        <button onClick={handleBack} className="back-button">Go Back to Edit</button>
                        <button onClick={handleSubmit} className="submit-button">Submit Application</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplyJob;