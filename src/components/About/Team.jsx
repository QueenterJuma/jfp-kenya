import React from 'react'
import { TeamList } from './TeamList';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Team = () => {
  const socialIcons = {
    Facebook: <FaFacebook />,
    Twitter: <FaTwitter />,
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />,
  };
  
  return (
    <div className='our-team'>
      <h3>Our Team</h3>
      <div className='team-cards'>
        {
          TeamList.map(member => (
            <div key={member.name} className='card'>
              <div className='image-cont'>
                <img src={member.photo} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <div className='social-links'>
              {member.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
                  {socialIcons[link.name]}
                </a>
              ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Team;
