import React from 'react'
import { getImageUrl } from '../imgPath'
import style from "../App.module.css";

const Footer = () => {
  return (
    <>
     <footer className={style.footerContainer}>
        <div className={style.footerText}>
            <h2>Contact</h2>

        </div>
        <ul className={style.footerLinks}>
            <li className={style.footerLink}>
                <img src={getImageUrl('emailIcon.png')} alt='img'/>
                <a href='mailto:krish997854@gmail.com'>Krish997854@gmail.com</a>
            </li>
            <li className={style.footerLink}>
                <img src={getImageUrl('linkedinIcon.png')} alt='img'/>
                <a href='www.linkedin.com/in/sharmanatvar'>Sharma-Natvar</a>
            </li>
            <li className={style.footerLink}>
                <img src={getImageUrl('githubIcon.png')} alt='img'/>
                <a href='https://github.com/SharmaNatvar/'>SharmaNatvar</a>
            </li>
        </ul>
     </footer> 
    </>
  )
}

export default Footer
