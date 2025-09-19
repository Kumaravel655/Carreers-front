// src/components/ProfilePage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    title: "Full Stack Developer",
    profilePic: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
    bio: "I’m a passionate developer with a focus on building modern web applications. Skilled in React, Java, SQL, and always eager to learn new technologies.",
    contact: {
      email: "johndoe@example.com",
      phone: "+91-9876543210",
      location: "Chennai, India",
      website: "www.johndoe.dev",
      dob: "12 March, 1999",
    },
    education: [
      { degree: "B.Tech in Computer Science", year: "2017 - 2021", institute: "XYZ University" },
      { degree: "Higher Secondary", year: "2015 - 2017", institute: "ABC School" },
    ],
    skills: ["Java", "React", "SQL", "Node.js", "HTML", "CSS", "Bootstrap"],
  };

  return (
    <div className="container my-5">
      <div className="row shadow-lg rounded p-4 bg-white">
        
        {/* Left Column */}
        <div className="col-md-4 text-center border-end">
          <img
            src={user.profilePic}
            alt="Profile"
            className="rounded-circle img-fluid mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h3>{user.name}</h3>
          <p className="text-muted">{user.title}</p>

          <div className="mt-4 text-start">
            <h5>Contact Information</h5>
            <p><strong>Email:</strong> {user.contact.email}</p>
            <p><strong>Phone:</strong> {user.contact.phone}</p>
            <p><strong>Location:</strong> {user.contact.location}</p>
            <p><strong>Website:</strong> {user.contact.website}</p>
            <p><strong>DOB:</strong> {user.contact.dob}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-8">
          {/* Bio */}
          <div className="mb-4">
            <h4>Summary</h4>
            <p>{user.bio}</p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h4>Education</h4>
            <ul className="list-group">
              {user.education.map((edu, index) => (
                <li key={index} className="list-group-item">
                  <strong>{edu.degree}</strong> ({edu.year}) – {edu.institute}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h4>Skills</h4>
            <div>
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-primary me-2 mb-2"
                  style={{ fontSize: "14px" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div>
            <a
              href="/resume.pdf"
              download
              className="btn btn-success"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
