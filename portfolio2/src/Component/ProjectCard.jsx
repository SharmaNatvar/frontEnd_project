import React from 'react'
import { getImageUrl } from '../imgPath';

const ProjectCard = ({project}) => {

    const { imgSrc , title , desc ,skill ,demo,source} = project 
    console.log(getImageUrl(imgSrc));
  return (
    <>
<div className='prjCard'>
        <img src={getImageUrl(imgSrc)} alt={title} className='prjCardImg'/>
         <h3 className='prjCardH3'>{title}</h3>
        <p className='prjCardp'>{desc}</p>
        <ul className='prjCardSkills'>
          {skill.map((skills, id) => {
            return <li key={id} className='prjCardli'>{skills}</li>;
          })}
        </ul>
        <div className='prjCardLinks'>
          <a className='prjCardLink' href={demo}>Demo</a>
          <a className='prjCardLink' href={source}>source</a>
        </div> 
      </div>
    </>
  )
}

export default ProjectCard