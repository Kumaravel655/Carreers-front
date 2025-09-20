import React, { useState, useEffect } from 'react';
import DashboardLayout from './RecruiterLayout'; 
import "./CompanyProfilePage.css"

function CompanyProfileContent() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const sampleProfile = {
      companyName: 'TechSolutions Inc.',
      aboutUs: 'A leading provider of innovative tech solutions, dedicated to excellence and customer satisfaction.',
      organizationType: 'Private',
      industry: 'Technology',
      teamSize: '51-200',
      establishmentYear: '2015',
      website: 'https://www.techsolutions.com',
      vision: 'To be the global leader in digital transformation.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com/company/techsolutions' },
        { platform: 'twitter', url: 'https://twitter.com/techsolutions' }
      ],
      location: 'Bengaluru, Karnataka, India',
      phone: '+91 98765 43210',
      email: 'contact@techsolutions.com'
    };
    // For testing, we'll save this sample to localStorage if nothing exists
    if (!localStorage.getItem('companyProfile')) {
      localStorage.setItem('companyProfile', JSON.stringify(sampleProfile));
    }

    // Now, read the data from localStorage
    const savedData = JSON.parse(localStorage.getItem('companyProfile'));
    setProfileData(savedData);
  }, []);

  if (!profileData) {
    return <p>Loading company profile...</p>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Company Profile</h3>
        <button className="btn btn-outline-secondary">
          <i className="bi bi-pencil me-2"></i>Edit Profile
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h4 className="card-title fw-bold">{profileData.companyName}</h4>
          <p className="text-muted">{profileData.aboutUs}</p>
          <hr />

          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold">About</h5>
              <ul className="list-unstyled">
                <li><strong>Industry:</strong> {profileData.industry}</li>
                <li><strong>Organization Type:</strong> {profileData.organizationType}</li>
                <li><strong>Team Size:</strong> {profileData.teamSize}</li>
                <li><strong>Established in:</strong> {profileData.establishmentYear}</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">Contact</h5>
              <ul className="list-unstyled">
                <li><strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noopener noreferrer">{profileData.website}</a></li>
                <li><strong>Email:</strong> {profileData.email}</li>
                <li><strong>Phone:</strong> {profileData.phone}</li>
                <li><strong>Location:</strong> {profileData.location}</li>
              </ul>
            </div>
          </div>
          <hr />
          
          <h5 className="fw-bold">Social Links</h5>
          <div>
            {profileData.socialLinks.map(link => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-light me-2">
                <i className={`bi bi-${link.platform} me-2`}></i>{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function CompanyProfilePage() {
  return (
      <CompanyProfileContent />
  );
}