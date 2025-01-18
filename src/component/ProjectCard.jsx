import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCapsule from './ProjectCapsule';
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // ScrollTrigger animation
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%', // Trigger animation when the top of the card reaches 80% of the viewport
          toggleActions: 'play none none none', // Play animation only once
        },
      }
    );


    return () => {
      if (ScrollTrigger.getById(card)) ScrollTrigger.kill(card); // Cleanup ScrollTrigger instance
    };
  }, []);
  return (
    <div className='ProjectCardParent' ref={cardRef}>
      <div className='ProjectCardTitle'>{props.Title}</div>
      <div className='ProjectCardDescription'>Description</div>
      <div className='ProjectCardDescriptionText'>{props.desc}</div>
      <div className='ProjectTecnologyCapsules'>
        {/* Dynamically render capsules */}
        {props.technologies.map((tech, index) => (
          <ProjectCapsule key={index} technology={tech} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
