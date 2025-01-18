import React, { useState, useEffect, useRef } from 'react';


const CertificationsCard = ({ color, onClick, pdfUrl,Name,Date }) => {


  return (
    <div
      className="CertificationsCardParent"
      style={{
        backgroundColor: color,
      }}
      onClick={onClick} // Handle the click
    >
      <div className="CertificationsCardImage">
        <img className='CertificationsCardImageImage' src={pdfUrl}/>
      </div>
      <div className="CertificationsCardName">{Name}</div>
      <div className="CertificationsCardDate">{Date}</div>

    </div>
  );
};

export default CertificationsCard;
