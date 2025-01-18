import React, { forwardRef } from 'react';
import { Link } from 'react-scroll';

const ServicesCard = forwardRef(({ title }, ref) => {
  return (
    <>
      <div
        ref={ref} // Attach the ref for GSAP animation
        className="ServicesCardParent"
        style={{
          backgroundImage: `url(./ServiceCard.png)`,
        }}
      >
        <div className="serviceCardTitle">{title}</div>
        <button className='serviceCardButton'><Link to="Contact" smooth={true} duration={500}>Contact Now</Link></button>
      </div>
    </>
  );
});

export default ServicesCard;
