import React, {useState} from 'react'
import '../../public/Navbar.css'

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () =>{
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className='navbar'>
            <div className='nav-div'>
                <a href="#" className='nav-logo'>Movies</a>
                <div className='nav-toggle' onClick={toggleNav}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className={isNavOpen ? 'nav-ul open' : 'nav-ul'}>
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
