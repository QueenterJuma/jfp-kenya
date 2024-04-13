// VerifyMembership.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VerifyMembership = () => {
  const [idNumber, setIdNumber] = useState('');

  const handleVerify = () => {
    // Handle verification logic
  };

  return (
    <div>
      <h1>JFP Membership Verification</h1>
      <img src="jfp_logo.png" alt="JFP Logo" />
      <form>
        <label>ID/Passport Number:</label>
        <input 
          type="text" 
          value={idNumber} 
          onChange={(e) => setIdNumber(e.target.value)} 
        />
        <button onClick={handleVerify}>Verify</button>
      </form>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default VerifyMembership;
