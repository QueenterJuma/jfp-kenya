import React from 'react'
import { BsDownload } from 'react-icons/bs';
import CONSTITUTION from '/Constitution.pdf';
import REGISTRATION from '/Reg-Procedure.pdf';
import Membership from "./Membership";
import Mission from "./Mission";
import Team from "./Team";

function Banner() {
  return (
    <>
    <div className="banner">
      {/* Left Side - Content */}
      <div className="banner-content">
        <h1 className="banner-title">
          Justice & Freedom <span className="highlight">PARTY OF KENYA</span>
        </h1>
        <p className="banner-text">
          To establish a prosperous, industrialized and modern nation, in which all citizens enjoy 
          equal social, economic and democratic rights, and live in unity.
        </p>
        <div className="banner-buttons">
          <a href={REGISTRATION} target='_blank' download>
            <button type='button'className="btn btn-primary" title="Registration" onClick={() => setMenuOpen(false)}>REGISTER</button>
          </a>
          <a href={CONSTITUTION} target='_blank' download>
            <button className="btn btn-secondary" title="Constitution">OUR CONSTITUTION <BsDownload /></button>
          </a>
          
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="banner-image"></div>
    </div>
    <Mission />
    <Membership />
    <Team />
    </>
  );
}

export default Banner;
