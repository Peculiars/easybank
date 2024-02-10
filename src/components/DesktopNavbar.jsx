import React, { useState } from 'react'

export const DesktopNavbar = () => {

    const [isActive, setIsActive] = useState('Home');

    const handleActiveItem =(name)=>{
        setIsActive(name)
    }

    const menu = [
        {name: 'Home', id: 1},
        {name: 'About', id: 2},
        {name: 'Contact', id: 3},
        {name: 'Blog', id: 4},
        {name: 'Careers', id: 5},
    ]

  return (
    <div className='desktop-nav-container'>
        <ul className='navbar-items'>
          {menu.map((item) => (
            <li onClick={()=> handleActiveItem(item.name)} key={item.id} className={isActive === item.name ? 'active': ''}>
              {item.name}
            </li>
          ))}
        </ul>
    </div>  
  )
}
