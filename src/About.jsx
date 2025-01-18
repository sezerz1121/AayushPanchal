import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRefs = useRef([]);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const numberRef = useRef(null);
  const bicepImageRef = useRef(null);
  const starImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRefs.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Title Animation
    tl.fromTo(
      titleRef.current,
      { scale: 0, y: -50, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 1 }
    );

    // Image Animation
    tl.fromTo(
      imageRef.current,
      { scale: 0, y: -50, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 1 },
      '<0.1' // Reduced delay to start earlier
    );

    // Animate `aboutInfoLong` and `aboutInfoShort`
    const aboutInfoLong = gsap.utils.toArray('.aboutInfoLong');
    const aboutInfoShort = gsap.utils.toArray('.aboutInfoShort');

    tl.fromTo(
      aboutInfoLong,
      { scale: 0, y: -20, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, stagger: 0.2, ease: 'power2.out', duration: 0.8 },
      '<0.1'
    );

    tl.fromTo(
      aboutInfoShort,
      { scale: 0, x: -20, opacity: 0 },
      { scale: 1, x: 0, opacity: 1, stagger: 0.2, ease: 'power2.out', duration: 0.8 },
      '<0.1'
    );

    // Bounce animation for images
    tl.fromTo(
      bicepImageRef.current,
      { scale: 0, y: -50, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 0.5 }
    );

    tl.fromTo(
      starImageRef.current,
      { scale: 0, y: -50, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, ease: 'elastic.out(1, 0.5)', duration: 0.5 },
      '<0.1'
    );
  }, []);

  return (
    <>
      <div className="AboutParent" ref={(el) => (aboutRefs.current[0] = el)} id='About'>
        <div className="AboutTitle" ref={titleRef}>
          About
        </div>

        <div className="AboutDetails">
          <div className="AboutmeImage" ref={imageRef}>
            <img src="./JBP_0238_cc 1.png" alt="About me" />
            <img className="aboutBadge" src="./image 31.png" alt="About me" />
            <img className="aboutData" src="./Group.png" alt="About me" />
          </div>
          <div className="AboutInfo">
            <img
              className="AboutInfoStarImage"
              src="openart-image_afEG2ZpM_1736609229256_raw 1.png"
              alt="Star Image"
              ref={starImageRef}
            />
            <img
              className="AboutInfoBicepImage"
              src="openart-5379e89d-67bf-4f10-9928-f82a23259015 1.png"
              alt="Bicep Image"
              ref={bicepImageRef}
            />
            <div className="aboutInfoLong">
              <div className="aboutInfoLongNumber">15+</div>
              <div className="aboutInfoLongText">Real world projects</div>
            </div>
            <div className="aboutShortParentDiv">
              <div className="aboutInfoShort">
                <div className="aboutInfoShortNumber">12+</div>
                <div className="aboutInfoShortText">Professional Certifications</div>
              </div>
              <div className="aboutInfoShort">
                <div className="aboutInfoShortNumber">1+</div>
                <div className="aboutInfoShortText">Year Experience</div>
              </div>
            </div>
            <div className="aboutInfoLong">
              <div className="aboutInfoLongNumber">20+</div>
              <div className="aboutInfoLongText">In-Demand Skills</div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutMobile" ref={(el) => (aboutRefs.current[1] = el)}  id='Abouts'>
        <div className="AboutMobileDetails">
          <div className="AboutMobileTitle">About</div>
          <div className="AboutInfo">
            
            <div className="aboutInfoLong">
              <div className="aboutInfoLongNumber">15+</div>
              <div className="aboutInfoLongText">Real world projects</div>
            </div>
            <div className="aboutShortParentDiv">
              <div className="aboutInfoShort">
                <div className="aboutInfoShortNumber">12+</div>
                <div className="aboutInfoShortText">Professional Certifications</div>
              </div>
              <div className="aboutInfoShort">
                <div className="aboutInfoShortNumber">1+</div>
                <div className="aboutInfoShortText">Year Experience</div>
              </div>
            </div>
            <div className="aboutInfoLong">
              <div className="aboutInfoLongNumber">20+</div>
              <div className="aboutInfoLongText">In-Demand Skills</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
