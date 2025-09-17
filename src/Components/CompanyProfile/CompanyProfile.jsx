import React, { useState } from "react";
import StepCompanyInfo from "./StepCompanyInfo";
import StepFoundingInfo from "./StepFoundingInfo";
import StepSocialMedia from "./StepSocialMedia";
import StepContact from "./StepContact";
import StepComplete from "./StepComplete";
import "./CompanyProfile.css";

const CompanyProfile = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepCompanyInfo nextStep={nextStep} />;
      case 2:
        return <StepFoundingInfo nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <StepSocialMedia nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <StepContact nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <StepComplete />;
      default:
        return <StepCompanyInfo nextStep={nextStep} />;
    }
  };

  return (
    <div className="company-profile">
      
      <h2 className="title">Jobpilot - Company Profile Setup</h2>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${(step - 1) * 25}%` }}
        ></div>
      </div>
      
      {renderStep()}
    </div>
  );
};

export default CompanyProfile;
