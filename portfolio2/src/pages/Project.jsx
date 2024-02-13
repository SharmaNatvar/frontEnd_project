import React from 'react'
import ProjectCard from '../Component/ProjectCard'
import projects from '../JSON/projectData.json'

const Project = () => {
  return (
    <>
<section className='prjBg' id='project'>
  <a href='https://github.com/SharmaNatvar/' target='_blank'><h2 className='prjTitle'>Project</h2></a>
        <div className='prjProjects'>
            {
                projects.map((project , id)=>{
                    return <ProjectCard key={id} project={project}/>
                })
            }
        </div>
      </section>
    </>
  )
}

export default Project