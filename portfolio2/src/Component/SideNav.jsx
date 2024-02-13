import React from 'react'

const SideNav = ({openNav , toggleMenu}) => {
  console.log(openNav);
  return (
    <>
      <div className={`sideNavBg ${openNav ? "active" : " "}`} onClick={toggleMenu}>
<div className='sideNav'>
<a className='navLogo'><span><span className='navLogo1'>S</span>harma</span></a>
        <ul>
            <li>
                <a className='navItemA' href='#home'>Home</a>
            </li>
            <li>
                <a className='navItemA' href='#skill'>Skills</a>
            </li>
            <li>
                <a className='navItemA' href='#work'>Work Experience</a>
            </li>
            <li>
                <a className='navItemA' href='#contact'>Contact Me</a>
            </li>
            <button className='navBtn' onClick={()=>{}}>Hire Me</button>
        </ul>
</div>
      </div>
    </>
  )
}

export default SideNav
