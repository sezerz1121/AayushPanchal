import React from 'react'
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='FooterParent'>
            <div className='FooterfirstDiv'>
                <a href="#" className="navbar-logo">AP</a>
                <div className='FooterSocialIcons'><a
            href="mailto:ayushhvpanchal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          ><GoMail /></a> <a
            href="https://www.linkedin.com/in/aayushvpanchal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          ><FaLinkedinIn /></a></div>
            </div>
            <div className='FooterSecondDiv'>© 2025 - All Rights Reserved.</div>
        </div>
    </>
  )
}

export default Footer