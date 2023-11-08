import React, { useEffect, useState } from 'react';
import { TeamList } from './TeamList';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiSkipNextCircle, BiSkipPreviousCircle } from 'react-icons/bi';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

const Team = () => {
  const socialIcons = {
    Facebook: <FaFacebook />,
    Twitter: <FaTwitter />,
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />,
  };
  const [swiper, setSwiper] = useState(null);
  const [slidesInView, setSlidesInView] = useState(4);

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setSlidesInView(1);
    } else if (window.innerWidth >= 600 && window.innerWidth < 768) {
      setSlidesInView(2);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSlidesInView(3);
    } else {
      setSlidesInView(4);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="our-team">
      <h3>Our Team</h3>
      <div className="slide-btn">
        <button onClick={() => swiper && swiper.slidePrev()}> <BiSkipPreviousCircle /> </button>
        <button onClick={() => swiper && swiper.slideNext()}> <BiSkipNextCircle /> </button>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={slidesInView}
        className="team-cards"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {TeamList.map((member) => (
          <SwiperSlide key={member.name} className="card">
            <div className="image-cont">
              <img src={member.photo} alt={member.name} />
            </div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <div className="social-links">
              {member.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {socialIcons[link.name]}
                </a>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
