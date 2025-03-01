import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import REGISTRATION from '/Reg-Procedure.pdf';
import Logo from '../assets/log1.jpg'

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className=" top-navbar">
        <div className="contact-info">
          <span className="contact-item"><FaEnvelope /> justiceandfreedompartyofkenya@gmail.com</span>
          <span className="contact-item"><FaPhone /> +254718212888</span>
        </div>
        
        <div className="social-icons">
          <a href="https://x.com/JFPPartyKe?t=uJjr0XghOyTqqQlqtUc5XQ&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
           </a>
           <a href="#" target="_blank" rel="noopener noreferrer">
             <FaFacebook className="social-icon" />
           </a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo"><img src={Logo} alt='JFP Logo' /></div>
        {/* Menu Items - Visible on Medium & Large Screens */}
        <div className="nav-links"> 
          <Link to='/' className="nav-item">Home</Link>
          <Link to='news' className="nav-item">News</Link>
          <Link to='resources' className="nav-item">Resources</Link>
          <Link to='about' className="nav-item">About</Link>
          <Link to='contact' className="nav-item">Contacts</Link>
        </div>

        {/* Register Button - Visible on Medium & Large Screens */}
        <div>
          <a href={REGISTRATION} target='_blank' download>
            <button type='button'className="register-btn" title="Registration">Register</button>
          </a>
        </div>
        {/* <button className="register-btn">Register</button> */}

        {/* Hamburger Menu - Only Visible on Small Screens */}
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu (Only visible when menu is open) */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to='/' className="mobile-item" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to='news' className="mobile-item" onClick={() => setMenuOpen(false)}>News</Link>
          <Link to='resources' className="mobile-item"onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link to='about' className="mobile-item" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to='contacts' className="mobile-item" onClick={() => setMenuOpen(false)}>Contacts</Link>
          <a href={REGISTRATION} target='_blank' download>
            <button type='button'className="mobile-register-btn" title="Registration" onClick={() => setMenuOpen(false)}>Register</button>
          </a>
          {/* <button className="mobile-register-btn" onClick={() => setMenuOpen(false)}>Register</button> */}
        </div>
        
      )}
    </div>
  );
}

export default Homepage;
