import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import CertificationsCard from './component/CertificationsCard';

const Certifications = () => {
  const colors = ['#7E8EF1', '#DDF2D8', '#F5FF9C'];
    const pdfUrls = [
    './Python and Djongo Framework.jpg',
    './boss.png',
    './Data Visualization with Python.jpg',
    './Microsoft Power BI.jpg',
    './Hadoop Certificate.jpg',
    './Flutter SQLite database.jpg',
  ];
  const dates = [
    'June 18, 2023',
    'July 17, 2021',
    'January 6, 2025',
    'December 4, 2024',
    'August 16, 2022',
    'December 28, 2022',
  ];

  const [selectedPdf, setSelectedPdf] = useState(null);
  const cardsRef = useRef([]);

  const handleCardClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  const extractName = (url) => {
    const fileName = url.split('/').pop().split('.')[0];
    return fileName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { y: -50, scale: 0, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'bounce.out',
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <>
      <div className="CertificationsParent" id='Certifications'>
        <div className="CertificationsTitle">Certifications</div>
        <div className="CertificationsShowcase">
          {Array.from({ length: 6 }).map((_, index) => {
            const pdfUrl = pdfUrls[index % pdfUrls.length];
            const name = extractName(pdfUrl);
            const date = dates[index % dates.length];

            return (
              <CertificationsCard
                key={index}
                ref={(el) => (cardsRef.current[index] = el)} // Attach refs to each card
                color={colors[index % colors.length]}
                pdfUrl={pdfUrl}
                Name={name}
                Date={date}
                onClick={() => handleCardClick(pdfUrl)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Certifications;
