import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef(null);
  const emailButtonRef = useRef(null);
  const linkedInButtonRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { scale: 0, x: 50, opacity: 0 },
      { scale: 1, x: 0, opacity: 1, ease: 'back.out(1.7)', duration: 0.8 }
    );

    // Email button animation
    gsap.fromTo(
      emailButtonRef.current,
      { scale: 0, x: 50, opacity: 0 },
      {
        scale: 1,
        x: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 0.8,
        scrollTrigger: {
          trigger: emailButtonRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: 0.3, // Delay to stagger the buttons
      }
    );

    // LinkedIn button animation
    gsap.fromTo(
      linkedInButtonRef.current,
      { scale: 0, x: 50, opacity: 0 },
      {
        scale: 1,
        x: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 0.8,
        scrollTrigger: {
          trigger: linkedInButtonRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: 0.6, // Delay for the LinkedIn button to appear later
      }
    );
  }, []);

  return (
    <div className="contactParent" id="Contact">
      <div ref={titleRef} className="contactTitle">
        Contact
      </div>
      <div className="contactDiv">
        <div className="contactDivTitle">Let's Work Together</div>
        <div className="contactDivButtonsDiv">
          <a
            href="mailto:ayushhvpanchal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button ref={emailButtonRef} className="contactDivButtonEmail">
              Email
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/aayushvpanchal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              ref={linkedInButtonRef}
              className="contactDivButtonLinkedIn"
            >
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
