import React from 'react';
import mobileBg from '../assets/images/bg-intro-mobile.svg';
import desktop from '../assets/images/bg-intro-desktop.svg';
import phones from '../assets/images/image-mockups.png'

export const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-images'>
            <div className='mobile-hero-bg' style={{backgroundImage: `url(${mobileBg})`}}></div>
            <div className='desktop-hero-bg' style={{backgroundImage: `url(${desktop})`}}></div>
        </div>
        <img className='hero-phones' src={phones} alt={phones} />
        
        <div className='hero-contents'>
            <h1 className='hero-heading'>Next generation digital banking</h1>
            <p  className='hero-desc'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
            <div className='hero-btn-container'>
                <button className='hero-btn'>Request Invite</button>
            </div>
        </div>   
    </div>
  )
}
