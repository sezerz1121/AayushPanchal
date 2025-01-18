import React from 'react'
import Home from './Home'
import Experience from './Experience'
import About from './About'
import Projects from './Projects'
import Certifications from './Certifications'
import Service from './Service'
import Contact from './Contact'
import Footer from './component/Footer'

const FullPage = () => {
  console.log(window.innerWidth + 'x' + window.innerHeight);
  return (
   <>
    <Home />
    <Experience />
    <About />
    <Projects />
    <Certifications/>
    <Service/>
    <Contact/>
    <Footer/>
   </> 
  )
}

export default FullPage
