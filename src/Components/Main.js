import React from 'react'
import Slider from './Slider'
import ProjectCard from './ProjectCard'

export default function Main() {
  return (
    <div>
        <h1>Main</h1>
        <Slider props={[<ProjectCard title="project1"/>, <ProjectCard title="project2"/>, <ProjectCard title="project3"/>]}/>

    </div>
  )
}
