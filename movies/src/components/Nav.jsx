import React from 'react'
import '../../public/Navbar.css'

export const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='nav-div'>
            <a href="#" className='nav-logo'></a>
            <ul className='nav-ul'>
                <li><a href="#" className='nav-li'>Home</a></li>
                <li><a href="#" className='nav-li'>Movies</a></li>
                <li><a href="#" className='nav-li'>TV Series</a></li>
                <li><a href="#" className='nav-li'>Genres</a></li>
                <li><a href="#" className='nav-li'>About Us</a></li>
                <li><a href="#" className='nav-li'>Contact Us</a></li>
            </ul>
        </div>
    </nav>
  )
}
