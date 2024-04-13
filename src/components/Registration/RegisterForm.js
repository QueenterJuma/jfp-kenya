// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    surname: '',
    otherNames: '',
    idNumber: '',
    phoneNumber: '',
    gender: '',
    religion: '',
    dateOfBirth: '',
    specialInterest: '',
    county: '',
    constituency: '',
    ward: '',
    pollingStation: '',
    ethnicity: '',
    postalCode: '',
    postalAddress: '',
    postalTown: '',
    agreement: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreementChange = () => {
    setFormData({ ...formData, agreement: !formData.agreement });
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div>
      <h1>JFP Membership Registration</h1>
      <img src="jfp_logo.png" alt="JFP Logo" />
      <form onSubmit={handleSubmit}>
        {/* Registration form fields */}
        <button type="submit">Register</button>
      </form>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default Registration;
