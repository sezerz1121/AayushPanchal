import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ParticlesComponent from './component/ParticlesComponent';
import Navbar from './component/Navbar';

const Home = () => {
  console.log(window.innerWidth + 'x' + window.innerHeight);
  const badgeOneRef = useRef(null);
  const badgeTwoRef = useRef(null);
  const contactButtonRef = useRef(null);
  const downloadButtonRef = useRef(null);
  const bulbImageRef = useRef(null);
  const thumbsupImageRef = useRef(null);

  useEffect(() => {
    // GSAP Timeline for Badges and Buttons
    const tl = gsap.timeline();

    // Badge One Animation
    tl.fromTo(
      badgeOneRef.current,
      { scale: 0, y: -100, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 1 }
    );

    // Badge Two Animation
    tl.fromTo(
      badgeTwoRef.current,
      { scale: 0, y: -100, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 1 },
      '<0.3'
    );

    // Contact Button Animation
    tl.fromTo(
      contactButtonRef.current,
      { scale: 0, x: -50, opacity: 0 },
      { scale: 1, x: 0, opacity: 1, ease: 'back.out(1.7)', duration: 0.8 },
      '<0.5'
    );

    // Download Button Animation
    tl.fromTo(
      downloadButtonRef.current,
      { scale: 0, x: 50, opacity: 0 },
      { scale: 1, x: 0, opacity: 1, ease: 'back.out(1.7)', duration: 0.8 },
      '<0.3'
    );

    // GSAP Continuous Animation for the Bulb Image (horizontal path)
    gsap.to(bulbImageRef.current, {
      x: 50, // Move right
      yoyo: true, // Reverse the direction
      repeat: -1, // Loop forever
      duration: 3, // Duration of the movement
      ease: 'power1.inOut', // Easing function for smooth movement
    });

    // GSAP Continuous Animation for the Thumbsup Image (vertical path)
    gsap.to(thumbsupImageRef.current, {
      y: 50, // Move down
      yoyo: true, // Reverse the direction
      repeat: -1, // Loop forever
      duration: 2, // Duration of the movement
      ease: 'power1.inOut', // Easing function for smooth movement
    });
  }, []);

  return (
    <>
     
      <Navbar />
      <div className="home">
        <ParticlesComponent id="tsparticles" />
        <div className="home-Text-Container">
          <div className="Title-Text-Div">
            <div ref={badgeOneRef} className="TitleTextBadgeOne">
              Data Analyst
            </div>
            <div ref={badgeTwoRef} className="TitleTextBadgeTwo">
              1+ year experience
            </div>
            <div className="TitleText One">AAYUSH </div>
            <div className="TitleText Two">‎‎ ‎ ‎ PANCHAL</div>
          </div>
          <div className="descriptionText">
            Hi, I'm Aayush Panchal – a Data Analyst skilled in Python, SQL, and
            AI/ML. I specialize in turning data into actionable insights,
            crafting impactful dashboards, and leveraging cloud technologies to
            drive smarter decisions.
          </div>
          <div className="buttonContainer">
            <div ref={contactButtonRef} className="Contact-Button">
              Contact
            </div>
            <div ref={downloadButtonRef} className="Download-Button">
              Download CV
            </div>
          </div>
        </div>
        <div className="home-Text-Image">
          
          <div className='thumbsupImageDiv'> 
         <img
            ref={thumbsupImageRef}
            className="tumbsupImage"
            src="./image 29.png"
            alt="thumbsup"
          />
          </div>
          <img className='Apbhai'src="./ApBhaiNewImage.png" alt="main" />
          <div><img
            ref={bulbImageRef}
            className="bulbImage"
            src="./image 30.png"
            alt="bulb"
          /></div>
        </div>
        <div className='purpleBar'></div>
      </div>
      
    </>
  );
};

export default Home;
