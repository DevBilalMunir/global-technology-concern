import React from 'react';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';
import './Carousel.css';

import ProjectCard from './ProjectCard';
const Carousel = () => {
  const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
  };
  const cards = [{id:1,
    content: <ProjectCard
    title="Project Title1"
    description="Project Description"
    startDate="2023-01-01"
    endDate="2023-12-31"
    location="Project Location"
    clientName="Client Name"
  />},
  {id:2,
    content: <ProjectCard
    title="Project Title2"
    description="Project Description"
    startDate="2023-01-01"
    endDate="2023-12-31"
    location="Project Location"
    clientName="Client Name"
  />},
  {id:2,
    content: <ProjectCard
    title="Project Title3"
    description="Project Description"
    startDate="2023-01-01"
    endDate="2023-12-31"
    location="Project Location"
    clientName="Client Name"
  />}
    // Add more cards as needed
  ];
 
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Automatically slide the carousel
    autoplaySpeed: 4000, // Delay between slides in milliseconds
  };
  

  return (
    // <Slider {...settings}>
    //   {cards.map((crd) => (
    //     <div key={crd.id}>
    //       {crd.content}
    //     </div>
    //   ))}
    // </Slider>
    <div className="carousel-container">
    <OwlCarousel className="owl-theme" {...options}>
    {cards.map((crd) => (
        <div key={crd.id}>
          {crd.content}
        </div>
      ))}
    </OwlCarousel>
  </div>
  );
};
export default Carousel