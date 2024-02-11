import React from 'react'
import style from "../App.module.css";
import { getImageUrl } from '../imgPath'

const About = () => {
  return (
    <>
     <section className={style.aboutContainer} id='about'>
        <h2 className={style.aboutTitle}>About</h2>
        <div className={style.aboutContent}>
            <img className={style.aboutImg} src={getImageUrl("profile0.jpg")} alt='profile'/>
            <ul className={style.aboutItems}>
                <li className={style.aboutItem}><img src={getImageUrl("cursorIcon.png")} alt='img'/>
                    <div className={style.aboutItemTxt}>
                        <h3> Frontend Developer</h3>
                        <p>I'm currently exploring frontend development through coursework and personal projects.</p>
                    </div>
                </li>
                <li className={style.aboutItem}><img src={getImageUrl("serverIcon.png")} alt='img'/>
                    <div className={style.aboutItemTxt}>
                        <h3> Backend Developer</h3>
                        <p>Emerging backend developer with experience in building and optimizing simple systems and APIs</p>
                    </div>
                </li>
            </ul>
        </div>
     </section>
    </>
  )
}

export default About
