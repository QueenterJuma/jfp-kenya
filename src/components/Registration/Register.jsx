import React from 'react'
import { TbStarsFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <section>
        <div>
          <span className='stars'> <TbStarsFilled /> </span>
          <h2>Join the JFP Membership Today!</h2>
          <p>Experience the party that genuinely cares about you.</p>
        </div>
        <div>
          <Link to="/membership">
            <button>REGISTER</button>
          {/* <a href=''>REGISTER</a> */}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Register;
