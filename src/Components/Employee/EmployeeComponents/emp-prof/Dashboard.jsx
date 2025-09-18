import React, { useState } from "react";
import CompanyInfo from "./CompanyInfo";
import FoundingInfo from "./FoundingInfo";
import SocialMediaInfo from "./SocialMediaInfo";
import ContactInfo from "./ContactInfo";
import Success from "./Success"; 
import "./dashboard.css"

function Dashboard() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    logo: null,
    banner: null,
    companyName: "",
    about: "",
    orgType: "",
    industry: "",
    teamSize: "",
    year: "",
    website: "",
    vision: "",
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    location: "",
    phone: "",
    email: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const progress = (step / 4) * 100;

  const handleFinish = () => {
    console.log("Form Submitted ✅", formData);
    setStep(5); // ✅ Show Success screen
  };

  return (
    <div className="container">
      {/* ✅ Hide logo and progress bar on the Success screen */}
      {step < 5 && (
        <>
          <h2 className="logo">Jobpilot</h2>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </>
      )}

      {step === 1 && (
        <CompanyInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <FoundingInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <SocialMediaInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (
        <ContactInfo
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          onFinish={handleFinish}
        />
      )}

      {step === 5 && <Success />} {/* ✅ Show Success screen */}
    </div>
  );
}

export default Dashboard;
