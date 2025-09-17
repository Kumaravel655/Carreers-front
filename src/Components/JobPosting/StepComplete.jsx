
const StepComplete = () => {
  return (
    <div className="form-step complete">
      <h3>🎉 Congratulations, Your Profile is 100% Complete!</h3>
      <p>You can now view your dashboard or post a job.</p>
      <div className="actions">
        <button className="btn">View Dashboard</button>
        <button className="btn next">Post Job</button>
      </div>
    </div>
  );
};

export default StepComplete;
