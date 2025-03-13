import React from 'react'
import { BsDownload } from 'react-icons/bs';
import CONSTITUTION from '/Constitution.pdf';
import REGISTRATION from '/Reg-Procedure.pdf';

function Membership() {
  return (
    <div className="container">
      <div className="membership-box">
        <h2>JFP Membership</h2>
        <p>Join JFP and experience the party that genuinely cares about you!</p>
        <div className="button-group">
        <a href={CONSTITUTION} target='_blank' download rel="noreferrer">
            <button className="btn-join" title="Constitution">OUR CONSTITUTION <BsDownload /></button>
          </a>
          <a href={REGISTRATION} target='_blank' download rel="noreferrer">
            <button type='button'className="btn-learn" title="Registration" onClick={() => setMenuOpen(false)}>REGISTER NOW</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Membership