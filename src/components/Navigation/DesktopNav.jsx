import React from 'react'
import { Link } from 'react-router-dom';


const DesktopNav = () => {
  const links = [
    {path:'/', text:'HOME'},
    {path:'/news', text:'NEWS'},
    {path:'/about', text:'ABOUT US'},
    {path:'/contact', text:'CONTACT'}
  ];

  return (
    <ul className='menu-list-desktop'>
      {links.map(link => (
        <li key={link.path}>
          <Link
            to={link.path}
            className='menu-link-desktop'
          >
              {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav;
