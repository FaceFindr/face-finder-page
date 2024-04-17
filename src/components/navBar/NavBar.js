import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const navBarLinks = [
        { item: "Introduction", link: "introduction" }, 
        { item: "Context", link: "context" },
        { item: "Key Features", link: "key-features" }, 
        { item: "Team", link: "team" }, 
        { item: "FAQ", link: "faq" }
    ]
    
    return (
        <div className='header-container'>
            <div className='topbar'></div>
            <nav className='navbar'>
                <div className='logo'>
                    <span className='face'>Face</span>
                    <span className='finder'>Findr.</span>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {
                        navBarLinks.map(navLink => {
                            return(
                                <li className='nav-item'>
                                    <a href={`#${navLink.link}`} className='nav-link' onClick={closeMenu}>{navLink.item}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar