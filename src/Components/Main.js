import React from 'react'
import Slider from './Slider'
import ProjectCard from './ProjectCard'
import img1 from './images/ima1.png'
import img2 from './images/ima2.png'
import img3 from './images/ima3.jpg'


export default function Main() {
  return (
    <div>
        <Slider props={[<ProjectCard img={img1} discription="This is about Project1"/>, <ProjectCard img={img2} discription="This is about Project2"/>, <ProjectCard img={img3} discription="This is about Project3"/>]}/>

    </div>
  )
}
