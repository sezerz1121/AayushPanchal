import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticlesComponent from './component/ParticlesComponent';
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const containerRef = useRef(null);
    const scrollTriggerRef = useRef(null); // For cleanup

    useEffect(() => {
        const container = containerRef.current;
        const sections = gsap.utils.toArray('.section');
        const updateWidth = () => {
            const totalWidth = sections.length * window.innerWidth;
            gsap.set(container, { width: totalWidth });
            if (scrollTriggerRef.current) scrollTriggerRef.current.kill(); // Kill existing ScrollTrigger

            // Recreate ScrollTrigger with updated width
            scrollTriggerRef.current = gsap.to(container, {
                x: () => -(totalWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    markers: true,
                    start: 'top top',
                    end: () => `+=${totalWidth - window.innerWidth}`,
                },
            });
        };

        updateWidth();
        window.addEventListener('resize', updateWidth); // Adjust on window resize

        return () => {
            if (scrollTriggerRef.current) scrollTriggerRef.current.kill(); // Cleanup ScrollTrigger
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <div className="horizontal-scroll-container" ref={containerRef}>
       
            <div className="section"> <ParticlesComponent id="tsparticles" /></div>
            <div className="section">Section 2</div>
            <div className="section">Section 3</div>
            <div className="section">Section 4</div>
        </div>
    );
};

export default HorizontalScroll;
