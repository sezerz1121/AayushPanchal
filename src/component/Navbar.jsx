import { useState } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">AP</a>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="Experience" smooth={true} duration={500}>Experience</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="About" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="Projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="Certifications" smooth={true} duration={500}>Certifications</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="Services" smooth={true} duration={500}>Services</Link>
                    </li>
                </ul>
                <div className="navbar-Contact-Button">
                    <Link to="Contact" smooth={true} duration={500}>Contact</Link>
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className='Burder-Menu' onClick={toggleMobileMenu}>
                    <RxHamburgerMenu className='Navburger'/>
                </div>

                {/* Mobile Navbar Links */}
                {isMobileMenuOpen && (
                    <div className='MobileNavbarLinksDiv'>
                        <div className='MobileNavbarLinks'>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </div>
                        <div className='MobileNavbarLinks'>
                        <Link to="Experiences" smooth={true} duration={500}>Experience</Link>
                        </div>
                        <div className='MobileNavbarLinks'>
                        <Link to="Abouts" smooth={true} duration={500}>About</Link>
                        </div>
                        <div className='MobileNavbarLinks'>
                        <Link to="Projectss" smooth={true} duration={500}>Projects</Link>
                        </div>
                        <div className='MobileNavbarLinks'>
                        <Link to="Certifications" smooth={true} duration={500}>Certifications</Link>
                        </div>
                        <div className='MobileNavbarLinks'>
                        <Link to="Services" smooth={true} duration={500}>Services</Link>
                        </div>
                        <div className='MobileNavbarLinks'>
                        <Link to="Contact" smooth={true} duration={500}>Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
