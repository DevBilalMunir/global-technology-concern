import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ img, discription }) => {
  return (
    // <div className="card" style={{ backgroundImage: `url(${img})` }}>
    <div className="card" >
      <img className="card-image"  src={img} alt={"img"} />
      <div className='container'>
        <span>{discription}</span>
      
      </div>
    </div>
      
  );
};

export default ProjectCard;
