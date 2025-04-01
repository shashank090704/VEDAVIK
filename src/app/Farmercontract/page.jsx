'use client';
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    aadhaarNumber: '',
    mobileNumber: '',
    landArea: '',
    contractDuration: '',
    passportPicture: null,
  });

  const [imagePreview, setImagePreview] = useState(null); // State to store the preview URL

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        passportPicture: file,
      });
      setImagePreview(URL.createObjectURL(file)); // Set the preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Contract</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Image preview and upload section */}
        <div style={styles.imageSection}>
          <div style={styles.imagePreviewContainer}>
            {imagePreview && <img src={imagePreview} alt="Passport Preview" style={styles.imagePreview} />}
          </div>
          <input
            type="file"
            name="passportPicture"
            onChange={handleFileChange}
            required
            style={styles.fileInput}
          />
        </div>

        <label style={styles.label}>Farmer's Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter your name"
        />

        <label style={styles.label}>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label style={styles.label}>Aadhaar Number</label>
        <input
          type="text"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter your Aadhaar number"
        />

        <label style={styles.label}>Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter your mobile number"
        />

        <label style={styles.label}>Land Area (in acres)</label>
        <input
          type="text"
          name="landArea"
          value={formData.landArea}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter land area in acres"
        />

        <label style={styles.label}>Duration of Contract (in years)</label>
        <input
          type="text"
          name="contractDuration"
          value={formData.contractDuration}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter contract duration in years"
        />

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

// Styling the form and its components
const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensures it fits within the page
    padding: '20px',
    boxSizing: 'border-box',
    background: '#F5F5DC', // Light beige color to mimic a legal document
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333', // Darker text for contrast
    fontFamily: "'Times New Roman', serif", // A more professional font
    fontSize: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '500px', // Keeps the form size more controlled
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontFamily: "'Arial', sans-serif",
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontFamily: "'Arial', sans-serif",
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '20px',
  },
  imagePreviewContainer: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '2px solid #ccc',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  fileInput: {
    padding: '5px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};

export default Page;
