import { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";


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
        
        <div className="logo">LOGO</div>
         <div>
        {/* Menu Items - Visible on Medium & Large Screens */}
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
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
        <ul className="mobile-menu">
          <li className="mobile-item">Home</li>
          <li className="mobile-item">About</li>
          <li className="mobile-item">Services</li>
          <li className="mobile-item">Contact</li>
          <button className="mobile-register-btn">Register</button>
        </ul>
      )}
    </div>
  );
}

export default Homepage;
