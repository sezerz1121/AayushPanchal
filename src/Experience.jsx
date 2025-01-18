import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import frameImage from '../public/Frame 139.png';
import frameImageMobile from '../public/Frame 138.png';
import experience from './experience.json';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const middleLineRef = useRef(null);
  const markersRef = useRef([]);
  const cardsRef = useRef([]);
  const mobileCardsRef = useRef([]);

  const experienceData = [
    {
      "title": "Frontend Developer",
      "description": "ByteBox Solutions (July 2021 – Oct 2021) - Created website frontends using HTML, CSS, JavaScript, and Flask for ML model integration."
    },
    {
      "title": "SEO Executive",
      "description": "AEON Web Technology (May 2022 – Oct 2022) - Increased website traffic by 25% through data-driven SEO strategies."
    },
    {
      "title": "Data Analyst Intern",
      "description": "Adani Green Energy Limited (Jan 2024 – June 2024) - Developed machine learning models and Power BI dashboards to optimize energy production and resource allocation."
    },
    {
      "title": "Frontend Web Developer",
      "description": "Upwork (Dec 2022 – Present) - Built responsive, user-friendly websites using HTML, CSS, Bootstrap, and React.js for clean and modern designs."
    },
    {
      "title": "Research Analyst",
      "description": "The Karma Foundation (Apr 2021 – May 2021) - Researched NGOs focused on water-saving initiatives and assisted in implementing water cultivation projects for rural communities."
    }
  ];


  useEffect(() => {
    markersRef.current.forEach((marker, index) => {
      gsap.fromTo(
        marker,
        { opacity: 0, height: "0px" },
        {
          opacity: 1,
          height: "72px",
          duration: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: middleLineRef.current,
            start: `top+=${index * 220}px center`,
            toggleActions: "play none none reverse",
            markers: false,
            onEnter: () => {
              gsap.to(cardsRef.current[index], {
                opacity: 1,
                y: -20,
                duration: 0.5,
                ease: "power2.out",
              });
            },
          },
        }
      );
    });
    // Animate mobile cards
    mobileCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);
  

  return (
    <>
      <div className="ExperienceParent"  id='Experience'>
      <div className="TitleExperience">Experience</div>
      <div className="ExperienceShowCase">
        <div className="ExperienceShowCaseMiddleLine" ref={middleLineRef}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="marker"
              ref={(el) => (markersRef.current[index] = el)}
              style={{
                position: "relative",
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? "-2px" : "0px",
                backgroundColor: "#ABDF9E",
                transformOrigin: "top",
                transform: index % 2 === 0 ? "rotate(90deg)" : "rotate(270deg)",
              }}
            >
              <div
                className="experienceCard"
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  transform: index % 2 === 0 ? "rotate(270deg)" : "rotate(90deg)",
                  backgroundImage: `url(${frameImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="experienceCardTitle">
                  {experienceData[index]?.title}
                </div>
                <div className="experienceCardDescription">
                  {experienceData[index]?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       {/* Mobile Experience */}
       <div className="ExperienceMobile" id='Experiences'>
        <div className="ExperienceMobileTitle"><div>Experience</div></div>
        <div className="ExperienceMobileShowcase">
          {experienceData.map((data, index) => (
            <div
              key={index}
              className="ExperienceMobileCard"
              ref={(el) => (mobileCardsRef.current[index] = el)}
              style={{
                backgroundImage: `url(${frameImageMobile})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="ExperienceMobileCardTitle">{data.title}</div>
              <div className="ExperienceMobileCardDescription">{data.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
