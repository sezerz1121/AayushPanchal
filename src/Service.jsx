import React, { useEffect, useRef } from 'react';
import ServicesCard from './component/ServicesCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const cardsRef = useRef([]); // Store references to each card

  // Array of titles to display
  const titles = [
    'Website Development',
    'Search Engine Optimization',
    'Custom Projects',
    'Digital Marketing',
    'Data Analytics',
    'Cloud and Big Data Solutions',
  ];

  useEffect(() => {
    // Ensure the refs are properly assigned before animation
    cardsRef.current.forEach((card, index) => {
      // Check if the card element exists
      if (card) {
        gsap.fromTo(
          card,
          { y: -50, opacity: 0, scale: 0.9 }, // Starting state
          {
            y: 0,
            opacity: 1,
            scale: 1, // Ending state
            duration: 0.6,
            ease: 'bounce.out',
            scrollTrigger: {
              trigger: card, // Trigger the animation when the card enters the viewport
              start: 'top 80%', // Start when the top of the card reaches 80% of the viewport height
              toggleActions: 'play none none none', // Only play once when entering view
              once: true, // The animation will only trigger once when it enters the viewport
            },
            delay: index * 0.2, // Delay for each card to create staggered effect
          }
        );
      }
    });
  }, []);

  return (
    <div className="ServiceParent" id='Services'>
      <div className="ServicesTitle">Services</div>
      <div className="CertificationsShowcase">
        {titles.map((title, index) => (
          <ServicesCard
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Assign each card to the ref
            title={title} // Pass the title from the array
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
