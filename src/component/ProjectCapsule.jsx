import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProjectCapsule = (props) => {
    // Correctly referencing the `technology` prop (updated spelling)
    const formattedTechnology = props.technology.replace(/\s+/g, '').toUpperCase();
    const capsuleRef = useRef(null);

  useEffect(() => {
    // Bounce animation for the capsule
    gsap.fromTo(
      capsuleRef.current,
      { scale: 0, y: -50, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 0.5 }
    );
  }, []);

    return (
        <div className='ProjectCapsuleParent' ref={capsuleRef}>
            <img className='ProjectCapsuleImage' src={`/${formattedTechnology}.png`} alt={`${formattedTechnology}`} />
            <div className='ProjectCapsuleText'>{props.technology}</div>
        </div>
    );
};

export default ProjectCapsule;
