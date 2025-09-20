import React, { useState, useEffect } from "react";

function CandidateProfileContent() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd get the candidate ID from the URL.
    // We'll fetch our single hardcoded profile for this example.
    fetch("/data/candidate-profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading profile...</p>;

  return (
    <div>
      {/* --- Profile Header --- */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="rounded-circle me-4"
              width="100"
              height="100"
            />
            <div>
              <h3 className="fw-bold mb-0">{profile.name}</h3>
              <p className="text-muted mb-1">{profile.headline}</p>
              <small className="text-muted">
                <i className="bi bi-geo-alt me-1"></i>
                {profile.location}
              </small>
            </div>
            <div className="ms-auto">
              <button className="btn btn-primary">
                <i className="bi bi-download me-2"></i>Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          {/* --- Professional Summary --- */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-3">Professional Summary</h5>
              <p>{profile.summary}</p>
            </div>
          </div>

          {/* --- Work Experience --- */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-3">Work Experience</h5>
              {profile.workExperience.map((exp) => (
                <div key={exp.id} className="mb-3">
                  <h6 className="fw-bold mb-0">{exp.title}</h6>
                  <p className="mb-1">{exp.company}</p>
                  <small className="text-muted">{exp.period}</small>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {/* --- Skills & Education --- */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-3">Skills</h5>
              <div>
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge bg-light text-dark me-2 mb-2 p-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <hr />
              <h5 className="card-title fw-bold mb-3">Education</h5>
              {profile.education.map((edu) => (
                <div key={edu.id}>
                  <h6 className="fw-bold mb-0">{edu.institution}</h6>
                  <p className="mb-1">{edu.degree}</p>
                  <small className="text-muted">{edu.period}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CandidateProfilePage() {
  return <CandidateProfileContent />;
}
