import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from '../assets/log1.jpg'

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className=" top-navbar">
        <div className="contact-info">
          <span className="contact-item"><FaEnvelope /> email@example.com</span>
          <span className="contact-item"><FaPhone /> +123 456 7890</span>
        </div>
        <div className="social-icons">
          <FaTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaFacebook className="social-icon" />
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="navbar">
        {/* Logo */}
        
        {/* <div className="logo">{Logo}</div> */}
        <div className="logo"><img src={Logo} alt='JFP Logo' /></div>
         
        {/* Menu Items - Visible on Medium & Large Screens */}
        <div className="nav-links"> 
          <Link to='/' className="nav-item">Home</Link>
          <Link to='news' className="nav-item">News</Link>
          <Link to='resources' className="nav-item">Resources</Link>
          <Link to='about' className="nav-item">About</Link>
          <Link to='contact className="nav-item"'>Contacts</Link>
        </div>

        {/* Register Button - Visible on Medium & Large Screens */}
        <div>
        <button className="register-btn">Register</button>
        </div>

        {/* Hamburger Menu - Only Visible on Small Screens */}
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu (Only visible when menu is open) */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to='/' className="mobile-item">Home</Link>
          <Link to='news' className="mobile-item">News</Link>
          <Link to='resources' className="mobile-item">Resources</Link>
          <Link to='about' className="mobile-item">About</Link>
          <Link to='contact className="mobile-item"'>Contacts</Link>
          <button className="mobile-register-btn">Register</button>
        </div>
        
      )}
    </div>
  );
}

export default Homepage;
