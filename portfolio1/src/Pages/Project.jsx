import React from 'react'
import style from "../App.module.css";
import projects from '../data/project.json';
import CardProject from '../Component/CardProject';

const Project = () => {
  return (
    <>
      <section className={style.prjContainer}>
        <h2 className={style.prjTitle}>Project</h2>
        <div className={style.prjProjects}>
            {
                projects.map((project , id)=>{
                    return <CardProject key={id} project={project}/>
                })
            }
        </div>
      </section>
    </>
  )
}

export default Project
