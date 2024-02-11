import React from 'react';
import mobileBg from '../assets/images/bg-intro-mobile.svg';
import desktopBg from '../assets/images/bg-intro-desktop.svg';
import phones from '../assets/images/image-mockups.png'

export const Hero = () => {
  const mobileHeroBgStyle = {
    backgroundImage: `url(${mobileBg})`,
    /* Additional background properties */
  };

  const desktopHeroBgStyle = {
    backgroundImage: `url(${desktopBg})`,
    /* Additional background properties */
  };

  return (
    <div className='hero-container'>
        <div className='hero-images'>
            <div className='mobile-hero-bg' style={mobileHeroBgStyle}></div>
            <div className='desktop-hero-bg' style={desktopHeroBgStyle}></div>
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
