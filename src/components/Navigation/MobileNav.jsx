import React, { useState } from 'react';
import { AiOutlineBars, AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { text: 'HOME', path:'#', options: [{optionName: 'Mission', path: '/mission'}, {optionName: 'Vision', path: '/vision'}] },
    { text: 'NEWS', path:'/news', options: [{optionName: 'Events', path: '/events'}, {optionName: 'Notices', path: '/notices'}] },
    { text: 'RESOURCES', path:'/resources', options: [{optionName: 'Terms & Policy', path: '/terms'}, {optionName: 'Nomination', path: '/nomination'}] },
    { text: 'ABOUT', path:'/about', options: [{optionName: 'History', path: '/history'}, {optionName: 'Value', path: '/value'}, { optionName: 'Our Team', path: '/team'}] },
    { text: 'CONTACT', path:'/contact', options: [] }
  ];

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <div onClick={handleToggleMenu} className="bars">
        <AiOutlineBars />
      </div>
      {isOpen && (
        <div className="mobile-menu-container">
          <div className="menu-close">
            <span onClick={handleToggleMenu}>
              <AiFillCloseCircle />
            </span>
          </div>
          <ul>
            {links.map((link, index) => (
              link.options.length > 0 ? (
                <Popup
                  key={index}
                  trigger={
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link)}
                      className='link'
                    >
                      {link.text}
                    </Link>
                  }
                  position="botttom center"
                  contentStyle={{ width: 'max-content' }}
                >
                  <div className="drop-down">
                    {link.options.map((subLink) => (
                      <Link
                        to={subLink.path}
                        key={subLink.optionName}
                        className="drop-item"
                      >
                        {subLink.optionName}
                      </Link>
                    ))}
                  </div>
                </Popup>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => handleLinkClick(link)}
                  className='link'
                >
                  {link.text}
                </Link>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
