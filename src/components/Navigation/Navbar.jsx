import React from 'react'
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Logo from '/logo-color.png'

const Navbar = () => {
  return (
    <div className='nav-cont'>
      <div className='nav'>
        <div className='logo-cont'> <img src={Logo} alt='JFP Logo' className='logo' /></div>
        <div className='menu' id='mobile-menu'><MobileNav /></div>
        <div className='menu' id='desktop-menu'><DesktopNav /></div>
      </div>
    </div>
    
  )
} 

export default Navbar;
  