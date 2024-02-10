import React, { useRef, useEffect, useState } from 'react';
import hamburger from '../assets/icons/icon-hamburger.svg'
import logo from '../assets/images/logo.svg';
import closeMenu from '../assets/icons/icon-close.svg';
import { DesktopNavbar } from './DesktopNavbar';

export const Navbar = () => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const menu = [
        {name: 'Home', id: 1},
        {name: 'About', id: 2},
        {name: 'Contact', id: 3},
        {name: 'Blog', id: 4},
        {name: 'Careers', id: 5},
    ];

    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt={logo} />
            </div>
            <DesktopNavbar />
            <div className='menu-container' ref={menuRef}>
                <div className='menu-icon' onClick={toggleMenu}>
                    {isMenuOpen ? <img className='closeMenu' src={closeMenu} alt={closeMenu}/> : <img className='hamburger' src={hamburger} alt={hamburger} />}
                </div>
                {isMenuOpen && (
                    <div className='menu-item'>
                        <ul className={`${isMenuOpen ? 'menu-open' : ''}`}>
                            {menu.map((item) => (
                                <li className='items' key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>  
            <div className='desktop-btn-container sm:hidden lg:block justify-end'>
                <button className='hero-btn'>Request Invite</button>
            </div>  
        </div>
    )
}
