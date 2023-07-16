import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, startDate, endDate, location, clientName, img }) => {
  return (
    // <div className="card" style={{ backgroundImage: `url(${img})` }}>
    <div className="card" >
      <img className="card-image" width={200} height={200} src={img} alt={title} />
      <div className="side">
      <h2 className="card-title">{title}</h2>
      <p className="">{description}</p>
      <div className="">
        <p>
          <strong>Start Date:</strong> {startDate}
        </p>
        <p>
          <strong>End Date:</strong> {endDate}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Client Name:</strong> {clientName}
        </p>
      </div>
    </div>
    </div>
      
  );
};

export default ProjectCard;
