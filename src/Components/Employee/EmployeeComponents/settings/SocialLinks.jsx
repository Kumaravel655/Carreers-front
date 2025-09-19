import React, { useState } from "react";
import styles from "./settings.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPlus, FaTimes } from "react-icons/fa";

const platforms = [
  { name: "Facebook", icon: <FaFacebook color="#1877f2" /> },
  { name: "Twitter", icon: <FaTwitter color="#1da1f2" /> },
  { name: "Instagram", icon: <FaInstagram color="#e4405f" /> },
  { name: "Youtube", icon: <FaYoutube color="#ff0000" /> },
];

const SocialLinks = () => {
  const [links, setLinks] = useState([
    { platform: "Facebook", url: "" },
    { platform: "Twitter", url: "" },
    { platform: "Instagram", url: "" },
    { platform: "Youtube", url: "" },
  ]);

  const handlePlatformChange = (index, newPlatform) => {
    const updated = [...links];
    updated[index].platform = newPlatform;
    setLinks(updated);
  };

  const handleUrlChange = (index, url) => {
    const updated = [...links];
    updated[index].url = url;
    setLinks(updated);
  };

  const handleRemove = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setLinks([...links, { platform: "Facebook", url: "" }]);
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>Social Links</h3>

      {links.map((link, index) => (
        <div key={index} className={styles.socialRow}>
          <div className={styles.selectBox}>
            <span className={styles.icon}>
              {platforms.find((p) => p.name === link.platform)?.icon}
            </span>
            <select
              value={link.platform}
              onChange={(e) => handlePlatformChange(index, e.target.value)}
            >
              {platforms.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Profile link/url..."
            value={link.url}
            onChange={(e) => handleUrlChange(index, e.target.value)}
            className={styles.urlInput}
          />

          <button
            className={styles.removeButton}
            onClick={() => handleRemove(index)}
          >
            <FaTimes />
          </button>
        </div>
      ))}

      <button className={styles.addButton} onClick={handleAdd}>
        <FaPlus /> Add New Social Link
      </button>

      <button className={styles.saveButton}>Save Changes</button>
    </div>
  );
};

export default SocialLinks;
