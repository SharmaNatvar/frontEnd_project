import React, { useState } from 'react'
import SideNav from './SideNav'

const Navbar = () => {

    const [openNav , setOpenNav] = useState(false)

    const toggleMenu = () =>{
        setOpenNav(!openNav)
    }

  return (
    <>
<SideNav openNav={openNav} toggleMenu={toggleMenu}/>
<nav className='navBg'>
        <div className='nav'>
        <a className='navLogo'><span><span className='navLogo1'>S</span>harma</span></a>
        <ul>
            <li>
                <a className='navItemA' href='#home'>Home</a>
            </li>
            <li>
                <a className='navItemA' href='#project'>Project</a>
            </li>
            <li>
                <a className='navItemA' href='#work'>Work Experience</a>
            </li>
            <li>
                <a className='navItemA' href='#contact'>Contact Me</a>
            </li>
            <a href='#contact'>

            <button className='navBtn'>Hire Me</button>
            </a>
        </ul>
        <div className='menuBtn' onClick={toggleMenu}>
        {/* <span> */}
            
        {openNav ? <img src='./src/assets/closeIcon.png'/> : <img src='./src/assets/menuIcon.png'/>}
        {/* </span> */}
        </div>
        </div>
     </nav>
    </>
  )
}

export default Navbar
