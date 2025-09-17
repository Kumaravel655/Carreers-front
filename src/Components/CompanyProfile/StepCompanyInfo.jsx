const StepCompanyInfo = ({ nextStep }) => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleBannerUpload = (e) => {
    setBanner(e.target.files[0]);
  };

  return (
    <div className="form-step">
      <h3>Company Info</h3>

      <label className="section-title">Logo & Banner Image</label>
      <div className="upload-section">
        {/* Logo Upload */}
        <label className="upload-box">
          <input type="file" hidden accept="image/*" onChange={handleLogoUpload} />
          {logo ? (
            <p>{logo.name}</p>
          ) : (
            <div>
              <span className="upload-icon">⬆</span>
              <p><b>Browse photo</b> or drop here</p>
              <small>A photo larger than 400px works best. Max 5MB.</small>
            </div>
          )}
        </label>

        {/* Banner Upload */}
        <label className="upload-box">
          <input type="file" hidden accept="image/*" onChange={handleBannerUpload} />
          {banner ? (
            <p>{banner.name}</p>
          ) : (
            <div>
              <span className="upload-icon">⬆</span>
              <p><b>Browse photo</b> or drop here</p>
              <small>Banner optimal 1520x400, JPEG/PNG, Max 5MB.</small>
            </div>
          )}
        </label>
      </div>

      {/* Company Name */}
      <label>Company Name</label>
      <input type="text" placeholder="Enter company name" className="input" />

      {/* About Us */}
      <label>About Us</label>
      <textarea
        placeholder="Write down about your company here. Let the candidate know who we are..."
        className="textarea"
      ></textarea>

      <button className="btn next" onClick={nextStep}>Save & Next</button>
    </div>
  );
};

export default StepCompanyInfo;
