import React from 'react'
import { Link } from 'react-router-dom'
import '../../public/Navbar.css'
import Logo from '../assets/logo.png'
import { Searcher } from './Searcher'

export const Nav = () => {

  
  return (
    <nav className='navbar'>
    <div className='nav-div'>
      <Link to='/Movies' className='nav-logo'><img src={Logo} alt="logo" /></Link>
      <ul className='nav-ul'>
        <li><Link to='/Movies' className='nav-li'>Movies</Link></li>
        <li><Link to='/Series' className='nav-li'>TV Series</Link></li>
      </ul>
      <Searcher />
    </div>
  </nav>
  )
}
