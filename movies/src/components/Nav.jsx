import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../public/Navbar.css'
import Logo from '../assets/logo.png'

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () =>{
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className='navbar'>
            <div className='nav-div'>
                <a href="#" className='nav-logo'><img src={Logo} alt="logo" /></a>
                <div className='nav-toggle' onClick={toggleNav}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className={isNavOpen ? 'nav-ul open' : 'nav-ul'}>
                    <li><Link to='/Movies' className='nav-li'>Movies</Link></li>
                    <li><Link to='/Series'  className='nav-li'>TV Series</Link></li>
                </ul>
            </div>
        </nav>
  )
}
