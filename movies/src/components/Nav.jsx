import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../public/Navbar.css'
import Logo from '../assets/logo.png'
import { Searcher } from './Searcher'

export const Nav = () => {
  const [activeLink, setActiveLink] = useState('Movies');


  const handleLogoClick = () =>{
    setActiveLink('Movies')
  }
  
  return (
    <nav className='navbar'>
    <div className='nav-div'>
      <Link to='/Movies' className='nav-logo' onClick={handleLogoClick}><img src={Logo} alt="logo" /></Link>
      <ul className='nav-ul'>
        <li className={activeLink === 'Movies' ? 'active' : ''}>
          <Link to='/Movies' className='nav-li' onClick={() => setActiveLink('Movies')}>Movies</Link>
        </li>
        <li className={activeLink === 'TV Series' ? 'active' : '' }>
          <Link to='/Series' className='nav-li' onClick={() => setActiveLink('TV Series')}>TV Series</Link>
        </li>
      </ul>
      <Searcher />
    </div>
  </nav>
  )
}
