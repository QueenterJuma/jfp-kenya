import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const DesktopNav = () => {
  const links = [
    { text: 'HOME', path:'/', options: [{optionName: 'Mission', path: '/mission'}, {optionName: 'Vision', path: '/vision'}] },
    { text: 'NEWS', path:'/news', options: [{optionName: 'Events', path: '/news'}, {optionName: 'News', path: '/news'}] },
    { text: 'RESOURCES', path:'/resources', options: [{optionName: 'Terms & Policy', path: '/terms'}, {optionName: 'Nomination', path: '/nomination'}] },
    { text: 'ABOUT', path:'/about', options: [{optionName: 'History', path: '/history'}, {optionName: 'Value', path: '/value'}, { optionName: 'Our Team', path: '/team'}] },
    { text: 'CONTACT', path:'/contact', options: [] }
  ];

  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <ul className='menu-list-desktop'>
      {links.map((link, index) => (
        link.options.length > 0 ? (
          <Popup
            key={index}
            trigger={
              <Link
                to={link.path}
                className='menu-link-desktop'
                onClick={() => handleLinkClick(link)}
              >
                {link.text}
              </Link>
            }
            position="bottom start"
            contentStyle={{ width: 'max-content' }}
          >
            <div className='drop-down'>
              {
                link.options.map((subLink )=> (
                  <Link 
                    to={subLink.path}
                    key={subLink.optionName}
                    className='drop-item'
                  >
                    {subLink.optionName}
                  </Link>
                ))
              }
            </div>
          </Popup>
        ) : (
          <Link
            key={index}
            to={link.path}
            className='menu-link-desktop'
            onClick={() => handleLinkClick(link)}
          >
            {link.text}
          </Link>
        )
      ))}
    </ul>
  );
};

export default DesktopNav;
