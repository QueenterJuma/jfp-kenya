import React from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div>
      <h1>JFP Membership Registration</h1>
      <p>To become an JFP member:</p>
      <p>Dial *509#</p>
      <p>OR</p>
      <Link to="/registration">
        <button>Become a member Today</button>
      </Link>
      <Link to="/verify-membership">
        <button>Verify your Membership</button>
      </Link>
    </div>
  );
};

export default Membership;