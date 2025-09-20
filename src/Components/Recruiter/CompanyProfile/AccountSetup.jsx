import React, { useState } from "react";
import SetupStepper from "./SetupStepper";
import Step1CompanyInfo from "./Step1CompanyInfo";
import Step2FoundingInfo from "./Step2FoundingInfo";
import Step3SocialMedia from "./Step3SocialMedia";
import Step4Contact from "./Step4Contact";
import CompletionStep from "./CompletionStep";

export default function AccountSetup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    logo: null,
    banner: null,
    companyName: "",
    aboutUs: "",
    organizationType: "",
    industry: "",
    teamSize: "",
    establishmentYear: "",
    website: "",
    vision: "",
    socialLinks: [{ platform: "linkedin", url: "" }],
    location: "",
    phone: "",
    email: "",
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting Final Form Data:", formData);
    // Here, you would make your API call to the backend.
    setCurrentStep(5); // Move to completion step on success
  };

  const progress = Math.min((currentStep - 1) * 25 + 20, 100);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1CompanyInfo
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2FoundingInfo
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 3:
        return (
          <Step3SocialMedia
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 4:
        return (
          <Step4Contact
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}
          />
        );
      case 5:
        return <CompletionStep />;
      default:
        return (
          <Step1CompanyInfo
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              {currentStep < 5 ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold">
                      <i className="bi bi-briefcase-fill me-2"></i>Jobpilot
                    </h4>
                    <div className="text-end">
                      <small>
                        Setup Progress: <strong>{progress}% Completed</strong>
                      </small>
                      <div className="progress mt-1" style={{ height: "8px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <SetupStepper currentStep={currentStep} />
                  <div className="mt-4">{renderStep()}</div>
                </>
              ) : (
                renderStep()
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
