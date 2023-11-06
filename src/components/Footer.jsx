import React from 'react'
import { 
  BsFacebook,
  BsTwitter,
  BsFillTelephoneForwardFill,
  BsFillPinMapFill
} from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-col'>
        <h6>About Us</h6>
        <p>To establish a prosperous, industrialized and modern nation, in which all citizens enjoy equal social, economic and democratic rights, and live in unity.</p>
        <div className='social-media-icons'>
          <a  target='_blank' href='https://web.facebook.com/groups/justusjumafornyakachmp'> <BsFacebook /> </a>
          <a target='_blank' href='https://twitter.com/JFPPartyKe'> <BsTwitter /> </a>
        </div>
      </div>
      <div className='footer-col'>
        <h6>The Party</h6>
        <ul>
          <li> <a href=''>About JFP</a> </li>
          <li> <a href=''>Mission </a></li>
          <li> <a href=''>Vission</a> </li>
          <li> <a href=''>Privacy Policy</a> </li>
        </ul>
      </div>
      <div className='footer-col'>
        <h6>Useful Links</h6>
        <ul>
          <li><a href=''>Our Partners</a></li>
          <li><a href=''>Become a Donator</a></li>
          <li><a href=''>Latest News</a></li>
        </ul>
      </div>
      <div className='footer-col get-in-touch'>
        <h6>Get In Touch</h6>
        <ul>
         <p> <span> <BsFillTelephoneForwardFill /> </span> +254 701234567 </p>
         <p> <span> <HiMailOpen /> </span> JFPPartyKe@gmail.com</p>
         <p> <span> <BsFillPinMapFill /> </span> Nairobi, Kenya </p>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
