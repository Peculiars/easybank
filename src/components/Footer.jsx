import React from 'react';
import logo from '../assets/images/logo2.svg';
import faceebook from '../assets/icons/icon-facebook.svg';
import instagram from '../assets/icons/icon-instagram.svg';
import youtube from '../assets/icons/icon-youtube.svg';
import twitter from '../assets/icons/icon-twitter.svg';
import pinterest from '../assets/icons/icon-pinterest.svg';

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-contents'>
            <div className='logo-icons'>
                <img src={logo} alt={logo} />
                <div className='footer-icons'>
                    <img src={faceebook} alt={faceebook} />
                    <img src={youtube} alt={youtube} />
                    <img src={twitter} alt={twitter} />
                    <img src={pinterest} alt={pinterest} />
                    <img src={instagram} alt={instagram} />
                </div>
            </div>
            <div className='info'>
                <div className='footer-about'>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </div>
                <div className='footer-info'>
                    <p>Careers</p>
                    <p>Support</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
        <div className='footer-button'>
            <div className='btn-copyright'>
                <button className='footer-btn'>Request Invite</button>
                <p>©Easybank. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}