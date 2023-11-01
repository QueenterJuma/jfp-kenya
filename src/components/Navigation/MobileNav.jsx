  import React, { useState } from 'react'
  import { AiOutlineBars, AiFillCloseCircle } from 'react-icons/ai'
  import { Link } from 'react-router-dom';

  const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleMenu = () => {
      setIsOpen(!isOpen)
    };

    const links = [
      {path:'/', text:'HOME'},
      {path:'/news', text:'NEWS'},
      {path:'/about', text:'ABOUT US'},
      {path:'/contact', text:'CONTACT'}
    ];

    return (
      <div>
        <div
          onClick={handleToggleMenu}
          className='bars'
        ><AiOutlineBars /></div>
        {isOpen && 
          <div className='mobile-menu-container'>
            <div className='menu-close'>
              <span onClick={handleToggleMenu}><AiFillCloseCircle /></span>
            </div>
            <ul>
              {links.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleToggleMenu}
                    className='link'
                  >
                      {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }

  export default MobileNav;
